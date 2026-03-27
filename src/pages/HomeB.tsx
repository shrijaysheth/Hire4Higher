import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Brain, Zap, Layers, CheckCircle2, Star } from 'lucide-react'
import { services } from '@/data/services'
import { clients } from '@/data/clients'
import { testimonials } from '@/data/testimonials'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useCountUp } from '@/hooks/useCountUp'
import { ClientLogoStrip } from '@/components/sections/ClientLogoStrip'
import { CTABanner } from '@/components/sections/CTABanner'

const rotatingWords = [
  'AI Transformation',
  'Shopify at Scale',
  'Data Intelligence',
  'Organic Growth',
  'Paid Performance',
]

const serviceIconMap: Record<string, React.ReactNode> = {
  'ai-development': <Brain className="w-6 h-6" />,
  'ecommerce-portal-development': <Layers className="w-6 h-6" />,
  'organic-marketing': <Zap className="w-6 h-6" />,
  'paid-campaign-management': <Zap className="w-6 h-6" />,
  'designing': <Layers className="w-6 h-6" />,
  'analytics-data-services': <Brain className="w-6 h-6" />,
  'strategic-consulting': <Layers className="w-6 h-6" />,
  'micro-gcc-setup': <Zap className="w-6 h-6" />,
}

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description:
      'We begin every engagement with a rigorous audit of your current digital ecosystem — technology stack, data infrastructure, marketing channels, and organizational workflows. This isn\'t a surface-level review. We identify structural inefficiencies, missed opportunities, and areas where AI can deliver immediate impact. The output is a comprehensive diagnostic that becomes the foundation for everything that follows.',
  },
  {
    number: '02',
    title: 'Strategy & Roadmap',
    description:
      'Armed with audit insights, we co-create a prioritized transformation roadmap with your leadership team. Every initiative is sequenced by impact and effort, with clear milestones, KPIs, and ownership. We define the architecture — which systems to build, which to integrate, which to sunset — and establish the AI augmentation layer that will accelerate execution across every workstream.',
  },
  {
    number: '03',
    title: 'Execute & Build',
    description:
      'Our cross-functional squads move into execution with velocity. Designers, engineers, data scientists, and marketers work in integrated sprints — not siloed handoffs. AI tools accelerate every phase: code generation for faster development, generative design for rapid iteration, automated QA for fewer defects, and intelligent campaign optimization from day one. You see progress weekly, not quarterly.',
  },
  {
    number: '04',
    title: 'Optimize & Scale',
    description:
      'Launch is just the beginning. We instrument everything for measurement, run continuous experiments, and use predictive analytics to identify the next highest-leverage optimizations. As results compound, we scale what works — expanding into new channels, markets, and capabilities. Our AI systems learn from every interaction, making your digital infrastructure smarter and more efficient over time.',
  },
]

export default function HomeB() {
  const [wordIndex, setWordIndex] = useState(0)
  const [fade, setFade] = useState(true)

  const heroRef = useScrollReveal()
  const servicesRef = useScrollReveal()
  const aiMethodRef = useScrollReveal()
  const proofRef = useScrollReveal()
  const testimonialRef = useScrollReveal()
  const processRef = useScrollReveal()

  const clientsStat = useCountUp(50, 2000, '+')
  const retentionStat = useCountUp(3, 2000, '+')
  const referralStat = useCountUp(100, 2000, '%')
  const verticalsStat = useCountUp(8, 2000, '')

  const proofClients = useCountUp(50, 2000, '+')
  const proofRetention = useCountUp(3, 2000, '+')
  const proofReferral = useCountUp(100, 2000, '%')
  const proofVerticals = useCountUp(8, 2000, '')

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length)
        setFade(true)
      }, 300)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const featuredService = services.find((s) => s.featured)
  const otherServices = services.filter((s) => !s.featured)

  return (
    <main>
      {/* ─── HERO ─── */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center text-center bg-navy pt-20"
      >
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-24 reveal">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest rounded-full px-5 py-2 mb-8">
            AI-First &middot; Growth-Obsessed &middot; Data-Driven
          </div>

          {/* H1 */}
          <h1 className="text-5xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
            Your Growth Partner for
            <br />
            <span
              className={`text-gold inline-block transition-opacity duration-300 ${
                fade ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {rotatingWords[wordIndex]}
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            We are an AI-native digital transformation agency that partners with ambitious brands to
            build, scale, and optimize across eCommerce, marketing, data, and design. No silos. No
            handoffs. One integrated team, powered by AI.
          </p>

          {/* CTA */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold text-white px-8 py-4 rounded-lg text-sm font-semibold hover:bg-gold-dark transition-all hover:-translate-y-0.5 shadow-[0_2px_16px_rgba(200,150,62,0.35)] mb-16"
          >
            Start Your Transformation
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Stats Row */}
          <div className="flex items-center justify-center gap-0 flex-wrap">
            {[
              { ref: clientsStat.ref, value: clientsStat.count, suffix: '+', label: 'Global Clients' },
              { ref: retentionStat.ref, value: retentionStat.count, suffix: '+', label: 'Yrs Avg Retention' },
              { ref: referralStat.ref, value: referralStat.count, suffix: '%', label: 'Referral Based' },
              { ref: verticalsStat.ref, value: verticalsStat.count, suffix: '', label: 'Service Verticals' },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center">
                {i > 0 && <div className="w-px h-10 bg-white/10 mx-6 lg:mx-10 hidden sm:block" />}
                <div ref={stat.ref} className="text-center px-2">
                  <div className="text-2xl font-bold text-gold">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-xs uppercase tracking-wide text-white/50 mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLIENT LOGO STRIP ─── */}
      <ClientLogoStrip variant="light" />

      {/* ─── SERVICES BENTO GRID ─── */}
      <section ref={servicesRef} className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-gold mb-4">
              What We Do
            </p>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-navy mb-4">
              Eight Specialized Practices.
              <br />
              One Integrated Team.
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              From AI development and eCommerce engineering to paid media, organic growth, data
              analytics, and strategic consulting — we deliver full-stack digital transformation
              capabilities under one roof. Every practice is AI-augmented, every team member
              cross-functional, every deliverable held to the highest standard.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 reveal">
            {/* Featured AI Card */}
            {featuredService && (
              <div className="md:col-span-2 md:row-span-2 bg-navy rounded-2xl p-8 lg:p-10 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <Brain className="w-8 h-8 text-gold" />
                      <span className="text-xs font-semibold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                    <Link
                      to={`/services/${featuredService.slug}`}
                      className="text-gold hover:text-gold-light transition-colors"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </Link>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-3">
                    {featuredService.name}
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-6">{featuredService.description}</p>
                  <div className="space-y-2 mb-8">
                    {featuredService.subServices.map((sub) => (
                      <div key={sub.slug} className="flex items-center gap-2 text-white/50 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                        {sub.name}
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  to={`/services/${featuredService.slug}`}
                  className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:text-gold-light transition-colors"
                >
                  Explore AI Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}

            {/* Other Service Cards */}
            {otherServices.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gold hover:shadow-lg transition-all group relative"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-gold">{serviceIconMap[service.slug]}</div>
                  <ArrowUpRight className="w-4 h-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-display font-bold text-navy mb-2">{service.shortName}</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {service.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AI-FIRST METHODOLOGY ─── */}
      <section ref={aiMethodRef} className="bg-off-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column — 55% */}
            <div className="lg:col-span-7 reveal">
              <p className="text-xs font-semibold uppercase tracking-[3px] text-gold mb-4">
                The AI-First Difference
              </p>
              <h2 className="text-3xl lg:text-5xl font-display font-bold text-navy leading-tight mb-6">
                Every Engagement Is AI-Augmented.
                <br />
                Every Deliverable Is Better For It.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                AI isn't a service line we bolt on — it's the operating system that runs through
                every discipline we practice. Our engineers use AI-assisted code generation and
                automated testing to ship faster with fewer defects. Our designers leverage
                generative tools for rapid prototyping and creative exploration at a pace that
                traditional workflows simply cannot match. Our marketers deploy machine learning
                models for campaign optimization, audience segmentation, and predictive attribution.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This isn't aspirational positioning. It's how we've operated since our founding. The
                result is a compounding advantage: faster time-to-value, higher quality output, and
                cost efficiency that lets us reinvest savings into deeper strategic work. When every
                team member is AI-literate and every workflow is AI-enhanced, the quality ceiling
                rises dramatically — and the time to get there drops.
              </p>
            </div>

            {/* Right Column — 45% */}
            <div className="lg:col-span-5 space-y-4 reveal">
              {[
                {
                  icon: <Brain className="w-5 h-5 text-gold" />,
                  title: 'AI-Augmented Delivery',
                  description:
                    'Every project benefits from AI acceleration — from automated code review and intelligent testing to AI-generated design variations and predictive analytics. The result is higher quality output delivered in less time.',
                },
                {
                  icon: <Zap className="w-5 h-5 text-gold" />,
                  title: 'Vibe Coding Expertise',
                  description:
                    'Our engineering team has pioneered vibe coding methodologies that blend AI code generation with human architectural judgment. We ship production-grade software faster without sacrificing reliability or maintainability.',
                },
                {
                  icon: <Layers className="w-5 h-5 text-gold" />,
                  title: 'Intelligent Automation',
                  description:
                    'We identify and automate repetitive workflows across your organization — from data pipelines and reporting to customer service and campaign management. Our automation frameworks learn and improve continuously.',
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gold/40 transition-colors"
                >
                  <div className="mb-3">{card.icon}</div>
                  <h3 className="text-lg font-bold text-navy mb-2">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF BAND ─── */}
      <section ref={proofRef} className="bg-navy py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 reveal">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8">
            {[
              { ref: proofClients.ref, value: proofClients.count, suffix: '+', label: 'Clients Served' },
              { ref: proofRetention.ref, value: proofRetention.count, suffix: '+', label: 'Years Average Retention' },
              { ref: proofReferral.ref, value: proofReferral.count, suffix: '%', label: 'Referral-Driven Growth' },
              { ref: proofVerticals.ref, value: proofVerticals.count, suffix: '', label: 'Service Verticals' },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center justify-center">
                {i > 0 && (
                  <div className="w-px h-16 bg-white/10 mr-6 lg:mr-10 hidden lg:block" />
                )}
                <div ref={stat.ref} className="text-center">
                  <div className="text-5xl font-display font-bold text-gold">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-white/50 uppercase tracking-wider mt-2">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED TESTIMONIAL + SUPPORTING CARDS ─── */}
      <section ref={testimonialRef} className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-gold mb-4">
              Client Voices
            </p>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-navy">
              Trusted by Teams That Demand Excellence
            </h2>
          </div>

          {/* Featured Testimonial */}
          {testimonials[0] && (
            <div className="max-w-4xl mx-auto text-center mb-12 reveal">
              <div className="flex items-center justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[0].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl text-navy font-display leading-relaxed mb-8">
                &ldquo;{testimonials[0].quote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white text-sm font-bold">
                  {testimonials[0].initials}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-navy">{testimonials[0].author}</div>
                  <div className="text-sm text-gray-500">
                    {testimonials[0].role}, {testimonials[0].company}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Supporting Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto reveal">
            {testimonials.slice(1, 3).map((t) => (
              <div
                key={t.author}
                className="border border-gray-200 rounded-2xl p-6 hover:border-gold/40 transition-colors"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <blockquote className="text-gray-600 leading-relaxed mb-6 text-sm">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white text-xs font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm">{t.author}</div>
                    <div className="text-xs text-gray-500">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS — VERTICAL TIMELINE ─── */}
      <section ref={processRef} className="bg-off-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-gold mb-4">
              How We Work
            </p>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-navy">
              A Proven Framework for Digital Transformation
            </h2>
          </div>

          <div className="max-w-3xl mx-auto reveal">
            <div className="relative">
              {/* Gold vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gold/30" />

              <div className="space-y-12">
                {processSteps.map((step) => (
                  <div key={step.number} className="relative pl-20">
                    {/* Number circle */}
                    <div className="absolute left-0 top-0 w-12 h-12 rounded-full border-2 border-gold bg-off-white flex items-center justify-center">
                      <span className="text-gold font-bold text-sm">{step.number}</span>
                    </div>

                    {/* Content card */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <h3 className="text-xl font-display font-bold text-navy mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <CTABanner
        variant="navy"
        heading="Let's Build Something Exceptional"
        subtext="Whether you need AI automation, eCommerce growth, or a dedicated offshore team — we're ready to be your unfair advantage."
      />
    </main>
  )
}
