import { Code2, LayoutDashboard, Globe, ShoppingBag, Cpu, PackageSearch } from "lucide-react";

export interface ServiceDetail {
  slug: string;
  icon: typeof Code2;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  mainColor: string;
  secondaryColor: string;
  badge1: string;
  badge2: string;
  tooltipTitle: string;
  tooltipSub: string;
  heroHeadline: string;
  heroSubhead: string;
  timeline: string;
  techStack: string[];
  deliverables: { title: string; description: string }[];
  processSteps: { phase: string; title: string; description: string; output: string }[];
  faqs: { q: string; a: string }[];
  matchingPlan: string;
}

export const services: ServiceDetail[] = [
  {
    slug: "custom-websites",
    icon: Code2,
    title: "Custom Website Development",
    short: "Conversion-focused, lightning-fast websites tailored to your brand.",
    description:
      "Pixel-perfect, SEO-optimised websites built on modern frameworks. Fast to load, easy to maintain.",
    bullets: ["Bespoke UI/UX design", "Blazing-fast performance", "SEO & analytics ready"],
    mainColor: "#d60912",
    secondaryColor: "#ff4d54",
    badge1: "+99.8%",
    badge2: "+42.5%",
    tooltipTitle: "Speed & SEO Benchmark",
    tooltipSub: "Top 1% Lighthouse & core web vitals",
    heroHeadline: "Bespoke Websites Engineered for High Conversions and Lightning Speed",
    heroSubhead:
      "We design and build custom websites using Next.js, React, and TypeScript. No slow page builders, no security vulnerabilities — just clean, maintainable code engineered to convert visitors into qualified leads.",
    timeline: "7 – 14 Working Days",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    matchingPlan: "Starter Website",
    deliverables: [
      {
        title: "Bespoke Modern UI/UX Design",
        description:
          "Custom visual language, dark/light aesthetics, micro-interactions, and mobile-first responsive layouts tailored to your exact brand positioning.",
      },
      {
        title: "Sub-Second Page Performance",
        description:
          "Static generation and server-side optimization ensuring 95+ Google Lighthouse scores, fast LCP, and zero cumulative layout shifts.",
      },
      {
        title: "Technical SEO & Schema Markup",
        description:
          "Semantic HTML5 structure, structured metadata, canonical tags, automated XML sitemaps, and OpenGraph social previews configured from day one.",
      },
      {
        title: "Automated Lead Capture & CRM Sync",
        description:
          "Custom multi-step inquiry forms with instant email notifications, spam protection, and direct webhook sync to your CRM or Google Sheets.",
      },
      {
        title: "WhatsApp & Multi-Channel Live Chat",
        description:
          "One-tap mobile communication buttons, embedded inquiry widgets, and direct call routing for immediate prospect engagement.",
      },
      {
        title: "Analytics & Conversion Tracking",
        description:
          "Google Analytics 4 setup, event tracking for buttons and form submissions, privacy-first cookie banners, and heatmaps readiness.",
      },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Discovery & Strategy Blueprint",
        description:
          "We analyze your business goals, target customer personas, key conversion paths, and competitor positioning.",
        output: "Documented project scope & sitemap",
      },
      {
        phase: "Phase 02",
        title: "Interactive UI/UX Prototype",
        description:
          "You review high-fidelity page layouts, mobile screen designs, font typography, and brand design tokens before development.",
        output: "Clickable design prototype",
      },
      {
        phase: "Phase 03",
        title: "Frontend Engineering & Motion",
        description:
          "We build pixel-perfect Next.js React components with fluid Framer Motion animations and responsive CSS breakpoints.",
        output: "Live staging environment preview",
      },
      {
        phase: "Phase 04",
        title: "SEO, Performance & Security QA",
        description:
          "Comprehensive browser compatibility testing, speed optimization, mobile viewport audit, and security header checks.",
        output: "Lighthouse 95+ QA report",
      },
      {
        phase: "Phase 05",
        title: "Launch & Post-Launch Support",
        description:
          "Domain connection, SSL configuration, production deployment, site indexing on Google Search Console, and 14 days of dedicated post-launch support.",
        output: "Live production website & handoff docs",
      },
    ],
    faqs: [
      {
        q: "How fast can a custom website be launched?",
        a: "Our standard starter and business website packages are completed and launched within 7 to 14 working days following content and design approval.",
      },
      {
        q: "Will my website be fast on mobile devices?",
        a: "Yes. Every website we build is engineered mobile-first using lightweight code, image compression, and modern web frameworks to guarantee fast loading speeds on all devices.",
      },
      {
        q: "Do I own the website code and design?",
        a: "Yes. Once the final milestone is completed, you own 100% of the repository code, visual assets, content, and deployment configuration.",
      },
      {
        q: "Can I update text and images myself later?",
        a: "Absoloutely. We can integrate a headless CMS or clear content files so your team can easily update content without touching source code.",
      },
    ],
  },
  {
    slug: "web-apps",
    icon: LayoutDashboard,
    title: "Web Applications",
    short: "Powerful SaaS-grade web apps built for your team and customers.",
    description: "Full-stack apps with secure auth, real-time data, and elegant interfaces.",
    bullets: ["React + TypeScript", "Real-time backends", "Role-based access"],
    mainColor: "#0f9f9a",
    secondaryColor: "#2dd4bf",
    badge1: "+99.99%",
    badge2: "3.4x",
    tooltipTitle: "High Concurrency & Scale",
    tooltipSub: "Zero-latency real-time state sync",
    heroHeadline: "Full-Stack Web Applications Engineered for Scale, Security, and Speed",
    heroSubhead:
      "We design and engineer enterprise-ready SaaS platforms, internal admin dashboards, client portals, and real-time business web applications using React, Node.js, and Supabase / PostgreSQL.",
    timeline: "3 – 8 Weeks",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Tailwind CSS",
      "REST / WebSockets",
    ],
    matchingPlan: "Business Growth",
    deliverables: [
      {
        title: "Secure Authentication & Role Management",
        description:
          "JWT / OAuth2 authentication, multi-factor authentication (MFA), row-level security (RLS), and granular role-based access control (RBAC).",
      },
      {
        title: "Real-Time Data Synchronization",
        description:
          "Live database subscriptions, WebSockets channels, instant UI state updates, and optimistic user interface rendering.",
      },
      {
        title: "Complex Admin Dashboards & Analytics",
        description:
          "Data tables with multi-column filtering, CSV/PDF data exports, interactive charts (Recharts), and system activity logs.",
      },
      {
        title: "REST & GraphQL API Engineering",
        description:
          "Clean, typed API endpoints with rate limiting, input validation (Zod), comprehensive error handling, and Swagger/Postman documentation.",
      },
      {
        title: "Payment Gateway Integration",
        description:
          "Stripe or regional payment gateway integration for one-off payments, recurring subscription billing, invoices, and webhook handlers.",
      },
      {
        title: "Cloud Infrastructure & CI/CD",
        description:
          "Automated deployment pipelines, environment configuration (Staging & Production), database backup schedules, and monitoring alerts.",
      },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Architecture & Data Modeling",
        description:
          "Database schema design, entity relationship diagrams (ERD), API specifications, and cloud infrastructure planning.",
        output: "Technical architecture specification",
      },
      {
        phase: "Phase 02",
        title: "User Flow & Component System",
        description:
          "Wireframing application screens, modal states, navigation trees, and re-usable React component design tokens.",
        output: "Design system & component library",
      },
      {
        phase: "Phase 03",
        title: "Full-Stack Build & Sprint Reviews",
        description:
          "Weekly development sprints covering database implementation, backend APIs, frontend integration, and demo builds.",
        output: "Weekly working software build",
      },
      {
        phase: "Phase 04",
        title: "Security Audit & End-to-End QA",
        description:
          "Penetration testing basics, authentication edge-case validation, cross-browser testing, and stress/load testing.",
        output: "Security & QA sign-off document",
      },
      {
        phase: "Phase 05",
        title: "Production Deployment & Handover",
        description:
          "Live cloud deployment, database migration scripts, admin team training, developer documentation, and 30 days support.",
        output: "Live application & admin guide",
      },
    ],
    faqs: [
      {
        q: "What tech stack do you use for web applications?",
        a: "Our core stack is React, TypeScript, Next.js, Node.js, and PostgreSQL (via Supabase or AWS RDS), paired with Tailwind CSS for scalable styling.",
      },
      {
        q: "Can the web app handle complex user roles and permissions?",
        a: "Yes. We implement fine-grained Role-Based Access Control (RBAC) ensuring users only view and edit data authorized for their permission level.",
      },
      {
        q: "How do you handle backend security?",
        a: "We enforce strict row-level security (RLS), encrypted database fields, HTTPS/TLS, input validation with Zod schemas, and rate-limited endpoints.",
      },
    ],
  },
  {
    slug: "wordpress",
    icon: Globe,
    title: "WordPress Websites",
    short: "Premium WordPress sites that are fast, secure and easy to manage.",
    description:
      "Custom themes and headless WordPress — maintainable sites your team can update with confidence.",
    bullets: ["Custom themes", "WooCommerce", "Speed & security hardening"],
    mainColor: "#2563eb",
    secondaryColor: "#60a5fa",
    badge1: "100%",
    badge2: "+65%",
    tooltipTitle: "Hardened Security Matrix",
    tooltipSub: "Malware proof & instant caching",
    heroHeadline: "Premium, High-Performance WordPress Solutions Built Without Bloat",
    heroSubhead:
      "Say goodbye to slow, bloated themes and plugin conflicts. We craft custom-coded WordPress websites and headless WordPress architectures that are fast, secure, and effortless for your non-technical team to update.",
    timeline: "7 – 14 Working Days",
    techStack: [
      "WordPress",
      "PHP 8.2+",
      "Gutenberg",
      "WooCommerce",
      "MySQL",
      "WP-CLI",
      "Cloudflare",
    ],
    matchingPlan: "Starter Website",
    deliverables: [
      {
        title: "Bespoke Gutenberg Block Editor",
        description:
          "Custom-built block modules allowing content managers to build drag-and-drop landing pages without breaking code or layouts.",
      },
      {
        title: "Speed Hardening & Caching",
        description:
          "Object caching (Redis/Memcached), WebP image compression, database query cleanup, and Cloudflare CDN configuration for fast loading.",
      },
      {
        title: "Hardened Security Architecture",
        description:
          "Custom login endpoints, two-factor authentication (2FA), automated file integrity scans, firewall configuration, and daily automated cloud backups.",
      },
      {
        title: "Custom Post Types & Taxonomy",
        description:
          "Tailored content structures for case studies, team profiles, portfolios, services, and dynamic directory filtering.",
      },
      {
        title: "Multi-Language & Localization",
        description:
          "Seamless multi-language architecture (WPML/Polylang) supporting RTL languages such as Arabic alongside English.",
      },
      {
        title: "Seamless Plugin & API Integration",
        description:
          "HubSpot, Mailchimp, CRM webhook connections, and essential lightweight plugins configured without site drag.",
      },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Site Audit & Requirement Mapping",
        description:
          "Evaluating existing content, URL structures, plugin requirements, and SEO redirection maps.",
        output: "Migration & technical blueprint",
      },
      {
        phase: "Phase 02",
        title: "Custom Theme UI/UX Design",
        description:
          "Designing modern, clean website templates tailored specifically for your brand identity.",
        output: "Approved visual theme mockups",
      },
      {
        phase: "Phase 03",
        title: "Clean PHP & Block Development",
        description:
          "Coding lightweight custom themes and block elements adherence to WordPress coding standards.",
        output: "Staging site preview link",
      },
      {
        phase: "Phase 04",
        title: "Security & Cache Optimization",
        description:
          "Configuring server-level caching, SSL certificates, security blocklists, and mobile responsiveness.",
        output: "Security & speed audit pass",
      },
      {
        phase: "Phase 05",
        title: "Launch & Team Handoff Training",
        description:
          "Migrating to production host, final DNS cutover, and providing video training guides for your content team.",
        output: "Live site & admin video tutorials",
      },
    ],
    faqs: [
      {
        q: "Why choose custom WordPress development over pre-made templates?",
        a: "Pre-made templates are packed with bloated code and heavy plugins that slow down your site and expose security flaws. Custom WordPress code is lightweight, secure, fast, and built specifically for your needs.",
      },
      {
        q: "Can my team edit content without knowing code?",
        a: "Yes. We build custom visual Gutenberg blocks so your team can easily update text, swap photos, and create new pages visually.",
      },
    ],
  },
  {
    slug: "shopify-ecommerce",
    icon: ShoppingBag,
    title: "Shopify & E-commerce",
    short: "Storefronts that convert browsers into loyal customers.",
    description: "Custom Shopify themes and headless commerce builds that scale.",
    bullets: ["Custom Shopify themes", "Headless commerce", "Conversion optimisation"],
    mainColor: "#10b981",
    secondaryColor: "#34d399",
    badge1: "+88.4%",
    badge2: "2.8x",
    tooltipTitle: "Conversion & Revenue",
    tooltipSub: "Optimized checkout & instant load",
    heroHeadline: "High-Converting Shopify Storefronts Built for Maximum Sales",
    heroSubhead:
      "Turn store visitors into repeat customers. We build bespoke Liquid Shopify themes, custom product configurators, checkout conversion enhancements, and scalable headless commerce solutions.",
    timeline: "2 – 4 Weeks",
    techStack: [
      "Shopify Liquid",
      "Hydrogen",
      "Storefront API",
      "Tailwind CSS",
      "Klaviyo",
      "Stripe / Tap",
    ],
    matchingPlan: "Ecommerce Store",
    deliverables: [
      {
        title: "Custom Shopify Liquid Theme Design",
        description:
          "Unique, high-converting homepage, product detail pages (PDP), collection pages (PLP), and mobile shopping cart drawers.",
      },
      {
        title: "Optimized Mobile Cart & Checkout",
        description:
          "Sticky add-to-cart buttons, slide-out drawer cart, upsell recommendations, free shipping progress bars, and localized currency pickers.",
      },
      {
        title: "Product Variant & Customizer Setup",
        description:
          "Color swatches, size guides, custom product options, bundle builders, and dynamic inventory availability badges.",
      },
      {
        title: "Payment Gateway & Shipping Integration",
        description:
          "Integration with Stripe, Apple Pay, Google Pay, Mada, Tap, Tamara, Tabby buy-now-pay-later, and regional shipping rates.",
      },
      {
        title: "Email & SMS Marketing Automation",
        description:
          "Klaviyo integration for automated abandoned cart recovery, welcome series, product review requests, and post-purchase follow-ups.",
      },
      {
        title: "SEO & Speed Optimization",
        description:
          "Optimized Liquid code, lazy-loaded product imagery, schema product markup (rich snippets), and Google Merchant Center sync.",
      },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Ecommerce Strategy & Catalog Scope",
        description:
          "Reviewing product taxonomy, payment channels, shipping rules, and conversion goals.",
        output: "Storefront architecture proposal",
      },
      {
        phase: "Phase 02",
        title: "Conversion-Centric UX Mockups",
        description:
          "Designing high-impact product pages, collection layouts, and mobile cart drawer experiences.",
        output: "Approved Store UI design mockups",
      },
      {
        phase: "Phase 03",
        title: "Liquid Theme & App Integration",
        description:
          "Developing custom Liquid code, integrating required Shopify apps, and configuring payment gateways.",
        output: "Staging store preview link",
      },
      {
        phase: "Phase 04",
        title: "Test Orders & Checkout Testing",
        description:
          "Simulating live test purchases across payment options, testing discount codes, and mobile QA.",
        output: "End-to-end checkout verification",
      },
      {
        phase: "Phase 05",
        title: "Store Launch & Staff Training",
        description:
          "Connecting custom domain, transferring staff permissions, and guiding your team on product order management.",
        output: "Live store & order management guide",
      },
    ],
    faqs: [
      {
        q: "Can you migrate my store from WordPress or another platform to Shopify?",
        a: "Yes. We safely migrate your products, variants, customer data, and order history while preserving your existing SEO URLs.",
      },
      {
        q: "Do you support regional buy-now-pay-later services like Tamara and Tabby?",
        a: "Yes. We integrate regional payment providers including Tamara, Tabby, Tap, Mada, Stripe, and Apple Pay.",
      },
    ],
  },
  {
    slug: "custom-software",
    icon: Cpu,
    title: "Custom Software Solutions",
    short: "Tailored software that fits your business — not the other way around.",
    description:
      "End-to-end product engineering for complex domains — discovery, build, and long-term support.",
    bullets: ["Cloud-native architecture", "Secure by design", "Maintainable codebase"],
    mainColor: "#8b5cf6",
    secondaryColor: "#c084fc",
    badge1: "10x",
    badge2: "0%",
    tooltipTitle: "Enterprise Engineering",
    tooltipSub: "Fault-tolerant microservices",
    heroHeadline: "Bespoke Enterprise Software Engineered for Complex Business Needs",
    heroSubhead:
      "When off-the-shelf software falls short, we design, architect, and build custom digital products, workflow automation systems, API integrations, and cloud infrastructure tailored to your exact business model.",
    timeline: "4 – 12 Weeks",
    techStack: [
      "Node.js",
      "Python",
      "Go",
      "PostgreSQL",
      "Docker",
      "AWS / GCP",
      "Redis",
      "TypeScript",
    ],
    matchingPlan: "Custom Solution",
    deliverables: [
      {
        title: "Product Discovery & Systems Architecture",
        description:
          "In-depth technical discovery, workflow mapping, cloud infrastructure modeling, and data security planning.",
      },
      {
        title: "Custom Business Logic & Workflow Engines",
        description:
          "Automated document processing, custom approval chains, calculation engines, and scheduled background workers.",
      },
      {
        title: "Third-Party API & Legacy Integrations",
        description:
          "Seamless integration with ERP systems (SAP, Oracle, Odoo), CRM platforms, payment processors, and legacy databases.",
      },
      {
        title: "Cloud-Native Infrastructure & DevOps",
        description:
          "Containerized deployments (Docker), infrastructure as code (Terraform), load balancers, and auto-scaling cloud groups.",
      },
      {
        title: "Automated Testing & Code Hardening",
        description:
          "Unit tests, integration tests, automated regression testing, and security vulnerability scanning before release.",
      },
      {
        title: "SLA Support & Continuous Maintenance",
        description:
          "Guaranteed response times, uptime monitoring alerts, routine security updates, and feature enhancement roadmaps.",
      },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Technical Discovery & Scope Definition",
        description:
          "Mapping out system requirements, user roles, third-party APIs, data models, and milestone deliverables.",
        output: "Software requirements document (SRS)",
      },
      {
        phase: "Phase 02",
        title: "Architecture & System Prototype",
        description:
          "Designing database schemas, API specs, and clickable UI wireframes for key administrative workflows.",
        output: "Architecture blueprint & prototype",
      },
      {
        phase: "Phase 03",
        title: "Agile Engineering Sprints",
        description:
          "Two-week development cycles delivering demo-ready software builds with transparent progress tracking.",
        output: "Bi-weekly working software releases",
      },
      {
        phase: "Phase 04",
        title: "System Integration & Security QA",
        description:
          "Integrating external APIs, performing security audits, user acceptance testing (UAT), and stress testing.",
        output: "UAT sign-off & security clearance",
      },
      {
        phase: "Phase 05",
        title: "Production Deployment & Handover",
        description:
          "Deploying to production cloud environment, executing data migrations, and delivering source code & documentation.",
        output: "Source code repository & operations manual",
      },
    ],
    faqs: [
      {
        q: "How do you handle software maintenance after launch?",
        a: "We offer dedicated monthly support SLAs that cover security patches, cloud monitoring, performance tuning, and planned feature updates.",
      },
      {
        q: "Will we get full access to the source code?",
        a: "Yes. You receive complete ownership of the source code repository, documentation, and cloud deployment credentials.",
      },
    ],
  },
  {
    slug: "inventory",
    icon: PackageSearch,
    title: "Inventory Management",
    short: "Real-time inventory control across every channel and warehouse.",
    description:
      "Stock tracking, barcode scanning, supplier management, and live analytics in one platform.",
    bullets: ["Multi-warehouse", "Barcode / SKU support", "Live dashboards"],
    mainColor: "#f59e0b",
    secondaryColor: "#fbbf24",
    badge1: "100%",
    badge2: "+95%",
    tooltipTitle: "Live Stock Tracking",
    tooltipSub: "Multi-channel barcode & SKU sync",
    heroHeadline: "Real-Time Inventory & Multi-Warehouse Tracking Systems",
    heroSubhead:
      "Eliminate stockouts, manual spreadsheets, and fulfillment errors. We build custom inventory management platforms featuring real-time SKU tracking, barcode scanning, multi-warehouse sync, and automated supplier reordering.",
    timeline: "3 – 6 Weeks",
    techStack: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Barcode/QR Web APIs",
      "WebSockets",
      "Tailwind CSS",
    ],
    matchingPlan: "Custom Solution",
    deliverables: [
      {
        title: "Real-Time SKU & Barcode Tracking",
        description:
          "Scan, receive, pick, and pack items in real time using camera-based barcode scanning or hardware barcode readers.",
      },
      {
        title: "Multi-Warehouse & Channel Synchronization",
        description:
          "Centralized stock visibility across physical stores, central warehouses, Shopify stores, and sales channels.",
      },
      {
        title: "Automated Low-Stock & Reorder Alerts",
        description:
          "Set minimum threshold triggers with automatic email/SMS notifications and purchase order generator for suppliers.",
      },
      {
        title: "Batch, Serial & Expiry Tracking",
        description:
          "Track expiration dates, lot numbers, and serial codes for food, pharmaceuticals, electronics, and perishable goods.",
      },
      {
        title: "Role-Based Warehouse User Interfaces",
        description:
          "Simplified touch-friendly mobile interfaces for warehouse staff, packing teams, and store managers.",
      },
      {
        title: "Valuation & Stock Movement Analytics",
        description:
          "Real-time inventory valuation reports, fast/slow moving product analytics, and audit log histories.",
      },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Workflow & Warehouse Audit",
        description:
          "Mapping your current receiving, picking, packing, stock audit, and supplier ordering workflows.",
        output: "Inventory process roadmap",
      },
      {
        phase: "Phase 02",
        title: "System Architecture & UI Design",
        description:
          "Designing touch-friendly mobile scanning screens, SKU management dashboards, and database schemas.",
        output: "Approved inventory UI mockups",
      },
      {
        phase: "Phase 03",
        title: "Development & Channel Integration",
        description:
          "Building the core stock engine, integrating barcode scanning, and connecting sales channel webhooks.",
        output: "Staging system with live test data",
      },
      {
        phase: "Phase 04",
        title: "Warehouse Hardware & User Testing",
        description:
          "Testing barcode scanner hardware compatibility, mobile scanning speed, and multi-user concurrency.",
        output: "Hardware & scanning QA clearance",
      },
      {
        phase: "Phase 05",
        title: "Initial Stock Import & Go-Live",
        description:
          "Importing existing stock catalog via CSV/Excel, staff onboarding, and live system deployment.",
        output: "Live inventory platform & staff guide",
      },
    ],
    faqs: [
      {
        q: "Can the inventory system connect with our Shopify store?",
        a: "Yes. Stock levels automatically sync bi-directionally between your physical warehouse and Shopify store in real time.",
      },
      {
        q: "Does the system support mobile phones for barcode scanning?",
        a: "Yes. Warehouse staff can scan barcodes directly using smartphone cameras or standard handheld Bluetooth scanners.",
      },
    ],
  },
];

export type Service = (typeof services)[number];
