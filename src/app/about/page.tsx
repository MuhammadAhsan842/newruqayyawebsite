import { hospital } from "@/lib/hospital";
import { photos } from "@/lib/photos";
import { FacilityImage } from "@/components/facility-image";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "About",
  "Ruqayya Medical Center is a trusted multi-specialty hospital in Nespak Housing Scheme, Lahore — accessible, patient-centered care with modern facilities."
);

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <p className="text-xs font-semibold tracking-[0.2em] text-gold-foreground uppercase">
        About the hospital
      </p>
      <h1 className="mt-3 max-w-3xl font-heading text-4xl text-ink sm:text-5xl">
        A hospital that belongs to this neighbourhood.
      </h1>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl">
          <FacilityImage
            photo={photos.reception}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="aspect-[4/3]"
          />
        </div>
        <div className="overflow-hidden rounded-3xl">
          <FacilityImage
            photo={photos.opdWaiting}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="aspect-[4/3]"
          />
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-3xl space-y-6 text-[1.05rem] leading-relaxed">
        <p className="text-lg text-muted-foreground">{hospital.description}</p>
        <p>
          Lahore has no shortage of large campuses. What Nespak and Township
          still need is a place that is open when something goes wrong at night,
          staffed by specialists people already trust, and close enough that a
          parent does not spend the appointment in traffic.
        </p>
        <p>
          Ruqayya Medical Center is that building on Sutlej Avenue: emergency
          and critical care that never close; outpatient clinics for surgery,
          gynecology, general medicine, and psychology; digital X-ray; a
          Chughtai Lab desk at reception; Hafiz Medicos on the ground floor; and
          online consultations when travel is the barrier.
        </p>
        <p>
          The consultant panel includes Prof. Dr. Mohammad Akmal Shafiq, Dr.
          Shazia Ali, Prof. Dr. Waseem Iqbal, Ms. Najma Badar, and Dr. Faisal.
          Clinic lists change with operating days — reception always has the
          current one.
        </p>
        <p>
          We do not pretend to be a downtown corporate hospital. We aim to be
          the most reliable medical center within reach of Ghazi Chowk: rooms
          you can see on this site, named doctors, and a desk that answers the
          phone.
        </p>
      </div>
    </div>
  );
}
