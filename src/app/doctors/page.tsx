import { doctors } from "@/lib/hospital";
import { DoctorCard } from "@/components/doctor-card";
import { HafizMedicos } from "@/components/hafiz-medicos";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Doctors",
  "Meet the Ruqayya Medical Center panel: Prof. Dr. Waseem Iqbal, Prof. Dr. Mohammad Akmal Shafiq, Dr. Waqas Ahmad Bhullar, Dr. Shazia Ali, Dr. Asim Suhail, Ms. Najma Badar, and Dr. Faisal."
);

export default function DoctorsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <p className="text-xs font-semibold tracking-[0.2em] text-gold-foreground uppercase">
        Specialist panel
      </p>
      <h1 className="mt-3 font-heading text-4xl text-ink sm:text-5xl">
        Doctors whose names patients already know.
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
        Each card is a named consultant with their portrait and clinic note.
        Hours move with theatre lists — reception confirms the next slot when
        you book.
      </p>
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {doctors.map((d, i) => (
          <DoctorCard key={d.slug} doctor={d} featured={i === 0} titleAs="h2" />
        ))}
      </div>
      <div className="mt-12">
        <HafizMedicos />
      </div>
    </div>
  );
}
