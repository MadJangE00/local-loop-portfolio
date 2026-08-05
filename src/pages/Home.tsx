import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import { CONTACT_EMAIL, GITHUB_URL } from '../utils/constants'

const SKILLS = [
  'React',
  'TypeScript',
  'Vite',
  'TailwindCSS',
  'ethers.js',
  'Solidity',
  'Hardhat',
  'OpenZeppelin',
  'IPFS',
  'GitHub Actions',
]

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold">기술 스택</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-2 text-sm text-slate-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold">Local Loop 란?</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-slate-400">
          Local Loop는 지역 커뮤니티의 활동과 가치를 블록체인 위에 기록하고, 참여자에게
          NFT와 토큰으로 보상하는 생태계입니다. 이 포트폴리오 사이트는 그 생태계의
          시작점으로, 실제로 Sepolia 테스트넷에 배포된 NFT를 지갑으로 확인할 수 있습니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            to="/nft"
            className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
          >
            NFT Viewer 열기
          </Link>
          <Link
            to="/about"
            className="rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-emerald-400 hover:text-emerald-400"
          >
            더 알아보기
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold">Contact</h2>
        <div className="mt-4 flex flex-wrap gap-6 text-slate-300">
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-emerald-400">
            ✉️ {CONTACT_EMAIL}
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-400"
          >
            🐙 GitHub
          </a>
        </div>
      </section>
    </>
  )
}
