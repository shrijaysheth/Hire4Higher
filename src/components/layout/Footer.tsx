import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { ArrowRight } from 'lucide-react'

const footerServices = [
  { label: 'AI Development', href: '/services/ai-development' },
  { label: 'eCommerce Development', href: '/services/ecommerce-portal-development' },
  { label: 'Organic Marketing', href: '/services/organic-marketing' },
  { label: 'Paid Campaigns', href: '/services/paid-campaign-management' },
  { label: 'Design Services', href: '/services/designing' },
  { label: 'Data & Analytics', href: '/services/analytics-data-services' },
  { label: 'Strategic Consulting', href: '/services/strategic-consulting' },
  { label: 'MicroGCC Setup', href: '/services/micro-gcc-setup' },
]

const footerCompany = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Case Studies', href: '/projects' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

const footerHire = [
  { label: 'Hire AI/ML Engineers', href: '/hire/ai-ml-engineer' },
  { label: 'Hire Full-Stack Developers', href: '/hire/full-stack-developer' },
  { label: 'Hire Shopify Developers', href: '/hire/shopify-developer' },
  { label: 'Hire Data Analysts', href: '/hire/data-analyst' },
  { label: 'Hire UI/UX Designers', href: '/hire/ui-ux-designer' },
]

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-display font-semibold">Stay ahead of the curve</h3>
              <p className="text-white/60 text-sm mt-1">Get AI, growth, and digital transformation insights delivered to your inbox.</p>
            </div>
            <form className="flex w-full md:w-auto gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2.5 bg-white/5 border border-white/15 rounded-lg text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-gold/50 w-full md:w-72"
              />
              <button className="px-5 py-2.5 bg-gold text-white text-sm font-semibold rounded-lg hover:bg-gold-dark transition-colors flex-shrink-0 flex items-center gap-2">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Links Grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Logo variant="light" />
            <p className="text-white/50 text-sm mt-4 leading-relaxed">
              AI-first digital transformation agency. We help ambitious brands build, scale, and optimize their digital presence.
            </p>
            <a
              href="mailto:hello@hire4higherconsulting.com"
              className="inline-block mt-4 text-sm text-gold hover:text-gold-light transition-colors"
            >
              hello@hire4higherconsulting.com
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">Services</h4>
            <ul className="space-y-3">
              {footerServices.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/60 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">Company</h4>
            <ul className="space-y-3">
              {footerCompany.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/60 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hire Talent */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">Hire Talent</h4>
            <ul className="space-y-3">
              {footerHire.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/60 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Hire4Higher Consulting. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/40 hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-white/40 hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
