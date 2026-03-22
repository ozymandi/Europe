import { motion } from 'framer-motion'
import imgDash     from '../assets/Icons/Property 1=Dash.svg'
import imgDiscover from '../assets/Icons/Property 1=Discover.svg'
import imgSave     from '../assets/Icons/Property 1=Save.svg'
import imgCost     from '../assets/Icons/Property 1=Cost.svg'
import imgMarket   from '../assets/Icons/Property 1=market.svg'
import imgQa       from '../assets/Icons/Property 1=qa.svg'

import imgLogo   from '../assets/Logo/logo.svg'
import imgAvatar from '../assets/Avatar/Avatar.png'

function NavIcon({ src, invert }) {
  return (
    <img
      alt=""
      className="shrink-0"
      style={{ width: '16px', height: '16px', filter: invert ? 'invert(1)' : undefined }}
      src={src}
    />
  )
}

function SelectedItem({ label, src, onClick }) {
  return (
    <motion.div
      style={{ width: '224px', padding: '12px 16px', gap: '10px', borderRadius: '22px', background: '#2e2e2e' }}
      className="flex items-center cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      onClick={onClick}
    >
      <NavIcon src={src} invert />
      <span className="text-[14px] text-white tracking-[-0.14px] leading-[20px] whitespace-nowrap">
        {label}
      </span>
    </motion.div>
  )
}

function NavItem({ label, src, onClick }) {
  return (
    <motion.div
      className="group flex items-center rounded-[22px] cursor-pointer"
      style={{ width: '224px', padding: '12px 16px', gap: '10px', backgroundColor: 'rgba(255,255,255,0)' }}
      whileHover={{
        scale: 1.05,
        backgroundColor: 'rgba(255,255,255,0.45)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9)',
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      onClick={onClick}
    >
      <NavIcon src={src} />
      <span className="text-[14px] text-[#2e2e2e] tracking-[-0.14px] leading-[20px] whitespace-nowrap transition-colors duration-300 group-hover:text-purple">
        {label}
      </span>
    </motion.div>
  )
}

function SectionLabel({ text }) {
  return (
    <div
      style={{ padding: '0 7px', gap: '10px', borderRadius: '4px', border: '1px solid #B8E1F7' }}
      className="flex justify-center items-center"
    >
      <span className="text-[8px] font-semibold text-[#B8E1F7] uppercase tracking-[-0.14px] leading-[20px] whitespace-nowrap">
        {text}
      </span>
    </div>
  )
}

function MenuSection({ label, children }) {
  return (
    <div style={{ gap: '16px' }} className="flex flex-col items-start">
      <SectionLabel text={label} />
      <div className="flex flex-col items-start">
        {children}
      </div>
    </div>
  )
}

export default function Sidebar({ page = 'dashboard', onNavigate }) {
  return (
    <div
      style={{ width: '260px', padding: '8px', gap: '10px', flexShrink: 0, alignSelf: 'stretch' }}
      className="flex items-center"
    >
      <motion.div
        style={{ padding: '10px', gap: '32px', flex: '1 0 0', alignSelf: 'stretch', boxShadow: 'inset 0 2px 16px rgba(0,0,0,0.03), inset 0 0 0 1px rgba(0,0,0,0.01)', transformPerspective: 800 }}
        className="flex flex-col items-start rounded-[8px] overflow-clip backdrop-blur-[8px] bg-white/10 border border-white/15"
        whileHover={{ rotateY: 4 }}
        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
      >
        {/* Logo */}
        <div style={{ padding: '24px', gap: '10px', alignSelf: 'stretch' }} className="flex flex-col items-start cursor-pointer" onClick={() => onNavigate?.('dashboard')}>
          <img src={imgLogo} alt="European Listings" className="h-[27px] w-auto" />
        </div>

        {/* Menu */}
        <div style={{ flex: '1 0 0' }} className="flex flex-col justify-between items-start w-full min-h-0">
          <div style={{ gap: '32px' }} className="flex flex-col items-start">

            {/* Dashboard */}
            <div style={{ gap: '16px' }} className="flex flex-col items-start">
              <div className="flex flex-col items-start">
                {page === 'dashboard' ? (
                  <SelectedItem
                    label="Dashboard"
                    src={imgDash}
                    onClick={() => onNavigate?.('dashboard')}
                  />
                ) : (
                  <NavItem
                    label="Dashboard"
                    src={imgDash}
                    onClick={() => onNavigate?.('dashboard')}
                  />
                )}
              </div>
            </div>

            {/* Find Listings */}
            <MenuSection label="find listings">
              {page === 'discover' ? (
                <SelectedItem
                  label="Discover Listings"
                  src={imgDiscover}
                  onClick={() => onNavigate?.('discover')}
                />
              ) : (
                <NavItem
                  label="Discover Listings"
                  src={imgDiscover}
                  onClick={() => onNavigate?.('discover')}
                />
              )}
              {page === 'saved' ? (
                <SelectedItem
                  label="Saved Properties"
                  src={imgSave}
                  onClick={() => onNavigate?.('saved')}
                />
              ) : (
                <NavItem
                  label="Saved Properties"
                  src={imgSave}
                  onClick={() => onNavigate?.('saved')}
                />
              )}
            </MenuSection>

            {/* Tools */}
            <MenuSection label="TOOLS">
              <NavItem label="Closing Costs" src={imgCost} />
              <NavItem label="Marketplace" src={imgMarket} />
              <NavItem label="Live Q&A Calls" src={imgQa} />
            </MenuSection>
          </div>

          {/* Bottom — James Peterson */}
          <div style={{ gap: '32px' }} className="flex flex-col items-start">
            <div style={{ gap: '16px' }} className="flex flex-col items-start">
              <div className="flex flex-col items-start">
                <motion.div
                  style={{ width: '224px', padding: '12px 8px', gap: '10px', backgroundColor: 'rgba(255,255,255,0)' }}
                  className="group flex items-center h-[44px] rounded-[22px] cursor-pointer"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.45)', backdropFilter: 'blur(10px)', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <img
                    alt="James Peterson"
                    src={imgAvatar}
                    className="shrink-0 rounded-full object-cover"
                    style={{ width: '32px', height: '32px' }}
                  />
                  <span className="text-[14px] text-[#2e2e2e] tracking-[-0.14px] leading-[20px] whitespace-nowrap transition-colors duration-300 group-hover:text-purple">
                    James Peterson
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
