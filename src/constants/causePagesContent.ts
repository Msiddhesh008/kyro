export type CauseSlug =
  | 'medical'
  | 'memorial'
  | 'children'
  | 'education'
  | 'animal'
  | 'others'

export interface CauseSection {
  title: string
  body: string
  bullets?: string[]
  imageUrl?: string
  imageAlt?: string
}

export interface CausePageContent {
  slug: CauseSlug
  label: string
  heroTitle: string
  heroLead: string
  heroImageUrl: string
  heroImageAlt: string
  browseTo: string
  sections: CauseSection[]
}

export const CAUSE_PAGES: Record<CauseSlug, CausePageContent> = {
  medical: {
    slug: 'medical',
    label: 'Medical',
    heroTitle: 'Medical crowdfunding when treatment cannot wait',
    heroLead:
      'Hospital bills, surgeries, and long recoveries push many Indian families into sudden debt. A medical fundraiser helps you gather support quickly while care continues.',
    heroImageUrl:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
    heroImageAlt: 'Healthcare professionals supporting a patient',
    browseTo: '/campaigns?category=Medical',
    sections: [
      {
        title: 'Why medical fundraising matters in India',
        body: 'Out-of-pocket spending still covers a large share of healthcare costs for many households. Even insured families face gaps for diagnostics, ICU stays, transplants, cancer protocols, and post-operative medicines. Crowdfunding does not replace hospitals—it helps close the gap between what care costs and what a family can pay right now.',
        imageUrl:
          'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Hospital care setting',
      },
      {
        title: 'What medical campaigns typically cover',
        body: 'Clear, invoice-backed needs build donor trust. Organisers usually raise for specific treatment phases rather than open-ended “help us somehow” asks.',
        bullets: [
          'Surgeries, chemotherapy, dialysis, and ICU packages',
          'Diagnostic scans, blood products, and specialist consults',
          'Travel and stay for patients referred to metro hospitals',
          'Rehabilitation, physiotherapy, and discharge medicines',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Medical equipment and care',
      },
      {
        title: 'Documents that strengthen a campaign',
        body: 'Donors give more confidently when they can see the clinical need. Share hospital estimates, doctor notes, and progress updates as treatment moves forward. Protect privacy—blur Aadhaar numbers and unnecessary personal identifiers in photos.',
        imageUrl:
          'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Doctor reviewing documents',
      },
      {
        title: 'How funds usually move to care',
        body: 'Wherever possible, request disbursal against hospital invoices or to a verified bank account linked to the patient or guardian. Regular updates—admission, surgery date, discharge—keep contributors connected to outcomes, not just amounts raised.',
      },
      {
        title: 'Start a medical fundraiser on Kyro',
        body: 'Tell the patient’s story in plain language, set an INR goal tied to estimates, add photos of care (with consent), and share the link with family, workplaces, and community groups. Small, early gifts often unlock wider sharing.',
        imageUrl:
          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Supportive conversation in a care setting',
      },
    ],
  },
  memorial: {
    slug: 'memorial',
    label: 'Memorial',
    heroTitle: 'Memorial fundraisers that honour a life with purpose',
    heroLead:
      'When someone passes away, families often face funeral costs and unfinished wishes. A memorial campaign can support last rites, clear medical debt, or continue a cause they cared about.',
    heroImageUrl:
      'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1600&q=80',
    heroImageAlt: 'Quiet memorial moment at dusk',
    browseTo: '/campaigns',
    sections: [
      {
        title: 'What a memorial campaign can be',
        body: 'Memorial fundraising is not only about expenses. Many families channel grief into something lasting—scholarships, community kitchens, tree planting, or support for other patients with the same illness.',
        imageUrl:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Person reflecting outdoors',
      },
      {
        title: 'Common uses of memorial funds',
        body: 'Be specific about how contributions will be used. Donors appreciate clarity during a sensitive time.',
        bullets: [
          'Funeral, cremation, and related family travel costs',
          'Outstanding hospital bills after a loss',
          'Memorial scholarships or education support',
          'Donations to NGOs aligned with the person’s values',
        ],
        imageUrl:
          'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Peaceful landscape',
      },
      {
        title: 'Tone, photos, and privacy',
        body: 'Write with dignity. Share memories and photos the family is comfortable publishing. Avoid graphic medical images. Name a trusted organiser who will communicate updates and thank donors.',
      },
      {
        title: 'Keeping contributors informed',
        body: 'A short update after rites are completed, or when a memorial gift reaches a school or NGO, closes the loop. Transparency matters even more when emotions are high and many people are giving from a distance.',
        imageUrl:
          'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Community gathering in support',
      },
      {
        title: 'Begin a memorial fundraiser',
        body: 'Create a campaign with a clear goal, a respectful story, and a named purpose. Share privately first with close circles, then wider networks when the family is ready.',
        imageUrl:
          'https://images.unsplash.com/photo-1518199266791-5375a241beb2?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Hands holding a candle',
      },
    ],
  },
  children: {
    slug: 'children',
    label: 'Children',
    heroTitle: 'Raise funds for children’s health, learning, and safety',
    heroLead:
      'From paediatric treatment to school readiness and protection programmes, child-focused campaigns help caregivers act before a crisis becomes permanent disadvantage.',
    heroImageUrl:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1600&q=80',
    heroImageAlt: 'Children learning together',
    browseTo: '/campaigns?category=Education',
    sections: [
      {
        title: 'Why child-focused fundraising is different',
        body: 'Children cannot advocate for themselves in hospital corridors or school offices. Caregivers need fast, trustworthy support for nutrition, therapy, surgeries, and learning materials—especially when a single medical event threatens years of schooling.',
        imageUrl:
          'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Children in a classroom',
      },
      {
        title: 'Causes families and NGOs often fund',
        bullets: [
          'Paediatric surgeries and long-term therapy',
          'Nutrition, vaccines, and disability aids',
          'School fees, kits, and digital access for learning',
          'Shelter, counselling, and protection programmes',
        ],
        body: 'State what the child needs in the next 30–90 days, then outline longer support if recovery or schooling will continue.',
        imageUrl:
          'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Child studying with books',
      },
      {
        title: 'Safeguarding and consent',
        body: 'Always seek guardian consent before posting photos. Prefer images that protect identity when risk is high. Never share school IDs, home addresses, or medical record numbers publicly.',
      },
      {
        title: 'Showing impact with care',
        body: 'Updates can include milestones—discharge, first day back at school, therapy progress—without oversharing clinical detail. Donors want to know a child is safer or learning again.',
        imageUrl:
          'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Students in school',
      },
      {
        title: 'Start a children’s cause campaign',
        body: 'Write in the caregiver’s or NGO’s voice, attach estimates or school fee notices, and invite relatives, alumni groups, and local communities to share the link.',
        imageUrl:
          'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Open book and learning materials',
      },
    ],
  },
  education: {
    slug: 'education',
    label: 'Education',
    heroTitle: 'Education fundraisers that keep learning on track',
    heroLead:
      'Fees, exam coaching, laptops, and hostel costs can stop a promising student mid-way. Crowdfunding helps students and schools raise what scholarships alone may not cover in time.',
    heroImageUrl:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1600&q=80',
    heroImageAlt: 'Student with books',
    browseTo: '/campaigns?category=Education',
    sections: [
      {
        title: 'The real cost of staying in school',
        body: 'Tuition is only part of the burden. Uniforms, transport, exam fees, devices for online classes, and coaching for competitive exams add up—especially for first-generation learners in smaller towns.',
        imageUrl:
          'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Graduation celebration',
      },
      {
        title: 'What education campaigns fund',
        bullets: [
          'School and college semester fees',
          'Books, lab kits, and assistive tools',
          'Laptops or tablets required for coursework',
          'Hostel, mess, and exam travel for outstation students',
        ],
        body: 'Link the ask to a deadline—admission, exam form, or fee due date—so donors understand the urgency.',
        imageUrl:
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Students collaborating',
      },
      {
        title: 'Proof that builds trust',
        body: 'Fee circulars, admission letters, marksheets (with sensitive IDs masked), and a short note from a teacher or mentor help donors verify need without invading privacy.',
      },
      {
        title: 'Community and alumni power',
        body: 'Education campaigns often grow through alumni WhatsApp groups, coaching batchmates, and local associations. A clear story plus a shareable goal converts sympathy into semester-saving gifts.',
        imageUrl:
          'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Classroom discussion',
      },
      {
        title: 'Launch an education fundraiser',
        body: 'Introduce the student, the course or school, the exact INR gap, and what success looks like next term. Update donors when fees are paid or exams are cleared.',
        imageUrl:
          'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Student writing notes',
      },
    ],
  },
  animal: {
    slug: 'animal',
    label: 'Animal',
    heroTitle: 'Animal welfare fundraising for rescues and care',
    heroLead:
      'Street animals and shelter pets need sterilisation, surgery, and daily feed. Organisers use crowdfunding to pay vets quickly and keep rescues running between donations of food and supplies.',
    heroImageUrl:
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1600&q=80',
    heroImageAlt: 'Dogs outdoors',
    browseTo: '/campaigns?category=Animals',
    sections: [
      {
        title: 'Why animal campaigns need steady support',
        body: 'Emergency rescues are visible; the quieter costs—antibiotics, sterilisation camps, kennel rent, and caretaker stipends—decide whether an animal recovers or returns to the street untreated.',
        imageUrl:
          'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Dog looking at camera',
      },
      {
        title: 'Typical fundraising needs',
        bullets: [
          'Accident trauma surgery and post-op boarding',
          'ABC (sterilisation) and vaccination drives',
          'Shelter feed, cleaning, and veterinary stock',
          'Transport for injured animals to clinics',
        ],
        body: 'Separate emergency appeals from monthly shelter costs so donors know whether they are funding one rescue or ongoing care.',
        imageUrl:
          'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Cat resting',
      },
      {
        title: 'Evidence donors look for',
        body: 'Vet estimates, before/after treatment photos, and municipal or NGO registration details (when available) reduce scepticism. Show discharge or release updates when animals recover.',
      },
      {
        title: 'Working with communities',
        body: 'Feeders, RWAs, and student volunteers amplify animal campaigns locally. Clear location tags and clinic names help people verify and volunteer, not only donate.',
        imageUrl:
          'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Person with a dog',
      },
      {
        title: 'Start an animal welfare campaign',
        body: 'Describe the animal or shelter need, attach vet costs, and post short recovery updates. Invite supporters to share within neighbourhood and pet-lover groups.',
        imageUrl:
          'https://images.unsplash.com/photo-1516734219185-db2ca0f9b0f6?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Puppy close-up',
      },
    ],
  },
  others: {
    slug: 'others',
    label: 'Others',
    heroTitle: 'Other causes—community, creativity, and urgent needs',
    heroLead:
      'Not every fundraiser fits a single label. Disaster relief, community projects, sports, arts, and livelihood restarts all find a home when the story and use of funds are clear.',
    heroImageUrl:
      'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1600&q=80',
    heroImageAlt: 'Community volunteers working together',
    browseTo: '/campaigns',
    sections: [
      {
        title: 'When “other” is the right category',
        body: 'Use this path for projects that cross themes—flood relief with livelihood restart, a community library, a sports team’s tournament travel, or tools for a small creative venture with social impact.',
        imageUrl:
          'https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Emergency relief context',
      },
      {
        title: 'Examples that work well',
        bullets: [
          'Disaster relief kits and temporary shelter',
          'Community water, sanitation, or kitchen projects',
          'Sports, arts, and cultural group expenses',
          'Tools or inventory to restart work after a setback',
        ],
        body: 'Name beneficiaries, geography, and timelines. Ambiguous “support our dream” campaigns raise less than concrete, dated plans.',
        imageUrl:
          'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'People collaborating on a cause',
      },
      {
        title: 'Budget transparency',
        body: 'Break the goal into line items—materials, transport, labour, contingency. Donors trust organisers who show how each rupee maps to delivery on the ground.',
      },
      {
        title: 'Reporting back',
        body: 'Photos of distribution, attendance lists (privacy-safe), or a short video of the completed project turn one-time givers into repeat supporters for the next phase.',
        imageUrl:
          'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Hands offering support',
      },
      {
        title: 'Create your campaign',
        body: 'Pick a precise title, explain who benefits, upload a simple budget, and share with communities closest to the problem. Browse related campaigns for inspiration, then start yours on Kyro.',
        imageUrl:
          'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80',
        imageAlt: 'Volunteers planning together',
      },
    ],
  },
}
