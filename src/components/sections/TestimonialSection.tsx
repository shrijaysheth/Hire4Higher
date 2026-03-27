import { Star } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function TestimonialSection({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const ref = useScrollReveal()
  const isDark = variant === 'dark'

  return (
    <section className={`py-24 ${isDark ? 'bg-navy' : 'bg-white'}`} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <p className="text-xs font-semibold uppercase tracking-[3px] text-gold mb-4">
            Client Testimonials
          </p>
          <h2 className={`text-3xl lg:text-4xl font-display font-bold ${isDark ? 'text-white' : 'text-navy'}`}>
            What Our Partners Say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              className={`reveal reveal-delay-${i + 1} rounded-2xl p-8 ${
                isDark
                  ? 'bg-navy-mid border border-white/5'
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gold/20 text-gold flex items-center justify-center text-sm font-bold">
                  {t.initials}
                </div>
                <div>
                  <div className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-navy'}`}>
                    {t.author}
                  </div>
                  <div className={`text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
