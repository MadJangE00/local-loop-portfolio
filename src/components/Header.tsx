import { Link, NavLink } from 'react-router-dom'
import { GITHUB_URL } from '../utils/constants'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/nft', label: 'NFT Viewer' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link to="/" className="text-lg font-bold tracking-tight">
          Local<span className="text-emerald-400">Loop</span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `rounded-md px-2 py-1.5 text-sm transition-colors sm:px-3 ${
                  isActive
                    ? 'bg-slate-800 text-emerald-400'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="ml-1 rounded-md px-2 py-1.5 text-sm text-slate-300 transition-colors hover:bg-slate-900 hover:text-white sm:px-3"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}
