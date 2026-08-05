export default function NetworkWarning({ onSwitch }: { onSwitch: () => void }) {
  return (
    <div className="flex flex-col items-start gap-3 rounded-xl border border-amber-500/40 bg-amber-500/10 p-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-amber-200">
        현재 지갑이 Sepolia 네트워크에 연결되어 있지 않습니다. NFT를 조회하려면 네트워크를
        전환해 주세요.
      </p>
      <button
        onClick={onSwitch}
        className="shrink-0 rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-300"
      >
        Sepolia로 전환
      </button>
    </div>
  )
}
