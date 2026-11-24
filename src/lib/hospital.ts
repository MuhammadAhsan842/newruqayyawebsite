export const hospital = {
  name: "Ruqayya Medical Center",
  shortName: "RMC",
  tagline: "Trusted care, close to home.",
  urduLine: "آپ کے قریب، معتبر طبی دیکھ بھال",
  description:
    "Ruqayya Medical Center is a trusted multi-specialty hospital in Nespak Housing Scheme, Lahore. We provide accessible, patient-centered care with modern diagnostics, surgical facilities, 24/7 emergency cover, and experienced specialists.",
  address: {
    line1: "103-C2, Sutlej Avenue",
    line2: "Nespak Housing Scheme, Block C-2",
    landmark: "Near Ghazi Chowk",
    city: "Lahore",
    region: "Punjab",
    country: "Pakistan",
    postalCode: "54770",
    mapsQuery: "Ruqayya Medical Center, Nespak Housing Scheme, Lahore",
    lat: 31.438414,
    lng: 74.285817,
  },
  phoneDisplay: "0300 9400020",
  phoneTel: "+923009400020",
  whatsapp: "923124567497",
  whatsappDisplay: "0312 4567497",
  email: "ruqayyahospital786@gmail.com",
  hours: "Open 24 hours — emergency and critical care never close",
  clinicHours:
    "Specialist clinics run on posted schedules. Reception confirms the next available slot.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/doctors", label: "Doctors" },
  { href: "/inside", label: "Inside" },
  { href: "/appointments", label: "Book" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Visit us" },
] as const;

export type Service = {
  slug: string;
  title: string;
  summary: string;
  details: string[];
  audience: string;
};

export const services: Service[] = [
  {
    slug: "emergency",
    title: "24/7 Emergency & Critical Care",
    summary:
      "Walk in at any hour. Stabilisation, urgent assessment, and admission pathways without waiting for weekday clinic hours.",
    details: [
      "Round-the-clock emergency desk and on-call clinical cover",
      "Rapid assessment for trauma, chest pain, breathing difficulty, and acute medical illness",
      "Critical-care support with a path to inpatient beds when needed",
      "Direct phone line so families in Nespak and Township can reach us before they arrive",
    ],
    audience: "Families who need a hospital they can reach at 2 a.m., not only at 2 p.m.",
  },
  {
    slug: "outpatient",
    title: "Outpatient Clinics",
    summary:
      "Same-building OPD for medicine, surgery, orthopedics, gynecology, dermatology, and psychology — so follow-up does not mean a city-wide commute.",
    details: [
      "Scheduled specialist clinics with reception-managed appointments",
      "Walk-in OPD for general complaints during posted hours",
      "Orthopedics, trauma, and joint-replacement clinic with Dr. Waqas Ahmad Bhullar",
      "Continuity of care: labs, pharmacy, and review in one place",
      "Clear next-visit instructions before you leave the desk",
    ],
    audience: "Residents of Nespak, Township, and nearby societies who want local specialists.",
  },
  {
    slug: "surgery",
    title: "General & Laparoscopic Surgery",
    summary:
      "Elective and urgent surgery led by Prof. Dr. Mohammad Akmal Shafiq, including minimally invasive laparoscopic procedures.",
    details: [
      "Hernia, gallbladder, thyroid, breast, and abdominal surgery",
      "Laparoscopic (keyhole) options where clinically appropriate",
      "Pre-operative assessment and post-operative follow-up on site",
      "Emergency surgical cover coordinated with the 24/7 desk",
    ],
    audience: "Patients who want an experienced FCPS surgeon without travelling across Lahore.",
  },
  {
    slug: "orthopedics",
    title: "Orthopedics, Trauma & Joint Replacement",
    summary:
      "Bone, joint, and injury care with Dr. Waqas Ahmad Bhullar — fractures, trauma, and arthroplasty in the same hospital as X-ray and pharmacy.",
    details: [
      "Fracture and trauma assessment, including injuries that cannot wait for a weekday downtown list",
      "Arthroplasty (joint replacement) consultation and follow-up",
      "Clinic review of pain, stiffness, and post-injury mobility",
      "Digital X-ray on site, then a clear next step — rest, plaster, or theatre",
    ],
    audience: "Patients with bone and joint problems who need a named orthopedic surgeon in Nespak.",
  },
  {
    slug: "gynecology",
    title: "Gynecology",
    summary:
      "Women’s health clinics with Dr. Shazia Ali — antenatal care, gynecologic consultation, and discreet evening hours.",
    details: [
      "Antenatal visits, menstrual and fertility-related concerns, and routine women’s health",
      "Evening clinics designed for working women and families",
      "Coordination with diagnostics and pharmacy in the same building",
      "Respectful, private consultation rooms",
    ],
    audience: "Women who prefer a neighbourhood hospital over a downtown waiting lounge.",
  },
  {
    slug: "dermatology",
    title: "Dermatology & Cosmetology",
    summary:
      "Skin, hair, and facial aesthetic care with Dr. Asim Suhail — medical dermatology and cosmetic consultation in the same hospital.",
    details: [
      "Medical dermatology for rashes, acne, pigmentation, hair, and chronic skin disease",
      "Facial aesthetic and cosmetology consultation",
      "Private clinic rooms and a clear plan before any procedure",
      "Follow-up in the same building as pharmacy and labs",
    ],
    audience: "Patients who want a named dermatologist in Nespak, not a mall-counter skin clinic.",
  },
  {
    slug: "medicine",
    title: "General Medicine",
    summary:
      "Adult medicine for diabetes, blood pressure, infections, chest complaints, and everyday illness — with time to explain the plan.",
    details: [
      "Chronic disease follow-up and acute medical care",
      "Health checks and investigation review",
      "Referral into surgery, gynecology, or psychology when needed",
      "Evening clinic access with Dr. Waseem Iqbal",
    ],
    audience: "Adults who need a physician they can return to, not a one-off counter visit.",
  },
  {
    slug: "psychology",
    title: "Psychology",
    summary:
      "Clinical psychology with Ms. Najma Badar for anxiety, depression, family strain, and confidence — treated as healthcare, not a last resort.",
    details: [
      "Confidential sessions for adults and families",
      "Support for anxiety, low mood, stress, and relationship concerns",
      "Coordination with medical teams when symptoms overlap with physical illness",
      "Appointments that respect privacy at reception",
    ],
    audience: "People who want mental health care inside a trusted medical center.",
  },
  {
    slug: "diagnostics",
    title: "Diagnostics",
    summary:
      "Digital X-ray on the building and laboratory support on the same floor, so treatment decisions do not wait on a second trip across the city.",
    details: [
      "Digital X-ray advertised and available at the center",
      "Chughtai Lab collection at reception for pathology",
      "Results routed back to the treating doctor",
      "Pre-operative work-up for surgical patients",
    ],
    audience: "Patients who need answers before they leave the building.",
  },
  {
    slug: "pharmacy",
    title: "Hafiz Medicos",
    summary:
      "The ground-floor pharmacy of Ruqayya Medical Center, run by its owner. Collect the script downstairs before you go home.",
    details: [
      "Hafiz Medicos is the in-house pharmacy at street level on Sutlej Avenue",
      "Meet the owner at the counter — this is not an anonymous chain shop",
      "Dispensing for OPD, admitted patients, and walk-in prescriptions",
      "Ask reception if a medicine is in stock before you leave the clinic desk",
    ],
    audience: "Anyone who should not have to hunt for a late-night pharmacy after discharge.",
  },
  {
    slug: "online-consultation",
    title: "Online Consultations",
    summary:
      "Video or phone review with our specialists when travel is difficult — follow-ups, second opinions, and first advice.",
    details: [
      "Book an online slot through WhatsApp or the appointment form",
      "Share previous reports before the call when you have them",
      "Escalate to an in-person visit if the doctor advises examination",
      "Same specialists you would see in clinic — not an anonymous call centre",
    ],
    audience: "Patients outside Lahore, or families who need a first conversation tonight.",
  },
];

export type DoctorPortrait = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Doctor = {
  slug: string;
  name: string;
  honorific: string;
  specialty: string;
  credentials: string;
  experience: string;
  clinic: string;
  bio: string;
  focus: string[];
  portrait?: DoctorPortrait;
};

export const doctors: Doctor[] = [
  {
    slug: "prof-dr-mohammad-akmal-shafiq",
    name: "Prof. Dr. Mohammad Akmal Shafiq",
    honorific: "Professor of Surgery",
    specialty: "General & Laparoscopic Surgeon",
    credentials: "MBBS (King Edward Medical University), FCPS (Surgery)",
    experience: "30+ years",
    clinic: "Typically afternoon surgical clinic; confirm the day’s list with reception.",
    bio: "Professor Shafiq is the surgical anchor of Ruqayya Medical Center. Patients across Lahore know him for hernia, gallbladder, thyroid, breast, and laparoscopic work — and for a calm explanation of what the operation will actually involve.",
    focus: [
      "Laparoscopic and open general surgery",
      "Hernia, gallbladder, thyroid, and breast procedures",
      "Emergency surgical assessment",
    ],
    portrait: {
      src: "/media/dr-akmal.jpg",
      alt: "Prof. Dr. Mohammad Akmal Shafiq, general and laparoscopic surgeon at Ruqayya Medical Center",
      width: 680,
      height: 680,
    },
  },
  {
    slug: "dr-waqas-ahmad-bhullar",
    name: "Dr. Waqas Ahmad Bhullar",
    honorific: "Consultant Orthopedic, Trauma & Arthroplasty Surgeon",
    specialty: "Orthopedics, Trauma & Joint Replacement",
    credentials: "Consultant Orthopedic, Trauma & Arthroplasty Surgeon",
    experience: "Consultant orthopedic surgeon",
    clinic: "Orthopedic clinic hours confirmed at reception.",
    bio: "Dr. Waqas Ahmad Bhullar sees bone, joint, and injury patients at Ruqayya Medical Center. His clinic covers trauma, fractures, and arthroplasty — so a fall, a painful hip, or a knee that will not last the year can be assessed here, with digital X-ray in the same building.",
    focus: [
      "Trauma and fracture care",
      "Arthroplasty (joint replacement) consultation",
      "Orthopedic clinic follow-up after injury or surgery",
    ],
    portrait: {
      src: "/media/dr-waqas.jpg",
      alt: "Dr. Waqas Ahmad Bhullar, consultant orthopedic, trauma and arthroplasty surgeon at Ruqayya Medical Center",
      width: 800,
      height: 800,
    },
  },
  {
    slug: "dr-shazia-ali",
    name: "Dr. Shazia Ali",
    honorific: "Consultant",
    specialty: "Gynecologist",
    credentials: "MBBS, MCPS, FCPS",
    experience: "15+ years",
    clinic: "Evening clinics, typically 7:30–9:30 pm, Monday to Friday.",
    bio: "Dr. Shazia Ali provides women’s health care in the hours many working patients can actually attend. Her practice covers antenatal care, gynecologic consultation, and ongoing women’s health in a private clinic setting.",
    focus: [
      "Antenatal and gynecologic consultation",
      "Women’s health follow-up",
      "Evening appointments for working families",
    ],
    portrait: {
      src: "/media/dr-shazia.jpg",
      alt: "Dr. Shazia Ali, gynecologist at Ruqayya Medical Center",
      width: 680,
      height: 680,
    },
  },
  {
    slug: "dr-asim-suhail",
    name: "Dr. Asim Suhail",
    honorific: "Consultant Dermatologist & Cosmetologist",
    specialty: "Dermatologist, Cosmetologist",
    credentials:
      "MBBS, MCPS (Dermatology), AACME (USA), Professional Diploma in Facial Aesthetic (USA)",
    experience: "Consultant dermatologist and cosmetologist",
    clinic: "Dermatology clinic hours confirmed at reception.",
    bio: "Dr. Asim Suhail sees skin, hair, and facial aesthetic patients at Ruqayya Medical Center. The clinic covers medical dermatology — acne, pigmentation, rashes, chronic skin disease — and cosmetology, with the same private-room standard as the rest of the specialist panel.",
    focus: [
      "Medical dermatology for skin, hair, and nails",
      "Facial aesthetic and cosmetology consultation",
      "Follow-up plans you can complete in this building",
    ],
    portrait: {
      src: "/media/dr-asim.jpg",
      alt: "Dr. Asim Suhail, dermatologist and cosmetologist at Ruqayya Medical Center",
      width: 800,
      height: 800,
    },
  },
  {
    slug: "dr-waseem-iqbal",
    name: "Prof. Dr. Waseem Iqbal",
    honorific: "Professor · Consultant Physician",
    specialty: "General Medicine",
    credentials: "MBBS · Consultant Physician",
    experience: "Physician in adult medicine",
    clinic: "Medicine clinic off the main reception; hours confirmed at the desk.",
    bio: "Prof. Dr. Waseem Iqbal is the consultant physician whose name is on the reception door. He sees adult medical patients for everyday illness and longer-term conditions — fever, chest complaints, diabetes, blood pressure, and the investigations that should sit behind a clear plan.",
    focus: [
      "Adult general medicine",
      "Chronic disease follow-up",
      "Acute medical assessment",
    ],
  },
  {
    slug: "ms-najma-badar",
    name: "Ms. Najma Badar",
    honorific: "Clinical Psychologist",
    specialty: "Psychology",
    credentials: "BS Clinical Psychology, MS Clinical Psychology",
    experience: "9+ years",
    clinic: "By appointment — ask reception for the next psychology slot.",
    bio: "Ms. Najma Badar offers clinical psychology inside a medical center, so mental health is treated with the same seriousness as a surgical or medical visit. Sessions are confidential and appointment-based.",
    focus: [
      "Anxiety, low mood, and stress",
      "Family and confidence-related concerns",
      "Confidential, appointment-only care",
    ],
    portrait: {
      src: "/media/ms-najma.jpg",
      alt: "Ms. Najma Badar, clinical psychologist at Ruqayya Medical Center",
      width: 680,
      height: 680,
    },
  },
  {
    slug: "dr-faisal",
    name: "Dr. Faisal",
    honorific: "Consultant",
    specialty: "Specialist Consultant",
    credentials: "On the Ruqayya Medical Center consultant panel",
    experience: "Ask reception for current clinic days",
    clinic: "Confirm specialty clinic timing with the front desk when you book.",
    bio: "Dr. Faisal consults at Ruqayya Medical Center as part of the specialist team. Reception will match you to the right clinic and tell you which documents to bring.",
    focus: [
      "Consultant clinic at RMC",
      "In-person and, where offered, online review",
      "Coordinated care with diagnostics and pharmacy",
    ],
    portrait: {
      src: "/media/dr-faisal.jpg",
      alt: "Dr. Faisal, consultant at Ruqayya Medical Center",
      width: 1159,
      height: 1357,
    },
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getDoctor(slug: string) {
  return doctors.find((d) => d.slug === slug);
}

export function whatsappLink(message: string) {
  return `https://wa.me/${hospital.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function emailLink(subject: string, body: string) {
  return `mailto:${hospital.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const pharmacy = {
  name: "Hafiz Medicos",
  ownerLabel: "Owner",
  role: "Ground-floor pharmacy",
  bio: "Hafiz Medicos is the pharmacy inside Ruqayya Medical Center, run by its owner from the same building. After clinic or discharge, you collect medicines downstairs — stocked shelves, a glass counter, and a person who knows this hospital’s prescriptions.",
} as const;

export const defaultWhatsappMessage =
  "Assalamualaikum, I would like to book an appointment at Ruqayya Medical Center.";

export const dummyBooking = {
  name: "Ahsan Ikram",
  phone: "0312 4567497",
  visitType: "In-person visit" as const,
  doctor: "Dr. Shazia Ali",
  service: "Gynecology",
  when: "Tonight — night consultation",
  notes: "Dummy / test booking from the website.",
};

export function bookingMessage(fields: {
  name: string;
  phone: string;
  visitType: string;
  doctor: string;
  service: string;
  when: string;
  notes?: string;
}) {
  return [
    "Assalamualaikum, I would like to book at Ruqayya Medical Center.",
    `Name: ${fields.name}`,
    `Phone: ${fields.phone}`,
    `Visit: ${fields.visitType}`,
    `Doctor: ${fields.doctor}`,
    `Service: ${fields.service}`,
    `Preferred time: ${fields.when}`,
    fields.notes ? `Notes: ${fields.notes}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

export const dummyBookingMessage = bookingMessage(dummyBooking);

export const mapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  hospital.address.mapsQuery
)}`;

export const mapsEmbed = `https://maps.google.com/maps?q=${hospital.address.lat},${hospital.address.lng}&z=16&output=embed`;
