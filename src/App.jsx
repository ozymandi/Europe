import { useState } from 'react'
import './index.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import DiscoverPage from './components/DiscoverPage'
import PropertyPage from './components/PropertyPage'
import imgBg from './assets/Dash_bg.webp'

function App() {
  const [page, setPage] = useState('dashboard')

  return (
    <div className="relative flex h-full min-w-[1440px] overflow-hidden">
      {/* Global background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img src={imgBg} alt="" className="absolute inset-0 w-full h-full object-cover animate-breathe" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at top right, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)' }} />
      </div>
      <Sidebar page={page} onNavigate={setPage} />
      {page === 'dashboard' && <Dashboard />}
      {page === 'discover' && <DiscoverPage onNavigate={setPage} />}
      {page === 'property' && <PropertyPage onNavigate={setPage} />}
    </div>
  )
}

export default App
