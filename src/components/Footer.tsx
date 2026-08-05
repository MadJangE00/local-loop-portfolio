import { CONTACT_EMAIL, GITHUB_URL } from '../utils/constants'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Local Loop. Built with React + ethers.js</p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-emerald-400">
            {CONTACT_EMAIL}
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-emerald-400">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
