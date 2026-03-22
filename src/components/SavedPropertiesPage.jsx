import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Card from './Card'

const imgSubtitleIcon = 'https://www.figma.com/api/mcp/asset/97b10d6a-9311-449e-a438-3c853f40a435'
const imgSearchIcon = 'https://www.figma.com/api/mcp/asset/6950357f-8086-44f7-9927-2d56340ed095'
const imgSearchBtn  = 'https://www.figma.com/api/mcp/asset/99bd1335-a6d5-435c-8648-1b2e6addd8a5'
const imgFilterIcon = 'https://www.figma.com/api/mcp/asset/06c65372-51d2-4706-8123-8950602548ed'

const STATUS_TABS = [
  { label: 'Interest',  count: 2, icon: 'https://www.figma.com/api/mcp/asset/6acaa335-7dcb-4e11-b8db-f8d43de3173f', inset: 'inset-[16.6%_8.33%_12.5%_8.33%]',  extra: 'inset-[-5.88%_-5%]' },
  { label: 'Contacted', count: 2, icon: 'https://www.figma.com/api/mcp/asset/01cd4644-ebb6-42ed-b564-b7ef4d2b4159', inset: 'inset-[16.67%_8.33%]',              extra: 'inset-[-6.25%_-5%]' },
  { label: 'Document',  count: 2, icon: 'https://www.figma.com/api/mcp/asset/76b926a0-113b-4c09-aa95-298fb858b4b8', inset: 'inset-[8.33%_16.67%]',              extra: 'inset-[-5%_-6.25%]' },
  { label: 'Viewing',   count: 2, icon: 'https://www.figma.com/api/mcp/asset/55a8797a-6aa5-466d-a1d6-841eb510cec4', inset: 'inset-[12.5%]',                     extra: 'inset-[-5.56%]' },
  { label: 'Offer',     count: 2, icon: 'https://www.figma.com/api/mcp/asset/700fe775-6d95-41e4-a22c-4a040f6fbb01', inset: 'inset-[12.5%_8.33%_11.99%_8.33%]', extra: 'inset-[-5.52%_-5%]' },
]

const SORT_OPTIONS = ['Default Sort', 'Price High to Low', 'Price Low to High']

const SAVED_LISTINGS = [
  {
    tag: 'Architectural Gem',
    city: 'Siena', country: 'Italy', price: '€320,000',
    beds: 4, baths: 3, sqm: 210,
    img: 'https://www.figma.com/api/mcp/asset/60b860d9-0cd9-4620-8fad-9d3022fe9694',
  },
  {
    tag: 'Sea View',
    city: 'Santorini', country: 'Greece', price: '€245,000',
    beds: 3, baths: 2, sqm: 140,
    img: 'https://www.figma.com/api/mcp/asset/9cf083b9-cc88-4d7a-a7df-04806bbea76b',
  },
  {
    tag: 'Sea View',
    city: 'Mallorca', country: 'Spain', price: '€275,000',
    beds: 3, baths: 2, sqm: 160,
    img: 'https://www.figma.com/api/mcp/asset/646a66de-b9d5-46d8-8329-e4460f0fd842',
  },
  {
    tag: 'Sea View',
    city: 'Amalfi', country: 'Italy', price: '€430,000',
    beds: 3, baths: 2, sqm: 118,
    img: 'https://www.figma.com/api/mcp/asset/4b88c9a7-a97a-4654-936e-8590f2656db6',
  },
  {
    tag: 'Pool & Garden',
    city: 'Ibiza', country: 'Spain', price: '€385,000',
    beds: 4, baths: 3, sqm: 220,
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&h=400',
  },
]

export default function SavedPropertiesPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('Interest')
  const [activeSort, setActiveSort] = useState('Default Sort')
  const [searchQuery, setSearchQuery] = useState('')
  const gridRef = useRef(null)
  const [cols, setCols] = useState(5)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const update = () => setCols(Math.max(1, Math.floor((el.offsetWidth + 4) / 234)))
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const filtered = searchQuery.trim()
    ? SAVED_LISTINGS.filter(l => {
        const q = searchQuery.toLowerCase()
        return l.city.toLowerCase().includes(q) || l.country.toLowerCase().includes(q) || l.tag.toLowerCase().includes(q)
      })
    : SAVED_LISTINGS

  return (
    <main className="flex-1 flex flex-col h-full overflow-y-auto relative min-w-0">
      <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-0 px-[70px] pt-[70px] pb-0 flex-1">

        {/* Top section */}
        <div className="flex flex-col gap-12 shrink-0">
          <div className="flex flex-col gap-3 w-full">

            {/* Title row */}
            <div className="flex items-start justify-between w-full">
              <div className="flex flex-col gap-1 items-start">
                <div className="flex flex-col justify-center leading-none relative shrink-0 text-[0px] text-dark tracking-[-1px]">
                  <p className="text-[42px] tracking-[-1px]">
                    <span className="font-display">Saved Listings</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
                    <path d="M4.31001 6.9C4.20482 6.79033 4.12294 6.66048 4.06931 6.5183C4.01568 6.37611 3.99141 6.22454 3.99797 6.07271C4.00452 5.92089 4.04177 5.77197 4.10746 5.63494C4.17315 5.49791 4.26592 5.37561 4.38018 5.27542C4.49443 5.17523 4.6278 5.09922 4.77224 5.05199C4.91667 5.00475 5.06918 4.98727 5.22056 5.00059C5.37194 5.01392 5.51905 5.05777 5.65301 5.12951C5.78697 5.20125 5.90501 5.29939 6.00001 5.418C6.09546 5.30062 6.21361 5.20371 6.34738 5.13305C6.48115 5.06239 6.6278 5.01944 6.77855 5.00676C6.92931 4.99409 7.08107 5.01195 7.22476 5.05927C7.36846 5.1066 7.50113 5.18243 7.61484 5.28221C7.72855 5.382 7.82097 5.50369 7.88657 5.64002C7.95216 5.77634 7.98959 5.9245 7.99661 6.07562C8.00363 6.22675 7.98009 6.37773 7.92741 6.51955C7.87473 6.66137 7.79399 6.7911 7.69001 6.901L6.37701 8.329C6.33017 8.38293 6.27229 8.42618 6.20729 8.45582C6.1423 8.48546 6.07169 8.5008 6.00026 8.5008C5.92882 8.5008 5.85822 8.48546 5.79322 8.45582C5.72823 8.42618 5.67035 8.38293 5.62351 8.329L4.31001 6.9Z" stroke="#6E6E6E" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.5 5C1.49997 4.85453 1.53167 4.71081 1.59289 4.57885C1.65412 4.4469 1.7434 4.32989 1.8545 4.236L5.3545 1.236C5.53499 1.08345 5.76368 0.999756 6 0.999756C6.23632 0.999756 6.46501 1.08345 6.6455 1.236L10.1455 4.236C10.2566 4.32989 10.3459 4.4469 10.4071 4.57885C10.4683 4.71081 10.5 4.85453 10.5 5V9.5C10.5 9.76521 10.3946 10.0196 10.2071 10.2071C10.0196 10.3946 9.76522 10.5 9.5 10.5H2.5C2.23478 10.5 1.98043 10.3946 1.79289 10.2071C1.60536 10.0196 1.5 9.76521 1.5 9.5V5Z" stroke="#6E6E6E" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-xs text-darkgray text-center tracking-[-0.2px] leading-5 whitespace-nowrap">
                    Your collection of {SAVED_LISTINGS.length} properties
                  </p>
                </div>
              </div>

              {/* Filter icon button */}
              <motion.button
                className="flex items-center justify-center bg-dark rounded-full size-9"
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <div className="overflow-clip relative shrink-0 size-[12px]">
                  <div className="absolute inset-[8.33%_12.5%]">
                    <div className="absolute inset-[-5%_-5.56%]">
                      <img alt="" className="block max-w-none size-full" src={imgFilterIcon} style={{ filter: 'brightness(0) invert(1)' }} />
                    </div>
                  </div>
                </div>
              </motion.button>
            </div>

            {/* Status tabs + search */}
            <div className="flex items-center justify-between w-full gap-4">
              {/* Status tab pills */}
              <div className="flex items-center gap-1 flex-wrap">
                {STATUS_TABS.map(tab => {
                  const isActive = activeTab === tab.label
                  return (
                    <motion.button
                      key={tab.label}
                      onClick={() => setActiveTab(tab.label)}
                      className="relative flex items-center gap-1 pl-[16px] pr-[16px] py-[12px] rounded-[22px] border shrink-0"
                      style={{
                        background: isActive
                          ? 'linear-gradient(to bottom, rgba(139,92,246,0.95), rgba(139,92,246,0.4))'
                          : 'linear-gradient(to bottom, rgba(93,51,187,0.03), rgba(184,225,247,0))',
                        borderColor: isActive ? '#8b5cf6' : 'rgba(139,92,246,0.12)',
                        boxShadow: '0px 2px 4px 0px rgba(138,56,245,0.16)',
                      }}
                      whileHover={{ opacity: 0.85 }}
                      transition={{ duration: 0.15 }}
                    >
                      {isActive && (
                        <div className="absolute inset-[-1px] pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_#bca2f9,inset_0px_1px_5.3px_0px_rgba(245,242,252,0.61),inset_0px_2px_6px_0px_#c8b2fb]" />
                      )}
                      <div className="overflow-clip relative shrink-0 size-[12px]">
                        <div className={`absolute ${tab.inset}`}>
                          <div className={`absolute ${tab.extra}`}>
                            <img
                              alt="" className="block max-w-none size-full" src={tab.icon}
                              style={isActive ? { filter: 'brightness(0) invert(1)' } : {}}
                            />
                          </div>
                        </div>
                      </div>
                      <span className={`text-[10px] font-semibold uppercase tracking-[-0.16px] whitespace-nowrap ${isActive ? 'text-white' : 'text-dark'}`}>
                        {tab.label}
                      </span>
                      <span className={`text-[10px] font-semibold uppercase tracking-[-0.16px] ${isActive ? 'text-white' : 'text-dark'}`}>
                        {tab.count}
                      </span>
                    </motion.button>
                  )
                })}
              </div>

              {/* Short search */}
              <motion.div
                className="flex items-center justify-between bg-white h-[50px] rounded-[50px] pl-6 pr-[7px] gap-[80px] shrink-0"
                style={{ boxShadow: '0px 2px 2px 0px rgba(138,56,245,0.03)' }}
                whileHover={{ boxShadow: '0px 4px 10px 0px rgba(138,56,245,0.1)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2.5 shrink-0">
                  <div className="overflow-clip relative shrink-0 size-4">
                    <div className="absolute inset-[12.5%]">
                      <div className="absolute inset-[-4.17%]">
                        <img alt="" className="block max-w-none size-full" src={imgSearchIcon} />
                      </div>
                    </div>
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search by location, property type..."
                    className="bg-transparent text-[14px] text-dark tracking-[-0.16px] placeholder:text-darkgray placeholder:opacity-30 outline-none w-[220px]"
                  />
                </div>
                <motion.button
                  className="relative flex items-center justify-center rounded-[22px] px-4 py-3 border shrink-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(139,92,246,0.95), rgba(139,92,246,0.4))',
                    borderColor: '#8b5cf6',
                    boxShadow: '0px 2px 4px 0px rgba(138,56,245,0.16)',
                  }}
                  whileHover={{ opacity: 0.85 }}
                  transition={{ duration: 0.15 }}
                >
                  <div className="overflow-clip relative shrink-0 size-4">
                    <div className="absolute inset-[12.5%]">
                      <div className="absolute inset-[-4.17%]">
                        <img alt="" className="block max-w-none size-full" src={imgSearchBtn} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-[-1px] pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_#bca2f9,inset_0px_1px_5.3px_0px_rgba(245,242,252,0.61),inset_0px_2px_6px_0px_#c8b2fb]" />
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Sort pills */}
          <div className="flex items-center gap-1">
            {SORT_OPTIONS.map(opt => (
              <button
                key={opt}
                onClick={() => setActiveSort(opt)}
                className="px-3 py-1 rounded-full text-[12px] tracking-[-0.14px] leading-normal transition-colors duration-150"
                style={{
                  background: activeSort === opt ? '#2e2e2e' : 'white',
                  color: activeSort === opt ? 'white' : '#2e2e2e',
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Card grid */}
        <div ref={gridRef} className="grid gap-1 pt-6" style={{ gridTemplateColumns: `repeat(${cols}, minmax(230px, 1fr))` }}>
          {filtered.slice(0, Math.floor(filtered.length / cols) * cols || filtered.length).map((listing, i) => (
            <Card
              key={i}
              property1="Saved"
              city={listing.city}
              country={listing.country}
              price={listing.price}
              img={listing.img}
              beds={listing.beds}
              baths={listing.baths}
              sqm={listing.sqm}
              tag={listing.tag}
              className="relative flex flex-col h-[360px] w-full items-start justify-between p-1 rounded-2xl"
              onClick={() => onNavigate?.('property')}
            />
          ))}
          {filtered.length === 0 && (
            <div className="flex-1 flex items-center justify-center py-20">
              <p className="text-darkgray text-[14px] tracking-[-0.14px]">No saved properties match your search.</p>
            </div>
          )}
        </div>

      </div>

      {/* Footer */}
      <div className="w-full max-w-[1600px] mx-auto relative z-10 flex items-center justify-between shrink-0 px-[70px] pb-[38px] pt-[8px]">
        <p className="text-xs text-darkgray tracking-[-0.14px] leading-normal whitespace-nowrap">© European Listings Ltd. 2026</p>
        <div className="flex gap-2.5 items-center">
          <button className="text-xs text-dark tracking-[-0.14px] leading-normal whitespace-nowrap">Terms of Service</button>
          <div className="bg-border-gray rounded-full shrink-0 size-[3px]" />
          <button className="text-xs text-dark tracking-[-0.14px] leading-normal whitespace-nowrap">Privacy Policy</button>
        </div>
      </div>
    </main>
  )
}
