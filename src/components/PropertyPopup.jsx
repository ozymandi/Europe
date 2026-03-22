import { motion, AnimatePresence } from 'framer-motion'

const imgShareIcon  = 'https://www.figma.com/api/mcp/asset/21c36446-5385-44c8-a442-bf6ee211039a'
const imgCloseIcon  = 'https://www.figma.com/api/mcp/asset/2b64eb38-25f7-4cd5-bd42-fe26d41f9747'
const imgPinIcon    = 'https://www.figma.com/api/mcp/asset/3011ed75-7813-493f-af37-f229a3130c32'
const imgHouseIcon  = 'https://www.figma.com/api/mcp/asset/360c0581-db4d-4e76-8662-53f9f9dccb10'
const imgBedIcon    = 'https://www.figma.com/api/mcp/asset/8f99db90-6985-46f3-ad09-f022c6ada37c'
const imgBathIcon   = 'https://www.figma.com/api/mcp/asset/27b11cbc-3673-4afe-a55e-497e8b7a2486'
const imgSqmIcon    = 'https://www.figma.com/api/mcp/asset/68c6ea4e-29f2-4302-bd56-9e31cbaa69d4'
const imgLandIcon   = 'https://www.figma.com/api/mcp/asset/16320eca-ae34-45b9-a20c-3b6db0b712e9'
const imgCheckIcon  = 'https://www.figma.com/api/mcp/asset/d9304721-b375-46d6-9a82-e97539e74574'
const imgNotesIcon  = 'https://www.figma.com/api/mcp/asset/70624eab-c14e-48e3-a743-b493ff730455'
const imgBudgetIcon = 'https://www.figma.com/api/mcp/asset/705ccbb5-2533-4ba3-9cff-81e163a37ce8'

const STATS = [
  { icon: imgHouseIcon,  inset: 'inset-[12.5%_8.33%]',           extra: 'inset-[-4.17%_-3.75%]', key: 'house', label: 'House' },
  { icon: imgBedIcon,    inset: 'inset-[16.67%_8.33%]',          extra: 'inset-[-4.69%_-3.75%]', key: 'beds',  label: 'Beds' },
  { icon: imgBathIcon,   inset: 'inset-[12.48%_8.33%_12.5%_8.33%]', extra: 'inset-[-4.17%_-3.75%]', key: 'baths', label: 'Baths' },
  { icon: imgSqmIcon,    inset: 'inset-[8.33%]',                  extra: 'inset-[-3.75%]',         key: 'sqm',   label: 'SqM' },
  { icon: imgLandIcon,   inset: 'inset-[16.67%_8.33%]',          extra: 'inset-[-4.69%_-3.75%]', key: 'land',  label: 'm² land' },
]

export default function PropertyPopup({ listing, onClose }) {
  if (!listing) return null

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
                  <div className="bg-dark flex items-center p-1 rounded-full">
                    <div className="overflow-clip relative shrink-0 size-[12px]">
                      <div className="absolute inset-[8.33%_12.5%]">
                        <div className="absolute inset-[-5%_-5.56%]">
                          <img alt="" className="block max-w-none size-full" src={imgShareIcon} />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Close */}
                  <button
                    onClick={onClose}
                    className="bg-white flex items-center p-1 rounded-full"
                  >
                    <div className="overflow-clip relative shrink-0 size-[12px]">
                      <div className="absolute inset-1/4">
                        <div className="absolute inset-[-8.33%]">
                          <img alt="" className="block max-w-none size-full" src={imgCloseIcon} />
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
                    <div className="h-[24px] overflow-clip relative shrink-0 w-[12px]">
                      <div className="absolute inset-[8.33%_16.67%]">
                        <div className="absolute inset-[-5%_-6.25%]">
                          <img alt="" className="block max-w-none size-full" src={imgPinIcon} />
                        </div>
                      </div>
                    </div>
                    <span className="text-[12px] text-darkgray tracking-[-0.2px] leading-5 whitespace-nowrap">
                      {listing.city}, {listing.country}
                    </span>
                  </div>
                </div>
                <div className="flex gap-1 items-center">
                  <div className="bg-dark flex h-6 items-center px-3 py-0.5 rounded-full">
                    <span className="text-[10px] text-[#fff352] tracking-[-0.14px] leading-normal">Eur</span>
                  </div>
                  <div className="bg-[#fff352] flex h-6 items-center px-3 py-0.5 rounded-full">
                    <span className="text-[10px] text-dark tracking-[-0.14px] leading-normal">USD</span>
                  </div>
                  <div className="bg-[#fff352] flex h-6 items-center px-3 py-0.5 rounded-full">
                    <span className="text-[10px] text-dark tracking-[-0.14px] leading-normal">GBP</span>
                  </div>
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
              <span className="font-display text-[18px] text-dark tracking-[-0.2px] leading-normal">Revenue forecast</span>
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
                  <span className="font-display text-[18px] text-dark tracking-[-0.2px] leading-normal">Due Diligence Checklist</span>
                </div>
                <button className="border border-purple flex items-center justify-center px-3 py-2 rounded-[4px]">
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
                  <span className="font-display text-[18px] text-dark tracking-[-0.2px] leading-normal">Personal notes</span>
                </div>
                <button className="border border-purple flex items-center justify-center px-3 py-2 rounded-[4px]">
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
