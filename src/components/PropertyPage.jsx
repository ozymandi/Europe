import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import chartE1 from '../assets/charts/ellipse1.svg'
import chartE2 from '../assets/charts/ellipse2.svg'
import chartE3 from '../assets/charts/ellipse3.svg'
import chartE4 from '../assets/charts/ellipse4.svg'
import chartE5 from '../assets/charts/ellipse5.svg'

const MAPS_API_KEY = 'AIzaSyDHbEDhU9AdgZbBYaB97Z8ahhx2Uan_JxU'
const MAP_CENTER = { lat: 44.4848, lng: 1.8422 }
const MAP_STYLES = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]

function PropertyMap() {
  const { isLoaded } = useJsApiLoader({ googleMapsApiKey: MAPS_API_KEY })
  if (!isLoaded) return <div className="w-full h-full bg-[#f5f5f5] rounded-[16px]" />
  return (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '100%', borderRadius: '16px' }}
      center={MAP_CENTER}
      zoom={13}
      options={{ styles: MAP_STYLES, disableDefaultUI: true, zoomControl: false }}
    >
      <Marker position={MAP_CENTER} />
    </GoogleMap>
  )
}

const imgHero1  = 'https://www.figma.com/api/mcp/asset/816c5f6c-a049-480c-aa64-aab9ff60b470'
const imgHero2  = 'https://www.figma.com/api/mcp/asset/83ac5f82-236c-4463-83ed-59188c21a1dc'
const HERO_IMAGES = [imgHero1, imgHero2, imgHero1, imgHero2]

const imgMapPic = 'https://www.figma.com/api/mcp/asset/83ac5f82-236c-4463-83ed-59188c21a1dc'
const imgBeds   = 'https://www.figma.com/api/mcp/asset/8a64bac5-7d08-4759-b1a0-65ff80de7682'
const imgBaths  = 'https://www.figma.com/api/mcp/asset/26549594-7d97-477a-8aef-cc0c6a2e2ab0'
const imgSqm    = 'https://www.figma.com/api/mcp/asset/3e87fe7c-5335-445b-8231-57b010e403e5'
const imgLand   = 'https://www.figma.com/api/mcp/asset/78980b3b-3677-428e-86c3-b30c03cf6c44'
const imgPin    = 'https://www.figma.com/api/mcp/asset/086e5593-3fff-4e97-9880-cb5147429719'
const imgPinLoc = 'https://www.figma.com/api/mcp/asset/15ad889a-e93a-40f9-b85b-b1a8e66455c1'
const imgCoastalIcon = 'https://www.figma.com/api/mcp/asset/9433d611-6276-4505-afa8-1307369bb9aa'
const imgVillageIcon = 'https://www.figma.com/api/mcp/asset/cc6c20c3-fd4c-45a9-b52f-c2f1af1b9aee'
const imgAirportIcon = 'https://www.figma.com/api/mcp/asset/e4062510-c5c3-4b0c-a8cc-fbaf35630b86'

const imgDot0 = 'https://www.figma.com/api/mcp/asset/4bed7b86-8c28-4eb3-92ee-a3b5a59b44ef'
const imgDot1 = 'https://www.figma.com/api/mcp/asset/b9f3dd86-ff26-44a3-9637-35fcdd3a6804'
const imgDot2 = 'https://www.figma.com/api/mcp/asset/4117d9f3-d5bc-4129-9d33-5881ab7f2821'
const imgDot3 = 'https://www.figma.com/api/mcp/asset/13d8a5b6-1ed3-447b-98f3-d8c9530aa1a0'
const imgDot4 = 'https://www.figma.com/api/mcp/asset/57bb6b68-75f8-4d1c-b7eb-6547a168eb82'

const STATS = [
  { img: imgBeds,  inset: 'inset-[16.67%_8.33%]', extra: 'inset-[-4.69%_-3.75%]', value: '2',   label: 'Beds' },
  { img: imgBaths, inset: 'inset-[12.48%_8.33%_12.5%_8.33%]', extra: 'inset-[-4.17%_-3.75%]', value: '1',   label: 'Baths' },
  { img: imgSqm,   inset: 'inset-[8.33%_8.31%_8.31%_8.33%]', extra: 'inset-[-3.75%]', value: '75',  label: 'SqM' },
  { img: imgLand,  inset: 'inset-[16.67%_8.33%]', extra: 'inset-[-4.69%_-3.75%]', value: '335', label: 'm² land' },
]

const FEATURES = [
  { img: imgCoastalIcon, inset: 'inset-[8.33%_12.5%]', extra: 'inset-[-5%_-5.56%]', label: 'Coastal' },
  { img: imgVillageIcon, inset: 'inset-[12.5%_8.33%]', extra: 'inset-[-5.56%_-5%]', label: 'Village/City' },
  { img: imgAirportIcon, inset: 'inset-[11.72%_11.72%_12.5%_12.5%]', extra: 'inset-[-5.5%]', label: '30 min airport' },
]

const COSTS = [
  { img: imgDot0, label: 'Property P..', pct: '90.2%', amount: '€980,000' },
  { img: imgDot1, label: 'Purchase',     pct: '4.1%',  amount: '€44,000' },
  { img: imgDot2, label: 'Notary Fees',  pct: '0.5%',  amount: '€44,000' },
  { img: imgDot3, label: 'Agent Fees',   pct: '3.2%',  amount: '€44,000' },
  { img: imgDot4, label: 'Legal Fees',   pct: '1.8%',  amount: '€44,000' },
]

const BASE_TOTAL_EUR = 1156000

function DonutChart({ currency }) {
  const total = formatPrice(BASE_TOTAL_EUR, currency)
  return (
    <div className="relative flex items-center justify-center w-full h-[275px]">
      {/* Ellipse layers — positioned exactly as in Figma */}
      <div className="absolute left-[26px] top-[20px] size-[208px]">
        <img alt="" className="absolute block max-w-none size-full" src={chartE1} />
      </div>
      <div className="absolute left-[26px] top-[20px] size-[208px]">
        <div className="absolute bottom-1/2 left-[38.61%] right-0 top-0">
          <img alt="" className="block max-w-none size-full" src={chartE2} />
        </div>
      </div>
      <div className="absolute left-[26px] top-[20px] size-[208px]">
        <div className="absolute bottom-[25.62%] left-[80.21%] right-0 top-1/2">
          <img alt="" className="block max-w-none size-full" src={chartE3} />
        </div>
      </div>
      <div className="absolute left-[26px] top-[20px] size-[208px]">
        <div className="absolute inset-[66.52%_6.07%_7.74%_68.49%]">
          <img alt="" className="block max-w-none size-full" src={chartE4} />
        </div>
      </div>
      <div className="absolute left-[26px] top-[20px] size-[208px]">
        <div className="absolute inset-[1.25%_57.69%_69.8%_9%]">
          <img alt="" className="block max-w-none size-full" src={chartE5} />
        </div>
      </div>
      {/* Center text */}
      <div className="absolute flex flex-col items-center" style={{ left: '130px', top: '124px', transform: 'translate(-50%, -50%)' }}>
        <span className="text-[12px] text-darkgray tracking-[-0.14px] leading-normal">Total</span>
        <span className="font-bold text-[16px] text-dark tracking-[-0.14px] leading-normal whitespace-nowrap">{total}</span>
      </div>
    </div>
  )
}

const BASE_PRICE_EUR = 119000
const RATES = { EUR: 1, USD: 1.08, GBP: 0.86 }
const SYMBOLS = { EUR: '€', USD: '$', GBP: '£' }

function formatPrice(eur, currency) {
  const converted = Math.round(eur * RATES[currency])
  return SYMBOLS[currency] + converted.toLocaleString('en-US')
}

function HeroCarousel({ images }) {
  const [index, setIndex] = useState(0)
  const [width, setWidth] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    setWidth(el.offsetWidth)
    const ro = new ResizeObserver(() => setWidth(el.offsetWidth))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const handleDragEnd = (e, { offset, velocity }) => {
    if ((offset.x < -60 || velocity.x < -400) && index < images.length - 1) setIndex(i => i + 1)
    else if ((offset.x > 60 || velocity.x > 400) && index > 0) setIndex(i => i - 1)
  }

  return (
    <div ref={containerRef} className="relative h-[320px] w-full rounded-[16px] overflow-hidden shrink-0 cursor-grab active:cursor-grabbing select-none">
      <motion.div
        className="flex h-full"
        animate={{ x: -index * width }}
        transition={{ type: 'spring', stiffness: 350, damping: 35, mass: 0.8 }}
        drag="x"
        dragConstraints={{ left: -(images.length - 1) * width, right: 0 }}
        dragElastic={0.12}
        dragMomentum={false}
        onDragEnd={handleDragEnd}
      >
        {images.map((src, i) => (
          <div key={i} className="relative shrink-0 h-full overflow-hidden" style={{ width }}>
            <motion.img
              src={src} alt=""
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              whileHover={{ scale: 1.06 }}
              transition={{ type: 'spring', stiffness: 180, damping: 22 }}
            />
          </div>
        ))}
      </motion.div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-[2px] items-center pointer-events-none">
        {images.map((_, i) => (
          <div key={i} className={`h-[3px] rounded-[10px] bg-white transition-all duration-300 ${i === index ? 'w-[20px]' : 'w-[4px] opacity-60'}`} />
        ))}
      </div>
    </div>
  )
}

export default function PropertyPage({ onNavigate }) {
  const [currency, setCurrency] = useState('EUR')

  return (
    <main className="relative z-10 flex-1 min-w-0 overflow-y-auto scrollbar-hidden bg-border-gray">
      <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-0 px-[70px] pt-[70px] pb-0">

        {/* Top controls */}
        <div className="flex items-center justify-between pb-6">
          {/* Back button */}
          <motion.button
            className="flex items-center justify-center bg-white rounded-full"
            style={{ width: 36, height: 36, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
            whileHover={{ scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            onClick={() => onNavigate?.('discover')}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="#2e2e2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>

          {/* Share + Fav */}
          <div className="flex gap-1">
            {[
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="9" cy="2" r="1.5" stroke="white" strokeWidth="1.2"/>
                <circle cx="3" cy="6" r="1.5" stroke="white" strokeWidth="1.2"/>
                <circle cx="9" cy="10" r="1.5" stroke="white" strokeWidth="1.2"/>
                <path d="M4.5 6.75L7.5 9.25M4.5 5.25L7.5 2.75" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>,
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 10.5C6 10.5 1 7 1 4a2.5 2.5 0 015 0 2.5 2.5 0 015 0c0 3-5 6.5-5 6.5z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ].map((icon, i) => (
              <motion.button key={i}
                className="flex items-center justify-center rounded-full bg-dark"
                style={{ width: 36, height: 36 }}
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                {icon}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Main content block */}
        <div className="flex flex-col gap-1">
          {/* Hero carousel */}
          <HeroCarousel images={HERO_IMAGES} />

          {/* Title bar */}
          <div className="flex items-center justify-between bg-white/50 rounded-[16px] px-[30px] py-[20px]">
            <div className="flex flex-col gap-1">
              <h1 className="font-display font-bold text-[28px] text-dark tracking-[-0.2px] leading-normal whitespace-nowrap">
                Historic Village House With Flower Garden Escape
              </h1>
              <div className="flex gap-2 items-center">
                <img alt="" src={imgPin} className="shrink-0 w-[12px] h-[16px] object-contain" />
                <span className="text-[12px] text-darkgray tracking-[-0.2px] leading-[20px]">Cajarc, Lot, France</span>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 items-end">
              {/* Currency pills */}
              <div className="flex gap-1 items-center">
                {['EUR', 'USD', 'GBP'].map(c => (
                  <button key={c}
                    onClick={() => setCurrency(c)}
                    className="h-6 px-3 rounded-full text-[10px] tracking-[-0.14px] leading-normal"
                    style={{
                      background: currency === c ? '#2e2e2e' : 'white',
                      color: currency === c ? 'white' : '#2e2e2e',
                    }}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <span className="font-semibold text-[21px] text-dark tracking-[-0.14px] leading-normal">
                {formatPrice(BASE_PRICE_EUR, currency)}
              </span>
            </div>
          </div>

          {/* Two-column layout */}
          <div className="flex gap-1 items-start">
            {/* Left column */}
            <div className="flex flex-col gap-1 flex-1 min-w-0">

              {/* Stats row */}
              <div className="flex gap-[2px]">
                {STATS.map(s => (
                  <div key={s.label} className="flex-1 flex flex-col gap-2.5 items-center justify-center h-[100px] bg-white/50 rounded-[16px] px-5 py-2.5">
                    <div className="flex gap-2.5 items-center">
                      <div className="overflow-clip relative shrink-0 size-[16px]">
                        <div className={`absolute ${s.inset}`}>
                          <div className={`absolute ${s.extra}`}>
                            <img alt="" className="block max-w-none size-full" src={s.img} />
                          </div>
                        </div>
                      </div>
                      <span className="font-bold text-[20px] text-dark tracking-[-0.14px] leading-normal">{s.value}</span>
                    </div>
                    <span className="text-[12px] text-darkgray tracking-[-0.2px] leading-[20px]">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* About */}
              <div className="border border-white/50 rounded-[16px] p-5 flex flex-col gap-7">
                <h2 className="font-display font-bold text-[18px] text-dark tracking-[-0.2px] leading-normal">About this place</h2>
                <p className="text-[14px] text-darkgray tracking-[-0.14px] leading-[20px]">
                  This house with a bright flower garden and shaded terrace offers thoughtful renovations and period character. Set in the medieval center of Lot, France, near local shops and cafés. Ideal for those seeking a heritage home in a storied village setting.
                </p>
              </div>

              {/* Features */}
              <div className="border border-white/50 rounded-[16px] p-5 flex flex-col gap-7">
                <h2 className="font-display font-bold text-[18px] text-dark tracking-[-0.2px] leading-normal">What this place offers</h2>
                <div className="flex gap-1 flex-wrap">
                  {FEATURES.map(f => (
                    <div key={f.label} className="bg-white flex items-center gap-1 pl-1 pr-3 py-1 rounded-full">
                      <div className="flex items-center justify-center size-5 rounded-full">
                        <div className="overflow-clip relative size-[12px]">
                          <div className={`absolute ${f.inset}`}>
                            <div className={`absolute ${f.extra}`}>
                              <img alt="" className="block max-w-none size-full" src={f.img} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="text-[12px] text-dark tracking-[-0.14px] leading-normal">{f.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map / Location */}
              <div className="border border-white/50 rounded-[16px] p-5 flex flex-col gap-2.5">
                <h2 className="font-display font-bold text-[18px] text-dark tracking-[-0.2px] leading-normal mb-3">Location</h2>
                <div className="h-[153px] rounded-[16px] overflow-hidden shadow-[0px_2px_2px_0px_rgba(0,0,0,0.04)]">
                  <PropertyMap />
                </div>
                <div className="flex gap-2 items-center mt-1">
                  <img alt="" src={imgPinLoc} className="shrink-0 w-[12px] h-[16px] object-contain" />
                  <span className="text-[12px] text-dark tracking-[-0.2px] leading-[20px]">Cajarc, Lot, France</span>
                </div>
              </div>
            </div>

            {/* Right column — Total Budget */}
            <div className="w-[320px] shrink-0 bg-white/50 rounded-[16px] flex flex-col justify-between pb-[30px] pt-[20px] px-[30px] self-stretch">
              <div className="flex flex-col gap-7">
                <h2 className="font-display font-bold text-[18px] text-dark tracking-[-0.2px] leading-normal">Total Budget</h2>

                {/* Property price / Other costs tiles */}
                <div className="flex gap-[2px]">
                  <div className="flex-1 bg-limon rounded-[10px] px-5 py-2.5 flex flex-col gap-2.5">
                    <span className="text-[12px] text-dark tracking-[-0.14px] leading-normal">Property price</span>
                    <span className="font-bold text-[20px] text-dark tracking-[-0.14px] leading-normal">90.2%</span>
                  </div>
                  <div className="flex-1 bg-limon rounded-[10px] px-5 py-2.5 flex flex-col gap-2.5">
                    <span className="text-[12px] text-dark tracking-[-0.14px] leading-normal">Other costs</span>
                    <span className="font-bold text-[20px] text-dark tracking-[-0.14px] leading-normal">9.8%</span>
                  </div>
                </div>
              </div>

              {/* Donut chart */}
              <div className="flex items-center justify-center -mx-[10px]">
                <DonutChart currency={currency} />
              </div>

              {/* Cost table */}
              <div className="flex flex-col">
                {COSTS.map((row, i) => (
                  <div key={row.label}
                    className="flex items-center border border-border-gray -mb-px"
                    style={{
                      borderTopLeftRadius: i === 0 ? 8 : 0,
                      borderTopRightRadius: i === 0 ? 8 : 0,
                      borderBottomLeftRadius: i === COSTS.length - 1 ? 8 : 0,
                      borderBottomRightRadius: i === COSTS.length - 1 ? 8 : 0,
                    }}
                  >
                    <div className="flex-1 flex gap-2.5 items-center h-[38px] px-4 py-[9px]">
                      <img src={row.img} alt="" className="size-[13px]" />
                      <span className="text-[12px] text-dark tracking-[-0.14px] leading-normal">{row.label}</span>
                    </div>
                    <div className="w-[60px] flex items-center justify-center border-l border-border-gray self-stretch px-2">
                      <span className="text-[12px] text-darkgray tracking-[-0.14px] leading-[20px]">{row.pct}</span>
                    </div>
                    <div className="w-[80px] flex items-center justify-center border-l border-border-gray self-stretch px-2">
                      <span className="font-semibold text-[12px] text-dark tracking-[-0.14px] leading-[20px]">{row.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between py-[38px]">
          <p className="text-xs text-darkgray tracking-[-0.14px] leading-normal">© European Listings Ltd. 2026</p>
          <div className="flex gap-2.5 items-center">
            <button className="text-xs text-dark tracking-[-0.14px] leading-normal">Terms of Service</button>
            <div className="size-[3px] rounded-full bg-border-gray" />
            <button className="text-xs text-dark tracking-[-0.14px] leading-normal">Privacy Policy</button>
          </div>
        </div>
      </div>
    </main>
  )
}
