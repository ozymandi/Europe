// Insta icon (top-left for Insta variant)
const imgInsta = 'https://www.figma.com/api/mcp/asset/230c693a-62af-432a-ace3-9757200df7d3'
// Arrow/share icon (yellow button)
const imgArrow = 'https://www.figma.com/api/mcp/asset/020a0903-a010-4f3e-926f-c6e870f1f1e3'
// Heart icon (Like_Share variant)
const imgHeart = 'https://www.figma.com/api/mcp/asset/527c5a2b-505e-4a28-9976-0e10b5b0f078'
// Bed icon (Saved variant)
const imgBed = 'https://www.figma.com/api/mcp/asset/b3bf867f-c24f-40b6-b22f-d36b0b59b3c2'
// Bath icon (Saved variant)
const imgBath = 'https://www.figma.com/api/mcp/asset/a955d34a-2f25-4f63-a8d5-ec67539438eb'
// Size icon (Saved variant)
const imgSize = 'https://www.figma.com/api/mcp/asset/8458b0db-d482-4b14-802d-5bfb48bfe3d8'

function Paginator({ variant }) {
  if (variant === 'Like_Share') {
    return (
      <div className="-translate-x-1/2 absolute flex gap-[2px] items-center left-1/2 top-[250.5px]">
        <div className="h-[3px] w-[20px] relative"><div className="absolute bg-white inset-0 rounded-[10px]" /></div>
        <div className="h-[3px] w-[4px] relative"><div className="absolute bg-white inset-0 opacity-50 rounded-[10px]" /></div>
        <div className="h-[3px] w-[4px] relative"><div className="absolute bg-white inset-0 opacity-50 rounded-[10px]" /></div>
        <div className="h-[3px] w-[4px] relative"><div className="absolute bg-white inset-0 opacity-50 rounded-[10px]" /></div>
      </div>
    )
  }
  return null
}

/**
 * @param {{ property1?: 'Insta' | 'Like_Share' | 'Saved', city: string, country: string, price: string, img: string, className?: string, beds?: number, baths?: number, sqm?: number }} props
 */
export default function Card({ property1 = 'Insta', city, country, price, img, className, beds = 2, baths = 3, sqm = 165 }) {
  const isInsta = property1 === 'Insta'
  const isLikeShare = property1 === 'Like_Share'
  const isSaved = property1 === 'Saved'

  return (
    <div className={`group/card ${className || 'relative flex flex-col h-[320px] w-[230px] items-start justify-between p-1 rounded-2xl shrink-0'}`}>

      {/* Image — own overflow-clip wrapper to contain the zoom */}
      <div className="absolute inset-0 rounded-2xl overflow-clip pointer-events-none">
        <img alt={city} className="size-full object-cover transition-transform duration-500 ease-in-out group-hover/card:scale-110" src={img} />
      </div>

      {/* Top bar */}
      <div className="relative flex items-center p-[10px] shrink-0">
        {(isInsta || isLikeShare) && (
          <div className="bg-white/10 backdrop-blur-[8px] border border-white/15 flex items-center justify-center overflow-clip px-4 py-3 rounded-[8px] shrink-0 size-9" style={{ boxShadow: 'inset 0 2px 16px rgba(0,0,0,0.03), inset 0 0 0 1px rgba(0,0,0,0.01)' }}>
            <div className="overflow-clip relative shrink-0 size-4">
              {isInsta && (
                <div className="absolute inset-[8.33%]">
                  <div className="absolute inset-[-3.75%]">
                    <img alt="" className="block max-w-none size-full" src={imgInsta} />
                  </div>
                </div>
              )}
              {isLikeShare && (
                <div className="absolute inset-[16.6%_8.33%_12.5%_8.33%]">
                  <div className="absolute inset-[-4.41%_-3.75%]">
                    <img alt="" className="block max-w-none size-full" src={imgHeart} />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {isSaved && (
          <div className="bg-black/0 flex items-center justify-center overflow-clip px-4 py-3 rounded-[8px] shrink-0 h-9">
            <span className="text-[12px] text-white tracking-[-0.14px] leading-normal whitespace-nowrap">{country}</span>
          </div>
        )}
      </div>

      {/* Paginator */}
      <Paginator variant={property1} />

      {/* Bottom info — relative container, grows downward on hover */}
      <div className={`relative backdrop-blur-[5px] bg-white/90 rounded-[12px] shrink-0 w-full transition-all duration-300 ease-out hover:pb-2 pt-1 pb-1 px-1 ${isSaved ? '' : ''}`}>

        {/* Content + yellow button side-by-side via pr to leave room */}
        {(isInsta || isLikeShare) && (
          <div className="flex items-start gap-1.5 pr-[44px]">
            <div className="flex flex-1 flex-col items-start min-w-0 pl-2.5 py-1.5">
              <p className="text-sm text-dark tracking-[-0.14px] leading-normal">{city}</p>
              <p className="text-xs text-darkgray tracking-[-0.14px] leading-normal">{country}</p>
            </div>
            <div className="flex flex-col items-start shrink-0 w-[63px] py-1.5">
              <p className="text-sm font-semibold text-dark tracking-[-0.14px] leading-normal">{price}</p>
            </div>
          </div>
        )}

        {isSaved && (
          <div className="flex flex-col gap-1.5 px-2.5 py-1.5">
            <div className="flex items-start justify-between w-full">
              <div className="flex flex-col items-start">
                <p className="text-sm text-dark tracking-[-0.14px] leading-normal">{city}</p>
                <p className="text-xs text-darkgray tracking-[-0.14px] leading-normal">{country}</p>
              </div>
              <div className="flex flex-col items-start shrink-0 w-[63px]">
                <p className="text-sm font-semibold text-dark tracking-[-0.14px] leading-normal">{price}</p>
              </div>
            </div>
            <div className="flex gap-0.5 items-start">
              <div className="bg-white flex gap-1 items-center p-1 rounded-[4px] shrink-0">
                <div className="overflow-clip relative shrink-0 size-[10px]">
                  <div className="absolute inset-[16.67%_8.33%]"><div className="absolute inset-[-7.5%_-6%]"><img alt="" className="block max-w-none size-full" src={imgBed} /></div></div>
                </div>
                <span className="text-[10px] text-dark tracking-[-0.14px] leading-normal whitespace-nowrap">{beds} beds</span>
              </div>
              <div className="bg-white flex gap-1 items-center p-1 rounded-[4px] shrink-0">
                <div className="overflow-clip relative shrink-0 size-[10px]">
                  <div className="absolute inset-[12.48%_8.33%_12.5%_8.33%]"><div className="absolute inset-[-6.67%_-6%]"><img alt="" className="block max-w-none size-full" src={imgBath} /></div></div>
                </div>
                <span className="text-[10px] text-dark tracking-[-0.14px] leading-normal whitespace-nowrap">{baths} baths</span>
              </div>
              <div className="bg-white flex gap-1 items-center p-1 rounded-[4px] shrink-0">
                <div className="overflow-clip relative shrink-0 size-[10px]">
                  <div className="absolute inset-[16.35%_8.33%_16.67%_8.47%]"><div className="absolute inset-[-7.48%_-6.01%_-7.46%_-6.01%]"><img alt="" className="block max-w-none size-full" src={imgSize} /></div></div>
                </div>
                <span className="text-[10px] text-dark tracking-[-0.14px] leading-normal whitespace-nowrap">{sqm} m²</span>
              </div>
            </div>
          </div>
        )}

        {/* Yellow button — absolute, spans full height of info bar */}
        {(isInsta || isLikeShare) && (
          <div className="absolute right-1 top-1 bottom-1 bg-limon flex items-center justify-center overflow-clip px-[10px] rounded-[10px]">
            <div className="overflow-clip relative shrink-0 size-4 transition-transform duration-300 ease-out group-hover/card:scale-[1.03]">
              <div className="absolute inset-[8.33%_12.5%]">
                <div className="absolute inset-[-3.75%_-4.17%]">
                  <img alt="" className="block max-w-none size-full" src={imgArrow} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
