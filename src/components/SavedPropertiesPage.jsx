import { useState } from 'react'
import { motion } from 'framer-motion'
import Card from './Card'

// Status tab icons
const imgInterestIcon  = 'https://www.figma.com/api/mcp/asset/3f59c5c9-5c6c-4a2c-94d4-bca1117c0acb'
const imgContactedIcon = 'https://www.figma.com/api/mcp/asset/8047acb9-0338-44c4-ba13-f8443a7fb092'
const imgDocumentIcon  = 'https://www.figma.com/api/mcp/asset/c7faf0bb-0520-4256-9254-feb15963be1b'
const imgViewingIcon   = 'https://www.figma.com/api/mcp/asset/f989592d-4df3-455a-b37f-044efddd6065'
const imgOfferIcon     = 'https://www.figma.com/api/mcp/asset/f735803e-1d1b-4c96-850d-29f210f10f58'
const imgSearchIcon    = 'https://www.figma.com/api/mcp/asset/ea4c7650-f3a0-4bc6-95bb-64d425fa3cd2'
const imgSearchBtn     = 'https://www.figma.com/api/mcp/asset/85c4454d-0960-48cf-8b17-55ed2b3cdb6b'
const imgPinIcon       = 'https://www.figma.com/api/mcp/asset/669a3ad8-8234-42eb-92e6-496cd1a9828b'
const imgFilterIcon    = 'https://www.figma.com/api/mcp/asset/06c65372-51d2-4706-8123-8950602548ed'

const STATUS_TABS = [
  { label: 'Interest',  count: 2, icon: imgInterestIcon,  inset: 'inset-[16.6%_8.33%_12.5%_8.33%]',    extra: 'inset-[-5.88%_-5%]' },
  { label: 'Contacted', count: 2, icon: imgContactedIcon, inset: 'inset-[16.67%_8.33%]',                extra: 'inset-[-6.25%_-5%]' },
  { label: 'Document',  count: 2, icon: imgDocumentIcon,  inset: 'inset-[8.33%_16.67%]',                extra: 'inset-[-5%_-6.25%]' },
  { label: 'Viewing',   count: 2, icon: imgViewingIcon,   inset: 'inset-[12.5%]',                       extra: 'inset-[-5.56%]' },
  { label: 'Offer',     count: 2, icon: imgOfferIcon,     inset: 'inset-[12.5%_8.33%_11.99%_8.33%]',   extra: 'inset-[-5.52%_-5%]' },
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
]

export default function SavedPropertiesPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('Interest')
  const [activeSort, setActiveSort] = useState('Default Sort')
  const [searchQuery, setSearchQuery] = useState('')

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
              <div className="flex flex-col gap-1">
                <p className="font-display text-[42px] text-dark tracking-[-1px] leading-none">Saved Listing</p>
                <div className="flex items-center gap-2">
                  <div className="h-[24px] overflow-clip relative shrink-0 w-[12px]">
                    <div className="absolute inset-[8.33%_12.5%_12.5%_12.5%]">
                      <div className="absolute inset-[-5.26%_-5.56%]">
                        <img alt="" className="block max-w-none size-full" src={imgPinIcon} />
                      </div>
                    </div>
                  </div>
                  <span className="text-[12px] text-darkgray tracking-[-0.2px] leading-[20px]">Your collection of {SAVED_LISTINGS.length} properties</span>
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
                      className="flex items-center gap-1 pl-[16px] pr-[16px] py-[12px] rounded-[22px] border shrink-0 h-[50px]"
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
                className="flex items-center justify-between bg-white h-[50px] rounded-[50px] pl-6 pr-[7px] py-4 shrink-0 w-[280px]"
                style={{ boxShadow: '0px 2px 2px 0px rgba(138,56,245,0.03)' }}
                whileHover={{ boxShadow: '0px 4px 10px 0px rgba(138,56,245,0.1)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2.5 flex-1 min-w-0">
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
                    className="flex-1 min-w-0 bg-transparent text-[14px] text-dark tracking-[-0.16px] placeholder:text-darkgray placeholder:opacity-30 outline-none"
                  />
                </div>
                <motion.button
                  className="relative flex items-center justify-center rounded-full size-[39px] border shrink-0"
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
                        <img alt="" className="block max-w-none size-full" src={imgSearchBtn} style={{ filter: 'brightness(0) invert(1)' }} />
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
        <div className="grid gap-1 pt-6" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
          {filtered.map((listing, i) => (
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
      <div className="w-full max-w-[1600px] mx-auto relative flex items-center justify-between shrink-0 px-[70px] pb-[38px] pt-[38px]">
        <p className="text-xs text-darkgray tracking-[-0.14px] leading-normal">© European Listings Ltd. 2026</p>
        <div className="flex gap-2.5 items-center">
          <button className="text-xs text-purple tracking-[-0.14px] leading-normal">Terms of Service</button>
          <div className="size-[3px] rounded-full bg-border-gray" />
          <button className="text-xs text-purple tracking-[-0.14px] leading-normal">Privacy Policy</button>
        </div>
      </div>
    </main>
  )
}
