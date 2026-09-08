export const MONTHLY_PRESETS = [200, 300, 500] as const
export const MONTHLY_MIN_AMOUNT = 100
export const MONTHLY_DEFAULT_AMOUNT = 300

export const MONTHLY_HERO_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
    alt: 'Student with books',
  },
  {
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    alt: 'Healthcare support',
  },
  {
    src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80',
    alt: 'Animal welfare',
  },
  {
    src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80',
    alt: 'Community support',
  },
] as const

export const MONTHLY_BENEFITS = [
  {
    title: "It's Affordable",
    description: 'No matter what you give, every contribution will make an impact.',
  },
  {
    title: "It's a Community",
    description: 'Be part of an inspiring group, changing lives every month.',
  },
  {
    title: "It's Transparent",
    description: "You'll receive regular updates on your contributions.",
  },
] as const

export const MONTHLY_STEPS = [
  {
    step: 1,
    title: 'Automatic monthly contributions',
    body: 'Your monthly contribution is matched to a patient in urgent need of life-saving treatment.',
    cta: 'Contribute Monthly',
    tone: 'blue' as const,
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    step: 2,
    title: 'Complete transparency on your contributions',
    body: 'We ensure every contribution reaches the patient each month with clear updates.',
    cta: 'Gift A Life',
    tone: 'green' as const,
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
  },
  {
    step: 3,
    title: 'Stories that keep you connected',
    body: 'See how your steady support funds treatments, school kits, and emergency care across India.',
    cta: 'Contribute Monthly',
    tone: 'gold' as const,
    image:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
  },
] as const

export const MONTHLY_IMPACT_STATS = [
  { value: '4,21,908', label: 'members contributing monthly' },
  { value: '670+', label: 'children have been saved' },
  { value: '₹25 million+', label: 'raised for patients' },
  { value: '540', label: 'life-changing treatments funded' },
] as const

export const MONTHLY_TRUST_STATS = [
  { value: '72+', label: 'lakh contributors' },
  { value: '1,40,000', label: 'lives saved & counting' },
  { value: '24×7', label: 'expert support available' },
] as const

export const MONTHLY_FAQS = [
  {
    question: 'How are my contributions being utilized?',
    answer:
      'Monthly gifts are pooled and matched to verified medical and cause campaigns with the most urgent need that month.',
  },
  {
    question: 'How do I cancel my Monthly Giving?',
    answer:
      'You can pause or cancel anytime from your account settings. Changes take effect before the next billing cycle.',
  },
  {
    question: 'How can I get updates about the patients?',
    answer:
      'We send regular email and SMS updates with stories and outcomes from campaigns your gift supported.',
  },
  {
    question: "Is my payment secured when I'm contributing?",
    answer:
      'Yes. Payments use industry-standard encryption. In this demo, pledges are recorded locally in mock mode only.',
  },
  {
    question: 'How are the patients verified?',
    answer:
      'Campaign organisers submit documents; our team reviews medical and identity proofs before funds are released.',
  },
] as const

export const MONTHLY_TESTIMONIAL = {
  quote:
    "I was powerless against my daughter's cancer & I could not afford treatment. When I found out that kind strangers contributed for her life-saving transplant, I cried tears of relief.",
  attribution: '– Shanu (Mother of 5-year-old Zoya)',
} as const

export const MONTHLY_MAP_CALLOUT =
  "1760+ Contributors Raised ₹20,00,000 for Durga's Cancer Treatment" as const
