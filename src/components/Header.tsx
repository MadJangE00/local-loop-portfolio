import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GITHUB_URL } from '../utils/constants'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/nft', label: 'NFT Viewer' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-md px-3 py-2 text-sm transition-colors ${
      isActive
        ? 'bg-slate-800 text-emerald-400'
        : 'text-slate-300 hover:bg-slate-900 hover:text-white'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link to="/" className="text-lg font-bold tracking-tight" onClick={() => setIsMenuOpen(false)}>
          Local<span className="text-emerald-400">Loop</span>
        </Link>

        {/* 데스크톱 내비게이션 */}
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-md px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-slate-900 hover:text-white"
          >
            GitHub
          </a>
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={isMenuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-md text-slate-300 hover:bg-slate-900 md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {isMenuOpen && (
        <nav className="border-t border-slate-800 px-4 pt-2 pb-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setIsMenuOpen(false)}
                className={navLinkClass}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-md px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-slate-900 hover:text-white"
            >
              GitHub
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
