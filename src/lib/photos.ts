export type FacilityPhoto = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  place: string;
  width: number;
  height: number;
};

export const photos = {
  facadeHero: {
    id: "facade",
    src: "/media/facade-hero.jpg",
    alt: "Ruqayya Medical Center at night on Sutlej Avenue: lit RUQAYYA MEDICAL CENTER and RUQAYYA CLINIC signs, Hafiz Medicos at street level, digital X-ray board, and parking in front",
    caption: "The building at night — Ruqayya Medical Center, Ruqayya Clinic, Hafiz Medicos, and parking on Sutlej Avenue.",
    place: "Street",
    width: 1448,
    height: 1086,
  },
  reception: {
    id: "reception",
    src: "/media/reception.jpg",
    alt: "Reception lobby at Ruqayya Medical Center: granite desk, hospital logo, Chughtai Lab plaque, and Prof. Dr. Waseem Iqbal’s clinic door opening onto the OPD corridor",
    caption: "This is where you arrive. The desk, the logo, Prof. Dr. Waseem Iqbal’s door, and the corridor into OPD.",
    place: "Reception",
    width: 1448,
    height: 1086,
  },
  opdWaiting: {
    id: "opd-waiting",
    src: "/media/opd-waiting.jpg",
    alt: "OPD waiting area with seating, a nursing station, water cooler, and the corridor toward clinic rooms",
    caption: "The OPD: wait here, speak to the nurse at the station, then walk down to the clinic rooms.",
    place: "OPD",
    width: 1448,
    height: 1086,
  },
  consultingRoom: {
    id: "consulting-room",
    src: "/media/consulting-room.jpg",
    alt: "Consultation room with desk, chairs, and an examination couch",
    caption: "A typical consulting room — desk, examination couch, and space for one accompanying family member.",
    place: "Clinic room",
    width: 1350,
    height: 1800,
  },
  consultantOffice: {
    id: "consultant-office",
    src: "/media/consultant-office.jpg",
    alt: "Consultant office with certificates, awards, and a four-chair desk",
    caption: "Consultant rooms are private. Certificates stay on the wall; the conversation stays in the room.",
    place: "Consultants",
    width: 1350,
    height: 1800,
  },
  clinicRoom: {
    id: "clinic-room",
    src: "/media/clinic-room.jpg",
    alt: "Clinic room with framed credentials, examination couch, and teaching models",
    caption: "Clinic rooms for examination and follow-up — the same rooms where you sit with the named specialists.",
    place: "Clinics",
    width: 1350,
    height: 1800,
  },
  ward: {
    id: "ward",
    src: "/media/ward.jpg",
    alt: "Emergency and inpatient beds at Ruqayya Medical Center: blue mattresses, privacy curtains, IV stands, and a monitoring trolley",
    caption: "If you need a bed, this is the ward: curtained bays, IV stands, and monitoring at the bedside.",
    place: "Ward",
    width: 1448,
    height: 1086,
  },
  observation: {
    id: "observation",
    src: "/media/observation.jpg",
    alt: "Observation beds with privacy curtains and a bedside trolley",
    caption: "Observation and short-stay beds behind privacy curtains — used after procedures and for overnight cover.",
    place: "Inpatient",
    width: 1350,
    height: 1800,
  },
  hafizOwner: {
    id: "hafiz-owner",
    src: "/media/hafiz-owner.jpg",
    alt: "Owner of Hafiz Medicos, the ground-floor pharmacy at Ruqayya Medical Center",
    caption: "The owner of Hafiz Medicos — the pharmacy inside this hospital.",
    place: "Hafiz Medicos",
    width: 1199,
    height: 1312,
  },
  hafizMedicos: {
    id: "hafiz-medicos",
    src: "/media/hafiz-medicos.jpg",
    alt: "Interior of Hafiz Medicos: glass-counter desk and blue shelving stocked with medicines at Ruqayya Medical Center",
    caption: "Hafiz Medicos on the ground floor — collect the script here before you leave.",
    place: "Pharmacy",
    width: 1447,
    height: 1087,
  },
} as const satisfies Record<string, FacilityPhoto>;

export const galleryPhotos: FacilityPhoto[] = [
  photos.reception,
  photos.opdWaiting,
  photos.facadeHero,
  photos.hafizMedicos,
  photos.consultingRoom,
  photos.consultantOffice,
  photos.clinicRoom,
  photos.ward,
  photos.observation,
];
