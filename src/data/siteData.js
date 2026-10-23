
import {
  Award,
  BadgeCheck,
  Building2,
  Calculator,
  FileCheck2,
  Globe2,
  HandHeart,
  HeartHandshake,
  HeartPulse,
  Landmark,
  Layers3,
  LifeBuoy,
  LockKeyhole,
  ReceiptIndianRupee,
  Rocket,
  Scale,
  ShieldCheck,
  ShoppingBag,
  Truck,
  UsersRound,
  Workflow,
} from "lucide-react";

/* =========================================================
   SERVICES
   Each color maps to the matching icon background in
   Services.css: blue, orange, green, or indigo.
   ========================================================= */

export const services = [
  {
    title: "Private Limited Company",
    description:
      "End-to-end company incorporation with MCA filing, DSC, DIN and PAN/TAN support.",
    icon: Building2,
    color: "blue",
  },
  {
    title: "GST Registration",
    description:
      "Get your GSTIN with guided documentation and expert review.",
    icon: ReceiptIndianRupee,
    color: "orange",
  },
  {
    title: "Trademark Registration",
    description:
      "Search, file and protect your brand across 45 classes.",
    icon: ShieldCheck,
    color: "green",
  },
  {
    title: "LLP Registration",
    description:
      "Incorporate a limited liability partnership with full compliance support.",
    icon: UsersRound,
    color: "indigo",
  },
  {
    title: "NGO Registration",
    description:
      "Get guidance for NGO formation, documentation and registration requirements.",
    icon: HandHeart,
    color: "orange",
  },
  {
    title: "ISO Certification",
    description:
      "Get support with ISO documentation, certification and ongoing compliance.",
    icon: BadgeCheck,
    color: "green",
  },
  {
    title: "CSR Registration",
    description:
      "Get guidance on CSR-1 registration and documentation for eligible organisations.",
    icon: HeartHandshake,
    color: "blue",
  },
  {
    title: "Import Export Code",
    description:
      "Get IEC guidance for DGFT registration and international trade.",
    icon: Globe2,
    color: "orange",
  },
];

/* =========================================================
   STATS
   ========================================================= */

export const stats = [
  { value: "10,000+", label: "Businesses Served" },
  { value: "4.9/5", label: "Customer Rating" },
  { value: "50+", label: "Compliance Experts" },
  { value: "25+", label: "Cities Served" },
];

/* =========================================================
   WHY CHOOSE US
   ========================================================= */

export const benefits = [
  {
    title: "Fast Turnaround",
    description:
      "Clear timelines and a streamlined process from documentation to filing.",
    icon: Rocket,
  },
  {
    title: "Dedicated Experts",
    description:
      "Get guidance from professionals who understand business compliance.",
    icon: UsersRound,
  },
  {
    title: "Transparent Pricing",
    description:
      "Know what you are paying for with simple, upfront service packages.",
    icon: Scale,
  },
  {
    title: "100% Online Process",
    description:
      "Submit documents and track your work without unnecessary visits.",
    icon: Workflow,
  },
  {
    title: "Compliance Assistance",
    description:
      "Stay informed about filings, renewals and important compliance dates.",
    icon: FileCheck2,
  },
  {
    title: "End-to-End Support",
    description:
      "From registration to ongoing compliance, we stay with your business.",
    icon: LifeBuoy,
  },
];

/* =========================================================
   HOW IT WORKS
   ========================================================= */

export const steps = [
  {
    number: "01",
    title: "Submit Requirement",
    description:
      "Tell us what your business needs and get the right service recommendation.",
  },
  {
    number: "02",
    title: "Document Verification",
    description:
      "Our team reviews your documents and highlights anything missing.",
  },
  {
    number: "03",
    title: "Government Filing",
    description:
      "We prepare and submit the required applications and filings.",
  },
  {
    number: "04",
    title: "Approval & Certificate",
    description:
      "Receive your registration, certificate or filing confirmation.",
  },
  {
    number: "05",
    title: "Post Registration Support",
    description:
      "Continue with compliance guidance whenever your business needs it.",
  },
];

/* =========================================================
   INDUSTRIES
   ========================================================= */

export const industries = [
  { title: "Technology", icon: Layers3 },
  { title: "E-commerce", icon: ShoppingBag },
  { title: "Healthcare", icon: HeartPulse },
  { title: "Education", icon: Landmark },
  { title: "Manufacturing", icon: Building2 },
  { title: "Logistics", icon: Truck },
  { title: "Finance", icon: ReceiptIndianRupee },
  { title: "Consulting", icon: UsersRound },
];

/* =========================================================
   BUSINESS STRUCTURE COMPARISON
   ========================================================= */

export const comparisons = [
  ["Liability Protection", "Strong", "Strong", "Strong"],
  ["Compliance", "Moderate", "Moderate", "Higher"],
  ["Tax Benefits", "Available", "Available", "Available"],
  ["Investment Opportunities", "Excellent", "Good", "Limited"],
  [
    "Suitable Business Size",
    "Growing & scalable",
    "Professional / growing",
    "Small / founder-led",
  ],
];

/* =========================================================
   TESTIMONIALS
   ========================================================= */

export const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Founder, TechNova",
    quote:
      "The process was simple, transparent and much faster than we expected.",
  },
  {
    name: "Priya Iyer",
    role: "Founder, UrbanCart",
    quote:
      "Their team explained every step clearly and helped us stay on top of compliance.",
  },
  {
    name: "Rohan Khanna",
    role: "Director, BuildGrid",
    quote:
      "Professional support from documentation through registration. Highly recommended.",
  },
  {
    name: "Sneha Rao",
    role: "Founder, NourishWell",
    quote:
      "We finally have one reliable partner for registrations and ongoing compliance.",
  },
];

/* =========================================================
   PRICING
   ========================================================= */

export const pricing = [
  {
    name: "Starter",
    price: "₹1,999",
    description: "For a focused registration requirement.",
    features: [
      "GST or MSME Registration",
      "Basic documentation",
      "Email support",
      "5-day delivery",
    ],
  },
  {
    name: "Professional",
    price: "₹6,999",
    description:
      "For businesses ready to build a compliant foundation.",
    featured: true,
    features: [
      "Pvt Ltd / LLP Registration",
      "PAN / TAN / DSC / DIN",
      "GST + MSME bundled",
      "Dedicated expert",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description:
      "For growing teams with ongoing compliance needs.",
    features: [
      "Full incorporation suite",
      "Trademark + ISO support",
      "Annual compliance retainer",
      "CA / CS on call",
      "Quarterly reviews",
    ],
  },
];

/* =========================================================
   FAQ
   ========================================================= */

export const faqs = [
  [
    "How long does company registration take?",
    "Most standard registrations can be completed within the applicable government processing timeline once documents are complete. Your expert will provide a more precise estimate after reviewing the requirement.",
  ],
  [
    "What documents do I need?",
    "Requirements depend on the service. Typically, identity, address, business and supporting documents are required. We provide a clear checklist before filing.",
  ],
  [
    "Are government fees included?",
    "Package inclusions vary by service. We clearly separate professional fees and applicable government charges before you proceed.",
  ],
  [
    "Can I register from any city in India?",
    "Yes. Our process is designed to be online and can support businesses across India, subject to service-specific requirements.",
  ],
  [
    "Do you also handle GST and annual filings?",
    "Yes. We can support GST registrations, filings and other recurring compliance requirements depending on your selected plan.",
  ],
  [
    "What if my company name gets rejected?",
    "Our team can help you review alternative names and proceed with the next available option according to the applicable process.",
  ],
  [
    "Will I get a dedicated expert?",
    "Professional and enterprise plans include dedicated expert support. Starter customers receive guided support through the selected channel.",
  ],
  [
    "Can I switch from LLP to Pvt Ltd later?",
    "A business structure can sometimes be changed or reorganized depending on the circumstances and applicable rules. We can assess your case.",
  ],
  [
    "Do you help with trademark renewal?",
    "Yes. Trademark-related support can include filing, documentation and renewal assistance.",
  ],
  [
    "Is my data safe?",
    "We use controlled access and secure workflows for client documents. Only the information needed to process your service should be shared.",
  ],
];
