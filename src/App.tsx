import { HashRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import NFTViewer from './pages/NFTViewer'
import Projects from './pages/Projects'

export default function App() {
  return (
    <HashRouter>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/nft" element={<NFTViewer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}
