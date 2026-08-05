import { useEffect } from 'react'
import Loading from '../components/Loading'
import NetworkWarning from '../components/NetworkWarning'
import NFTGrid from '../components/NFTGrid'
import WalletButton from '../components/WalletButton'
import WalletInfo from '../components/WalletInfo'
import { useNFT } from '../hooks/useNFT'
import { useWallet } from '../hooks/useWallet'

export default function NFTViewer() {
  const wallet = useWallet()
  const { nfts, isLoading, error: nftError, loadNFTs, refresh } = useNFT()

  const canQuery = wallet.isConnected && wallet.isCorrectNetwork && !!wallet.provider

  // 연결 완료 + 올바른 네트워크가 되면 자동 조회
  useEffect(() => {
    if (canQuery && wallet.walletAddress && wallet.provider) {
      void loadNFTs(wallet.walletAddress, wallet.provider)
    }
  }, [canQuery, wallet.walletAddress, wallet.provider, loadNFTs])

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">NFT Viewer</h1>
          <p className="mt-2 text-slate-400">
            MetaMask를 연결하고 Sepolia 네트워크의 Local Loop NFT를 확인하세요.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {canQuery && (
            <button
              onClick={() => {
                if (wallet.walletAddress && wallet.provider) {
                  void refresh(wallet.walletAddress, wallet.provider)
                }
              }}
              disabled={isLoading}
              className="rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:border-emerald-400 hover:text-emerald-400 disabled:opacity-50"
            >
              새로고침
            </button>
          )}
          <WalletButton
            isConnected={wallet.isConnected}
            isConnecting={wallet.isConnecting}
            onConnect={() => void wallet.connect()}
            onDisconnect={wallet.disconnect}
          />
        </div>
      </div>

      <div className="mt-8 space-y-6">
        {!wallet.isMetaMaskInstalled && (
          <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-200">
            MetaMask가 설치되어 있지 않습니다.{' '}
            <a
              href="https://metamask.io/download/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline underline-offset-4"
            >
              metamask.io
            </a>
            에서 설치한 뒤 페이지를 새로고침해 주세요.
          </div>
        )}

        {wallet.error && (
          <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-200">
            {wallet.error}
          </div>
        )}

        {wallet.isConnected && wallet.walletAddress && (
          <WalletInfo
            walletAddress={wallet.walletAddress}
            chainId={wallet.chainId}
            isCorrectNetwork={wallet.isCorrectNetwork}
          />
        )}

        {wallet.isConnected && !wallet.isCorrectNetwork && (
          <NetworkWarning onSwitch={() => void wallet.switchNetwork()} />
        )}

        {nftError && (
          <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-200">
            {nftError}
          </div>
        )}

        {isLoading && <Loading message="NFT를 조회하는 중..." />}

        {canQuery && !isLoading && !nftError && <NFTGrid nfts={nfts} />}

        {!wallet.isConnected && wallet.isMetaMaskInstalled && (
          <div className="rounded-xl border border-dashed border-slate-700 py-16 text-center text-slate-400">
            지갑을 연결하면 보유한 NFT가 여기에 표시됩니다.
          </div>
        )}
      </div>
    </section>
  )
}
