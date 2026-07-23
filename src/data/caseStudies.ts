import tamkeenImg from "@/assets/case-studies/Screenshot 2026-07-22 at 11.57.37 PM.png";
import kitchubImg from "@/assets/case-studies/Screenshot 2026-07-22 at 11.57.52 PM.png";
import ebnalarabImg from "@/assets/case-studies/ebnalarab.com.png";
import sirhaImg from "@/assets/case-studies/sirhadecor.com.png";
import portacabinsImg from "@/assets/case-studies/portacabins.png";
import royalImg from "@/assets/case-studies/royalessence.png";
import sparekartImg from "@/assets/case-studies/sparekart.png";
import dine1 from "@/assets/case-studies/dine3d1.png";
import dine2 from "@/assets/case-studies/dine3d2.png";
import dine3 from "@/assets/case-studies/dine3d3.png";
import dine4 from "@/assets/case-studies/dine3d4.png";
import dine5 from "@/assets/case-studies/dine3d5.png";
import dine6 from "@/assets/case-studies/dine3d6.png";
import civicImg from "@/assets/case-studies/civic-portal-ai.jpg";

export interface Project {
  slug: string;
  title: string;
  category: string;
  filterCategories: string[];
  shortDescription: string;
  longDescription: string;
  challenge?: string;
  approach?: string;
  whatWeDelivered?: string;
  valueStatement?: string;
  servicesHighlighted?: string[];
  thumbnail: string;
  gallery?: string[];
  coverGradient: string;
  features: string[];
  tags: string[];
  liveUrl?: string | null;
  status: "Live" | "Case Study Only" | "SaaS Product";
  altText: string;
  featured?: boolean;
  services?: string[];
  metrics?: { label: string; value: string }[];
  industry?: string;
  summary?: string;
  client?: string;
  cover?: string;
}

export type CaseStudy = Project;

export const projectsData: Project[] = [
  {
    slug: "tamkeen-zone",
    title: "Tamkeen Zone",
    category: "Corporate Website · Business Services · Saudi Arabia",
    filterCategories: ["Corporate Websites", "Business Services", "International Clients"],
    shortDescription:
      "A premium Saudi-focused corporate platform connecting businesses and individuals with company registration, recruitment, visa and HR support services.",
    longDescription:
      "Tamkeen Zone required a professional digital presence that could clearly present its business setup, recruitment, visa consultancy and HR services to companies, employers and individuals across Saudi Arabia. We created a modern, responsive and conversion-focused corporate website with structured service pages, clear consultation pathways, WhatsApp communication, professional brand visuals and an SEO-friendly content structure.",
    challenge:
      "Tamkeen Zone needed to present a complex range of professional business services—including commercial registration, manpower recruitment, visa endorsement, and HR consultancy—in a clear, trustworthy, and accessible structure for Saudi and international clients.",
    approach:
      "We created a modern, responsive and conversion-focused corporate website with structured service pages, clear consultation pathways, WhatsApp communication, professional brand visuals and an SEO-friendly content structure.",
    whatWeDelivered:
      "A modern, high-performance corporate platform with individual service landing sections, consultation request forms, direct WhatsApp integration, and Arabic-language navigation readiness.",
    valueStatement:
      "The website transforms a complex range of professional services into a clear, trustworthy and accessible digital experience for Saudi and international clients.",
    thumbnail: tamkeenImg.src,
    coverGradient: "from-slate-950 via-[#0f172a] to-blue-950",
    servicesHighlighted: [
      "Commercial registration support",
      "Manpower recruitment",
      "Overseas recruitment and visa endorsement",
      "Tourist visa consultancy",
      "HR consultancy",
      "Business consultation",
      "Saudi market support",
    ],
    features: [
      "Premium Saudi corporate design",
      "Responsive mobile-first interface",
      "Individual SEO-focused service pages",
      "Consultation and quotation forms",
      "WhatsApp contact integration",
      "Clear service navigation",
      "Professional gallery presentation",
      "Business credibility sections",
      "FAQ and process sections",
      "Strong conversion-focused calls to action",
      "Arabic-language navigation readiness",
      "Search-engine-friendly content structure",
    ],
    tags: ["Corporate Website", "Saudi Arabia", "Business Services", "SEO Focused"],
    liveUrl: "https://tamkeenzone.com",
    status: "Live",
    altText: "Tamkeen Zone Saudi corporate business setup and HR services platform",
    featured: true,
  },
  {
    slug: "v-prep",
    title: "V Prep",
    category: "AI Interview Preparation Platform",
    filterCategories: ["AI Solutions", "SaaS Products"],
    shortDescription:
      "An AI-powered interview preparation platform that provides realistic HR, behavioral, coding and technical interview practice with contextual follow-up questions and structured feedback.",
    longDescription:
      "V Prep is an online interview-practice platform designed to help candidates prepare for different stages of the hiring process. It creates role-relevant interview sessions and evaluates user responses with structured, actionable feedback. The behavioral interview module helps candidates organize their answers using the STAR method (Situation, Task, Action, Result). The platform can generate contextual follow-up questions based on previous responses rather than presenting a fixed list of questions. Coding interview practice uses code-focused AI models to generate programming challenges, review answers and provide guidance.",
    challenge:
      "Job candidates struggle to practice behavioral and coding interviews with realistic follow-ups and objective STAR-method feedback.",
    approach:
      "We developed an AI platform powered by LLMs and custom prompt chains that evaluates responses dynamically and structures tailored interview simulations.",
    whatWeDelivered:
      "A comprehensive preparation portal supporting HR simulations, code execution feedback, and personalized improvement scoring.",
    valueStatement:
      "Enables job seekers to build interview confidence with realistic AI interviewers and detailed STAR-framework performance evaluations.",
    thumbnail: civicImg.src,
    coverGradient: "from-slate-900 via-[#1e1b4b] to-indigo-950",
    features: [
      "HR interview practice",
      "Behavioral interview preparation",
      "STAR-method answer guidance",
      "Coding interview practice",
      "Technical interview simulation",
      "Contextual follow-up questions",
      "Structured answer evaluation",
      "Personalized improvement feedback",
    ],
    tags: [
      "Generative AI",
      "LangChain",
      "Interview Platform",
      "Structured Feedback",
      "AI Application",
    ],
    liveUrl: null,
    status: "Case Study Only",
    altText: "V Prep AI-powered interview preparation platform",
    featured: true,
  },
  {
    slug: "royal-essence",
    title: "Royal Essence",
    category: "Shopify Storefront / Luxury Fragrances",
    filterCategories: ["Ecommerce", "Shopify"],
    shortDescription:
      "A luxury e-commerce experience for an artisan Pakistani fragrance brand selling premium perfumes, oils and gift sets.",
    longDescription:
      "Royal Essence is an online store created for a luxury perfume and fragrance brand in Pakistan. The design emphasizes elegance and brand heritage with rich imagery, scent profile descriptions (top, heart and base notes), customer feedback and promotional banners.",
    challenge:
      "Selling luxury fragrances online requires conveying scent profiles and brand prestige visually through digital screens.",
    approach:
      "We designed an elegant Shopify storefront featuring olfactory pyramids (Top, Heart, Base notes), scent finder quizzes, and high-end typography.",
    whatWeDelivered:
      "A luxury perfume e-commerce experience with scent breakdown cards, gift set builders, and integrated payment gateways.",
    valueStatement:
      "Elevates brand perception and drives direct perfume orders by transforming fragrance notes into rich visual narratives.",
    thumbnail: royalImg.src,
    coverGradient: "from-zinc-950 via-[#18181b] to-purple-950",
    features: [
      "Luxury fragrance brand identity",
      "Interactive scent note breakdowns",
      "Custom gift bundle builder",
      "Mobile-optimized checkout",
      "Customer reviews & ratings",
      "Social media integration",
    ],
    tags: ["Shopify", "Luxury Perfumes", "Fragrance Brand", "Ecommerce Theme"],
    liveUrl: "https://royalessence.pk/",
    status: "Live",
    altText: "Royal Essence luxury Pakistani perfume Shopify storefront",
    featured: true,
  },
  {
    slug: "kitchub",
    title: "Kitchub Store",
    category: "Custom Ecommerce / Kitchen Tools",
    filterCategories: ["Ecommerce"],
    shortDescription:
      "A high-converting online storefront for premium kitchen tools, organizers, cookware and home utility products.",
    longDescription:
      "Kitchub Store is a modern ecommerce website designed for a kitchen tools brand selling products directly to homeowners, home cooks and culinary enthusiasts. The storefront features curated product galleries, clear feature highlights, customer review integration and an optimized checkout process.",
    challenge:
      "Kitchenware shoppers need quick visual assurance of product durability and practical utility before committing to an online purchase.",
    approach:
      "We designed a clean, mobile-first storefront emphasizing product video snippets, bundle deals, and single-click checkout flows.",
    whatWeDelivered:
      "A high-performance e-commerce store with structured product collections, customer reviews, and automated order confirmation.",
    valueStatement:
      "Drives consistent online sales for kitchen accessories through streamlined product presentation and mobile checkout optimization.",
    thumbnail: kitchubImg.src,
    coverGradient: "from-stone-900 via-[#1c1917] to-amber-950",
    features: [
      "Custom product page layouts",
      "Bundle and discount pricing",
      "Customer reviews and photo gallery",
      "Mobile-optimized shopping cart",
      "Fast checkout flow",
      "SEO product schema integration",
    ],
    tags: [
      "Custom Ecommerce",
      "Kitchenware Store",
      "Conversion Optimization",
      "Direct-to-Consumer",
    ],
    liveUrl: "https://kitchub.store/",
    status: "Live",
    altText: "Kitchub online kitchen tools storefront",
    featured: true,
  },
  {
    slug: "ebn-al-arab",
    title: "EBN AL ARAB",
    category: "Industrial Website · Porta Cabins · Saudi Arabia",
    filterCategories: ["Corporate Websites", "Industrial", "International Clients"],
    shortDescription:
      "A modern industrial website presenting durable porta cabins, modular buildings and custom fabrication services across Saudi Arabia.",
    longDescription:
      "EBN AL ARAB needed a strong online presence to showcase its porta cabins, modular structures and industrial capabilities to contractors, facility managers and businesses in Saudi Arabia. We developed a professional, responsive website that presents its cabin solutions, industrial services, technical advantages, project gallery and enquiry process in a clear and visually compelling format.",
    challenge:
      "EBN AL ARAB needed a digital platform to showcase heavy industrial solutions, porta cabins, modular buildings, and steel fabrication capabilities directly to commercial contractors and industrial buyers across Saudi Arabia.",
    approach:
      "We developed a professional, responsive website that presents its cabin solutions, industrial services, technical advantages, project gallery and enquiry process in a clear and visually compelling format.",
    whatWeDelivered:
      "A robust industrial website featuring porta cabin showcases, technical specifications, workshop product galleries, automated quotation forms, and direct WhatsApp lead routing.",
    valueStatement:
      "The website helps EBN AL ARAB present its manufacturing capabilities professionally, build confidence with commercial buyers and turn visitors into direct quotation enquiries.",
    thumbnail: ebnalarabImg.src,
    coverGradient: "from-stone-950 via-[#1c1917] to-amber-950",
    servicesHighlighted: [
      "Porta cabins",
      "Modular office cabins",
      "Staff accommodation cabins",
      "Security cabins",
      "Sanitary units",
      "Aluminum works",
      "Welding and steel fabrication",
      "Metal cutting and bending",
      "Customized cabin layouts",
      "Delivery and installation support",
    ],
    features: [
      "Strong industrial visual identity",
      "Responsive website design",
      "Product and service categorization",
      "Porta cabin showcase",
      "Project and workshop gallery",
      "Technical feature presentation",
      "Contact and quotation forms",
      "WhatsApp integration",
      "Company statistics section",
      "Process and benefits sections",
      "FAQ section",
      "Location and contact details",
      "Conversion-focused enquiry flow",
    ],
    tags: ["Industrial Website", "Porta Cabins", "Saudi Arabia", "Lead Generation"],
    liveUrl: "https://ebnalarab.com",
    status: "Live",
    altText: "EBN AL ARAB Saudi industrial porta cabins and modular construction website",
    featured: true,
  },
  {
    slug: "portacabins-online",
    title: "Porta Cabins Online",
    category: "Industrial Website · Modular Buildings · Saudi Arabia",
    filterCategories: ["Corporate Websites", "Industrial", "International Clients"],
    shortDescription:
      "A specialized Saudi platform for custom porta cabins, site office units, security cabins, and pre-fabricated modular structures.",
    longDescription:
      "Porta Cabins Online is a dedicated industrial platform designed to streamline pre-fabricated modular cabin selection for site contractors, project managers, and commercial operations across Saudi Arabia. The website features interactive 3D layout options, custom dimensional specifications, thermal insulation details, and an automated quotation calculator.",
    challenge:
      "Contractors and industrial buyers need quick access to standardized porta cabin dimensions, materials, and fast lead generation pathways.",
    approach:
      "We engineered a clean, high-performance industrial portal showcasing cabin models, technical specifications, and instant WhatsApp inquiry routing.",
    whatWeDelivered:
      "A high-impact modular construction site featuring cabin catalogs, quotation request forms, and mobile-optimized project showcases.",
    valueStatement:
      "Enables site managers and contractors across Saudi Arabia to request custom porta cabin quotes quickly with clear specification details.",
    thumbnail: portacabinsImg.src,
    coverGradient: "from-amber-950 via-[#271e16] to-stone-950",
    features: [
      "Site office cabin showcase",
      "Security & guard unit catalogs",
      "Sanitary & ablution pod specifications",
      "Custom cabin dimension calculator",
      "Instant WhatsApp quotation pathway",
      "Mobile-responsive industrial UI",
    ],
    tags: ["Porta Cabins", "Saudi Arabia", "Modular Buildings", "Industrial"],
    liveUrl: "https://portacabins.online/",
    status: "Live",
    altText: "Porta Cabins Online Saudi modular building platform",
    featured: true,
  },
  {
    slug: "res3d-saas",
    title: "Res3D Restaurant SaaS",
    category: "Multi-Tenant SaaS / Restaurant Technology",
    filterCategories: ["SaaS Products", "Web Platforms"],
    shortDescription:
      "A multi-tenant restaurant SaaS platform combining interactive 3D menus, digital ordering and restaurant inventory management within one centralized system.",
    longDescription:
      "Res3D is a restaurant technology platform designed to modernize menu discovery, customer ordering and restaurant operations. Customers can explore food items through interactive 3D menu experiences before placing an order. Restaurant teams can manage menu items, orders, stock and operational information through dedicated dashboards. The system follows a multi-tenant SaaS model, allowing multiple restaurants to operate from the same platform while maintaining separate restaurant data, users, menus, orders and inventory.",
    challenge:
      "Traditional online menus lack engagement, and managing multi-location food ordering alongside inventory often requires separate disjointed software tools.",
    approach:
      "We engineered a multi-tenant web application featuring WebGL 3D menu previews, instant QR ordering, and real-time stock reduction workflows.",
    whatWeDelivered:
      "A complete SaaS ecosystem with multi-restaurant onboarding, role-based dashboards, and interactive 3D menu visualization.",
    valueStatement:
      "Empowers restaurant brands to increase average order values through immersive 3D presentation while synchronizing inventory across digital channels.",
    thumbnail: dine1.src,
    gallery: [dine1.src, dine2.src, dine3.src, dine4.src, dine5.src, dine6.src],
    coverGradient: "from-zinc-900 via-[#18181b] to-zinc-950",
    features: [
      "Multi-tenant restaurant onboarding",
      "Individual restaurant workspaces",
      "Interactive 3D food-menu presentation",
      "QR-based digital menu access",
      "Customer ordering workflow",
      "Order-status management",
      "Menu and category management",
      "Inventory and stock management",
      "Restaurant administration dashboard",
      "Role-based access control",
    ],
    tags: [
      "Multi-Tenant SaaS",
      "3D Menu",
      "Restaurant Management",
      "Inventory System",
      "Food Ordering",
    ],
    liveUrl: null,
    status: "SaaS Product",
    altText: "Res3D multi-tenant 3D restaurant ordering and inventory platform",
    featured: true,
  },
  {
    slug: "sparekart",
    title: "SpareKart",
    category: "Automotive Marketplace / Multi-Vendor Ecommerce",
    filterCategories: ["Ecommerce", "Web Platforms"],
    shortDescription:
      "A specialized online marketplace connecting customers with verified automobile spare-parts sellers across Pakistan. The platform helps users discover suitable parts by vehicle brand, model and year.",
    longDescription:
      "SpareKart is a multi-vendor automotive ecommerce platform designed to simplify the process of finding and purchasing car spare parts. Customers can browse products across categories such as engines, brakes, electrical components, lighting, interiors and body parts. The platform presents products from multiple sellers and includes information such as brand, seller, pricing, stock status, discounts, reviews and product compatibility. Its vehicle-fitment experience helps customers find parts according to their car's make, model and year.",
    challenge:
      "Finding compatible automotive spare parts online is notoriously difficult due to part number mismatches and unverified seller listings.",
    approach:
      "We built a multi-vendor marketplace featuring a vehicle fitment filter (Year, Make, Model), seller verification tools, and structured parts categorization.",
    whatWeDelivered:
      "A live automotive marketplace connecting verified suppliers with buyers across Pakistan with transparent pricing and compatibility checks.",
    valueStatement:
      "Simplifies spare part procurement for vehicle owners while giving automotive vendors a centralized digital sales channel.",
    thumbnail: sparekartImg.src,
    coverGradient: "from-neutral-900 via-[#1f1f23] to-red-950",
    features: [
      "Multi-vendor automotive marketplace",
      "Verified seller profiles",
      "Year, make and model fitment filter",
      "Categorized parts discovery",
      "Product comparison and pricing",
      "Seller reviews and ratings",
      "Order tracking and management",
      "Responsive shopping experience",
    ],
    tags: ["Multi-Vendor Ecommerce", "Automotive Marketplace", "Fitment Search", "Spare Parts"],
    liveUrl: "https://www.sparekart.live/",
    status: "Live",
    altText: "SpareKart automotive multi-vendor spare parts marketplace",
    featured: true,
  },
  {
    slug: "sirha-decor",
    title: "Sirha Decor",
    category: "Shopify Storefront / Personalized Home Decor",
    filterCategories: ["Ecommerce", "Shopify"],
    shortDescription:
      "A custom Shopify store for personalized wooden gifts, photo prints, wall art and laser-engraved home decor.",
    longDescription:
      "Sirha Decor is an e-commerce website specializing in personalized home decor and customized gift products. The storefront features custom product customizer options where customers can upload photos, select custom text and preview customized items.",
    challenge:
      "Personalized decor products require clear photo upload options, variant previews, and custom text inputs on mobile screens.",
    approach:
      "We built a Shopify store integrated with custom field app blocks, photo upload handlers, and instant live preview mockups.",
    whatWeDelivered:
      "A tailored Shopify theme with custom product personalization inputs, quick cart drawer, and automated shipping calculators.",
    valueStatement:
      "Enables customers to order personalized laser-engraved items seamlessly, reducing custom order support inquiries.",
    thumbnail: sirhaImg.src,
    coverGradient: "from-neutral-900 via-[#27272a] to-emerald-950",
    features: [
      "Shopify theme customization",
      "Product image upload & custom text fields",
      "Live preview for customized items",
      "Mobile-first responsive theme",
      "Automated order tracking",
      "WhatsApp customer support integration",
    ],
    tags: ["Shopify", "Personalized Decor", "Product Customizer", "Custom Theme"],
    liveUrl: "https://sirhadecor.com/",
    status: "Live",
    altText: "Sirha Decor personalized wooden gifts Shopify storefront",
    featured: true,
  },
];

export const caseStudies = projectsData;
