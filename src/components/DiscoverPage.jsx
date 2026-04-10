import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Card from './Card'
import Icons from './Icons'

import imgSearchIcon    from '../assets/Icons/Property 1=search.svg'
import imgIconGrid      from '../assets/Icons/Property 1=Dash.svg'
import imgIconList      from '../assets/Icons/Property 1=list.svg'
import imgIconChevron   from '../assets/Icons/Property 1=Down.svg'
import imgFilterChevron from '../assets/Icons/Property 1=Down.svg'
import imgFilterCountry from '../assets/Icons/Property 1=lucide_globe.svg'
import imgFilterPrice   from '../assets/Icons/Property 1=lucide_receipt-euro.svg'
import imgFilterType    from '../assets/Icons/Property 1=lucide_building-2.svg'
import imgFilterBedroom from '../assets/Icons/Property 1=lucide_bed-double.svg'
import imgFilterPool    from '../assets/Icons/Property 1=lucide_waves-ladder.svg'
import imgFilterSeaview from '../assets/Icons/Property 1=sea.svg'
import imgFilterFilters from '../assets/Icons/Property 1=lucide_list-filter.svg'
import imgActivePillIcon from '../assets/Icons/Property 1=lucide_triangle-right.svg'
import imgActivePillX   from '../assets/Icons/Property 1=x.svg'

const IMG_CARDS = [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop&auto=format',
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
  { city: 'Limassol', country: 'Cyprus', price: '€255,000', img: IMG_CARDS[1] },
  { city: 'Madeira', country: 'Portugal', price: '€178,000', img: IMG_CARDS[2] },
]

const FILTER_CHIPS = [
  { img: imgFilterCountry, inset: 'inset-[8.33%]', extra: 'inset-[-5%]', label: 'Country', chevron: true },
  { img: imgFilterPrice, inset: 'inset-[8.31%_16.67%]', extra: 'inset-[-5%_-6.25%]', label: 'Price', chevron: true },
  { img: imgFilterType, inset: 'inset-[12.5%_8.33%]', extra: 'inset-[-5.56%_-5%]', label: 'Type', chevron: true },
  { img: imgFilterBedroom, inset: 'inset-[16.67%_8.33%]', extra: 'inset-[-6.25%_-5%]', label: 'Bedroom', chevron: true },
  { img: imgFilterPool, inset: 'inset-[20.83%_8.33%]', extra: 'inset-[-7.14%_-5%]', label: 'Pool', chevron: false },
  { img: imgFilterSeaview, inset: 'inset-[20.83%_8.33%]', extra: 'inset-[-7.14%_-5%]', label: 'Seaview', chevron: false },
]

const ACTIVE_FILTERS = [
  { label: 'New challenge', icon: true },
  { label: 'Found 14', icon: true },
  { label: 'Luxury', icon: false },
  { label: 'Under 100K', icon: false },
  { label: 'Rental Potential', icon: false },
]

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

function FilterChip({ img, inset, extra, label, chevron }) {
  return (
    <button className={`bg-white rounded-full flex items-center gap-5 ${chevron ? 'p-1' : 'pl-1 pr-3 py-1'} shrink-0 transition-shadow duration-150 hover:shadow-[0_2px_8px_rgba(138,56,245,0.1)]`}>
      <div className="flex items-center gap-1">
        <div className="flex items-center justify-center p-1 rounded-full shrink-0">
          <div className="overflow-clip relative shrink-0 size-3">
            <div className={`absolute ${inset}`}>
              <div className={`absolute ${extra}`}>
                <img alt="" className="block max-w-none size-full" src={img} />
              </div>
            </div>
          </div>
        </div>
        <span className="text-[12px] text-dark tracking-[-0.14px] leading-normal whitespace-nowrap">{label}</span>
      </div>
      {chevron && (
        <div className="flex items-center justify-center p-1 rounded-full shrink-0">
          <div className="overflow-clip relative shrink-0 size-3">
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]">
              <div className="absolute inset-[-16.67%_-8.33%]">
                <img alt="" className="block max-w-none size-full" src={imgFilterChevron} />
              </div>
            </div>
          </div>
        </div>
      )}
    </button>
  )
}

function ActiveFilterPill({ label, icon }) {
  return (
    <div className={`border border-white rounded-full flex items-center gap-1 shrink-0 overflow-hidden ${icon ? 'px-[3px] py-[2px]' : 'pl-3 pr-[3px] py-[2px]'}`}>
      {icon && (
        <div className="flex items-center justify-center p-1 rounded-full shrink-0">
          <div className="overflow-clip relative shrink-0 size-3">
            <div className="absolute inset-[8.17%_8.17%_8.33%_8.33%]">
              <div className="absolute inset-[-4.99%]">
                <img alt="" className="block max-w-none size-full" src={imgActivePillIcon} />
              </div>
            </div>
          </div>
        </div>
      )}
      <span className="text-[10px] text-dark tracking-[-0.14px] leading-normal whitespace-nowrap">{label}</span>
      <div className="flex items-center justify-center p-1 rounded-full shrink-0">
        <div className="overflow-clip relative shrink-0 size-2">
          <div className="absolute inset-1/4">
            <div className="absolute inset-[-12.5%]">
              <img alt="" className="block max-w-none size-full" src={imgActivePillX} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DiscoverPage({ onNavigate }) {
  const [activePage, setActivePage] = useState(1)
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

  const visibleListings = LISTINGS_DATA.slice(0, Math.floor(LISTINGS_DATA.length / cols) * cols)

  const sentinelRef = useRef(null)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="flex-1 flex flex-col h-full overflow-y-auto relative min-w-0">
      <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-12 p-[70px] flex-1">

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
        <div className="relative z-10 flex flex-col gap-6">

          {/* Listings header */}
          <div className="flex items-center justify-between shrink-0 w-full">
            {/* Left: title + save search */}
            <div className="flex items-center gap-3">
              <p className="font-display text-lg text-dark tracking-[-0.2px] font-bold whitespace-nowrap">
                Latest Listings
              </p>
              <button className="border border-purple text-purple text-[9px] font-semibold uppercase tracking-[-0.16px] px-3 py-2 rounded transition-shadow duration-200 hover:shadow-[inset_0_0_0_9999px_rgba(139,92,246,0.08)]">
                Save Search
              </button>
            </div>
            {/* Right: sort + view toggle */}
            <div className="flex items-center gap-1">
              {/* Sort by dropdown */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[12px] text-dark tracking-[-0.14px] whitespace-nowrap">Sort by:</span>
                <motion.button
                  className="bg-white border border-border-gray flex items-center gap-10 pl-3 pr-1 py-1 rounded-full shrink-0"
                  style={{ boxShadow: '0px 2px 2px 0px rgba(138,56,245,0.03)' }}
                  whileHover={{ boxShadow: '0px 4px 10px 0px rgba(138,56,245,0.1)' }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-[12px] text-dark tracking-[-0.14px] whitespace-nowrap">Date</span>
                  <div className="flex items-center justify-center p-1 rounded-full shrink-0">
                    <div className="overflow-clip relative shrink-0 size-3">
                      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]">
                        <div className="absolute inset-[-16.67%_-8.33%]">
                          <img alt="" className="block max-w-none size-full" src={imgIconChevron} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.button>
              </div>
              {/* View toggle */}
              <motion.div
                className="bg-white border border-border-gray flex items-center gap-1 p-1 rounded-full shrink-0"
                style={{ boxShadow: '0px 2px 2px 0px rgba(138,56,245,0.03)' }}
                whileHover={{ boxShadow: '0px 4px 10px 0px rgba(138,56,245,0.1)' }}
                transition={{ duration: 0.2 }}
              >
                <button className="bg-dark flex items-center justify-center p-1 rounded-full shrink-0">
                  <div className="overflow-clip relative shrink-0 size-3">
                    <div className="absolute inset-[12.5%]">
                      <div className="absolute inset-[-5.56%]">
                        <img alt="" className="block max-w-none size-full" src={imgIconGrid} style={{ filter: 'brightness(0) invert(1)' }} />
                      </div>
                    </div>
                  </div>
                </button>
                <button className="flex items-center justify-center p-1 rounded-full shrink-0">
                  <div className="overflow-clip relative shrink-0 size-3">
                    <div className="absolute inset-[13.48%_12.5%]">
                      <div className="absolute inset-[-5.7%_-5.56%]">
                        <img alt="" className="block max-w-none size-full" src={imgIconList} />
                      </div>
                    </div>
                  </div>
                </button>
              </motion.div>
            </div>
          </div>

          {/* Sentinel — triggers sticky detection */}
          <div ref={sentinelRef} className="h-0 w-full" />

          {/* Filter chips + active filters — sticky with glass */}
          <div
            className="flex flex-col gap-3 sticky top-0 z-20 -mx-[70px] px-[70px] py-4 -my-4 transition-all duration-200"
            style={isSticky ? {
              background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.55) 35%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 6px 24px rgba(138,56,245,0.06)',
              borderBottomLeftRadius: '20px',
              borderBottomRightRadius: '20px',
            } : {}}
          >
            {/* Filter chips row */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-1 flex-wrap">
                {FILTER_CHIPS.map((chip) => (
                  <FilterChip key={chip.label} img={chip.img} inset={chip.inset} extra={chip.extra} label={chip.label} chevron={chip.chevron} />
                ))}
              </div>
              {/* Dark Filters chip — right side */}
              <button className="bg-dark rounded-full flex items-center gap-5 pl-1 pr-3 py-1 shrink-0 transition-opacity duration-150 hover:opacity-80">
                <div className="flex items-center justify-center p-1 rounded-full shrink-0">
                  <div className="overflow-clip relative shrink-0 size-3">
                    <div className="absolute inset-[20.83%_8.33%]">
                      <div className="absolute inset-[-7.14%_-5%]">
                        <img alt="" className="block max-w-none size-full" src={imgFilterFilters} style={{ filter: 'brightness(0) invert(1)' }} />
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-[12px] text-white tracking-[-0.14px] leading-normal whitespace-nowrap">Filters</span>
              </button>
            </div>

            {/* Active filter pills */}
            <div className="bg-white/20 rounded-[51px] p-1 flex gap-1 flex-wrap w-fit">
              {ACTIVE_FILTERS.map((f) => (
                <ActiveFilterPill key={f.label} label={f.label} icon={f.icon} />
              ))}
            </div>
          </div>

          {/* Card grid */}
          <div ref={gridRef} className="grid gap-1" style={{ gridTemplateColumns: `repeat(${cols}, minmax(230px, 1fr))` }}>
            {visibleListings.map((listing, i) => (
              <Card
                key={i}
                property1="Like_Share"
                city={listing.city}
                country={listing.country}
                price={listing.price}
                img={listing.img}
                beds={2}
                baths={2}
                sqm={120}
                className="relative flex flex-col h-[360px] w-full items-start justify-between p-1 rounded-2xl"
                onClick={() => onNavigate?.('property')}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-1 pt-6 pb-4 mt-6">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                onClick={() => setActivePage(n)}
                className={`size-6 rounded-[4px] flex items-center justify-center text-[10px] text-dark tracking-[-0.14px] transition-all duration-150 shrink-0 ${
                  activePage === n
                    ? 'bg-limon'
                    : 'bg-white border border-limon hover:bg-limon/30'
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
          <button className="text-xs text-dark tracking-[-0.14px] leading-normal whitespace-nowrap">
            Terms of Service
          </button>
          <div className="bg-border-gray rounded-full shrink-0 size-[3px]" />
          <button className="text-xs text-dark tracking-[-0.14px] leading-normal whitespace-nowrap">
            Privacy Policy
          </button>
        </div>
      </div>
    </main>
  )
}
