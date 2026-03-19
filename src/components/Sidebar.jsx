const imgLogoLeft = 'https://www.figma.com/api/mcp/asset/37a85f0c-ae5c-4442-b8bc-c6796aa98120'
const imgLogoRight = 'https://www.figma.com/api/mcp/asset/c2b86b58-5698-44a7-9e38-a9c36411ea52'
const imgAvatar = 'https://www.figma.com/api/mcp/asset/ff1d669f-ea60-4ade-842f-f96861c43e4a'
const imgDash = 'https://www.figma.com/api/mcp/asset/b60824d9-1ddc-4a18-b66a-6aec991d7f41'
const imgDiscover = 'https://www.figma.com/api/mcp/asset/746f19d5-c138-4355-a665-3ee7cdaf78f8'
const imgSave = 'https://www.figma.com/api/mcp/asset/cf6c11be-97ba-4c12-9815-5338f4ed2f9b'
const imgCost = 'https://www.figma.com/api/mcp/asset/03768e39-dc69-4633-ade1-84c631059965'
const imgMarket = 'https://www.figma.com/api/mcp/asset/2756decb-8501-43f7-a8db-e795320e528e'
const imgQa = 'https://www.figma.com/api/mcp/asset/5c458a12-58e0-4f21-9549-530a7c8a26f7'

function NavIcon({ src, inset, extra, invert }) {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[16px]"
      style={invert ? { filter: 'invert(1)' } : undefined}
    >
      <div className={`absolute ${inset}`}>
        <div className={`absolute ${extra}`}>
          <img alt="" className="block max-w-none size-full" src={src} />
        </div>
      </div>
    </div>
  )
}

function NavItem({ label, src, inset, extra }) {
  return (
    <div
      className="flex items-center rounded-[22px] cursor-pointer transition-all duration-150 hover:bg-white/45 hover:backdrop-blur-[10px] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]"
      style={{ width: '224px', padding: '12px 16px', gap: '10px' }}
    >
      <NavIcon src={src} inset={inset} extra={extra} />
      <span className="text-[14px] text-[#2e2e2e] tracking-[-0.14px] leading-[20px] whitespace-nowrap">
        {label}
      </span>
    </div>
  )
}

function SectionLabel({ text }) {
  return (
    <div
      style={{ padding: '0 7px', gap: '10px', borderRadius: '4px', border: '1px solid #B8E1F7' }}
      className="flex justify-center items-center"
    >
      <span className="text-[8px] font-semibold text-[#B8E1F7] uppercase tracking-[-0.14px] leading-[20px] whitespace-nowrap">
        {text}
      </span>
    </div>
  )
}

function MenuSection({ label, children }) {
  return (
    <div style={{ gap: '16px' }} className="flex flex-col items-start">
      <SectionLabel text={label} />
      <div className="flex flex-col items-start">
        {children}
      </div>
    </div>
  )
}

export default function Sidebar() {
  return (
    <div
      style={{ width: '260px', padding: '8px', gap: '10px', flexShrink: 0, alignSelf: 'stretch' }}
      className="flex items-center"
    >
      {/* Inner menu frame */}
      <div
        style={{ padding: '10px', gap: '32px', flex: '1 0 0', alignSelf: 'stretch', boxShadow: 'inset 0 2px 16px rgba(0,0,0,0.03)' }}
        className="flex flex-col items-start rounded-[8px] overflow-clip backdrop-blur-[8px] bg-white/10 border border-white/15"
      >
        {/* Logo block */}
        <div
          style={{ padding: '24px', gap: '10px', alignSelf: 'stretch' }}
          className="flex flex-col items-start"
        >
          <div className="h-[27.355px] overflow-clip relative shrink-0 w-[176px]">
            <div className="absolute contents inset-[0_0_-0.02%_0]">
              <div className="absolute inset-[0_42.07%_0.97%_0]">
                <img alt="" className="absolute block max-w-none size-full" src={imgLogoLeft} />
              </div>
              <div className="absolute inset-[0_0_-0.02%_58.61%]">
                <img alt="" className="absolute block max-w-none size-full" src={imgLogoRight} />
              </div>
            </div>
          </div>
        </div>

        {/* Menu block */}
        <div
          style={{ flex: '1 0 0' }}
          className="flex flex-col justify-between items-start w-full min-h-0"
        >
          {/* Top */}
          <div style={{ gap: '32px' }} className="flex flex-col items-start">

            {/* Dashboard — selected */}
            <div style={{ gap: '16px' }} className="flex flex-col items-start">
              <div className="flex flex-col items-start">
                <div
                  style={{
                    width: '224px',
                    padding: '12px 16px',
                    gap: '10px',
                    borderRadius: '22px',
                    background: '#2e2e2e',
                  }}
                  className="flex items-center cursor-pointer"
                >
                  <NavIcon
                    src={imgDash}
                    inset="inset-[12.5%]"
                    extra="inset-[-4.17%]"
                    invert
                  />
                  <span className="text-[14px] text-white tracking-[-0.14px] leading-[20px] whitespace-nowrap">
                    Dashboard
                  </span>
                </div>
              </div>
            </div>

            {/* Find Listings */}
            <MenuSection label="find listings">
              <NavItem
                label="Discover Listings"
                src={imgDiscover}
                inset="inset-[8.33%]"
                extra="inset-[-3.75%]"
              />
              <NavItem
                label="Saved Properties"
                src={imgSave}
                inset="inset-[12.5%_8.33%_8.33%_8.33%]"
                extra="inset-[-3.95%_-3.75%]"
              />
            </MenuSection>

            {/* Tools */}
            <MenuSection label="TOOLS">
              <NavItem
                label="Closing Costs"
                src={imgCost}
                inset="inset-[8.33%_8.22%_8.33%_8.33%]"
                extra="inset-[-3.75%_-3.74%]"
              />
              <NavItem
                label="Marketplace"
                src={imgMarket}
                inset="inset-[8.33%_12.5%]"
                extra="inset-[-3.75%_-4.17%]"
              />
              <NavItem
                label="Live Q&A Calls"
                src={imgQa}
                inset="inset-[8.33%]"
                extra="inset-[-3.75%]"
              />
            </MenuSection>
          </div>

          {/* Bottom */}
          <div style={{ gap: '32px' }} className="flex flex-col items-start">
            <div style={{ gap: '16px' }} className="flex flex-col items-start">
              <div className="flex flex-col items-start">
                <div
                  style={{ width: '224px', padding: '12px 8px 12px 8px', gap: '10px' }}
                  className="flex items-center h-[44px]"
                >
                  <div className="overflow-clip relative shrink-0 size-[32px]">
                    <div className="absolute inset-0 rounded-[34px] overflow-hidden">
                      <img
                        alt="James Peterson"
                        className="absolute h-[163.68%] left-[-4.56%] max-w-none top-[-1.18%] w-[109.12%]"
                        src={imgAvatar}
                      />
                    </div>
                  </div>
                  <span className="text-[14px] text-[#2e2e2e] tracking-[-0.14px] leading-[20px] whitespace-nowrap">
                    James Peterson
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
