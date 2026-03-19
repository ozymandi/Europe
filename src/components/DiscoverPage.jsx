import { useState } from 'react'
import { motion } from 'framer-motion'
import Card from './Card'
import Icons from './Icons'

const imgSearchIcon = 'https://www.figma.com/api/mcp/asset/c5e4425a-dc40-43bb-af85-6c57c09fb638'

const IMG_CARDS = [
  'https://www.figma.com/api/mcp/asset/28323000-3710-4618-b65e-63a09f79d88f',
  'https://www.figma.com/api/mcp/asset/0f0c7035-9711-486a-b9e2-fb8607cf5cc2',
  'https://www.figma.com/api/mcp/asset/4ea18c31-f97b-42bd-9853-fb88dfdcef57',
  'https://www.figma.com/api/mcp/asset/41835e66-0d37-48ce-9617-5421d16aba68',
  'https://www.figma.com/api/mcp/asset/7bede93e-8ff9-4a23-9440-8d882fe3ca1b',
]

const LISTINGS_DATA = [
  { city: 'Crete', country: 'Greece', price: '€119,000', img: IMG_CARDS[0] },
  { city: 'Santorini', country: 'Greece', price: '€245,000', img: IMG_CARDS[1] },
  { city: 'Lot', country: 'France', price: '€189,000', img: IMG_CARDS[2] },
  { city: 'Tuscany', country: 'Italy', price: '€320,000', img: IMG_CARDS[3] },
  { city: 'Mallorca', country: 'Spain', price: '€275,000', img: IMG_CARDS[4] },
  { city: 'Mykonos', country: 'Greece', price: '€310,000', img: IMG_CARDS[0] },
  { city: 'Provence', country: 'France', price: '€165,000', img: IMG_CARDS[1] },
  { city: 'Corfu', country: 'Greece', price: '€142,000', img: IMG_CARDS[2] },
  { city: 'Algarve', country: 'Portugal', price: '€198,000', img: IMG_CARDS[3] },
  { city: 'Ibiza', country: 'Spain', price: '€385,000', img: IMG_CARDS[4] },
  { city: 'Côte d\'Azur', country: 'France', price: '€520,000', img: IMG_CARDS[0] },
  { city: 'Amalfi', country: 'Italy', price: '€430,000', img: IMG_CARDS[1] },
  { city: 'Rhodes', country: 'Greece', price: '€95,000', img: IMG_CARDS[2] },
  { city: 'Valencia', country: 'Spain', price: '€210,000', img: IMG_CARDS[3] },
  { city: 'Cinque Terre', country: 'Italy', price: '€295,000', img: IMG_CARDS[4] },
  { city: 'Dubrovnik', country: 'Croatia', price: '€340,000', img: IMG_CARDS[0] },
]

const FILTER_CHIPS = [
  { icon: 'lucide:globe', label: 'Country' },
  { icon: 'lucide:receipt-euro', label: 'Price' },
  { icon: 'lucide:building-2', label: 'Type' },
  { icon: 'lucide:bed-double', label: 'Bedroom' },
  { icon: 'lucide:waves-ladder', label: 'Pool' },
  { icon: 'sea', label: 'Seaview' },
]

const ACTIVE_FILTERS = ['New challenge', 'Found 14', 'Luxury', 'Under 100K', 'Rental Potential']

function SearchBar() {
  return (
    <motion.div
      className="flex items-center justify-between bg-white h-[50px] rounded-[50px] pl-6 pr-[7px] py-4 w-full"
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
          placeholder="Search by location, property type, or keywords..."
          className="flex-1 min-w-0 bg-transparent text-[14px] text-dark tracking-[-0.16px] placeholder:text-darkgray placeholder:opacity-30 outline-none"
        />
      </div>
      <motion.button
        className="group relative flex items-center justify-center h-[39px] px-4 py-3 rounded-[22px] shadow-[0px_2px_4px_0px_rgba(138,56,245,0.16)] w-[100px] shrink-0 border"
        style={{
          background: 'linear-gradient(to bottom, rgba(139,92,246,0.95), rgba(139,92,246,0.4))',
          borderColor: '#8b5cf6',
        }}
        whileHover={{
          background: 'linear-gradient(to bottom, rgba(93,51,187,0.1), rgba(184,225,247,0.04))',
          borderColor: 'rgba(139,92,246,0.47)',
        }}
        transition={{ duration: 0.18 }}
      >
        <span className="text-[10px] font-semibold uppercase tracking-[-0.16px] text-white group-hover:text-dark transition-colors duration-150">
          Search
        </span>
        <div className="absolute inset-[-1px] pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_#bca2f9,inset_0px_1px_5.3px_0px_rgba(245,242,252,0.61),inset_0px_2px_6px_0px_#c8b2fb]" />
      </motion.button>
    </motion.div>
  )
}

function FilterChip({ icon, label }) {
  return (
    <button className="bg-white rounded-full flex items-center gap-1.5 pl-2 pr-2.5 py-1.5 shrink-0 transition-shadow duration-150 hover:shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
      <Icons property1={icon} className="relative size-[16px]" />
      <span className="text-[12px] text-dark tracking-[-0.14px] leading-normal whitespace-nowrap">{label}</span>
      <Icons property1="Down" className="relative size-[10px]" />
    </button>
  )
}

function ActiveFilterPill({ label }) {
  return (
    <div className="border border-white/50 rounded-full pl-3 pr-1 py-0.5 flex items-center gap-1 shrink-0">
      <span className="text-[10px] text-dark tracking-[-0.14px] leading-normal whitespace-nowrap">{label}</span>
      <Icons property1="x" className="relative size-[8px]" />
    </div>
  )
}

export default function DiscoverPage() {
  const [activePage, setActivePage] = useState(1)

  return (
    <main className="flex-1 flex flex-col h-full overflow-y-auto relative min-w-0">
      <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-6 p-[70px] flex-1">

        {/* Title + Search */}
        <div className="relative z-10 flex flex-col gap-12 items-start shrink-0">
          <div className="flex flex-col gap-1 items-start">
            <p className="text-[42px] tracking-[-1px] leading-none">
              <span className="font-display text-dark">Find your dream home in </span>
              <span className="font-display-italic text-purple">Europe.</span>
            </p>
          </div>
          <SearchBar />
        </div>

        {/* Listings section */}
        <div className="relative z-10 flex flex-col gap-4">

          {/* Listings header */}
          <div className="flex items-center justify-between shrink-0 w-full">
            <div className="flex items-center gap-3">
              <p className="font-display text-lg text-dark tracking-[-0.2px] font-bold whitespace-nowrap">
                Latest Listings
              </p>
              <button className="border border-purple text-purple text-[9px] font-semibold uppercase tracking-[-0.16px] px-3 py-2 rounded transition-shadow duration-200 hover:shadow-[inset_0_0_0_9999px_rgba(255,255,255,0.15)]">
                New in
              </button>
            </div>
          </div>

          {/* Filter chips row 1 */}
          <div className="flex items-center gap-2 flex-wrap">
            {FILTER_CHIPS.map((chip) => (
              <FilterChip key={chip.label} icon={chip.icon} label={chip.label} />
            ))}
            {/* Dark Filters chip */}
            <button className="bg-dark rounded-full flex items-center gap-1.5 pl-2 pr-3 py-1.5 shrink-0 transition-opacity duration-150 hover:opacity-80">
              <Icons property1="lucide:list-filter" className="relative size-[16px]" style={{ filter: 'invert(1)' }} />
              <span className="text-[12px] text-white tracking-[-0.14px] leading-normal whitespace-nowrap">Filters</span>
            </button>
          </div>

          {/* Filter chips row 2 — active filters */}
          <div className="bg-white/20 rounded-full p-1 flex gap-1 flex-wrap w-fit">
            {ACTIVE_FILTERS.map((label) => (
              <ActiveFilterPill key={label} label={label} />
            ))}
          </div>

          {/* Card grid 4×4 */}
          <div className="grid grid-cols-4 gap-1">
            {LISTINGS_DATA.map((listing, i) => (
              <Card
                key={i}
                property1="Saved"
                city={listing.city}
                country={listing.country}
                price={listing.price}
                img={listing.img}
                beds={2}
                baths={2}
                sqm={120}
                className="relative flex flex-col w-full h-[320px] items-start justify-between p-1 rounded-2xl"
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-1 py-4">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                onClick={() => setActivePage(n)}
                className={`px-2 py-1 rounded text-[13px] tracking-[-0.14px] transition-colors duration-150 ${
                  activePage === n
                    ? 'bg-dark text-white'
                    : 'text-darkgray hover:text-dark'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="w-full max-w-[1600px] mx-auto relative z-10 flex items-center justify-between shrink-0 px-[70px] pb-[38px] pt-[8px]">
        <p className="text-xs text-darkgray tracking-[-0.14px] leading-normal whitespace-nowrap">
          © European Listings Ltd. 2026
        </p>
        <div className="flex gap-2.5 items-center">
          <button className="text-xs text-purple tracking-[-0.14px] leading-normal whitespace-nowrap">
            Terms of Service
          </button>
          <div className="bg-border-gray rounded-full shrink-0 size-[3px]" />
          <button className="text-xs text-purple tracking-[-0.14px] leading-normal whitespace-nowrap">
            Privacy Policy
          </button>
        </div>
      </div>
    </main>
  )
}
