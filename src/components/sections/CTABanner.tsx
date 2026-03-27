import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface CTABannerProps {
  heading?: string
  subtext?: string
  buttonLabel?: string
  buttonHref?: string
  variant?: 'gold' | 'navy'
}

export function CTABanner({
  heading = 'Ready to Transform Your Digital Business?',
  subtext = "Let's discuss how our AI-first approach can accelerate your growth. Book a free strategy session with our team.",
  buttonLabel = 'Book a Free Strategy Call',
  buttonHref = '/contact',
  variant = 'gold',
}: CTABannerProps) {
  const ref = useScrollReveal()
  const isGold = variant === 'gold'

  return (
    <section
      ref={ref}
      className={`py-24 ${
        isGold
          ? 'bg-gradient-to-br from-gold via-gold to-gold-dark'
          : 'bg-navy'
      }`}
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center reveal">
        <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
          {heading}
        </h2>
        <p className={`text-base mb-8 max-w-xl mx-auto ${isGold ? 'text-white/80' : 'text-white/60'}`}>
          {subtext}
        </p>
        <Link
          to={buttonHref}
          className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold transition-all hover:-translate-y-0.5 ${
            isGold
              ? 'bg-white text-gold-dark hover:bg-gray-50 shadow-lg'
              : 'bg-gold text-white hover:bg-gold-dark shadow-[0_2px_12px_rgba(200,150,62,0.4)]'
          }`}
        >
          {buttonLabel}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
