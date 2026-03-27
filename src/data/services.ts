export interface ServicePillar {
  slug: string
  name: string
  shortName: string
  description: string
  icon: string
  featured?: boolean
  tagline: string
  subServices: { slug: string; name: string; description: string }[]
}

export const services: ServicePillar[] = [
  {
    slug: 'ai-development',
    name: 'AI Development Services',
    shortName: 'AI Development',
    icon: '🧠',
    featured: true,
    tagline: 'Custom AI solutions that drive measurable business outcomes',
    description: 'From RAG pipelines and agentic workflows to generative AI applications, we architect and deploy AI systems that transform how your business operates — reducing costs, accelerating decisions, and unlocking new revenue streams.',
    subServices: [
      { slug: 'rag-as-a-service', name: 'RAG-as-a-Service', description: 'Enterprise retrieval-augmented generation pipelines for knowledge-intensive workflows.' },
      { slug: 'applied-ai', name: 'Applied AI', description: 'Production-grade machine learning models tailored to your domain and data.' },
      { slug: 'generative-ai', name: 'Generative AI', description: 'Content generation, code synthesis, and creative AI applications at scale.' },
      { slug: 'agentic-ai', name: 'Agentic AI', description: 'Autonomous AI agents that execute multi-step business processes end-to-end.' },
    ],
  },
  {
    slug: 'ecommerce-portal-development',
    name: 'eCommerce & Portal Development',
    shortName: 'eCommerce Development',
    icon: '🛒',
    tagline: 'High-converting storefronts and custom digital portals',
    description: 'We build and optimize Shopify, WooCommerce, and custom eCommerce experiences that convert — from headless architectures to AI-powered personalization and checkout optimization.',
    subServices: [
      { slug: 'shopify-development', name: 'Shopify Development', description: 'Custom Shopify Plus themes, apps, and migration from legacy platforms.' },
      { slug: 'woocommerce-development', name: 'WooCommerce Development', description: 'Scalable WooCommerce stores with custom plugins and integrations.' },
      { slug: 'custom-portal-development', name: 'Custom Portal Development', description: 'Bespoke web applications, B2B portals, and customer dashboards.' },
    ],
  },
  {
    slug: 'organic-marketing',
    name: 'Organic Marketing Services',
    shortName: 'Organic Marketing',
    icon: '📈',
    tagline: 'Sustainable growth through owned and earned channels',
    description: 'AI-enhanced SEO, content marketing, email automation, and social media management that build compounding organic traffic and customer relationships over time.',
    subServices: [
      { slug: 'search-engine-optimization', name: 'Search Engine Optimization', description: 'Technical SEO, content strategy, and link building for sustainable organic growth.' },
      { slug: 'ai-search-optimization', name: 'AI Search Optimization', description: 'Optimize for AI-powered search engines, featured snippets, and conversational queries.' },
      { slug: 'email-marketing', name: 'Email Marketing', description: 'Lifecycle email programs, Klaviyo automation, and revenue attribution.' },
      { slug: 'whatsapp-sms-marketing', name: 'WhatsApp & SMS Marketing', description: 'Conversational commerce and transactional messaging at scale.' },
      { slug: 'digital-pr', name: 'Digital PR', description: 'Earned media, thought leadership placement, and brand authority building.' },
      { slug: 'social-media-management', name: 'Social Media Management', description: 'Content calendars, community management, and social-first brand building.' },
    ],
  },
  {
    slug: 'paid-campaign-management',
    name: 'Paid Campaign Management',
    shortName: 'Paid Campaigns',
    icon: '🎯',
    tagline: 'AI-optimized paid media for maximum ROAS',
    description: 'Data-driven paid media across Google, Meta, TikTok, and programmatic channels — with AI-powered bid optimization, creative testing, and full-funnel attribution.',
    subServices: [
      { slug: 'search-engine-advertising', name: 'Search Engine Advertising', description: 'Google Ads and Bing Ads management with AI-driven bid strategies.' },
      { slug: 'social-media-advertising', name: 'Social Media Advertising', description: 'Meta, TikTok, LinkedIn, and Pinterest campaigns optimized for conversions.' },
      { slug: 'influencer-marketing', name: 'Influencer Marketing', description: 'End-to-end influencer programs from discovery to ROI measurement.' },
      { slug: 'sponsored-content-marketing', name: 'Sponsored Content Marketing', description: 'Native advertising and sponsored content partnerships that drive qualified traffic.' },
    ],
  },
  {
    slug: 'designing',
    name: 'Design Services',
    shortName: 'Design',
    icon: '🎨',
    tagline: 'Design that communicates, converts, and endures',
    description: 'From visual identity systems and packaging to UI/UX design and marketing collateral — we create design that strengthens brand perception and drives measurable business results.',
    subServices: [
      { slug: 'visual-identity-branding', name: 'Visual Identity & Branding', description: 'Logo systems, brand guidelines, typography, and color architecture.' },
      { slug: 'packaging-design', name: 'Packaging Design', description: 'Product packaging, label design, and unboxing experiences.' },
      { slug: 'ui-ux-design', name: 'UI/UX Design', description: 'User research, wireframing, prototyping, and interaction design.' },
      { slug: 'marketing-design', name: 'Marketing Design', description: 'Ad creative, social assets, email templates, and landing pages.' },
    ],
  },
  {
    slug: 'analytics-data-services',
    name: 'Analytics & Data Services',
    shortName: 'Data & Analytics',
    icon: '📊',
    tagline: 'Turn raw data into strategic advantage',
    description: 'We build modern data infrastructure and analytics capabilities — from warehousing and ETL pipelines to real-time dashboards and predictive modeling — so you make decisions with confidence.',
    subServices: [
      { slug: 'data-warehousing', name: 'Data Warehousing', description: 'Cloud data warehouse architecture on Snowflake, BigQuery, and Redshift.' },
      { slug: 'data-engineering', name: 'Data Engineering', description: 'ETL/ELT pipelines, data modeling, and real-time streaming infrastructure.' },
      { slug: 'data-analytics', name: 'Data Analytics', description: 'Descriptive, diagnostic, and predictive analytics for business intelligence.' },
      { slug: 'data-visualization-dashboarding', name: 'Data Visualization & Dashboarding', description: 'Interactive dashboards in Power BI, Tableau, Looker, and DOMO.' },
    ],
  },
  {
    slug: 'strategic-consulting',
    name: 'Strategic Consulting Services',
    shortName: 'Strategic Consulting',
    icon: '💡',
    tagline: 'Strategic clarity for your digital transformation',
    description: 'We work alongside leadership teams to define digital strategy, optimize business models, plan go-to-market execution, and identify where AI automation can unlock step-change efficiency gains.',
    subServices: [
      { slug: 'business-model-consulting', name: 'Business Model Consulting', description: 'Revenue model analysis, unit economics, and digital business design.' },
      { slug: 'gtm-strategy-consulting', name: 'GTM Strategy Consulting', description: 'Go-to-market planning, channel strategy, and launch execution frameworks.' },
      { slug: 'digital-transformation-consulting', name: 'Digital Transformation Consulting', description: 'End-to-end digital maturity assessment, roadmap, and change management.' },
      { slug: 'ai-process-automation', name: 'AI Process Automation', description: 'Identify, design, and deploy AI-powered workflow automation across your org.' },
    ],
  },
  {
    slug: 'micro-gcc-setup',
    name: 'MicroGCC Setup',
    shortName: 'MicroGCC',
    icon: '🌐',
    tagline: 'Your dedicated offshore team, fully integrated',
    description: 'Build a dedicated, fully managed offshore capability center with pre-vetted talent across development, design, data, and marketing — with significant cost efficiencies and zero operational overhead.',
    subServices: [],
  },
]
