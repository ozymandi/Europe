import './index.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="flex h-full min-w-[1440px] overflow-hidden bg-white">
      <Sidebar />
      <Dashboard />
    </div>
  )
}

export default App
