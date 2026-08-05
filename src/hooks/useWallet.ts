import { useCallback, useEffect, useState } from 'react'
import { BrowserProvider, type JsonRpcSigner } from 'ethers'
import { SEPOLIA_CHAIN_ID, SEPOLIA_CHAIN_ID_HEX, SEPOLIA_NETWORK_PARAMS } from '../utils/constants'
import { WalletError, toFriendlyMessage } from '../utils/errors'

export interface WalletState {
  walletAddress: string | null
  chainId: number | null
  provider: BrowserProvider | null
  signer: JsonRpcSigner | null
  isConnected: boolean
  isConnecting: boolean
  error: string | null
}

export interface UseWallet extends WalletState {
  connect: () => Promise<void>
  disconnect: () => void
  switchNetwork: () => Promise<void>
  isMetaMaskInstalled: boolean
  isCorrectNetwork: boolean
}

export function useWallet(): UseWallet {
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [chainId, setChainId] = useState<number | null>(null)
  const [provider, setProvider] = useState<BrowserProvider | null>(null)
  const [signer, setSigner] = useState<JsonRpcSigner | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const isMetaMaskInstalled = typeof window !== 'undefined' && !!window.ethereum

  const connect = useCallback(async () => {
    setError(null)
    if (!window.ethereum) {
      setError('MetaMask가 설치되어 있지 않습니다. metamask.io 에서 설치 후 다시 시도해 주세요.')
      return
    }
    setIsConnecting(true)
    try {
      const browserProvider = new BrowserProvider(window.ethereum)
      const accounts = (await browserProvider.send('eth_requestAccounts', [])) as string[]
      if (!accounts || accounts.length === 0) {
        throw new WalletError('연결된 계정이 없습니다. MetaMask에서 계정을 선택해 주세요.')
      }
      const network = await browserProvider.getNetwork()
      const currentChainId = Number(network.chainId)

      setProvider(browserProvider)
      setWalletAddress(accounts[0])
      setChainId(currentChainId)

      if (currentChainId === SEPOLIA_CHAIN_ID) {
        setSigner(await browserProvider.getSigner())
      } else {
        setSigner(null)
      }
    } catch (err) {
      setError(toFriendlyMessage(err))
    } finally {
      setIsConnecting(false)
    }
  }, [])

  const disconnect = useCallback(() => {
    setWalletAddress(null)
    setChainId(null)
    setProvider(null)
    setSigner(null)
    setError(null)
  }, [])

  const switchNetwork = useCallback(async () => {
    setError(null)
    if (!window.ethereum) {
      setError('MetaMask가 설치되어 있지 않습니다.')
      return
    }
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: SEPOLIA_CHAIN_ID_HEX }],
      })
    } catch (err) {
      // 4902: 지갑에 등록되지 않은 네트워크 → 추가 요청
      if ((err as { code?: number })?.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [SEPOLIA_NETWORK_PARAMS],
          })
        } catch (addErr) {
          setError(toFriendlyMessage(addErr))
        }
      } else {
        setError(toFriendlyMessage(err))
      }
    }
  }, [])

  // 계정/네트워크 변경 이벤트 반영
  useEffect(() => {
    const ethereum = window.ethereum
    if (!ethereum) return

    const handleAccountsChanged = (...args: unknown[]) => {
      const accounts = args[0] as string[]
      if (!accounts || accounts.length === 0) {
        disconnect()
      } else {
        setWalletAddress(accounts[0])
      }
    }

    const handleChainChanged = () => {
      // ethers 권장: 체인 변경 시 provider 상태를 새로 만든다
      window.location.reload()
    }

    ethereum.on('accountsChanged', handleAccountsChanged)
    ethereum.on('chainChanged', handleChainChanged)
    return () => {
      ethereum.removeListener('accountsChanged', handleAccountsChanged)
      ethereum.removeListener('chainChanged', handleChainChanged)
    }
  }, [disconnect])

  return {
    walletAddress,
    chainId,
    provider,
    signer,
    isConnected: !!walletAddress,
    isConnecting,
    error,
    connect,
    disconnect,
    switchNetwork,
    isMetaMaskInstalled,
    isCorrectNetwork: chainId === SEPOLIA_CHAIN_ID,
  }
}
