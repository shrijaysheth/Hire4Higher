import { Link } from 'react-router-dom'

export function Logo({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const baseColor = variant === 'light' ? 'text-white' : 'text-navy'
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gold text-white font-body font-bold text-sm tracking-wide">
        H4H
      </span>
      <span className={`text-xl font-display font-bold tracking-tight ${baseColor}`}>
        Hire4<span className="text-gold">Higher</span>
      </span>
    </Link>
  )
}
