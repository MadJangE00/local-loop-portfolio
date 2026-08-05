import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 text-center sm:py-28">
      <p className="mb-3 text-sm font-medium tracking-widest text-emerald-400 uppercase">
        Web3 Portfolio Platform
      </p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        Local Loop
        <span className="mt-2 block text-2xl font-semibold text-slate-400 sm:text-3xl">
          커뮤니티와 블록체인을 잇는 개발자
        </span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
        지역 커뮤니티의 가치를 블록체인 위에 기록하는 Local Loop 생태계를 만들고 있습니다.
        이 사이트에서 프로젝트를 둘러보고, 지갑을 연결해 Sepolia 네트워크의 NFT를 직접
        확인해 보세요.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/projects"
          className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
        >
          Projects 보기
        </Link>
        <Link
          to="/nft"
          className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-100 transition-colors hover:border-emerald-400 hover:text-emerald-400"
        >
          NFT Viewer
        </Link>
      </div>
    </section>
  )
}
