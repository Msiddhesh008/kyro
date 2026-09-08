import { APP_NAME } from './index'

export const TRUST_CONTACT = {
  email: 'hello@kyro.in',
  phone: '+91 98765 43210',
  followersLabel: '2.5M+ community members',
} as const

export const TRUST_SOCIAL = [
  { label: 'Facebook', href: 'https://facebook.com/' },
  { label: 'X', href: 'https://x.com/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
  { label: 'YouTube', href: 'https://youtube.com/' },
  { label: 'Instagram', href: 'https://instagram.com/' },
  { label: 'WhatsApp', href: 'https://wa.me/' },
] as const

export const TRUST_PAYMENT_METHODS = [
  'UPI',
  'Visa',
  'Mastercard',
  'RuPay',
  'Net Banking',
] as const

export interface FooterLink {
  label: string
  to: string
}

export const FOOTER_COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Causes',
    links: [
      { label: 'Medical', to: '/campaigns?category=Medical' },
      { label: 'Education', to: '/campaigns?category=Education' },
      { label: 'Emergency', to: '/campaigns?category=Emergency' },
      { label: 'Animals', to: '/campaigns?category=Animals' },
      { label: 'Browse all', to: '/campaigns' },
    ],
  },
  {
    title: 'How it works',
    links: [
      { label: 'Start a fundraiser', to: '/campaigns/new' },
      { label: 'Monthly giving', to: '/monthly' },
      { label: 'Fundraising for NGOs', to: '/ngo/apply' },
      { label: 'Browse fundraisers', to: '/campaigns' },
      { label: 'Withdraw funds', to: '/help#withdraw' },
    ],
  },
  {
    title: 'About us',
    links: [
      { label: `About ${APP_NAME}`, to: '/about' },
      { label: 'Success stories', to: '/success-stories' },
      { label: `Is ${APP_NAME} genuine?`, to: '/trust-safety#genuine' },
      { label: 'In the news', to: '/about#news' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Trust & Safety', to: '/trust-safety' },
      { label: 'FAQs & Help Center', to: '/help' },
      { label: 'Are campaigns genuine?', to: '/trust-safety#campaigns' },
      { label: 'Contact us', to: '/help#contact' },
    ],
  },
]

export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { label: 'Terms of Use', to: '/terms' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'AML Policy', to: '/terms#aml' },
  { label: 'Use of cookies', to: '/privacy#cookies' },
]

export const FOOTER_DISCLAIMER = `${APP_NAME} is an intermediary crowdfunding platform that helps individuals and organisations raise funds for medical treatment, education, emergencies, and verified causes. Contributions are made at the donor’s discretion. ${APP_NAME} does not provide investment returns or financial products. Demo content may be shown in this preview build.`

export const HELP_FAQS = [
  {
    id: 'start',
    question: `How do I start a fundraiser on ${APP_NAME}?`,
    answer:
      'Create an account, open Start a fundraiser, add your story, goal in INR, and photos. After a quick review checklist, you can share your campaign link with family and communities.',
  },
  {
    id: 'withdraw',
    question: 'How do withdrawals work?',
    answer:
      'When payouts are enabled for your campaign, funds are transferred to the bank account you verify. We use invoice-based disbursal for medical cases whenever hospital bills are provided.',
  },
  {
    id: 'fees',
    question: 'Are there platform fees?',
    answer:
      'Transparent fees are shown before you donate or withdraw. In this demo build, donations are recorded in mock mode only—no real charges are processed.',
  },
  {
    id: 'tax',
    question: 'Do I get an 80G receipt?',
    answer:
      'Some NGO campaigns may be eligible for tax receipts when the organiser provides valid documentation. Individual medical fundraisers often are not. Check each campaign’s tax note before giving.',
  },
  {
    id: 'contact',
    question: 'How can I reach support?',
    answer: `Email ${TRUST_CONTACT.email} or call ${TRUST_CONTACT.phone}. For urgent campaign issues, use Trust & Safety reporting guidance on the Trust & Safety page.`,
  },
] as const

export const SUCCESS_STORIES = [
  {
    campaignId: 'hope-for-aarav',
    title: 'Aarav’s leukemia treatment funded',
    summary:
      'Community donors helped cover chemotherapy cycles so Aarav’s family could focus on care, not hospital queues.',
    raisedLabel: '₹18L+ raised',
  },
  {
    campaignId: 'flood-relief-assam',
    title: 'Assam flood kitchens stayed open',
    summary:
      'Emergency relief kept community kitchens running for families who lost homes in a single monsoon night.',
    raisedLabel: '₹12L+ raised',
  },
  {
    campaignId: 'heart-surgery-ananya',
    title: 'Baby Ananya’s heart surgery',
    summary:
      'Parents shared discharge updates after strangers funded the life-saving operation against hospital invoices.',
    raisedLabel: 'Goal met',
  },
  {
    campaignId: 'school-kits-bihar',
    title: 'School kits reached Bihar classrooms',
    summary:
      'Local teachers confirmed delivery of bags, notebooks, and uniforms for children starting a new term.',
    raisedLabel: '200 children supported',
  },
] as const
