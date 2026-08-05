import { useCallback, useState } from 'react'
import { Contract, JsonRpcProvider, type BrowserProvider } from 'ethers'
import { LOCAL_LOOP_NFT_ABI } from '../contracts/LocalLoopNFT'
import { CONTRACT_ADDRESS, RPC_URL } from '../utils/constants'
import { resolveIpfsUrl } from '../utils/ipfs'

export interface NFTMetadata {
  name: string
  description: string
  image: string
}

export interface NFTItem {
  tokenId: string
  name: string
  description: string
  image: string
  metadataError: boolean
}

export interface UseNFT {
  nfts: NFTItem[]
  isLoading: boolean
  error: string | null
  loadNFTs: (owner: string, provider: BrowserProvider) => Promise<void>
  refresh: (owner: string, provider: BrowserProvider) => Promise<void>
}

async function getTokenMetadata(tokenURI: string): Promise<NFTMetadata> {
  const url = resolveIpfsUrl(tokenURI)
  const res = await fetch(url)
  if (!res.ok) throw new Error(`metadata fetch failed: ${res.status}`)
  const json = (await res.json()) as Partial<NFTMetadata>
  return {
    name: json.name ?? 'Unnamed NFT',
    description: json.description ?? '',
    image: json.image ? resolveIpfsUrl(json.image) : '',
  }
}

export function useNFT(): UseNFT {
  const [nfts, setNfts] = useState<NFTItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loadNFTs = useCallback(async (owner: string, provider: BrowserProvider) => {
    setError(null)

    if (!CONTRACT_ADDRESS) {
      setError('컨트랙트 주소가 설정되지 않았습니다. (VITE_CONTRACT_ADDRESS)')
      return
    }

    setIsLoading(true)
    try {
      // 조회는 읽기 전용이므로 RPC_URL이 있으면 지갑 네트워크와 무관하게 조회 가능
      const readProvider = RPC_URL ? new JsonRpcProvider(RPC_URL) : provider
      const contract = new Contract(CONTRACT_ADDRESS, LOCAL_LOOP_NFT_ABI, readProvider)

      const balance = Number(await contract.balanceOf(owner))
      if (balance === 0) {
        setNfts([])
        return
      }

      const tokenIds: bigint[] = await Promise.all(
        Array.from({ length: balance }, (_, i) => contract.tokenOfOwnerByIndex(owner, i)),
      )

      const items: NFTItem[] = await Promise.all(
        tokenIds.map(async (tokenId) => {
          try {
            const uri: string = await contract.tokenURI(tokenId)
            const meta = await getTokenMetadata(uri)
            return { tokenId: tokenId.toString(), ...meta, metadataError: false }
          } catch {
            return {
              tokenId: tokenId.toString(),
              name: `Token #${tokenId}`,
              description: '메타데이터를 불러오지 못했습니다. (IPFS 응답 없음)',
              image: '',
              metadataError: true,
            }
          }
        }),
      )

      setNfts(items)
    } catch {
      setError('NFT 조회에 실패했습니다. 네트워크 상태를 확인한 뒤 다시 시도해 주세요.')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const refresh = loadNFTs

  return { nfts, isLoading, error, loadNFTs, refresh }
}
