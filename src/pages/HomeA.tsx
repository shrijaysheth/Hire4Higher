import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, Zap, Brain, TrendingUp, BarChart3, Users, Shield, Layers, Target, Star } from 'lucide-react'
import { services } from '@/data/services'
import { clients } from '@/data/clients'
import { testimonials } from '@/data/testimonials'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useCountUp } from '@/hooks/useCountUp'
import { ClientLogoStrip } from '@/components/sections/ClientLogoStrip'
import { TestimonialSection } from '@/components/sections/TestimonialSection'
import { CTABanner } from '@/components/sections/CTABanner'

export default function HomeA() {
  const heroRef = useScrollReveal()
  const aiRef = useScrollReveal()
  const servicesRef = useScrollReveal()
  const apartRef = useScrollReveal()
  const processRef = useScrollReveal()

  const clientsStat = useCountUp(50, 2000, '+')
  const retentionStat = useCountUp(3, 2000, '+')
  const referralStat = useCountUp(100, 2000, '%')
  const verticalsStat = useCountUp(8, 2000, '')

  return (
    <>
      {/* ===== SECTION 1: HERO ===== */}
      <section className="relative min-h-screen bg-navy overflow-hidden">
        {/* Radial gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 30% 50%, rgba(191,155,48,0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 70% 30%, rgba(30,58,95,0.5) 0%, transparent 60%)',
          }}
        />

        <div ref={heroRef} className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-5 gap-12 items-center w-full py-16">
            {/* Left content — 3 of 5 cols */}
            <div className="lg:col-span-3 space-y-8">
              {/* Badge pill */}
              <div className="reveal">
                <span className="inline-block bg-gold-light/15 text-gold-light text-xs font-semibold uppercase tracking-[2px] px-4 py-2 rounded-full border border-gold/20">
                  AI-First Digital Transformation Agency
                </span>
              </div>

              {/* H1 */}
              <h1 className="reveal text-4xl lg:text-6xl font-display text-white leading-tight">
                We Build What's <span className="text-gold">Next</span> for Digital-First Brands
              </h1>

              {/* Subtext */}
              <p className="reveal text-lg text-gray-400 leading-relaxed max-w-2xl">
                Hire4Higher Consulting is the growth partner behind some of the world's most ambitious digital brands.
                We combine deep domain expertise in eCommerce, AI, data, and marketing with an AI-native delivery model
                — so you get faster execution, sharper insights, and better outcomes. From building custom AI pipelines
                to scaling Shopify storefronts, from SEO to data warehousing, we operate as a true extension of your team.
              </p>

              {/* CTAs */}
              <div className="reveal flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
                >
                  Book a Free Strategy Session
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                >
                  Explore Our Services
                </Link>
              </div>

              {/* Stats row */}
              <div className="reveal flex flex-wrap items-center gap-0 pt-4">
                {[
                  { ref: clientsStat.ref, value: clientsStat.count, suffix: clientsStat.suffix, label: 'Global Clients' },
                  { ref: retentionStat.ref, value: retentionStat.count, suffix: retentionStat.suffix, label: 'Yrs Avg Retention' },
                  { ref: referralStat.ref, value: referralStat.count, suffix: referralStat.suffix, label: 'Referral-Driven' },
                  { ref: verticalsStat.ref, value: verticalsStat.count, suffix: verticalsStat.suffix, label: 'Service Verticals' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    ref={stat.ref}
                    className={`flex items-center gap-4 ${i > 0 ? 'border-l border-white/15 pl-6 ml-6' : ''}`}
                  >
                    <div>
                      <div className="text-2xl lg:text-3xl font-display font-bold text-gold">
                        {stat.value}{stat.suffix}
                      </div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side — decorative geometric */}
            <div className="lg:col-span-2 hidden lg:flex items-center justify-center relative">
              <div className="relative w-80 h-80">
                {/* Large rotated square */}
                <div
                  className="absolute inset-0 rounded-3xl border-2 border-gold/20"
                  style={{ transform: 'rotate(15deg)' }}
                />
                {/* Medium rotated square with fill */}
                <div
                  className="absolute inset-8 rounded-3xl bg-gold/5 border border-gold/15"
                  style={{ transform: 'rotate(-10deg)' }}
                />
                {/* Inner shape */}
                <div
                  className="absolute inset-16 rounded-2xl bg-gradient-to-br from-gold/10 to-navy-mid/40 border border-gold/20 backdrop-blur-sm"
                  style={{ transform: 'rotate(25deg)' }}
                />
                {/* Accent circle */}
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gold/10 blur-xl" />
                {/* Small floating squares */}
                <div
                  className="absolute -top-6 left-12 w-12 h-12 rounded-lg bg-gold/15 border border-gold/20"
                  style={{ transform: 'rotate(30deg)' }}
                />
                <div
                  className="absolute -bottom-4 right-16 w-16 h-16 rounded-xl bg-navy-mid/60 border border-gold/10"
                  style={{ transform: 'rotate(-20deg)' }}
                />
                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gold/5 blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: CLIENT LOGO STRIP ===== */}
      <ClientLogoStrip variant="dark" />

      {/* ===== SECTION 3: AI-FIRST DIFFERENTIATOR ===== */}
      <section className="bg-white py-24">
        <div ref={aiRef} className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="max-w-3xl mb-16">
            <p className="reveal text-xs uppercase tracking-[3px] text-gold font-semibold mb-4">
              WHY AI-FIRST
            </p>
            <h2 className="reveal text-3xl lg:text-4xl font-display text-navy mb-6">
              We Don't Just Consult — We Engineer Transformation
            </h2>
            <p className="reveal text-lg text-gray-500 leading-relaxed">
              Most agencies bolt AI onto legacy processes. We built our entire operating model around it. Every
              engagement is designed from the ground up with AI-augmented workflows, which means our teams move
              faster, produce higher-quality outputs, and surface insights that traditional consultancies miss entirely.
            </p>
          </div>

          {/* 3-column grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-7 h-7 text-gold" />,
                title: 'AI-Augmented Delivery',
                description:
                  'Every engagement we run is powered by an AI infrastructure layer that accelerates execution across the board. Our teams use large language models for code generation, content drafting, data analysis, and strategic research — compressing weeks of work into days. This isn\'t about replacing human expertise; it\'s about amplifying it. The result is faster time-to-value, more iterations, and better outcomes for every dollar you invest.',
              },
              {
                icon: <Zap className="w-7 h-7 text-gold" />,
                title: 'Vibe Coding Proficiency',
                description:
                  'Our engineering team has fully embraced AI-assisted development workflows, making us dramatically more productive than traditional dev shops. We are proficient with tools like Cursor, Claude Code, and GitHub Copilot to write, refactor, and debug code at unprecedented speed. This means faster feature delivery, fewer bugs, and the ability to prototype and iterate in real time during client sessions — translating your vision into working software within hours, not weeks.',
              },
              {
                icon: <Layers className="w-7 h-7 text-gold" />,
                title: 'Intelligent Automation',
                description:
                  'We systematically identify manual, repetitive processes across your organization and deploy AI-powered automation to eliminate them. From automated reporting pipelines and intelligent document processing to AI-driven customer service workflows and predictive inventory management — we find the bottlenecks that cost you time and money, then engineer solutions that run autonomously. Our clients typically see 40-60% reductions in operational overhead within the first quarter.',
              },
            ].map((feature, i) => (
              <div key={i} className="reveal">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: SERVICES OVERVIEW ===== */}
      <section className="bg-off-white py-24">
        <div ref={servicesRef} className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="max-w-3xl mb-16">
            <p className="reveal text-xs uppercase tracking-[3px] text-gold font-semibold mb-4">
              OUR SERVICES
            </p>
            <h2 className="reveal text-3xl lg:text-4xl font-display text-navy mb-6">
              End-to-End Digital Transformation, Under One Roof
            </h2>
            <p className="reveal text-lg text-gray-500 leading-relaxed">
              Unlike agencies that specialize in one slice of the digital stack and outsource the rest, we maintain
              deep in-house capabilities across AI, engineering, data, design, and marketing. This means seamless
              integration between workstreams, unified strategy, and a single team that understands your entire
              digital ecosystem — from the data warehouse to the ad creative.
            </p>
          </div>

          {/* Service cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => {
              const isLast = service.slug === 'micro-gcc-setup'
              const isFeatured = service.featured

              return (
                <div
                  key={service.slug}
                  className={`reveal group relative bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:border-gold hover:shadow-lg hover:-translate-y-1 ${
                    isLast ? 'md:col-span-2 lg:col-span-4' : ''
                  }`}
                >
                  <div className={isLast ? 'flex flex-col md:flex-row md:items-center gap-8' : ''}>
                    <div className={isLast ? 'flex-1' : ''}>
                      {/* Featured badge */}
                      {isFeatured && (
                        <span className="absolute top-4 right-4 bg-gold text-navy text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full">
                          Featured
                        </span>
                      )}

                      {/* Icon */}
                      <div className="text-4xl mb-4">{service.icon}</div>

                      {/* Name */}
                      <h3 className="text-xl font-semibold text-navy mb-3">{service.name}</h3>

                      {/* Description */}
                      <p className="text-gray-500 leading-relaxed mb-5">{service.description}</p>

                      {/* Sub-service tags */}
                      {service.subServices.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-5">
                          {service.subServices.slice(0, 4).map((sub) => (
                            <span
                              key={sub.slug}
                              className="bg-gray-100 text-gray-600 text-xs rounded-full px-3 py-1"
                            >
                              {sub.name}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Learn More link */}
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1 text-gold font-medium text-sm hover:gap-2 transition-all duration-200"
                      >
                        Learn More <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: WHAT SETS US APART ===== */}
      <section className="bg-white py-24">
        <div ref={apartRef} className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="reveal text-xs uppercase tracking-[3px] text-gold font-semibold mb-4">
              WHY HIRE4HIGHER
            </p>
            <h2 className="reveal text-3xl lg:text-4xl font-display text-navy mb-6">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: '01',
                title: 'AI-Native Team',
                desc: 'Our entire team — from strategists to engineers to designers — is trained and proficient in AI-augmented workflows. This isn\'t a bolt-on capability or an innovation lab experiment; it\'s how we operate every day. We use AI to accelerate research, generate and evaluate hypotheses, write and review code, and produce creative assets — giving you a team that moves at a pace traditional agencies simply cannot match.',
              },
              {
                num: '02',
                title: '3+ Year Client Retention',
                desc: 'Our average client relationship exceeds three years, which in the agency world is almost unheard of. This longevity reflects something fundamental about how we work: we embed deeply into your business, take ownership of outcomes, and continuously evolve our approach as your needs change. We don\'t churn through clients — we grow with them, compounding our institutional knowledge and impact over time.',
              },
              {
                num: '03',
                title: '100% Referral-Driven Growth',
                desc: 'We have never run a paid ad, hired a sales team, or cold-called a prospect. Every single client we\'ve ever worked with came through a direct referral from an existing client or partner. This is the highest possible signal of quality — our clients trust us enough to stake their own reputation on recommending us. It also means we invest zero in sales overhead, which translates directly into better value for you.',
              },
              {
                num: '04',
                title: 'Full-Stack Expertise',
                desc: 'Where most agencies specialize in one vertical — marketing, or development, or data — we maintain production-grade capabilities across all of them. AI engineering, eCommerce development, organic and paid marketing, design, data infrastructure, and strategic consulting all live under one roof. This means your AI strategy informs your marketing, your data architecture powers your personalization, and every initiative is connected to a unified vision.',
              },
            ].map((item, i) => (
              <div key={i} className="reveal">
                <div className="text-5xl font-display text-gold/20 mb-4">{item.num}</div>
                <h3 className="text-xl font-semibold text-navy mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: PROCESS ===== */}
      <section className="bg-off-white py-24">
        <div ref={processRef} className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="reveal text-xs uppercase tracking-[3px] text-gold font-semibold mb-4">
              OUR PROCESS
            </p>
            <h2 className="reveal text-3xl lg:text-4xl font-display text-navy mb-6">
              From Discovery to Scale — A Proven Framework
            </h2>
          </div>

          {/* Process steps */}
          <div className="reveal relative">
            {/* Connecting line — horizontal on desktop, vertical on mobile */}
            <div className="hidden md:block absolute top-10 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5 border-t-2 border-dashed border-gold/30" />
            <div className="md:hidden absolute top-10 bottom-10 left-10 w-0.5 border-l-2 border-dashed border-gold/30" />

            <div className="grid md:grid-cols-4 gap-12 md:gap-8">
              {[
                {
                  num: '1',
                  title: 'Discovery & Audit',
                  desc: 'We immerse ourselves in your business, analyzing data, auditing systems, and identifying opportunities. Every assumption is tested, every metric is benchmarked, and every workflow is mapped — giving us a comprehensive view of where you stand and where the highest-impact opportunities lie.',
                },
                {
                  num: '2',
                  title: 'Strategy & Roadmap',
                  desc: 'We build a prioritized roadmap with clear milestones, KPIs, and resource plans. Each initiative is sequenced by impact and effort, with explicit dependencies and ownership — so your leadership team has full visibility and confidence in the path forward.',
                },
                {
                  num: '3',
                  title: 'Execute & Build',
                  desc: 'Our cross-functional teams deliver with AI-augmented speed and quality. Designers, engineers, data scientists, and marketers work in integrated sprints. AI tools accelerate every phase — from code generation to creative iteration to automated QA — so you see tangible progress weekly.',
                },
                {
                  num: '4',
                  title: 'Optimize & Scale',
                  desc: 'Continuous monitoring, testing, and optimization to compound your results. We instrument everything for measurement, run experiments systematically, and use predictive analytics to identify the next highest-leverage moves. As results compound, we scale what works across channels and markets.',
                },
              ].map((step, i) => (
                <div key={i} className="relative flex md:flex-col items-start md:items-center text-left md:text-center gap-6 md:gap-0">
                  {/* Circle with number */}
                  <div className="relative z-10 flex-shrink-0 w-20 h-20 rounded-full border-2 border-gold bg-off-white flex items-center justify-center mb-0 md:mb-6">
                    <span className="text-2xl font-display font-bold text-gold">{step.num}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-3">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: TESTIMONIALS ===== */}
      <TestimonialSection variant="dark" />

      {/* ===== SECTION 8: CTA BANNER ===== */}
      <CTABanner />
    </>
  )
}
