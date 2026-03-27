import { clients } from '@/data/clients'

export function ClientLogoStrip({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const textColor = variant === 'dark' ? 'text-white/30' : 'text-gray-400'
  const labelColor = variant === 'dark' ? 'text-white/40' : 'text-gray-400'
  const borderColor = variant === 'dark' ? 'border-white/5' : 'border-gray-100'
  const bg = variant === 'dark' ? '' : 'bg-gray-50'

  return (
    <div className={`py-8 ${bg} border-y ${borderColor} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className={`text-xs font-semibold uppercase tracking-[3px] ${labelColor} text-center mb-6`}>
          Trusted by industry leaders
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((client, i) => (
            <span
              key={`${client}-${i}`}
              className={`inline-flex items-center mx-8 text-sm font-semibold tracking-wide ${textColor} select-none`}
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
