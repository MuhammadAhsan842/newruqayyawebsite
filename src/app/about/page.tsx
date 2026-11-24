import { hospital } from "@/lib/hospital";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "About",
  "Ruqayya Medical Center is a trusted multi-specialty hospital in Nespak Housing Scheme, Lahore — accessible, patient-centered care with modern facilities."
);

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-xs font-semibold tracking-[0.2em] text-gold-foreground uppercase">
        About the hospital
      </p>
      <h1 className="mt-3 font-heading text-4xl text-ink sm:text-5xl">
        A hospital that belongs to this neighbourhood.
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        {hospital.description}
      </p>
      <div className="mt-10 space-y-6 text-[1.05rem] leading-relaxed">
        <p>
          Lahore has no shortage of large campuses. What Nespak and Township
          still need is a place that is open when something goes wrong at night,
          staffed by specialists people already trust, and close enough that a
          parent does not spend the appointment in traffic.
        </p>
        <p>
          Ruqayya Medical Center is built around that idea: emergency and
          critical care that never close; outpatient clinics for surgery,
          gynecology, general medicine, and psychology; diagnostics and a
          pharmacy so the visit can finish here; and online consultations when
          travel is the barrier.
        </p>
        <p>
          The consultant panel includes Prof. Dr. Mohammad Akmal Shafiq, Dr.
          Shazia Ali, Dr. Waseem Iqbal, Ms. Najma Badar, and Dr. Faisal. Clinic
          lists change with operating days — reception always has the current
          one.
        </p>
        <p>
          We do not pretend to be a downtown corporate hospital. We aim to be
          the most reliable medical center within reach of Ghazi Chowk: calm
          rooms, named doctors, and a desk that answers the phone.
        </p>
      </div>
    </div>
  );
}
