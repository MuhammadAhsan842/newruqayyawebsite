import Link from "next/link";
import { services } from "@/lib/hospital";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Services",
  "Emergency, outpatient clinics, surgery, orthopedics, gynecology, dermatology, physiotherapy and pain management, general medicine, psychology, diagnostics, Hafiz Medicos pharmacy, and online consultations."
);

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <p className="text-xs font-semibold tracking-[0.2em] text-gold-foreground uppercase">
        Clinical services
      </p>
      <h1 className="mt-3 font-heading text-4xl text-ink sm:text-5xl">
        Everything a neighbourhood hospital should finish in one visit.
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
        Choose a service to see who typically sees you, what to expect, and how
        to book. Emergency patients should skip the form and come in or call.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="rounded-3xl bg-card p-6 ring-1 ring-foreground/10 transition hover:ring-primary/40"
          >
            <h2 className="font-heading text-2xl text-ink">{s.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {s.summary}
            </p>
            <p className="mt-4 text-sm font-medium text-primary">Read more</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
