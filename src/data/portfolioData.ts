export interface ProjectItem {
  id: string;
  number: string;
  category: string;
  name: string;
  tagline: string;
  description: string;
  challenge?: string;
  actions?: string[];
  results?: string[];
  technologies: string[];
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface ServiceItem {
  number: string;
  name: string;
  description: string;
  tags?: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface PrincipleItem {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export interface TechCategory {
  number: string;
  category: string;
  title: string;
  description: string;
  skills: { name: string; tag: string; iconName?: string }[];
}

export const PERSONAL_INFO = {
  name: 'Farzeel Tariq',
  eyebrow: 'EXPERT SEO & GEO SPECIALIST',
  eyebrowSub: 'LAHORE, PAKISTAN',
  headline: "HI, I'M FARZEEL TARIQ",
  title: 'SEO Specialist | On-Page, Technical, Off-Page & Local SEO',
  email: 'farzeeltariq994@gmail.com',
  phone: '+92 344 7721924',
  whatsappNumber: '923447721924',
  web3FormsKey: '3f6c0e36-c3bb-46bc-855e-d0ee36ba2603',
  location: 'Lahore, Pakistan',
  linkedin: 'https://www.linkedin.com/in/farzeel-tariq-ab36a2270/',
  experienceYears: '4+ Years',
  heroSupportingCopy:
    'Turning Keywords Into Conversions. I help B2B, SaaS, and E-commerce businesses rank higher on Google, dominate local search, and scale high-intent organic traffic through data-driven SEO & GEO strategies.',
  heroTechLabel: 'AHREFS · SEMRUSH · GSC · GA4 · SCREAMING FROG · GEO',
  aboutBio:
    "I'm Farzeel Tariq, a results-driven SEO Specialist based in Lahore, Pakistan with 4 years of hands-on experience. I specialize in On-Page, Technical, Off-Page, and Local SEO, alongside cutting-edge Generative Engine Optimization (GEO & AI Overviews). I work with B2B, SaaS, and E-commerce businesses to fix complex crawl issues, build high-DR backlink profiles, outrank competitors, and turn organic search traffic into measurable revenue.",
};

export const MARQUEE_TECH_ROW_1 = [
  { name: 'Ahrefs', tag: 'Backlink & Keyword Intel' },
  { name: 'SEMrush', tag: 'SERP & Competitor Analysis' },
  { name: 'Google Search Console', tag: 'Indexing & Webmaster' },
  { name: 'Google Analytics 4', tag: 'Conversion Analytics' },
  { name: 'Screaming Frog', tag: 'Deep Technical Crawl' },
  { name: 'Microsoft Clarity', tag: 'User Behavior & Heatmaps' },
  { name: 'Ubersuggest', tag: 'Keyword Discovery' },
];

export const MARQUEE_TECH_ROW_2 = [
  { name: 'Technical SEO', tag: 'Site Speed & Core Vitals' },
  { name: 'On-Page SEO', tag: 'Semantic & Entity Search' },
  { name: 'Off-Page SEO', tag: 'High-DR Backlink Profiles' },
  { name: 'Local SEO & GMB', tag: '3-Pack & Citation Scaling' },
  { name: 'AI Overviews (GEO)', tag: 'LLM & AI Search Engine Rank' },
  { name: 'Schema Markup', tag: 'JSON-LD Rich Snippets' },
  { name: 'International SEO', tag: 'Multi-Region & Hreflang' },
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    number: '01',
    category: 'TECHNICAL & ARCHITECTURE',
    title: 'Technical SEO & Core Web Vitals',
    description:
      'Eliminating crawl inefficiencies, perfecting site architecture, and ensuring search engines crawl, render, and index your priority pages flawlessly.',
    skills: [
      { name: 'Screaming Frog Audits', tag: 'Deep Crawl' },
      { name: 'Core Web Vitals & Speed', tag: 'Page Performance' },
      { name: 'Schema.org & JSON-LD', tag: 'Rich Snippets' },
      { name: 'Crawl Budget Optimization', tag: 'Indexing Efficiency' },
      { name: 'Canonicalization & Redirects', tag: 'Duplicate Prevention' },
      { name: 'Robots.txt & XML Sitemaps', tag: 'Search Directives' },
      { name: 'JavaScript SEO & Rendering', tag: 'Modern Web' },
      { name: 'Mobile-First Optimization', tag: 'Viewport Usability' },
    ],
  },
  {
    number: '02',
    category: 'ON-PAGE & CONTENT',
    title: 'On-Page & Semantic SEO',
    description:
      'Mapping high-intent keywords to user search journeys, structuring semantic headings, and optimizing content for both Google algorithms and user conversion.',
    skills: [
      { name: 'Search Intent Mapping', tag: 'Commercial Intent' },
      { name: 'Semantic Keyword Research', tag: 'NLP & Topics' },
      { name: 'Internal Link Equity', tag: 'PageRank Flow' },
      { name: 'Metadata & CTR Optimization', tag: 'Click Velocity' },
      { name: 'Featured Snippet Targeting', tag: 'Position Zero' },
      { name: 'Content Pruning & Refresh', tag: 'Authority Preservation' },
      { name: 'Conversion-Focused Copy', tag: 'CRO Alignment' },
      { name: 'Heading & Hierarchy (H1-H6)', tag: 'Logical Structure' },
    ],
  },
  {
    number: '03',
    category: 'OFF-PAGE & AUTHORITY',
    title: 'Off-Page Authority & Link Acquisition',
    description:
      'Building defensible backlink portfolios through targeted outreach, authoritative digital PR, brand entity signals, and strategic link intersect analysis.',
    skills: [
      { name: 'High-DR Editorial Links', tag: 'Domain Authority' },
      { name: 'Competitor Link Intersect', tag: 'Gap Analysis' },
      { name: 'Brand Entity Building', tag: 'Knowledge Graph' },
      { name: 'Digital PR & Outreach', tag: 'White-Hat Outreach' },
      { name: 'Anchor Text Profiling', tag: 'Natural Distribution' },
      { name: 'Toxic Backlink Audits', tag: 'Disavow Remediation' },
      { name: 'Unlinked Brand Mentions', tag: 'Link Reclamation' },
      { name: 'Contextual Guest Posting', tag: 'Niche Relevance' },
    ],
  },
  {
    number: '04',
    category: 'LOCAL SEO & GEO',
    title: 'Local SEO, AI Overviews & Analytics',
    description:
      'Dominating Google Maps 3-Pack, optimizing for Generative Engine Optimization (GEO/AI Overviews), and leveraging GA4 and GSC to monitor compounding growth.',
    skills: [
      { name: 'Google Business Profile (GBP)', tag: 'Local 3-Pack' },
      { name: 'Local Citations & NAP', tag: 'Regional Consistency' },
      { name: 'AI Overviews (GEO)', tag: 'Generative Engine Rank' },
      { name: 'Google Search Console (GSC)', tag: 'Search Queries' },
      { name: 'Google Analytics 4 (GA4)', tag: 'Event & Revenue Attribution' },
      { name: 'Microsoft Clarity', tag: 'Session Heatmaps' },
      { name: 'International Targeting', tag: 'UK, Norway & North America' },
      { name: 'Local Review Management', tag: 'Reputation Signals' },
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    name: 'Comprehensive Technical SEO Audits',
    description:
      'In-depth deep-crawl audits diagnosing indexation roadblocks, canonical duplicates, rendering traps, broken redirect chains, and Core Web Vitals speed barriers.',
    tags: ['Screaming Frog', 'Crawl Budget', 'Core Web Vitals', 'Schema Markup'],
  },
  {
    number: '02',
    name: 'On-Page & Semantic Content Optimization',
    description:
      'Aligning website hierarchy, semantic topical clusters, keyword intent, and internal linking to rank for commercial, high-intent buyer searches.',
    tags: ['Search Intent', 'Topical Authority', 'CTR Optimization', 'Internal Links'],
  },
  {
    number: '03',
    name: 'Off-Page SEO & Authority Link Building',
    description:
      'Acquiring high-authority contextual editorial backlinks, digital PR coverage, and brand entity citations that protect your rankings from algorithm swings.',
    tags: ['Ahrefs', 'White-Hat Links', 'Competitor Gap', 'Entity PR'],
  },
  {
    number: '04',
    name: 'Local SEO & Google Business Profile (GBP)',
    description:
      'Elevating local businesses to the Google 3-Pack with localized geo-targeted landing pages, consistent NAP citation networks, and map rankings.',
    tags: ['Google Maps 3-Pack', 'Local Citations', 'Geo-Targeting', 'GMB'],
  },
  {
    number: '05',
    name: 'AI Overviews & GEO (Generative Engine Optimization)',
    description:
      'Structuring your domain knowledge graph and factual citations to secure answers in Google AI Overviews, Perplexity, and generative search engines.',
    tags: ['GEO Optimization', 'AI Overviews', 'Entity Graphs', 'Zero-Click'],
  },
  {
    number: '06',
    name: 'Performance Analytics & Conversion Tracking',
    description:
      'Implementing precision tracking with GA4, Google Search Console, and Microsoft Clarity to track keyword velocity, user heatmaps, and ROI.',
    tags: ['GA4', 'Search Console', 'Clarity Heatmaps', 'Conversion Tracking'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'project-1',
    number: '01',
    category: 'Targeted UK Local SEO & Off-Page',
    name: 'ThinkDone Solutions UK',
    tagline: 'High-DR UK citation network, local landing architecture & Top-3 commercial rankings',
    description:
      'Scaled the UK regional search presence for a specialized IT & digital services firm. Conducted an exhaustive technical crawl to resolve internal redirect loops, deployed localized Organization and Service schema, and executed targeted tier-1 UK citation and contextual backlink campaigns to dominate competitive regional queries.',
    challenge:
      'Low UK regional search footprint, crawl bloat, and missing localized authority signals against established London/UK competitors.',
    actions: [
      'Engineered localized UK landing page silos with bespoke Schema.org markup',
      'Built 45+ authoritative UK business citations with strict NAP consistency',
      'Acquired contextual tech niche backlinks with targeted UK anchor distribution',
    ],
    results: [
      '+240% increase in organic search impressions across Google UK within 4 months',
      'Top-3 Google rankings for high-intent target regional search queries',
      'Zero crawl errors and 98+ PageSpeed performance score',
    ],
    technologies: ['Local SEO', 'Off-Page Link Building', 'Technical Audit', 'Ahrefs', 'GSC', 'Schema.org'],
    col1Image1: '/projects-assets/01-ThinkDone-UK/col1Image1.png',
    col1Image2: '/projects-assets/01-ThinkDone-UK/col1Image2.png',
    col2Image: '/projects-assets/01-ThinkDone-UK/col2Image.png',
    liveUrl: 'https://thinkdonesolutions.co.uk/',
    featured: true,
  },
  {
    id: 'project-2',
    number: '02',
    category: 'Targeted Norwegian Market Off-Page & Profiles',
    name: 'LastExit Norway',
    tagline: 'Nordic entity establishment, localized link authority & brand presence',
    description:
      'Spearheaded international and regional SEO expansion for the Norwegian market (lastexit.no). Established localized business entity profiles, conducted thorough backlink audit to disavow spammy footprints, and established relevant Nordic contextual backlinks that built immediate trust with Google.no.',
    challenge:
      'Entering a saturated Scandinavian niche with newly launched domain and zero localized Nordic domain trust.',
    actions: [
      'Constructed complete Nordic brand entity web across authoritative regional directories',
      'Targeted contextual Scandinavian backlinks and niche editorial references',
      'Optimized meta tags and international search signals for Norwegian queries',
    ],
    results: [
      'Rapid indexation and organic keyword footprint across Google.no',
      'Established high-trust clean link profile with zero toxic footprint',
      'Steady month-over-month growth in qualified Scandinavian referral and organic traffic',
    ],
    technologies: ['International SEO', 'Off-Page Authority', 'Entity Optimization', 'SEMrush', 'Ahrefs'],
    col1Image1: '/projects-assets/02-LastExit-Norway/col1Image1.png',
    col1Image2: '/projects-assets/02-LastExit-Norway/col1Image2.png',
    col2Image: '/projects-assets/02-LastExit-Norway/col2Image.png',
    liveUrl: 'https://lastexit.no/',
    featured: true,
  },
  {
    id: 'project-3',
    number: '03',
    category: 'E-Commerce SEO & Technical Optimization',
    name: 'KUVRD',
    tagline: 'Heritage streetwear hero, fashion editorial & e-commerce scaling',
    description:
      'Directed full-funnel organic search optimization for Canada-based e-commerce brand Kuvrd.ca. Solved complex canonicalization and faceted navigation indexing bloat, enriched product pages with Offer and Product schema, and streamlined internal linking to drive buyer-intent shoppers directly to category landing pages.',
    challenge:
      'Faceted navigation duplicate content bloat, slow mobile LCP times, and low category keyword visibility in competitive Canadian search.',
    actions: [
      'Resolved canonical parameters and robots directives on dynamic product filter pages',
      'Configured automated Product Schema with price, stock status, and review ratings',
      'Revamped category copy and header tags targeting high-intent commercial keywords',
    ],
    results: [
      '+185% increase in non-branded organic e-commerce revenue',
      'Core Web Vitals scores elevated from failing to green across all mobile templates',
      'Rich snippet stars and pricing displayed across Google Canada SERP',
    ],
    technologies: ['E-Commerce SEO', 'Technical Audits', 'Core Web Vitals', 'Screaming Frog', 'GA4'],
    col1Image1: '/projects-assets/03-KUVRD/col1Image1.png',
    col1Image2: '/projects-assets/03-KUVRD/col1Image2.png',
    col2Image: '/projects-assets/03-KUVRD/col2Image.png',
    liveUrl: 'https://kuvrd.ca/',
    featured: true,
  },
  {
    id: 'project-4',
    number: '04',
    category: 'Healthcare On-Page & Local Discovery',
    name: 'Saibaan Care',
    tagline: 'Family care hero, home-care lifestyle showcase & care app presentation',
    description:
      'Architected complete On-Page and Local SEO strategy for Saibaan Care. Implemented medical schema standards, mapped patient care search intent across dedicated service pages, eliminated 404 dead ends, and set up Google Business Profile optimizations that generated consistent inbound patient inquiries.',
    challenge:
      'Weak visibility for local healthcare terms and high bounce rates on mobile visitors due to unoptimized page structure.',
    actions: [
      'Restructured clinical service pages around patient questions and conversational queries',
      'Optimized MedicalOrganization structured data and local map citations',
      'Configured Microsoft Clarity heatmaps to optimize patient appointment form conversions',
    ],
    results: [
      'Top 3 Map Pack rankings for target local healthcare and caretaking queries',
      '+310% surge in monthly organic consultation calls and form submissions',
      'Sub-2-second mobile load time with 100% crawl accessibility',
    ],
    technologies: ['Local SEO & GMB', 'On-Page SEO', 'Medical Schema', 'Microsoft Clarity', 'Ubersuggest'],
    col1Image1: '/projects-assets/04-Saibaan-Care/col1Image1.png',
    col1Image2: '/projects-assets/04-Saibaan-Care/col1Image2.png',
    col2Image: '/projects-assets/04-Saibaan-Care/col2Image.png',
    liveUrl: 'https://saibaancare.com/',
    featured: true,
  },
];

export const OTHER_VERIFIED_PROJECTS = [
  {
    name: 'Dave Dee Marketing',
    url: 'https://davedee.com/',
    category: 'Sales Strategy & Authority Organic Search',
    focus: 'On-Page Content & High-Converting Organic Funnels',
  },
  {
    name: 'ThinkDone Solutions Inc',
    url: 'https://thinkdonesolutionsinc.com/',
    category: 'Global Enterprise B2B IT SEO',
    focus: 'International Architecture & Technical Crawlability',
  },
  {
    name: 'Drawstick Creative Studio',
    url: 'https://drawstick.com/',
    category: 'Creative Agency Search Visibility',
    focus: 'Visual Search, Portfolio SEO & Brand SERP',
  },
  {
    name: 'Genesis C Service',
    url: 'https://genesiscservice.com/',
    category: 'Local Commercial & Service Intent',
    focus: 'Local Pack Dominance & Lead Generation',
  },
];

export const DEVELOPMENT_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'AUDIT & DIAGNOSE',
    description: 'Deep technical crawl, indexing analysis, and historical search footprint discovery.',
    details: [
      'Full-site Screaming Frog deep-crawl & architecture diagnosis',
      'Google Search Console indexing & coverage log inspection',
      'Core Web Vitals speed & mobile rendering assessment',
    ],
  },
  {
    number: '02',
    title: 'KEYWORD & COMPETITOR INTEL',
    description:
      'Uncovering high-intent buyer keywords, competitor content gaps, and search opportunity matrices.',
    details: [
      'Commercial & transactional search intent mapping',
      'Competitor link intersect & ranking deficit breakdown',
      'Semantic topical clusters & content hierarchy design',
    ],
  },
  {
    number: '03',
    title: 'ON-PAGE & TECHNICAL EXECUTION',
    description:
      'Fixing architectural blockers, deploying rich schema, and optimizing on-page elements.',
    details: [
      'JSON-LD structured data (Organization, Local, Product, FAQ)',
      'Internal linking equity redesign & anchor text calibration',
      'Canonical, redirect chain, and crawl budget resolution',
    ],
  },
  {
    number: '04',
    title: 'AUTHORITY & OFF-PAGE PR',
    description:
      'Building defensible domain authority with high-quality contextual links and regional citations.',
    details: [
      'High-DR contextual link acquisition & editorial outreach',
      'Strict NAP consistency local citation deployments',
      'Toxic link disavowals and brand entity reinforcement',
    ],
  },
  {
    number: '05',
    title: 'GEO, ANALYTICS & SCALING',
    description:
      'Preparing for AI Overviews, tracking via GA4/Clarity, and compounding rank gains.',
    details: [
      'Generative Engine Optimization (GEO) for AI Overviews',
      'GA4 event attribution & conversion goal tracking',
      'Bi-weekly performance reporting & iterative ranking scale',
    ],
  },
];

export const PRINCIPLES: PrincipleItem[] = [
  {
    number: '01',
    title: 'Data-Driven Strategy, Zero Guesswork',
    description:
      'Every optimization is rooted in empirical search data from Ahrefs, SEMrush, GSC, and live SERP behavior.',
    highlight: 'Audited metrics, quantifiable search intent, and proven ranking factors.',
  },
  {
    number: '02',
    title: 'Technical Precision & Crawl Integrity',
    description:
      'Search engines must parse your website effortlessly. Clean architecture and fast Core Web Vitals come first.',
    highlight: 'Sub-second speeds, zero crawl bloat, and airtight Schema.org markup.',
  },
  {
    number: '03',
    title: 'White-Hat Authority That Survives Updates',
    description:
      'Building natural, contextual link equity and brand signals that withstand Google core algorithm refreshes.',
    highlight: 'Long-term ranking resilience, natural anchor profiles, and high domain trust.',
  },
  {
    number: '04',
    title: 'Keywords That Drive Real Conversions',
    description:
      'Traffic is vanity; revenue is sanity. I target commercial intent keywords that turn visitors into paying clients.',
    highlight: 'Bottom-of-funnel keyword capture and CRO-aligned landing architecture.',
  },
];
