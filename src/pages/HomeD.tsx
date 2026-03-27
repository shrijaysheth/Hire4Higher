import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, ChevronDown, Star, CheckCircle2 } from 'lucide-react'
import { services } from '@/data/services'
import { clients } from '@/data/clients'
import { testimonials } from '@/data/testimonials'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useCountUp } from '@/hooks/useCountUp'
import { CTABanner } from '@/components/sections/CTABanner'

const processSteps = [
  {
    title: 'Discovery & Audit',
    description:
      'We begin every engagement with a deep-dive into your existing digital ecosystem — your tech stack, data infrastructure, marketing channels, and organizational workflows. Our team conducts stakeholder interviews, competitive benchmarking, and a comprehensive audit of current performance. The goal is to understand not just where you are, but why — so we can identify the highest-leverage opportunities for growth and efficiency.',
  },
  {
    title: 'Strategy & Roadmap',
    description:
      'Based on our findings, we develop a prioritized strategic roadmap that balances quick wins with long-term transformation. Every recommendation is grounded in data and tied to measurable business outcomes — revenue growth, cost reduction, or operational efficiency. We present clear timelines, resource requirements, and expected ROI for each initiative, so your leadership team can make informed investment decisions.',
  },
  {
    title: 'Execute & Build',
    description:
      'Our cross-functional teams move from strategy to execution with speed and precision. Whether we are building AI pipelines, launching paid campaigns, redesigning your eCommerce experience, or standing up a data warehouse, we operate in agile sprints with full transparency. You get weekly progress updates, shared project boards, and direct access to every team member working on your account.',
  },
  {
    title: 'Optimize & Scale',
    description:
      'Launch is just the beginning. We continuously monitor performance, run experiments, and iterate based on real-world data. Our AI-augmented workflows allow us to identify optimization opportunities faster than traditional agencies. As initiatives prove their value, we help you scale what works — expanding to new channels, markets, or capabilities while maintaining the quality and strategic rigor that got you there.',
  },
]

const aiPoints = [
  {
    title: 'AI-Augmented Delivery',
    description:
      'Every project benefits from AI acceleration. Our team uses AI tools for code generation, content creation, data analysis, and campaign optimization — delivering higher quality work in less time. This is not about replacing human judgment; it is about amplifying it.',
  },
  {
    title: 'Vibe Coding Proficiency',
    description:
      'Our engineers are fluent in AI-assisted development workflows. From rapid prototyping with generative code tools to AI-powered debugging and testing, we ship production-grade software faster without compromising on architecture or reliability.',
  },
  {
    title: 'Intelligent Automation',
    description:
      'We identify and implement AI-powered automation across your business processes — from marketing workflows and data pipelines to customer service and reporting. The result is compounding efficiency gains that free your team to focus on strategy and creativity.',
  },
]

const aboutFacts = [
  {
    title: '100% Referral-Driven',
    description: 'Every client comes through a referral. We earn trust, not ad spend.',
  },
  {
    title: '3+ Year Retention',
    description: 'Our average client relationship spans over three years.',
  },
  {
    title: 'AI-Native Team',
    description: 'Every team member is proficient in AI-augmented workflows.',
  },
  {
    title: 'Global Clientele',
    description: 'Serving brands across North America, Europe, and Asia.',
  },
]

export default function HomeD() {
  const [openStep, setOpenStep] = useState<number | null>(0)

  const heroRef = useScrollReveal()
  const trustRef = useScrollReveal()
  const servicesRef = useScrollReveal()
  const aboutRef = useScrollReveal()
  const numbersRef = useScrollReveal()
  const aiRef = useScrollReveal()
  const testimonialsRef = useScrollReveal()
  const processRef = useScrollReveal()

  const stat1 = useCountUp(50, 2000, '+')
  const stat2 = useCountUp(3, 2000, '+')
  const stat3 = useCountUp(100, 2000, '%')
  const stat4 = useCountUp(8, 2000)

  return (
    <main>
      {/* ——— 1. Hero ——— */}
      <section
        ref={heroRef}
        className="min-h-[85vh] flex items-center pt-24 bg-white"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center reveal">
          <h1 className="text-5xl lg:text-7xl font-display font-bold text-navy leading-tight mb-8">
            <span className="relative inline-block">
              Growth Partners
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gold h-1 w-32 rounded-full" />
            </span>
            <br />
            for Digital-First
            <br />
            Brands
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 font-body">
            AI-first digital transformation across eCommerce, marketing, data,
            and design. We don&rsquo;t just consult&nbsp;&mdash; we build, ship,
            and scale.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold text-white px-8 py-4 rounded-lg text-sm font-semibold tracking-wide hover:bg-gold-dark transition-all hover:-translate-y-0.5 shadow-[0_2px_12px_rgba(200,150,62,0.3)]"
          >
            Book a Strategy Call
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="mt-16 flex justify-center">
            <ChevronDown className="w-5 h-5 text-gray-300 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ——— 2. Trust Bar ——— */}
      <section
        ref={trustRef}
        className="py-10 bg-white border-t border-gray-100"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 reveal">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {clients.map((client, i) => (
              <span key={client} className="flex items-center gap-6">
                <span className="text-sm font-semibold tracking-wide text-gray-400 whitespace-nowrap">
                  {client}
                </span>
                {i < clients.length - 1 && (
                  <span className="text-gray-200 hidden sm:inline">&middot;</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ——— 3. Services — List Layout ——— */}
      <section ref={servicesRef} className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="mb-14 reveal">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-3">
              Services
            </p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy">
              What We Do
            </h2>
          </div>

          <div className="border-t border-gray-100 reveal">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group flex items-center gap-6 py-5 border-b border-gray-100 transition-all hover:bg-gray-50 hover:border-l-2 hover:border-l-gold hover:pl-4"
              >
                {/* Number & Icon */}
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-sm font-semibold text-gold tabular-nums w-6 text-right">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xl">{service.icon}</span>
                </div>

                {/* Name & Tagline */}
                <div className="flex-1 min-w-0 transition-transform group-hover:translate-x-1">
                  <h3 className="text-xl font-display font-semibold text-navy flex items-center gap-2">
                    {service.shortName}
                    {service.featured && (
                      <span className="inline-block w-2 h-2 rounded-full bg-gold" />
                    )}
                  </h3>
                  <p className="text-gray-500 text-sm mt-0.5 truncate">
                    {service.tagline}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-gold transition-colors shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ——— 4. About Block ——— */}
      <section ref={aboutRef} className="py-24 bg-off-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div className="reveal">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-3">
              About Us
            </p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy mb-8 leading-snug">
              An AI-Native Team, Built for the Modern Brand
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Hire4Higher Consulting was founded on a simple conviction: the
              agencies of the future will be AI-native, not AI-adjacent. Every
              member of our team is trained in AI-augmented workflows. Every
              project we deliver benefits from AI acceleration&nbsp;&mdash; from
              code generation and content creation to data analysis and campaign
              optimization. This isn&rsquo;t a feature we bolt on; it&rsquo;s
              how we operate.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We partner with digital-first brands across eCommerce, retail,
              SaaS, and consumer goods&nbsp;&mdash; serving as a long-term
              growth partner rather than a transactional vendor. Our 3+ year
              average client retention and 100% referral-driven client base
              speak to the depth of those relationships. We don&rsquo;t pitch
              and disappear. We embed, build, and iterate alongside your team.
            </p>
          </div>

          {/* Right — 2x2 fact cards */}
          <div className="grid grid-cols-2 gap-4 reveal">
            {aboutFacts.map((fact) => (
              <div
                key={fact.title}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <CheckCircle2 className="w-5 h-5 text-gold mb-3" />
                <h4 className="font-display font-semibold text-navy text-sm mb-1">
                  {fact.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {fact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— 5. By the Numbers ——— */}
      <section ref={numbersRef} className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 reveal">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
            {[stat1, stat2, stat3, stat4].map((stat, i) => {
              const labels = [
                'Clients Served',
                'Years Avg Retention',
                'Referral Rate',
                'Practice Areas',
              ]
              return (
                <div
                  key={labels[i]}
                  ref={stat.ref}
                  className={`text-center ${
                    i < 3
                      ? 'lg:border-r lg:border-gray-200'
                      : ''
                  }`}
                >
                  <span className="text-5xl lg:text-6xl font-display font-bold text-gold">
                    {stat.count}
                    {stat.suffix}
                  </span>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mt-2">
                    {labels[i]}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ——— 6. AI-First Section ——— */}
      <section ref={aiRef} className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[45%_55%] gap-16">
          {/* Left */}
          <div className="reveal">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-3">
              The Difference
            </p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy leading-snug">
              AI Isn&rsquo;t Our Feature.
              <br />
              It&rsquo;s Our Operating System.
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-0 reveal">
            {aiPoints.map((point, i) => (
              <div
                key={point.title}
                className={`py-6 ${
                  i < aiPoints.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <h4 className="font-display font-semibold text-navy text-lg mb-2">
                  <span className="text-gold mr-2">&mdash;</span>
                  {point.title}
                </h4>
                <p className="text-gray-500 leading-relaxed text-sm pl-6">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— 7. Testimonials — Masonry ——— */}
      <section ref={testimonialsRef} className="py-24 bg-off-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-14 reveal">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-3">
              Testimonials
            </p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy">
              What Our Partners Say
            </h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal"
            style={{
              gridTemplateRows: 'auto auto',
            }}
          >
            {testimonials.map((t, i) => {
              const rowSpanClass =
                i === 0 || i === 2
                  ? 'md:row-span-2'
                  : 'md:row-span-1'
              return (
                <div
                  key={t.author}
                  className={`bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between ${rowSpanClass}`}
                >
                  <div>
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, s) => (
                        <Star
                          key={s}
                          className="w-4 h-4 fill-gold text-gold"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm mb-6">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white text-xs font-semibold">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">
                        {t.author}
                      </p>
                      <p className="text-xs text-gray-400">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ——— 8. Process — Accordion ——— */}
      <section ref={processRef} className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-14 reveal">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase mb-3">
              Our Process
            </p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy">
              How We Work
            </h2>
          </div>

          <div className="reveal">
            {processSteps.map((step, i) => {
              const isOpen = openStep === i
              return (
                <div key={step.title} className="border-b border-gray-100">
                  <button
                    onClick={() => setOpenStep(isOpen ? null : i)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                  >
                    <div className="flex items-center gap-5">
                      <span className="text-sm font-semibold text-gold tabular-nums w-6 text-right">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-lg font-display font-semibold text-navy group-hover:text-gold transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-64 pb-6' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-500 leading-relaxed text-sm pl-11 pr-8">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ——— 9. CTA Banner ——— */}
      <CTABanner
        variant="navy"
        heading="Let's Talk"
        subtext="Ready to explore what an AI-first growth partner can do for your brand? We'd love to hear from you."
        buttonLabel="Get in Touch"
      />
    </main>
  )
}
