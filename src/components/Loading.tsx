export default function Loading({ message = '불러오는 중...' }: { message?: string }) {
  return (
    <div className="flex flex-col items-center gap-3 py-12" role="status">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-700 border-t-emerald-400" />
      <p className="text-sm text-slate-400">{message}</p>
    </div>
  )
}
