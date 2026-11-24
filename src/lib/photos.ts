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
    alt: "Ruqayya Medical Center street front on Sutlej Avenue, with Ruqayya Clinic signage, digital X-ray, and the ground-floor pharmacy",
    caption: "The building you look for on Sutlej Avenue — Ruqayya Clinic, digital X-ray, pharmacy at street level.",
    place: "Street",
    width: 2560,
    height: 1344,
  },
  reception: {
    id: "reception",
    src: "/media/reception.jpg",
    alt: "Granite reception desk at Ruqayya Medical Center with the hospital logo and Prof. Dr. Waseem Iqbal’s clinic door",
    caption: "This is where you arrive. The desk books clinics, points you to emergency, and sits next to Prof. Dr. Waseem Iqbal’s door.",
    place: "Reception",
    width: 2000,
    height: 1501,
  },
  consultingRoom: {
    id: "consulting-room",
    src: "/media/consulting-room.jpg",
    alt: "Consultation room with desk, chairs, and an examination couch",
    caption: "A typical consulting room — desk, examination couch, and space for one accompanying family member.",
    place: "OPD",
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
    alt: "Inpatient ward with curtained beds, IV stands, and monitoring equipment",
    caption: "If you need a bed, this is the ward: curtained bays, IV stands, and monitoring at the bedside.",
    place: "Ward",
    width: 1351,
    height: 1800,
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
} as const satisfies Record<string, FacilityPhoto>;

export const galleryPhotos: FacilityPhoto[] = [
  photos.reception,
  photos.facadeHero,
  photos.consultingRoom,
  photos.consultantOffice,
  photos.clinicRoom,
  photos.ward,
  photos.observation,
];
