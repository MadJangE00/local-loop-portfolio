import type { NFTItem } from '../hooks/useNFT'
import NFTCard from './NFTCard'

export default function NFTGrid({ nfts }: { nfts: NFTItem[] }) {
  if (nfts.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-700 py-16 text-center">
        <p className="text-slate-400">보유한 NFT가 없습니다.</p>
        <p className="mt-1 text-sm text-slate-500">
          Local Loop NFT를 받으면 이곳에 표시됩니다.
        </p>
      </div>
    )
  }
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {nfts.map((nft) => (
        <NFTCard key={nft.tokenId} nft={nft} />
      ))}
    </div>
  )
}
