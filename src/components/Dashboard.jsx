import { useRef } from 'react'
import { motion } from 'framer-motion'
import Card from './Card'
import Icons from './Icons'

// Background
const imgBg = 'https://www.figma.com/api/mcp/asset/46b70ee9-415e-44e7-8a42-7072f552b103'
// Arrow icon for saved searches
const imgArrowVec = 'https://www.figma.com/api/mcp/asset/1e8bf52b-8193-4760-af44-4f21f23f86ba'
// Saved search images
const imgFrame36 = 'https://www.figma.com/api/mcp/asset/39792562-096a-463a-bfe9-099d2d6a93ce'
const imgFrame37 = 'https://www.figma.com/api/mcp/asset/da8eefe6-152f-470a-8b99-e1eb92a18a5d'
// Budget tool decorative ellipse
const imgEllipse = 'https://www.figma.com/api/mcp/asset/477b8733-91c0-491f-ab49-43aa0b2ec1e9'
// Budget tool icon (financial document)
const imgBudgetIcon = 'https://www.figma.com/api/mcp/asset/856c10a3-3d0e-48f9-a7da-52b59f90cb4d'
// Search icon
const imgSearchIcon = 'https://www.figma.com/api/mcp/asset/c5e4425a-dc40-43bb-af85-6c57c09fb638'

// Listing card images
const IMG_CARDS = [
  'https://www.figma.com/api/mcp/asset/28323000-3710-4618-b65e-63a09f79d88f',
  'https://www.figma.com/api/mcp/asset/0f0c7035-9711-486a-b9e2-fb8607cf5cc2',
  'https://www.figma.com/api/mcp/asset/4ea18c31-f97b-42bd-9853-fb88dfdcef57',
  'https://www.figma.com/api/mcp/asset/41835e66-0d37-48ce-9617-5421d16aba68',
  'https://www.figma.com/api/mcp/asset/7bede93e-8ff9-4a23-9440-8d882fe3ca1b',
  'https://www.figma.com/api/mcp/asset/28323000-3710-4618-b65e-63a09f79d88f',
  'https://www.figma.com/api/mcp/asset/4ea18c31-f97b-42bd-9853-fb88dfdcef57',
  'https://www.figma.com/api/mcp/asset/0f0c7035-9711-486a-b9e2-fb8607cf5cc2',
  'https://www.figma.com/api/mcp/asset/7bede93e-8ff9-4a23-9440-8d882fe3ca1b',
]

const SAVED_SEARCHES = [
  { id: 1, city: 'Lot', country: 'France', img: imgFrame36 },
  { id: 2, city: 'Cyclades', country: 'Greece', img: imgFrame37 },
]

const LISTINGS = IMG_CARDS.map((img, i) => ({
  id: i + 1,
  city: ['Crete', 'Santorini', 'Lot', 'Tuscany', 'Crete', 'Mallorca', 'Mykonos', 'Provence', 'Corfu'][i],
  country: ['Greece', 'Greece', 'France', 'Italy', 'Greece', 'Spain', 'Greece', 'France', 'Greece'][i],
  price: ['€119,000', '€245,000', '€189,000', '€320,000', '€98,000', '€275,000', '€310,000', '€165,000', '€142,000'][i],
  // Cards 0 and 3 get 4 images — skip immediate neighbors' images
  // Card 0 neighbor is card 1 (IMG_CARDS[1]) → use 0,2,3,4
  ...(i === 0 ? { images: [IMG_CARDS[0], IMG_CARDS[2], IMG_CARDS[3], IMG_CARDS[4]] } : {}),
  // Card 3 neighbors are card 2 (IMG_CARDS[2]) and card 4 (IMG_CARDS[4]) → use 3,0,1,3
  ...(i === 3 ? { images: [IMG_CARDS[3], IMG_CARDS[0], IMG_CARDS[1], IMG_CARDS[3]] } : {}),
  img,
}))

function DragScroll({ className, children }) {
  const ref = useRef(null)
  const dragging = useRef(false)
  const lastX = useRef(0)
  const lastTime = useRef(0)
  const velocity = useRef(0)
  const rafId = useRef(null)

  const cancelInertia = () => {
    if (rafId.current) { cancelAnimationFrame(rafId.current); rafId.current = null }
  }

  const applyInertia = () => {
    if (Math.abs(velocity.current) < 0.05) return
    ref.current.scrollLeft += velocity.current * 16
    velocity.current *= 0.93
    rafId.current = requestAnimationFrame(applyInertia)
  }

  const onMouseDown = (e) => {
    cancelInertia()
    dragging.current = true
    lastX.current = e.pageX
    lastTime.current = Date.now()
    velocity.current = 0
    ref.current.style.cursor = 'grabbing'
  }
  const release = () => {
    if (!dragging.current) return
    dragging.current = false
    ref.current.style.cursor = 'grab'
    rafId.current = requestAnimationFrame(applyInertia)
  }
  const onMouseMove = (e) => {
    if (!dragging.current) return
    e.preventDefault()
    const x = e.pageX
    const now = Date.now()
    const dt = now - lastTime.current
    if (dt > 0) velocity.current = (lastX.current - x) / dt
    ref.current.scrollLeft += lastX.current - x
    lastX.current = x
    lastTime.current = now
  }

  return (
    <div
      ref={ref}
      className={`overflow-x-auto select-none ${className || ''}`}
      style={{ cursor: 'grab', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      onMouseDown={onMouseDown}
      onMouseUp={release}
      onMouseLeave={release}
      onMouseMove={onMouseMove}
    >
      {children}
    </div>
  )
}

function ViewAllBtn() {
  return (
    <button className="border border-purple text-purple text-[9px] font-semibold uppercase tracking-[-0.16px] px-3 py-2 rounded">
      View all
    </button>
  )
}

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

function SavedSearchCard({ city, country, img }) {
  return (
    <div
      className="group border-[0.5px] border-border-gray flex flex-1 h-[77px] items-center justify-between overflow-clip pr-4 rounded-[4px]"
      style={{
        backgroundImage: 'repeating-linear-gradient(120deg, transparent 0px, transparent 4.33px, rgba(110,110,110,0.09) 4.33px, rgba(110,110,110,0.09) 4.83px)',
      }}
    >
      <div className="flex gap-4 items-center shrink-0">
        <div className="relative rounded-[4px] shrink-0 size-[77px] overflow-clip">
          <img
            alt={city}
            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full transition-transform duration-500 ease-in-out group-hover:scale-110"
            src={img}
          />
        </div>
        <div className="flex flex-col items-start tracking-[-0.14px] w-[39px]">
          <p className="text-sm text-dark leading-normal">{city}</p>
          <p className="text-xs text-darkgray leading-normal">{country}</p>
        </div>
      </div>
      <div className="bg-limon flex h-[44px] items-center overflow-clip p-[10px] rounded-[10px] shrink-0">
        <div className="overflow-clip relative shrink-0 size-4 transition-transform duration-300 ease-out group-hover:scale-[1.15]">
          <div className="absolute inset-[20.83%]">
            <div className="absolute inset-[-5.36%]">
              <img alt="" className="block max-w-none size-full" src={imgArrowVec} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BudgetTool() {
  return (
    <div className="flex-1 bg-white flex flex-col h-full items-start justify-between min-w-0 overflow-clip p-4 relative rounded-[8px]">
      <p className="font-display text-lg text-dark tracking-[-0.2px] font-bold relative z-10">
        Budget Tool
      </p>
      <div className="flex gap-[19px] items-center justify-between relative z-10 w-full">
        <div className="flex gap-4 items-center shrink-0">
          <div className="bg-limon h-[77px] overflow-clip relative rounded-[4px] shrink-0 w-[78px] flex items-center justify-center">
            <img alt="" className="size-8 object-contain" src={imgBudgetIcon} />
          </div>
          <p className="text-sm text-dark tracking-[-0.4px] leading-snug max-w-[136px]">
            <span className="font-semibold">Calculate your budget</span>
            {' '}to see what you can afford
          </p>
        </div>
        <button className="bg-dark flex items-center justify-center px-8 py-3 rounded-[22px] shrink-0">
          <span className="text-[10px] font-semibold text-white tracking-[-0.16px] uppercase whitespace-nowrap">
            Calculate budget
          </span>
        </button>
      </div>
    </div>
  )
}

export default function Dashboard() {
  return (
    <main className="flex-1 flex flex-col h-full overflow-y-auto relative min-w-0">
      <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-6 p-[70px] flex-1">
      {/* Top: Title + Search */}
      <div className="relative z-10 flex flex-col gap-12 items-start shrink-0">
        <div className="flex flex-col gap-1 items-start">
          <div className="flex flex-col justify-center leading-none relative shrink-0 text-[0px] text-dark tracking-[-1px] w-[466px]">
            <p className="text-[42px] tracking-[-1px]">
              <span className="font-display">Good Evening, </span>
              <span className="font-display-italic text-purple">{'\u00A0'}James P.</span>
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
              <path d="M4.31001 6.9C4.20482 6.79033 4.12294 6.66048 4.06931 6.5183C4.01568 6.37611 3.99141 6.22454 3.99797 6.07271C4.00452 5.92089 4.04177 5.77197 4.10746 5.63494C4.17315 5.49791 4.26592 5.37561 4.38018 5.27542C4.49443 5.17523 4.6278 5.09922 4.77224 5.05199C4.91667 5.00475 5.06918 4.98727 5.22056 5.00059C5.37194 5.01392 5.51905 5.05777 5.65301 5.12951C5.78697 5.20125 5.90501 5.29939 6.00001 5.418C6.09546 5.30062 6.21361 5.20371 6.34738 5.13305C6.48115 5.06239 6.6278 5.01944 6.77855 5.00676C6.92931 4.99409 7.08107 5.01195 7.22476 5.05927C7.36846 5.1066 7.50113 5.18243 7.61484 5.28221C7.72855 5.382 7.82097 5.50369 7.88657 5.64002C7.95216 5.77634 7.98959 5.9245 7.99661 6.07562C8.00363 6.22675 7.98009 6.37773 7.92741 6.51955C7.87473 6.66137 7.79399 6.7911 7.69001 6.901L6.37701 8.329C6.33017 8.38293 6.27229 8.42618 6.20729 8.45582C6.1423 8.48546 6.07169 8.5008 6.00026 8.5008C5.92882 8.5008 5.85822 8.48546 5.79322 8.45582C5.72823 8.42618 5.67035 8.38293 5.62351 8.329L4.31001 6.9Z" stroke="#6E6E6E" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1.5 5C1.49997 4.85453 1.53167 4.71081 1.59289 4.57885C1.65412 4.4469 1.7434 4.32989 1.8545 4.236L5.3545 1.236C5.53499 1.08345 5.76368 0.999756 6 0.999756C6.23632 0.999756 6.46501 1.08345 6.6455 1.236L10.1455 4.236C10.2566 4.32989 10.3459 4.4469 10.4071 4.57885C10.4683 4.71081 10.5 4.85453 10.5 5V9.5C10.5 9.76521 10.3946 10.0196 10.2071 10.2071C10.0196 10.3946 9.76522 10.5 9.5 10.5H2.5C2.23478 10.5 1.98043 10.3946 1.79289 10.2071C1.60536 10.0196 1.5 9.76521 1.5 9.5V5Z" stroke="#6E6E6E" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="text-xs text-darkgray text-center tracking-[-0.2px] leading-5 whitespace-nowrap">
              You have 3 saved properties
            </p>
          </div>
        </div>
        <SearchBar />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-2 flex-1 min-h-0">
        {/* Saved Searches + Budget Tool */}
        <div className="bg-[rgba(255,255,255,0.3)] flex h-[188px] items-start overflow-clip p-3 rounded-[16px] shrink-0 w-full">
          <div className="flex flex-1 gap-0.5 h-full items-center relative">
            {/* Saved Searches */}
            <div className="bg-white flex flex-1 flex-col h-full items-start justify-between min-w-0 overflow-clip p-4 relative rounded-[8px]">
              <div className="flex items-start justify-between shrink-0 w-full">
                <p className="font-display text-lg text-dark tracking-[-0.2px] font-bold whitespace-nowrap">
                  Saved Searches
                </p>
                <ViewAllBtn />
              </div>
              <div className="flex gap-1 items-start shrink-0 w-full">
                {SAVED_SEARCHES.map((s) => (
                  <SavedSearchCard key={s.id} {...s} />
                ))}
              </div>
            </div>

            <BudgetTool />
          </div>
        </div>

        {/* Listings from Instagram */}
        <div className="bg-white/50 flex-1 flex items-start p-3 rounded-[28px] w-full min-h-0">
          <div className="flex flex-col h-full w-full gap-6 p-4 overflow-hidden">
            <div className="flex items-start justify-between pr-3 shrink-0 w-full">
              <p className="font-display text-lg text-dark tracking-[-0.2px] font-bold whitespace-nowrap">
                Listings from Instagram
              </p>
              <ViewAllBtn />
            </div>
            <DragScroll className="flex gap-0.5 items-stretch flex-1 min-h-0 py-3 -my-3">
              {LISTINGS.map((listing) => (
                <Card key={listing.id} {...listing} className="relative flex flex-col w-[230px] items-start justify-between p-1 rounded-2xl shrink-0 h-full" />
              ))}
            </DragScroll>
          </div>
        </div>
      </div>

      </div>

      {/* Footer — outside padded wrapper, aligns with Sidebar's Peterson row */}
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
