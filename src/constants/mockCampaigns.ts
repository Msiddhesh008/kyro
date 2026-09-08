import type { Campaign } from '../types/campaign'

export const MOCK_CAMPAIGNS: Campaign[] = [
  {
    id: 'hope-for-aarav',
    title: 'Help Aarav fight leukemia',
    summary:
      'Seven-year-old Aarav needs urgent chemotherapy and hospital support in Mumbai.',
    story: `Aarav is only seven, but he already knows the corridors of Tata Memorial better than most adults know their neighbourhood. Earlier this year he was diagnosed with acute lymphoblastic leukemia. What began as unexplained fever and bruising turned into overnight admissions, bone-marrow tests, and a treatment plan that will stretch across many months.

His parents, Meera and Rohan, emptied their savings on diagnostics and the first round of chemotherapy. Relatives contributed what they could. Still, the bills for medicines, isolation-ward stays, blood products, and travel between their hometown and Mumbai keep rising. Doctors say Aarav is responding, but he needs the full protocol—and possibly bone-marrow support—to stay in remission.

This fundraiser covers hospital invoices, specialised drugs not fully reimbursed by insurance, nutritious food during treatment, and lodging near the hospital so one parent can stay with him. Every update we post will show receipts and clinical milestones. Aarav loves drawing trains and asking nurses for sticker charts when he is brave for a needle. Your support helps him keep fighting with dignity.`,
    category: 'Medical',
    goalAmount: 1200000,
    raisedAmount: 684500,
    donorCount: 412,
    coverImageUrl:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
    imageUrls: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1600&q=80',
    ],
    organizerName: 'Meera Sharma',
    location: 'Mumbai',
    createdAt: '2026-08-12',
    endsAt: '2026-10-15',
    featured: true,
  },
  {
    id: 'school-kits-bihar',
    title: 'School kits for 200 children in Bihar',
    summary:
      'Uniforms, notebooks, and bags so kids in rural Bihar can return to class with dignity.',
    story: `After the floods, many homes in our village still have damp walls and empty cupboards. Parents who once stretched wages to buy notebooks now struggle for grain and tarpaulin. Children have been arriving at the government primary school without uniforms, bags, or pencils—some sharing a single broken slate between siblings.

Teachers know that dignity matters as much as attendance. When a child sits in class looking prepared, they participate. When they are embarrassed by torn clothes or no stationery, they withdraw. This campaign funds complete school kits for two hundred students before the new term: two sets of uniforms, a bag, notebooks, geometry tools, and basic hygiene packs.

Local teachers and the village education committee will verify each child’s name against the school roll and distribute kits at a public ceremony so the process stays transparent. Leftover funds, if any, will stock a small classroom library. Education is how these families rebuild after water took so much. Help us put children back in class ready to learn.`,
    category: 'Education',
    goalAmount: 350000,
    raisedAmount: 198200,
    donorCount: 156,
    coverImageUrl:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1600&q=80',
    imageUrls: [
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1600&q=80',
    ],
    organizerName: 'Prakash Yadav',
    location: 'Bihar',
    createdAt: '2026-08-28',
    endsAt: '2026-10-20',
    featured: true,
  },
  {
    id: 'flood-relief-assam',
    title: 'Emergency flood relief for Assam families',
    summary:
      'Food, clean water, and temporary shelter for families displaced by monsoon floods.',
    story: `The river rose overnight. By morning, bamboo homes along the bank were under water, livestock floated in the current, and families waded toward the embankment with children on their shoulders. Assam Relief Collective has been running community kitchens and distributing drinking water since the first night of displacement.

Right now the urgent needs are dry rations for seven days, water purification tablets, tarpaulins for temporary shelter, and sanitary kits for women and girls. As waters recede we will shift to household essentials—utensils, bedding, and school supplies—so families can return without starting from absolute zero.

We publish daily distribution photos and volunteer counts. Funds are held by our registered trust and spent only against invoices from local suppliers. Floods are not a one-day story; recovery takes weeks. Your contribution keeps kitchens open and roofs over people who lost everything in a single monsoon night.`,
    category: 'Emergency',
    goalAmount: 800000,
    raisedAmount: 521000,
    donorCount: 603,
    coverImageUrl:
      'https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=1600&q=80',
    imageUrls: [
      'https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1600&q=80',
    ],
    organizerName: 'Assam Relief Collective',
    location: 'Assam',
    createdAt: '2026-09-01',
    endsAt: '2026-09-30',
    featured: true,
    verifiedNgo: true,
  },
  {
    id: 'rescue-street-dogs',
    title: 'Rescue and sterilise street dogs in Pune',
    summary:
      'Medical care, sterilisation, and shelter space for injured and abandoned street dogs.',
    story: `Pune’s street dogs share pavements, markets, and monsoon drains with us. When they are hit by vehicles or suffer mange and infected wounds, few clinics will take them without payment. Our small team at Paws & Care Trust rescues injured animals, runs sterilisation camps with municipal partners, and holds dogs in temporary kennels until they can return healthier to their territories.

Monsoon is the hardest season: wet wounds turn septic fast, and kennels fill beyond capacity. This campaign pays for emergency surgeries, antibiotics, vaccines, sterilisation theatre costs, and extra kennel rent through the rains. We document every rescue with before-and-after photos and veterinary notes.

Street dogs are community animals. Treating them humanely reduces suffering and conflict in neighbourhoods. If you have ever fed a dog outside your gate, this fundraiser is for that quiet bond—turned into medicine, sutures, and a second chance.`,
    category: 'Animals',
    goalAmount: 250000,
    raisedAmount: 142800,
    donorCount: 289,
    coverImageUrl:
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1600&q=80',
    imageUrls: [
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1600&q=80',
    ],
    organizerName: 'Paws & Care Trust',
    location: 'Pune',
    createdAt: '2026-07-20',
    endsAt: '2026-10-05',
  },
  {
    id: 'heart-surgery-ananya',
    title: 'Heart surgery for baby Ananya',
    summary:
      'Ananya needs congenital heart defect surgery at a paediatric cardiac centre in Chennai.',
    story: `Ananya was born with a hole in her heart—a congenital defect that makes every feed exhausting. Her lips turn blue when she cries. Cardiologists in Chennai have scheduled corrective surgery within weeks. Delay risks permanent damage to her lungs and heart muscle.

Her parents work daily-wage jobs. They have already sold jewellery and borrowed from neighbours for diagnostics and travel. The estimate for surgery, ICU days, ventilator support, and follow-up medicines is far beyond what they can raise alone. Relatives are exhausted; formal insurance does not cover enough of the paediatric cardiac package.

This campaign will pay the hospital directly against invoices for the operation and post-operative care. We will share discharge summaries and recovery photos with donors’ privacy respected. Ananya should be learning to smile without struggling for breath. Please help her parents give her that chance.`,
    category: 'Medical',
    goalAmount: 950000,
    raisedAmount: 310400,
    donorCount: 198,
    coverImageUrl:
      'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1600&q=80',
    imageUrls: [
      'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1600&q=80',
    ],
    organizerName: 'Ravi Krishnan',
    location: 'Chennai',
    createdAt: '2026-09-03',
    endsAt: '2026-10-12',
  },
  {
    id: 'girl-college-scholarship',
    title: 'Keep Priya in engineering college',
    summary:
      'Tuition and hostel fees for a first-generation learner from Rajasthan.',
    story: `Priya is the first in her family to enter an engineering college. She scored admission on merit to a government institute after years of studying by lantern light in their Rajasthan village. Last year her father passed away. The family’s income collapsed overnight. Hostel fees, semester tuition, and exam charges are now impossible without help.

Dropping out would waste not only her seat but the hope of an entire extended family that celebrated her selection. Priya wants to specialise in civil engineering and return to improve water infrastructure in drought-prone districts—the same problem that shaped her childhood.

This fundraiser covers one full academic year: tuition, hostel, exam fees, and a modest laptop stipend required for coursework. Funds will be paid to the college accounts office where possible, with receipts shared. Supporting Priya is supporting a pipeline of women engineers from first-generation homes.`,
    category: 'Education',
    goalAmount: 180000,
    raisedAmount: 96500,
    donorCount: 87,
    coverImageUrl:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80',
    imageUrls: [
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80',
    ],
    organizerName: 'Sunita Devi',
    location: 'Delhi',
    createdAt: '2026-08-05',
    endsAt: '2026-10-25',
  },
  {
    id: 'burn-care-support',
    title: 'Burn recovery care for factory accident survivor',
    summary:
      'Skin grafts, physiotherapy, and months of specialised dressings after a workplace fire.',
    story: `Imran was at his station when a factory fire spread through the workshop. He suffered severe burns on his hands, arms, and chest. Emergency care saved his life, but insurance covered only the first admission. He now faces repeated skin-graft surgeries, specialised dressings that must be changed frequently, and months of physiotherapy if he is to regain use of his hands.

He is the sole earner for his mother and younger sister. Without treatment he cannot return to any skilled work. The burn unit in Delhi has given a phased estimate for grafting sessions and rehab. Delays increase infection risk and scarring that physiotherapy cannot reverse later.

Contributions will go toward hospital packages, dressings, physiotherapy sessions, and travel for follow-ups. We will post surgical milestones and therapist notes (with consent). Imran asks for a chance to hold tools again—and to hold his family’s future without depending on charity forever.`,
    category: 'Medical',
    goalAmount: 700000,
    raisedAmount: 245000,
    donorCount: 134,
    coverImageUrl:
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1600&q=80',
    imageUrls: [
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1600&q=80',
    ],
    organizerName: 'Fatima Begum',
    location: 'Delhi',
    createdAt: '2026-08-18',
    endsAt: '2026-10-08',
  },
  {
    id: 'cyclone-shelter-rebuild',
    title: 'Rebuild cyclone-hit fishing boats in Odisha',
    summary:
      'Help coastal families repair boats and nets so they can earn again after the storm.',
    story: `When the cyclone hit the Odisha coast, it did not only tear roofs—it smashed the fishing boats that entire households depend on. Without a seaworthy boat, a family has no daily catch, no market income, and no way to repay micro-loans taken for the previous season’s nets and fuel.

Coastal Livelihoods NGO works with the village cooperative to verify twelve fishing families whose boats were damaged beyond quick patch repairs. This emergency fund covers timber, engine repairs or replacements, nets, and safety gear. Disbursement happens in stages after cooperative inspection so materials are used on the registered vessels.

Restoring boats restores dignity faster than long-term aid packages alone. These families want to fish again, not wait in queues. Your support turns storm wreckage back into livelihoods along a coastline that feeds far more than one village.`,
    category: 'Emergency',
    goalAmount: 600000,
    raisedAmount: 402300,
    donorCount: 221,
    coverImageUrl:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    imageUrls: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    ],
    organizerName: 'Coastal Livelihoods NGO',
    location: 'Odisha',
    createdAt: '2026-07-30',
    endsAt: '2026-09-28',
  },
]
