interface WalletButtonProps {
  isConnected: boolean
  isConnecting: boolean
  onConnect: () => void
  onDisconnect: () => void
}

export default function WalletButton({
  isConnected,
  isConnecting,
  onConnect,
  onDisconnect,
}: WalletButtonProps) {
  if (isConnected) {
    return (
      <button
        onClick={onDisconnect}
        className="rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:border-red-400 hover:text-red-400"
      >
        연결 해제
      </button>
    )
  }
  return (
    <button
      onClick={onConnect}
      disabled={isConnecting}
      className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {isConnecting ? '연결 중...' : 'Connect Wallet'}
    </button>
  )
}
