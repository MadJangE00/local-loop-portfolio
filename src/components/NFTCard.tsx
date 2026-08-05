import type { NFTItem } from '../hooks/useNFT'

export default function NFTCard({ nft }: { nft: NFTItem }) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50">
      <div className="aspect-square w-full bg-slate-800">
        {nft.image ? (
          <img
            src={nft.image}
            alt={nft.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-slate-500">
            {nft.metadataError ? '이미지를 불러올 수 없음' : 'No Image'}
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="truncate font-semibold">{nft.name}</h3>
          <span className="shrink-0 rounded-full bg-slate-800 px-2 py-0.5 font-mono text-xs text-emerald-300">
            #{nft.tokenId}
          </span>
        </div>
        {nft.description && (
          <p className="mt-2 line-clamp-3 text-sm text-slate-400">{nft.description}</p>
        )}
      </div>
    </article>
  )
}
