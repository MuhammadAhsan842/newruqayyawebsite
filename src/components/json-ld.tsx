import { doctors, hospital, services } from "@/lib/hospital";
import { photos } from "@/lib/photos";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: hospital.name,
    description: hospital.description,
    url: "/",
    telephone: hospital.phoneTel,
    email: hospital.email,
    image: [
      photos.facadeHero.src,
      photos.reception.src,
      photos.opdWaiting.src,
      photos.hafizMedicos.src,
      photos.xrayRoom.src,
      photos.xrayConsole.src,
      photos.ward.src,
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${hospital.address.line1}, ${hospital.address.line2}`,
      addressLocality: hospital.address.city,
      addressRegion: hospital.address.region,
      postalCode: hospital.address.postalCode,
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: hospital.address.lat,
      longitude: hospital.address.lng,
    },
    openingHours: "Mo-Su 00:00-23:59",
    medicalSpecialty: services.map((s) => s.title),
    availableService: services.map((s) => ({
      "@type": "MedicalProcedure",
      name: s.title,
      description: s.summary,
    })),
    employee: doctors.map((d) => ({
      "@type": "Physician",
      name: d.name,
      medicalSpecialty: d.specialty,
      ...(d.portrait ? { image: d.portrait.src } : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
