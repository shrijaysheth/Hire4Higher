import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Logo } from './Logo'
import { services } from '@/data/services'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us' },
  {
    label: 'Services',
    href: '/services',
    children: services.map((s) => ({
      label: s.shortName,
      href: `/services/${s.slug}`,
      icon: s.icon,
      description: s.tagline,
    })),
  },
  { label: 'Case Studies', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setMegaOpen(false)
  }, [location])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-20">
          <Logo variant={scrolled ? 'dark' : 'light'} />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      scrolled
                        ? 'text-gray-600 hover:text-navy hover:bg-gray-50'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${megaOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Mega Menu */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
                      megaOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-200 p-6 w-[720px] grid grid-cols-2 gap-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                        >
                          <span className="text-xl mt-0.5">{child.icon}</span>
                          <div>
                            <div className="text-sm font-semibold text-navy group-hover:text-gold transition-colors">
                              {child.label}
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                              {child.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    scrolled
                      ? 'text-gray-600 hover:text-navy hover:bg-gray-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-gold rounded-lg hover:bg-gold-dark transition-all hover:-translate-y-0.5 shadow-[0_2px_8px_rgba(200,150,62,0.3)]"
            >
              Book a Strategy Call
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-navy' : 'text-white'}`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[72px] bg-white z-40 transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-6 py-8 space-y-2 overflow-y-auto max-h-[calc(100vh-72px)]">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                to={link.href}
                className="block px-4 py-3 text-base font-medium text-navy rounded-lg hover:bg-gray-50"
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="ml-6 mt-1 space-y-1">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gold rounded-lg hover:bg-gray-50"
                    >
                      <span>{child.icon}</span>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4">
            <Link
              to="/contact"
              className="block w-full text-center px-6 py-3 text-sm font-semibold text-white bg-gold rounded-lg hover:bg-gold-dark"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
