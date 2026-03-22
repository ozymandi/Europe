import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './index.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import DiscoverPage from './components/DiscoverPage'
import PropertyPage from './components/PropertyPage'
import SavedPropertiesPage from './components/SavedPropertiesPage'
import imgBg from './assets/Dash_bg.webp'

const pageVariants = {
  initial: { opacity: 0, scale: 0.97 },
  animate: { opacity: 1, scale: 1 },
  exit:    { opacity: 0, scale: 1.02 },
}

const pageTransition = { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }

function PageWrapper({ children }) {
  return (
    <motion.div
      className="flex-1 flex flex-col min-w-0 min-h-0"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      {children}
    </motion.div>
  )
}

function App() {
  const [page, setPage] = useState('dashboard')
  const [navPage, setNavPage] = useState('dashboard')

  const navigate = (p) => {
    setPage(p)
    if (p !== 'property') setNavPage(p)
  }

  return (
    <div className="relative flex h-full min-w-[1440px] overflow-hidden">
      {/* Global background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img src={imgBg} alt="" className="absolute inset-0 w-full h-full object-cover animate-breathe" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at top right, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)' }} />
      </div>
      <Sidebar page={navPage} onNavigate={navigate} />
      <AnimatePresence mode="wait">
        {page === 'dashboard' && <PageWrapper key="dashboard"><Dashboard onNavigate={navigate} /></PageWrapper>}
        {page === 'discover'  && <PageWrapper key="discover"><DiscoverPage onNavigate={navigate} /></PageWrapper>}
        {page === 'property'  && <PageWrapper key="property"><PropertyPage onNavigate={navigate} /></PageWrapper>}
        {page === 'saved'     && <PageWrapper key="saved"><SavedPropertiesPage onNavigate={navigate} /></PageWrapper>}
      </AnimatePresence>
    </div>
  )
}

export default App
