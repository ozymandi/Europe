import './index.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import imgBg from './assets/Dash_bg.webp'

function App() {
  return (
    <div className="relative flex h-full min-w-[1440px] overflow-hidden">
      {/* Global background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img src={imgBg} alt="" className="absolute inset-0 w-full h-full object-cover animate-breathe" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)' }} />
      </div>
      <Sidebar />
      <Dashboard />
    </div>
  )
}

export default App
