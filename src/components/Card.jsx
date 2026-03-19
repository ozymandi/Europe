// Arrow icon from Figma
const imgArrow = 'https://www.figma.com/api/mcp/asset/723f1857-7b64-4217-886e-ff6b2b124f3b'
// Heart icon
const imgHeart = 'https://www.figma.com/api/mcp/asset/a37b59a7-0ca8-4207-b7b3-bdf5278fb946'

/**
 * @param {{ property1?: 'Insta' | 'Saved', city: string, country: string, price: string, img: string, className?: string }} props
 */
export default function Card({ property1 = 'Insta', city, country, price, img, className }) {
  return (
    <div
      className={
        className ||
        'relative flex flex-col w-[230px] items-start justify-between overflow-clip p-1 rounded-2xl shrink-0 min-h-[280px]'
      }
    >
      {/* Background image */}
      <img
        alt={city}
        className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-2xl size-full"
        src={img}
      />

      {/* Top bar */}
      <div className="relative flex items-center p-2.5 shrink-0">
        <div className="bg-black/0 flex items-center justify-center overflow-clip px-4 py-3 rounded-lg shrink-0 size-9">
          <div className="overflow-clip relative shrink-0 size-4">
            <div className="absolute inset-[8.33%]">
              <div className="absolute inset-[-3.75%]">
                <img alt="" className="block max-w-none size-full" src={imgHeart} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom info */}
      <div className="relative backdrop-blur-[5px] bg-white/90 flex gap-1.5 items-start p-1 rounded-xl shrink-0 w-full">
        <div className="flex flex-1 gap-2.5 items-start min-w-0 pl-2.5 py-1.5">
          <div className="flex flex-1 flex-col items-start min-w-0">
            <p className="text-sm text-dark tracking-[-0.14px] leading-normal">{city}</p>
            <p className="text-xs text-darkgray tracking-[-0.14px] leading-normal">{country}</p>
          </div>
          <div className="flex flex-col items-start shrink-0 w-[63px]">
            <p className="text-sm font-semibold text-dark tracking-[-0.14px] leading-normal">{price}</p>
          </div>
        </div>

        <div className="bg-limon flex items-center overflow-clip p-2.5 rounded-[10px] self-stretch shrink-0">
          <div className="overflow-clip relative shrink-0 size-4">
            <div className="absolute inset-[8.33%_12.5%]">
              <div className="absolute inset-[-3.75%_-4.17%]">
                <img alt="" className="block max-w-none size-full" src={imgArrow} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
