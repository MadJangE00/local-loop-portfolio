interface WalletInfoProps {
  walletAddress: string
  chainId: number | null
  isCorrectNetwork: boolean
}

function shortenAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export default function WalletInfo({ walletAddress, chainId, isCorrectNetwork }: WalletInfoProps) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-slate-800 bg-slate-900/50 p-4 sm:flex-row sm:items-center sm:gap-6">
      <div>
        <p className="text-xs text-slate-500">Wallet Address</p>
        <p className="font-mono text-sm" title={walletAddress}>
          {shortenAddress(walletAddress)}
        </p>
      </div>
      <div>
        <p className="text-xs text-slate-500">Network</p>
        <p className="flex items-center gap-1.5 text-sm">
          <span
            className={`inline-block h-2 w-2 rounded-full ${
              isCorrectNetwork ? 'bg-emerald-400' : 'bg-amber-400'
            }`}
          />
          {isCorrectNetwork ? 'Sepolia' : `Chain ${chainId ?? '?'}`}
        </p>
      </div>
    </div>
  )
}
