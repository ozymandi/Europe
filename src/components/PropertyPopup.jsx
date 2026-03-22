import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import imgShareIcon  from '../assets/Icons/Property 1=Share.svg'
import imgCloseIcon  from '../assets/Icons/Property 1=x.svg'
import imgHouseIcon  from '../assets/Icons/Property 1=house.svg'
import imgBedIcon    from '../assets/Icons/Property 1=lucide_bed-double.svg'
import imgBathIcon   from '../assets/Icons/Property 1=lucide_bath.svg'
import imgSqmIcon    from '../assets/Icons/Property 1=lucide_ruler.svg'
import imgLandIcon   from '../assets/Icons/Property 1=lucide_ruler-dimension-line.svg'
import imgCheckIcon  from '../assets/Icons/Property 1=lucide_book-open-check.svg'
import imgNotesIcon  from '../assets/Icons/Property 1=lucide_file-text.svg'
import imgBudgetIcon from '../assets/Icons/Property 1=lucide_calculator.svg'

const STATS = [
  { icon: imgHouseIcon,  inset: 'inset-[12.5%_8.33%]',           extra: 'inset-[-4.17%_-3.75%]', key: 'house', label: 'House' },
  { icon: imgBedIcon,    inset: 'inset-[16.67%_8.33%]',          extra: 'inset-[-4.69%_-3.75%]', key: 'beds',  label: 'Beds' },
  { icon: imgBathIcon,   inset: 'inset-[12.48%_8.33%_12.5%_8.33%]', extra: 'inset-[-4.17%_-3.75%]', key: 'baths', label: 'Baths' },
  { icon: imgSqmIcon,    inset: 'inset-[8.33%]',                  extra: 'inset-[-3.75%]',         key: 'sqm',   label: 'SqM' },
  { icon: imgLandIcon,   inset: 'inset-[16.67%_8.33%]',          extra: 'inset-[-4.69%_-3.75%]', key: 'land',  label: 'm² land' },
]

const CURRENCIES = ['Eur', 'USD', 'GBP']

export default function PropertyPopup({ listing, onClose }) {
  if (!listing) return null

  const [activeCurrency, setActiveCurrency] = useState('Eur')

  const stats = {
    house: 1,
    beds: listing.beds,
    baths: listing.baths,
    sqm: listing.sqm,
    land: listing.land ?? '—',
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 backdrop-blur-[29px] bg-[rgba(46,46,46,0.6)]"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          className="relative flex gap-1 bg-[#f2f2f2] rounded-[20px] p-1 w-[1040px] max-h-[calc(100vh-80px)] overflow-hidden"
          style={{ boxShadow: '0px 22px 44.2px 0px rgba(0,0,0,0.25)' }}
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Left: image */}
          <div className="relative rounded-[16px] shrink-0 w-[320px] self-stretch overflow-hidden">
            <img
              alt=""
              className="absolute inset-0 w-full h-full object-cover rounded-[16px]"
              src={listing.img}
            />
          </div>

          {/* Right: content */}
          <div className="flex flex-col gap-1 flex-1 min-w-0 overflow-y-auto">

            {/* Top info */}
            <div className="bg-[rgba(255,255,255,0.5)] flex flex-col gap-7 items-start justify-center p-5 rounded-[16px] shrink-0 w-full">
              {/* Features row + action buttons */}
              <div className="flex items-start justify-between w-full">
                <div className="flex gap-1 items-start flex-wrap">
                  {(listing.features ?? [listing.tag]).map(f => (
                    <div key={f} className="bg-white flex items-center px-3 py-1 rounded-full">
                      <span className="text-[12px] text-dark tracking-[-0.14px] leading-normal">{f}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-1 items-center shrink-0">
                  {/* Share */}
                  <div className="bg-dark flex items-center overflow-clip p-[4px] rounded-[66px]">
                    <div className="flex items-center p-[4px] rounded-[34px]">
                      <div className="overflow-clip relative shrink-0 size-[12px]">
                        <div className="absolute inset-[8.33%_12.5%]">
                          <div className="absolute inset-[-5%_-5.56%]">
                            <img alt="" className="block max-w-none size-full" src={imgShareIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Close */}
                  <button onClick={onClose} className="bg-white flex items-center overflow-clip p-[4px] rounded-[66px]">
                    <div className="flex items-center p-[4px] rounded-[34px]">
                      <div className="overflow-clip relative shrink-0 size-[12px]">
                        <div className="absolute inset-1/4">
                          <div className="absolute inset-[-8.33%]">
                            <img alt="" className="block max-w-none size-full" src={imgCloseIcon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Price + location + currency */}
              <div className="flex items-end justify-between w-full">
                <div className="flex flex-col gap-1">
                  <span className="text-[21px] font-semibold text-dark tracking-[-0.14px] leading-normal">{listing.price}</span>
                  <div className="flex gap-2 items-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                      <path d="M10 5C10 7.5 6 11 6 11C6 11 2 7.5 2 5C2 2.79 3.79 1 6 1C8.21 1 10 2.79 10 5Z" stroke="#6E6E6E" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 6.5C6.83 6.5 7.5 5.83 7.5 5C7.5 4.17 6.83 3.5 6 3.5C5.17 3.5 4.5 4.17 4.5 5C4.5 5.83 5.17 6.5 6 6.5Z" stroke="#6E6E6E" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[12px] text-darkgray tracking-[-0.2px] leading-5 whitespace-nowrap">
                      {listing.city}, {listing.country}
                    </span>
                  </div>
                </div>
                <div className="flex gap-1 items-center">
                  {CURRENCIES.map(c => (
                    <button
                      key={c}
                      onClick={() => setActiveCurrency(c)}
                      className="flex gap-2.5 h-6 items-center overflow-clip px-3 py-0.5 rounded-[66px]"
                      style={{
                        background: activeCurrency === c ? '#2e2e2e' : 'white',
                        color: activeCurrency === c ? 'white' : '#2e2e2e',
                      }}
                    >
                      <span className="text-[10px] tracking-[-0.14px] leading-normal">{c}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="flex gap-0.5 items-center w-full shrink-0">
              {STATS.map(s => (
                <div
                  key={s.key}
                  className="bg-[rgba(255,255,255,0.5)] flex flex-1 flex-col gap-2.5 h-[100px] items-center justify-center overflow-clip px-5 py-2.5 rounded-[16px]"
                >
                  <div className="flex gap-2.5 items-center">
                    <div className="overflow-clip relative shrink-0 size-4">
                      <div className={`absolute ${s.inset}`}>
                        <div className={`absolute ${s.extra}`}>
                          <img alt="" className="block max-w-none size-full" src={s.icon} />
                        </div>
                      </div>
                    </div>
                    <span className="text-[20px] font-bold text-dark tracking-[-0.14px] leading-normal">{stats[s.key]}</span>
                  </div>
                  <span className="text-[12px] text-darkgray text-center tracking-[-0.2px] leading-5 whitespace-nowrap">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Revenue forecast */}
            <div className="border border-[rgba(255,255,255,0.5)] flex flex-col gap-7 items-start justify-center p-5 rounded-[16px] shrink-0 w-full">
              <span className="font-display font-bold text-[18px] text-dark tracking-[-0.2px] leading-normal">Revenue forecast</span>
              <div className="w-full">
                <div className="bg-white flex h-[122px] items-center justify-center overflow-clip p-2.5 rounded-[16px] w-full" style={{ boxShadow: '0px 2px 2px 0px rgba(0,0,0,0.04)' }}>
                  <div className="flex flex-col gap-1 items-center justify-center opacity-30">
                    <span className="text-[16px] font-bold text-darkgray tracking-[-0.14px] leading-normal">Revenue Data Coming Soon</span>
                    <span className="text-[12px] text-darkgray text-center tracking-[-0.2px] leading-5">We're gathering rental performance data for this property</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Due Diligence */}
            <div className="border border-[rgba(255,255,255,0.5)] flex flex-col items-start p-5 rounded-[16px] shrink-0 w-full">
              <div className="flex items-start justify-between w-full">
                <div className="flex gap-2 items-center">
                  <div className="overflow-clip relative shrink-0 size-4">
                    <div className="absolute inset-[12.5%_8.33%]">
                      <div className="absolute inset-[-4.17%_-3.75%]">
                        <img alt="" className="block max-w-none size-full" src={imgCheckIcon} />
                      </div>
                    </div>
                  </div>
                  <span className="font-display font-bold text-[18px] text-dark tracking-[-0.2px] leading-normal">Due Diligence Checklist</span>
                </div>
                <button className="border border-purple flex items-center justify-center gap-[10px] px-3 py-2 rounded-[4px]">
                  <span className="text-[9px] font-semibold text-purple tracking-[-0.16px] uppercase leading-normal">add item</span>
                </button>
              </div>
            </div>

            {/* Personal notes */}
            <div className="border border-[rgba(255,255,255,0.5)] flex flex-col items-start p-5 rounded-[16px] shrink-0 w-full">
              <div className="flex items-start justify-between w-full">
                <div className="flex gap-2 items-center">
                  <div className="overflow-clip relative shrink-0 size-4">
                    <div className="absolute inset-[8.33%_16.67%]">
                      <div className="absolute inset-[-3.75%_-4.69%]">
                        <img alt="" className="block max-w-none size-full" src={imgNotesIcon} />
                      </div>
                    </div>
                  </div>
                  <span className="font-display font-bold text-[18px] text-dark tracking-[-0.2px] leading-normal">Personal notes</span>
                </div>
                <button className="border border-purple flex items-center justify-center gap-[10px] px-3 py-2 rounded-[4px]">
                  <span className="text-[9px] font-semibold text-purple tracking-[-0.16px] uppercase leading-normal">add item</span>
                </button>
              </div>
            </div>

            {/* Bottom buttons */}
            <div className="flex flex-col items-center px-8 py-10 shrink-0 w-full">
              <div className="flex gap-2.5 items-start">
                <button className="bg-dark flex items-center justify-center px-4 py-3 rounded-[22px]">
                  <span className="text-[10px] font-semibold text-white tracking-[-0.16px] uppercase leading-normal">calculate full details</span>
                </button>
                <button
                  className="flex items-center justify-center gap-1 px-4 py-3 rounded-[22px] border"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(93,51,187,0.03), rgba(184,225,247,0))',
                    borderColor: 'rgba(139,92,246,0.12)',
                    boxShadow: '0px 2px 4px 0px rgba(138,56,245,0.16)',
                  }}
                >
                  <div className="overflow-clip relative shrink-0 size-[12px]">
                    <div className="absolute inset-[8.33%_16.67%]">
                      <div className="absolute inset-[-5%_-6.25%]">
                        <img alt="" className="block max-w-none size-full" src={imgBudgetIcon} />
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-dark tracking-[-0.16px] uppercase leading-normal">calculate budget</span>
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
