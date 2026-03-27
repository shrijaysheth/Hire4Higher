export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  rating: number
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    quote: "Hire4Higher transformed our entire analytics infrastructure. Their team didn't just build dashboards — they redesigned how we think about data across the organization. The clarity and speed of decision-making we have now is something we couldn't have imagined two years ago.",
    author: 'Michelle Canty',
    role: 'Director of Analytics',
    company: 'LegalZoom',
    rating: 5,
    initials: 'MC',
  },
  {
    quote: "What sets Hire4Higher apart is their strategic depth. They understood our FP&A processes, identified the bottlenecks, and built automated workflows that cut our reporting cycle by 60%. They operate like an extension of our team — not a vendor.",
    author: 'Jen Loo',
    role: 'VP of FP&A',
    company: 'LegalZoom',
    rating: 5,
    initials: 'JL',
  },
  {
    quote: "We needed a partner who could connect our marketing data, attribution models, and business intelligence into one coherent system. Hire4Higher delivered a solution that gave us true visibility into marketing ROI for the first time. The impact on our budget allocation has been transformative.",
    author: 'Paul Song',
    role: 'Director of Marketing Analytics',
    company: 'LegalZoom',
    rating: 5,
    initials: 'PS',
  },
]
