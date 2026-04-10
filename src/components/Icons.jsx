import imgGroup   from '../assets/Icons/Property 1=Dash.svg'
import imgGroup1  from '../assets/Icons/Property 1=Share.svg'
import imgGroup2  from '../assets/Icons/Property 1=Discover.svg'
import imgGroup3  from '../assets/Icons/Property 1=Save.svg'
import imgGroup4  from '../assets/Icons/Property 1=Cost.svg'
import imgGroup5  from '../assets/Icons/Property 1=market.svg'
import imgGroup6  from '../assets/Icons/Property 1=qa.svg'
import imgVector  from '../assets/Icons/Property 1=logout.svg'
import imgGroup7  from '../assets/Icons/Property 1=house.svg'
import imgGroup8  from '../assets/Icons/Property 1=search.svg'
import imgVector1 from '../assets/Icons/Property 1=Heart.svg'
import imgGroup9  from '../assets/Icons/Property 1=insta.svg'
import imgVector2 from '../assets/Icons/Property 1=arrow.svg'
import imgGroup10 from '../assets/Icons/Property 1=list.svg'
import imgVector3 from '../assets/Icons/Property 1=map.svg'
import imgVector4 from '../assets/Icons/Property 1=Down.svg'
import imgGroup11 from '../assets/Icons/Property 1=lucide_receipt-euro.svg'
import imgGroup12 from '../assets/Icons/Property 1=lucide_globe.svg'
import imgGroup13 from '../assets/Icons/Property 1=lucide_building-2.svg'
import imgVector5 from '../assets/Icons/Property 1=lucide_bed-double.svg'
import imgGroup14 from '../assets/Icons/Property 1=lucide_waves-ladder.svg'
import imgVector6 from '../assets/Icons/Property 1=sea.svg'
import imgVector7 from '../assets/Icons/Property 1=lucide_list-filter.svg'
import imgGroup15 from '../assets/Icons/Property 1=key.svg'
import imgVector8 from '../assets/Icons/Property 1=x.svg'
import imgGroup16 from '../assets/Icons/Property 1=lucide_mail.svg'
import imgGroup17 from '../assets/Icons/Property 1=lucide_file-text.svg'
import imgGroup18 from '../assets/Icons/Property 1=lucide_view.svg'
import imgGroup19 from '../assets/Icons/Property 1=lucide_handshake.svg'
import imgVector9  from '../assets/Icons/Property 1=lucide_bath.svg'
import imgVector10 from '../assets/Icons/Property 1=lucide_triangle-right.svg'
import imgGroup20  from '../assets/Icons/Property 1=lucide_map-pin.svg'
import imgVector11 from '../assets/Icons/Property 1=lucide_arrow-left.svg'
import imgVector12 from '../assets/Icons/Property 1=lucide_sailboat.svg'
import imgVector13 from '../assets/Icons/Property 1=lucide_plane.svg'
import imgGroup21  from '../assets/Icons/Property 1=lucide_ruler-dimension-line.svg'
import imgVector14 from '../assets/Icons/Property 1=lucide_ruler.svg'
import imgGroup22  from '../assets/Icons/Property 1=lucide_book-open-check.svg'
import imgVector15 from '../assets/Icons/Property 1=lucide_trash.svg'
import imgGroup23  from '../assets/Icons/Property 1=lucide_calculator.svg'

// outer inset class, inner inset class, asset
const ICON_MAP = {
  Dash:                         { outer: 'inset-[12.5%]',                          inner: 'inset-[-2.78%]',              src: imgGroup },
  Share:                        { outer: 'inset-[8.33%_12.5%]',                    inner: 'inset-[-2.5%_-2.78%]',        src: imgGroup1 },
  Discover:                     { outer: 'inset-[8.33%]',                           inner: 'inset-[-2.5%]',               src: imgGroup2 },
  Save:                         { outer: 'inset-[12.5%_8.33%_8.33%_8.33%]',        inner: 'inset-[-2.63%_-2.5%]',        src: imgGroup3 },
  Cost:                         { outer: 'inset-[8.33%_8.22%_8.33%_8.33%]',        inner: 'inset-[-2.5%]',               src: imgGroup4 },
  market:                       { outer: 'inset-[8.33%_12.5%]',                    inner: 'inset-[-2.5%_-2.78%]',        src: imgGroup5 },
  qa:                           { outer: 'inset-[8.33%]',                           inner: 'inset-[-2.5%]',               src: imgGroup6 },
  logout:                       { outer: 'inset-[12.5%]',                           inner: 'inset-[-2.78%]',              src: imgVector },
  house:                        { outer: 'inset-[8.33%_12.5%_12.5%_12.5%]',        inner: 'inset-[-2.63%_-2.78%]',       src: imgGroup7 },
  search:                       { outer: 'inset-[12.5%]',                           inner: 'inset-[-2.78%]',              src: imgGroup8 },
  Heart:                        { outer: 'inset-[16.6%_8.33%_12.5%_8.33%]',        inner: 'inset-[-2.94%_-2.5%]',        src: imgVector1 },
  insta:                        { outer: 'inset-[8.33%]',                           inner: 'inset-[-2.5%]',               src: imgGroup9 },
  arrow:                        { outer: 'inset-[20.83%]',                          inner: 'inset-[-3.57%]',              src: imgVector2 },
  list:                         { outer: 'inset-[12.5%]',                           inner: 'inset-[-2.78%]',              src: imgGroup10 },
  map:                          { outer: 'inset-[13.48%_12.5%]',                   inner: 'inset-[-2.85%_-2.78%]',       src: imgVector3 },
  Down:                         { outer: 'bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]', inner: 'inset-[-8.33%_-4.17%]', src: imgVector4 },
  'lucide:receipt-euro':        { outer: 'inset-[8.31%_16.67%]',                   inner: 'inset-[-2.5%_-3.13%]',        src: imgGroup11 },
  'lucide:globe':               { outer: 'inset-[8.33%]',                           inner: 'inset-[-2.5%]',               src: imgGroup12 },
  'lucide:building-2':          { outer: 'inset-[12.5%_8.33%]',                    inner: 'inset-[-2.78%_-2.5%]',        src: imgGroup13 },
  'lucide:bed-double':          { outer: 'inset-[16.67%_8.33%]',                   inner: 'inset-[-3.13%_-2.5%]',        src: imgVector5 },
  'lucide:waves-ladder':        { outer: 'inset-[20.83%_8.33%]',                   inner: 'inset-[-3.57%_-2.5%]',        src: imgGroup14 },
  sea:                          { outer: 'inset-[20.83%_8.33%]',                   inner: 'inset-[-3.57%_-2.5%]',        src: imgVector6 },
  'lucide:list-filter':         { outer: 'inset-[20.83%_8.33%]',                   inner: 'inset-[-3.57%_-2.5%]',        src: imgVector7 },
  key:                          { outer: 'inset-[8.17%_8.17%_8.33%_8.33%]',        inner: 'inset-[-2.5%]',               src: imgGroup15 },
  x:                            { outer: 'inset-1/4',                              inner: 'inset-[-4.17%]',              src: imgVector8 },
  'lucide:mail':                { outer: 'inset-[16.67%_8.33%]',                   inner: 'inset-[-3.13%_-2.5%]',        src: imgGroup16 },
  'lucide:file-text':           { outer: 'inset-[8.33%_16.67%]',                   inner: 'inset-[-2.5%_-3.12%]',        src: imgGroup17 },
  'lucide:view':                { outer: 'inset-[12.5%]',                           inner: 'inset-[-2.78%]',              src: imgGroup18 },
  'lucide:handshake':           { outer: 'inset-[12.5%_8.33%_11.99%_8.33%]',       inner: 'inset-[-2.76%_-2.5%]',        src: imgGroup19 },
  'lucide:bath':                { outer: 'inset-[12.48%_8.33%_12.5%_8.33%]',       inner: 'inset-[-2.78%_-2.5%]',        src: imgVector9 },
  'lucide:triangle-right':      { outer: 'inset-[16.35%_8.33%_16.67%_8.47%]',      inner: 'inset-[-3.12%_-2.5%_-3.11%_-2.51%]', src: imgVector10 },
  'lucide:map-pin':             { outer: 'inset-[8.33%_16.67%]',                   inner: 'inset-[-2.5%_-3.13%]',        src: imgGroup20 },
  'lucide:arrow-left':          { outer: 'inset-[20.83%]',                          inner: 'inset-[-3.57%]',              src: imgVector11 },
  'lucide:sailboat':            { outer: 'inset-[8.33%_12.5%]',                    inner: 'inset-[-2.5%_-2.78%]',        src: imgVector12 },
  'lucide:plane':               { outer: 'inset-[11.72%_11.72%_12.5%_12.5%]',      inner: 'inset-[-2.75%]',              src: imgVector13 },
  'lucide:ruler-dimension-line':{ outer: 'inset-[16.67%_8.33%]',                   inner: 'inset-[-3.13%_-2.5%]',        src: imgGroup21 },
  'lucide:ruler':               { outer: 'inset-[8.33%_8.31%_8.31%_8.33%]',        inner: 'inset-[-2.5%]',               src: imgVector14 },
  'lucide:book-open-check':     { outer: 'inset-[12.5%_8.33%]',                    inner: 'inset-[-2.78%_-2.5%]',        src: imgGroup22 },
  'lucide:trash':               { outer: 'inset-[8.33%_12.5%]',                    inner: 'inset-[-2.5%_-2.78%]',        src: imgVector15 },
  'lucide:calculator':          { outer: 'inset-[8.33%_16.67%]',                   inner: 'inset-[-2.5%_-3.13%]',        src: imgGroup23 },
}

export default function Icons({ className, property1 = 'Dash' }) {
  if (property1 === 'Profile') {
    return (
      <div className={className || 'relative size-[32px]'}>
        <div className="absolute bg-[#d9d9d9] inset-0 rounded-[34px]" />
      </div>
    )
  }

  const icon = ICON_MAP[property1]
  if (!icon) return null

  return (
    <div className={className || 'relative size-[24px]'}>
      <div className={`absolute ${icon.outer}`}>
        <div className={`absolute ${icon.inner}`}>
          <img alt="" className="block max-w-none size-full" src={icon.src} />
        </div>
      </div>
    </div>
  )
}
