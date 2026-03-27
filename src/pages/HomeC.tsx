import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Star, CheckCircle2 } from 'lucide-react'
import { services } from '@/data/services'
import { testimonials } from '@/data/testimonials'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useCountUp } from '@/hooks/useCountUp'
import { ClientLogoStrip } from '@/components/sections/ClientLogoStrip'
import { CTABanner } from '@/components/sections/CTABanner'

function StatItem({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, count } = useCountUp(target)
  return (
    <div ref={ref} className="text-center px-8">
      <div className="text-5xl font-display font-bold text-navy">
        {count}<span className="text-gold">{suffix}</span>
      </div>
      <div className="text-sm text-gray-500 mt-2 uppercase tracking-wider">{label}</div>
    </div>
  )
}

export default function HomeC() {
  const heroRef = useScrollReveal()
  const narrativeRef = useScrollReveal()
  const servicesRef = useScrollReveal()
  const caseStudyRef = useScrollReveal()
  const testimonialRef = useScrollReveal()
  const processRef = useScrollReveal()

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const scrollServices = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current
    if (!container) return
    const scrollAmount = 360
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  const narrativeBlocks = [
    {
      title: 'AI-Augmented Delivery',
      text: "Every project we deliver is accelerated by AI at every stage. Our developers use AI pair programming to ship features 3x faster. Our content teams use AI to research, draft, and optimize at scale. Our analysts use AI to surface insights that would take weeks manually. This isn't about replacing human expertise — it's about amplifying it. The result is faster time-to-value, higher quality deliverables, and a level of depth that traditional agencies simply cannot match at comparable timelines.",
      stats: ['3x Faster Development', '40% Cost Reduction', 'Enterprise-Grade Quality'],
    },
    {
      title: 'Vibe Coding & AI-Native Development',
      text: "Our engineering team is fluent in the new paradigm of AI-assisted development. We use tools like Claude, Cursor, GitHub Copilot, and custom AI workflows to write, review, and deploy code with unprecedented speed and reliability. But vibe coding isn't just about speed — it's about enabling our developers to focus on architecture, logic, and user experience while AI handles the boilerplate. Every engineer on our team has been trained in prompt engineering, AI code review, and AI-augmented debugging workflows.",
      stats: ['AI-Augmented Workflows', 'Prompt Engineering', 'Quality Assurance via AI'],
    },
    {
      title: 'Intelligent Process Automation',
      text: "We systematically identify manual, repetitive processes across your organization and design AI-powered automation to eliminate them. From automated reporting pipelines and AI-driven content generation to intelligent customer service workflows and predictive inventory management — we find the friction and engineer it away. Our clients typically see a 40-60% reduction in operational overhead within the first six months of engagement, with ROI that compounds as automation matures.",
      stats: ['40-60% Cost Savings', '6-Month ROI', 'Compounding Returns'],
    },
  ]

  return (
    <>
      {/* Hero — Split Screen */}
      <section ref={heroRef} className="min-h-screen pt-20 bg-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-80px)]">
            {/* Left Content */}
            <div className="lg:col-span-7 reveal">
              <p className="text-xs font-semibold uppercase tracking-[4px] text-gold mb-6">
                Hire4Higher Consulting
              </p>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white leading-tight mb-8">
                Digital Transformation,{' '}
                <span className="text-gold">Engineered by AI</span>
              </h1>
              <p className="text-lg text-white/60 leading-relaxed max-w-xl mb-10">
                We are an AI-native agency that partners with ambitious digital-first brands to build, scale, and
                optimize their entire digital ecosystem. From custom AI pipelines and Shopify storefronts to SEO
                strategies and data warehouses, our integrated teams deliver with the speed and precision that only
                an AI-augmented workflow enables. With 50+ global clients, 3+ years of average retention, and a
                100% referral-driven client base, we don't just promise results — we engineer them.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-white text-sm font-semibold rounded-lg hover:bg-gold-dark transition-all hover:-translate-y-0.5 shadow-[0_2px_12px_rgba(200,150,62,0.3)]"
                >
                  Book a Strategy Session
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white text-sm font-semibold rounded-lg hover:bg-white/10 transition-all"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* Right Abstract Visual */}
            <div className="hidden lg:flex lg:col-span-5 items-center justify-center relative">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/20 to-gold/5 rotate-12 blur-sm" />
                <div className="absolute inset-4 rounded-3xl bg-gradient-to-tr from-navy-mid to-navy-light rotate-6 border border-white/10" />
                <div className="absolute inset-8 rounded-3xl bg-gradient-to-br from-gold/30 to-transparent -rotate-6" />
                <div className="absolute inset-16 rounded-2xl bg-navy-mid border border-gold/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-display font-bold text-gold">H4H</div>
                    <div className="text-xs text-white/40 mt-1 uppercase tracking-widest">AI-First</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gold/10 blur-xl" />
                <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-gold/5 blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Stats Counter */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-gray-200">
            <StatItem target={50} suffix="+" label="Global Clients" />
            <StatItem target={3} suffix="+" label="Years Avg Retention" />
            <StatItem target={100} suffix="%" label="Referral-Driven" />
            <StatItem target={8} suffix="" label="Service Verticals" />
          </div>
        </div>
      </section>

      {/* "Why AI-First" Narrative Section — Alternating Layout */}
      <section ref={narrativeRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 reveal">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-gold mb-4">
              The AI-First Approach
            </p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy">
              We Don't Just Adopt AI — We Build With It
            </h2>
          </div>

          <div className="space-y-24">
            {narrativeBlocks.map((block, i) => {
              const isReversed = i % 2 === 1
              return (
                <div
                  key={block.title}
                  className={`reveal reveal-delay-${i + 1} grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    isReversed ? 'direction-rtl' : ''
                  }`}
                >
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <h3 className="text-2xl font-display font-bold text-navy mb-4">
                      {block.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{block.text}</p>
                  </div>
                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                      <div className="space-y-4">
                        {block.stats.map((stat) => (
                          <div key={stat} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                            <span className="text-sm font-semibold text-navy">{stat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services — Horizontal Scrolling Cards */}
      <section ref={servicesRef} className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12 reveal">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[3px] text-gold mb-4">
                Our Practices
              </p>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy">
                Eight Specialized Practices, One Integrated Team
              </h2>
            </div>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scrollServices('left')}
                className="p-3 rounded-full border border-gray-200 text-gray-500 hover:border-gold hover:text-gold transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollServices('right')}
                className="p-3 rounded-full border border-gray-200 text-gray-500 hover:border-gold hover:text-gold transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className={`flex-shrink-0 w-[320px] snap-start rounded-2xl p-8 border transition-all hover:-translate-y-1 hover:shadow-lg group ${
                  service.featured
                    ? 'bg-navy text-white border-navy hover:border-gold'
                    : 'bg-white border-gray-200 hover:border-gold'
                }`}
              >
                {service.featured && (
                  <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-xs font-semibold rounded-full mb-4">
                    Featured
                  </span>
                )}
                <span className="text-2xl block mb-4">{service.icon}</span>
                <h3 className={`text-lg font-display font-bold mb-2 ${service.featured ? 'text-white' : 'text-navy'}`}>
                  {service.shortName}
                </h3>
                <p className={`text-sm leading-relaxed mb-4 ${service.featured ? 'text-white/60' : 'text-gray-500'}`}>
                  {service.tagline}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.subServices.slice(0, 3).map((sub) => (
                    <span
                      key={sub.slug}
                      className={`text-xs px-2.5 py-1 rounded-full ${
                        service.featured
                          ? 'bg-white/10 text-white/70'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {sub.name}
                    </span>
                  ))}
                </div>
                <span className={`inline-flex items-center gap-1 text-sm font-semibold ${
                  service.featured ? 'text-gold' : 'text-gold group-hover:gap-2'
                } transition-all`}>
                  Explore
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logo Strip */}
      <ClientLogoStrip variant="light" />

      {/* Featured Case Study Teaser */}
      <section ref={caseStudyRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-gold mb-10">
              Case Study
            </p>
            <div className="bg-navy rounded-3xl p-8 lg:p-14">
              <span className="inline-block px-4 py-1.5 bg-white/10 text-white/70 text-xs font-semibold rounded-full mb-6">
                LegalZoom
              </span>
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-4 max-w-2xl">
                Rebuilding Analytics Infrastructure for a Legal Tech Leader
              </h3>
              <p className="text-white/60 leading-relaxed max-w-2xl mb-8">
                We partnered with LegalZoom to redesign their entire analytics infrastructure — from data
                warehousing and ETL pipelines to executive dashboards and predictive models. The engagement
                spanned data engineering, business intelligence, and FP&A automation, transforming how the
                organization makes decisions at every level.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {[
                  { metric: '60%', label: 'Faster Reporting Cycles' },
                  { metric: '3+', label: 'Year Partnership' },
                  { metric: 'Full-Stack', label: 'Data Transformation' },
                ].map((item) => (
                  <div key={item.label} className="text-center sm:text-left">
                    <div className="text-2xl font-display font-bold text-gold">{item.metric}</div>
                    <div className="text-sm text-white/50 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:gap-3 transition-all"
              >
                Read the Full Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial — Single Large Rotating */}
      <section ref={testimonialRef} className="py-24 bg-off-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-gold mb-4">
              Client Perspectives
            </p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy">
              In Their Own Words
            </h2>
          </div>

          <div className="reveal relative min-h-[280px]">
            {testimonials.map((t, i) => (
              <div
                key={t.author}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === currentTestimonial ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-sm text-center">
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <blockquote className="text-xl lg:text-2xl font-display text-navy/80 leading-relaxed mb-8">
                    "{t.quote}"
                  </blockquote>
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gold/15 text-gold flex items-center justify-center text-sm font-bold">
                      {t.initials}
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-semibold text-navy">{t.author}</div>
                      <div className="text-xs text-gray-500">{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === currentTestimonial ? 'bg-gold w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process as Numbered Cards */}
      <section ref={processRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-gold mb-4">
              Our Process
            </p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy">
              A Systematic Approach to Transformation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: '01',
                title: 'Discovery & Audit',
                text: 'We begin every engagement with a deep immersion into your business. We audit your existing systems, analyze your data, interview stakeholders, and map the competitive landscape. The goal is to understand not just what you need — but why you need it and what success looks like.',
              },
              {
                num: '02',
                title: 'Strategy & Roadmap',
                text: 'Based on our discovery findings, we build a prioritized transformation roadmap with clear milestones, KPIs, and resource requirements. We identify quick wins alongside long-term strategic initiatives, ensuring you see value early while building toward sustainable competitive advantage.',
              },
              {
                num: '03',
                title: 'Execute & Build',
                text: 'Our cross-functional teams move into execution with AI-augmented speed and precision. Whether we are building a Shopify storefront, deploying a RAG pipeline, or launching a paid media campaign, every deliverable is held to the highest standard of quality and performance.',
              },
              {
                num: '04',
                title: 'Optimize & Scale',
                text: "Transformation doesn't end at launch. We continuously monitor performance, run experiments, and optimize based on real data. As your business evolves, we scale our efforts — expanding into new channels, automating additional workflows, and compounding your results over time.",
              },
            ].map((step, i) => (
              <div
                key={step.num}
                className={`reveal reveal-delay-${i + 1} border-t-2 border-gold pt-8`}
              >
                <div className="text-6xl font-display font-bold text-gold/15 mb-4">{step.num}</div>
                <h3 className="text-lg font-display font-bold text-navy mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        heading="Ready to Engineer Your Next Chapter?"
        subtext="Our team is ready to understand your challenges and build a transformation roadmap tailored to your business."
      />
    </>
  )
}
