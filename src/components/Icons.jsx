// Icon assets from Figma design system
const imgDash = 'https://www.figma.com/api/mcp/asset/39050868-8886-4008-8c78-948de312113e'
const imgDiscover = 'https://www.figma.com/api/mcp/asset/c9b0d1c9-6fc2-4068-8589-77f45da30ad5'
const imgSave = 'https://www.figma.com/api/mcp/asset/612a26b6-a275-4f3d-a009-16cea0d4044f'
const imgCost = 'https://www.figma.com/api/mcp/asset/16875f21-5508-4b20-90e6-52b25b751fdf'
const imgMarket = 'https://www.figma.com/api/mcp/asset/71e72ffb-2d42-4a80-b29f-9f45b80c3246'
const imgQa = 'https://www.figma.com/api/mcp/asset/0656e5bd-a491-49da-8261-ebafcb552db4'
const imgSearch = 'https://www.figma.com/api/mcp/asset/4cea79f1-2da0-4c75-9ed1-b911fcc5e902'
const imgHouse = 'https://www.figma.com/api/mcp/asset/75a74acc-6a9c-46df-a9bc-56880bbee19d'
const imgShare = 'https://www.figma.com/api/mcp/asset/3c64a285-ef4f-4bbe-98f4-4085b01a03c8'
const imgArrow = 'https://www.figma.com/api/mcp/asset/144d7364-4f02-4506-b704-f04d11970355'
const imgInsta = 'https://www.figma.com/api/mcp/asset/8c5058a3-4930-458c-844f-556010617bb2'
const imgCalculator = 'https://www.figma.com/api/mcp/asset/a84d7d40-de9d-4f4b-a229-e22cd4f65167'

const ICON_MAP = {
  Dash: { src: imgDash, inset: 'inset-[12.5%]' },
  Discover: { src: imgDiscover, inset: 'inset-[8.33%]' },
  Save: { src: imgSave, inset: 'inset-[12.5%_8.33%_8.33%_8.33%]' },
  Cost: { src: imgCost, inset: 'inset-[8.33%_8.22%_8.33%_8.33%]' },
  market: { src: imgMarket, inset: 'inset-[8.33%_12.5%]' },
  qa: { src: imgQa, inset: 'inset-[8.33%]' },
  search: { src: imgSearch, inset: 'inset-[12.5%]' },
  house: { src: imgHouse, inset: 'inset-[8.33%_12.5%_12.5%_12.5%]' },
  Share: { src: imgShare, inset: 'inset-[8.33%_12.5%]' },
  arrow: { src: imgArrow, inset: 'inset-[20.83%]' },
  insta: { src: imgInsta, inset: 'inset-[8.33%]' },
  'lucide:calculator': { src: imgCalculator, inset: 'inset-[8.33%_16.67%]' },
}

export default function Icons({ className, property1 = 'Dash' }) {
  const icon = ICON_MAP[property1]
  if (!icon) return null

  return (
    <div className={className || 'relative size-[24px]'}>
      <div className={`absolute ${icon.inset}`}>
        <div className="absolute inset-[-2.5%]">
          <img alt="" className="block max-w-none size-full" src={icon.src} />
        </div>
      </div>
    </div>
  )
}
