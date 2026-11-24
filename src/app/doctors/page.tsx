import Link from "next/link";
import { doctors } from "@/lib/hospital";
import { photos } from "@/lib/photos";
import { FacilityImage } from "@/components/facility-image";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Doctors",
  "Meet the Ruqayya Medical Center panel: Prof. Dr. Mohammad Akmal Shafiq, Dr. Shazia Ali, Dr. Waseem Iqbal, Ms. Najma Badar, and Dr. Faisal."
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
        Clinic hours move with theatre lists and on-call cover. Reception will
        confirm the next slot when you book — in person or online. These are the
        rooms, not stock portraits.
      </p>
      <div className="mt-10 grid gap-3 md:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem] ring-1 ring-foreground/10">
          <FacilityImage
            photo={photos.opdWaiting}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="aspect-[4/3]"
          />
        </div>
        <div className="overflow-hidden rounded-[2rem] ring-1 ring-foreground/10">
          <FacilityImage
            photo={photos.reception}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="aspect-[4/3]"
          />
        </div>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {doctors.map((d) => (
          <Link
            key={d.slug}
            href={`/doctors/${d.slug}`}
            className="rounded-3xl bg-card p-7 ring-1 ring-foreground/10 transition hover:ring-primary/40"
          >
            <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
              {d.specialty}
            </p>
            <h2 className="mt-2 font-heading text-3xl text-ink">{d.name}</h2>
            <p className="mt-1 text-sm">{d.honorific}</p>
            <p className="mt-3 text-sm text-muted-foreground">{d.credentials}</p>
            <p className="mt-4 text-sm leading-relaxed">{d.bio}</p>
            <p className="mt-4 text-sm font-medium text-primary">Profile & booking</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
