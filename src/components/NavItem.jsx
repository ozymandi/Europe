import Icons from './Icons'

export default function NavItem({ label, iconType, active = false, idle = false }) {
  return (
    <div
      className={`flex gap-[10px] items-center px-4 py-3 rounded-full w-[224px] cursor-pointer transition-colors ${
        active ? 'bg-white/10' : 'hover:bg-white/5'
      }`}
    >
      <div className="relative overflow-clip shrink-0 size-4">
        <Icons className="relative size-4" property1={iconType} />
      </div>
      <span
        className={`text-sm tracking-[-0.14px] leading-5 whitespace-nowrap ${
          idle ? 'text-darkgray' : 'text-dark'
        }`}
      >
        {label}
      </span>
    </div>
  )
}
