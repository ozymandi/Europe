import Card from './Card'
import Icons from './Icons'

// Background
const imgBg = 'https://www.figma.com/api/mcp/asset/46b70ee9-415e-44e7-8a42-7072f552b103'
// Arrow icon for saved searches
const imgArrowVec = 'https://www.figma.com/api/mcp/asset/723f1857-7b64-4217-886e-ff6b2b124f3b'
// Saved search images
const imgFrame36 = 'https://www.figma.com/api/mcp/asset/332da225-f401-4422-944e-6b9ed87b4764'
const imgFrame37 = 'https://www.figma.com/api/mcp/asset/97770bff-893d-4f4a-840f-8863f814201d'
// House icon for location
const imgHouseIcon = 'https://www.figma.com/api/mcp/asset/75a74acc-6a9c-46df-a9bc-56880bbee19d'
// Search icon
const imgSearchIcon = 'https://www.figma.com/api/mcp/asset/4cea79f1-2da0-4c75-9ed1-b911fcc5e902'

// Listing card images
const IMG_CARDS = [
  'https://www.figma.com/api/mcp/asset/28323000-3710-4618-b65e-63a09f79d88f',
  'https://www.figma.com/api/mcp/asset/0f0c7035-9711-486a-b9e2-fb8607cf5cc2',
  'https://www.figma.com/api/mcp/asset/4ea18c31-f97b-42bd-9853-fb88dfdcef57',
  'https://www.figma.com/api/mcp/asset/41835e66-0d37-48ce-9617-5421d16aba68',
  'https://www.figma.com/api/mcp/asset/7bede93e-8ff9-4a23-9440-8d882fe3ca1b',
]

const SAVED_SEARCHES = [
  { id: 1, city: 'Lot', country: 'France', img: imgFrame36 },
  { id: 2, city: 'Cyclades', country: 'Greece', img: imgFrame37 },
]

const LISTINGS = IMG_CARDS.map((img, i) => ({
  id: i + 1,
  city: 'Crete',
  country: 'Greece',
  price: '€119,000',
  img,
}))

function ViewAllBtn() {
  return (
    <button className="border border-purple text-purple text-[9px] font-semibold uppercase tracking-[-0.16px] px-3 py-2 rounded">
      View all
    </button>
  )
}

function SearchBar() {
  return (
    <div className="flex items-center justify-between bg-white h-[50px] rounded-full shadow-[0px_2px_2px_0px_rgba(138,56,245,0.03)] pl-6 pr-[7px] py-4 w-full">
      <div className="flex items-center gap-2.5 shrink-0">
        <div className="overflow-clip relative shrink-0 size-4">
          <div className="absolute inset-[12.5%]">
            <div className="absolute inset-[-2.78%]">
              <img alt="" className="block max-w-none size-full" src={imgSearchIcon} />
            </div>
          </div>
        </div>
        <span className="text-sm text-darkgray opacity-30 tracking-[-0.16px] whitespace-nowrap">
          Search by location, property type, or keywords...
        </span>
      </div>
      <button className="relative bg-gradient-to-b from-[rgba(139,92,246,0.95)] to-[rgba(139,92,246,0.4)] border border-[#8b5cf6] flex items-center justify-center h-[39px] px-4 py-3 rounded-full shadow-[0px_2px_4px_0px_rgba(138,56,245,0.16)] w-[100px] shrink-0">
        <span className="text-[10px] font-semibold text-white uppercase tracking-[-0.16px]">
          Search
        </span>
        <div className="absolute inset-[-1px] pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_#bca2f9,inset_0px_1px_5.3px_0px_rgba(245,242,252,0.61),inset_0px_2px_6px_0px_#c8b2fb]" />
      </button>
    </div>
  )
}

function SavedSearchCard({ city, country, img }) {
  return (
    <div className="border-[0.5px] border-border-gray flex h-[77px] items-center justify-between overflow-clip pr-4 rounded shrink-0 w-[235px]">
      <div className="flex gap-4 items-center shrink-0">
        <div className="relative rounded shrink-0 size-[77px]">
          <img
            alt={city}
            className="absolute inset-0 max-w-none object-cover pointer-events-none rounded size-full"
            src={img}
          />
        </div>
        <div className="flex flex-col items-start tracking-[-0.14px]">
          <p className="text-sm text-dark">{city}</p>
          <p className="text-xs text-darkgray">{country}</p>
        </div>
      </div>
      <div className="bg-limon flex h-11 items-center overflow-clip p-2.5 rounded-[10px] shrink-0">
        <div className="overflow-clip relative shrink-0 size-4">
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
    <div className="flex-1 bg-white flex flex-col h-full items-start justify-between min-w-0 overflow-clip p-4 relative rounded-2xl">
      {/* Decorative circle */}
      <div className="absolute right-[-140px] size-[226px] top-[-117px]">
        <div className="absolute inset-[-88.5%] rounded-full bg-gradient-to-br from-purple/10 to-purple/30 opacity-20" />
      </div>
      <p className="font-display text-lg text-dark tracking-[-0.2px] font-bold relative z-10">
        Budget Tool
      </p>
      <div className="flex gap-5 items-center relative z-10 w-full">
        <div className="flex gap-4 items-center shrink-0 w-[267px]">
          <div className="bg-limon h-[77px] overflow-clip relative rounded shrink-0 w-[78px] flex items-center justify-center">
            <Icons className="relative size-8" property1="lucide:calculator" />
          </div>
          <p className="text-sm text-dark tracking-[-0.4px] w-[136px] leading-snug">
            <span className="font-semibold">Calculate your budget</span>
            {' '}to see what you can afford
          </p>
        </div>
        <button className="bg-dark flex items-center justify-center px-8 py-3 rounded-full shrink-0">
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
    <main className="flex-1 flex flex-col gap-6 h-full overflow-y-auto p-[70px] relative min-w-0">
      {/* Top: Title + Search */}
      <div className="relative z-10 flex flex-col gap-12 items-start shrink-0">
        <div className="flex flex-col gap-1 items-start">
          <div className="flex flex-col justify-center leading-none relative shrink-0 text-[0px] text-dark tracking-[-1px] w-[466px]">
            <p className="text-[42px]">
              <span className="font-display">Good Evening, </span>
              <span className="font-display-italic text-purple"> James P.</span>
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <div className="h-6 overflow-clip relative shrink-0 w-3">
              <div className="absolute inset-[8.33%_12.5%_12.5%_12.5%]">
                <div className="absolute inset-[-5.26%_-5.56%]">
                  <img alt="" className="block max-w-none size-full" src={imgHouseIcon} />
                </div>
              </div>
            </div>
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
        <div className="bg-white/50 flex h-[188px] items-start overflow-clip p-3 rounded-[28px] shrink-0 w-full">
          <div className="flex flex-1 gap-0.5 h-full items-center relative">
            {/* Saved Searches */}
            <div className="bg-white flex flex-1 flex-col h-full items-start justify-between min-w-0 overflow-clip p-4 relative rounded-2xl">
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

        <div className="flex-1 min-h-0 w-full h-2" />

        {/* Listings from Instagram */}
        <div className="bg-white/50 flex-1 flex items-start overflow-clip p-3 rounded-[28px] w-full min-h-0">
          <div className="flex flex-col h-full w-full gap-6 p-4">
            <div className="flex items-start justify-between pr-3 shrink-0 w-full">
              <p className="font-display text-lg text-dark tracking-[-0.2px] font-bold whitespace-nowrap">
                Listings from Instagram
              </p>
              <ViewAllBtn />
            </div>
            <div className="flex gap-0.5 items-stretch flex-1 overflow-x-auto min-h-0">
              {LISTINGS.map((listing) => (
                <Card key={listing.id} {...listing} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between shrink-0">
        <div className="flex items-center justify-center p-2.5">
          <p className="text-xs text-darkgray tracking-[-0.14px] leading-normal whitespace-nowrap">
            © European Listings Ltd. 2026
          </p>
        </div>
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
