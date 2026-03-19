import './index.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

const imgBg = 'https://www.figma.com/api/mcp/asset/46b70ee9-415e-44e7-8a42-7072f552b103'

function App() {
  return (
    <div className="relative flex h-full min-w-[1440px] overflow-hidden">
      {/* Global background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img src={imgBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <Sidebar />
      <Dashboard />
    </div>
  )
}

export default App
