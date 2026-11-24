import Link from "next/link";
import { doctors } from "@/lib/hospital";
import { DoctorPortrait } from "@/components/doctor-portrait";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Doctors",
  "Meet the Ruqayya Medical Center panel: Prof. Dr. Mohammad Akmal Shafiq, Dr. Waqas Ahmad Bhullar, Dr. Shazia Ali, Dr. Asim Suhail, Dr. Waseem Iqbal, Ms. Najma Badar, and Dr. Faisal."
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
        Each card is a named consultant, with a portrait where we have one and
        the clinic note that belongs to them. Hours move with theatre lists —
        reception confirms the next slot when you book.
      </p>
      <div className="mt-10 grid gap-4">
        {doctors.map((d) => (
          <Link
            key={d.slug}
            href={`/doctors/${d.slug}`}
            className="grid gap-5 rounded-3xl bg-card p-5 ring-1 ring-foreground/10 transition hover:ring-primary/40 sm:grid-cols-[11rem_1fr] sm:p-6"
          >
            <DoctorPortrait
              doctor={d}
              sizes="(max-width: 640px) 100vw, 176px"
              className="aspect-[4/5] w-full rounded-2xl"
              priority={d.slug === "prof-dr-mohammad-akmal-shafiq"}
            />
            <div className="flex flex-col justify-center">
              <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                {d.specialty}
              </p>
              <h2 className="mt-2 font-heading text-3xl text-ink">{d.name}</h2>
              <p className="mt-1 text-sm">{d.honorific}</p>
              <p className="mt-3 text-sm text-muted-foreground">{d.credentials}</p>
              <p className="mt-4 text-sm leading-relaxed">{d.bio}</p>
              <p className="mt-4 text-sm font-medium text-primary">Profile & booking</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
