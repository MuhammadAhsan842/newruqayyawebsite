import Link from "next/link";
import {
  doctors,
  hospital,
  mapsDirections,
  services,
  whatsappLink,
  defaultWhatsappMessage,
} from "@/lib/hospital";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  hospital.name,
  "24/7 emergency, specialist clinics, laparoscopic surgery, gynecology, medicine, psychology, diagnostics, and pharmacy in Nespak Housing Scheme, Lahore."
);

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_10%_-10%,oklch(0.72_0.09_75_/_0.22),transparent_55%),radial-gradient(900px_circle_at_90%_10%,oklch(0.4_0.06_175_/_0.18),transparent_50%)]" />
        <div className="grain absolute inset-0 opacity-70" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-gold-foreground uppercase">
              Multi-specialty hospital · Nespak Housing Scheme
            </p>
            <h1 className="mt-4 font-heading text-4xl leading-[1.1] text-ink sm:text-6xl">
              Care you can reach tonight.
              <span className="mt-2 block text-primary">Not across the city.</span>
            </h1>
            <p
              className="mt-4 text-2xl text-primary"
              style={{ fontFamily: "var(--font-urdu), serif" }}
              dir="rtl"
            >
              {hospital.urduLine}
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Ruqayya Medical Center is the neighbourhood hospital for Nespak,
              Township, and families near Ghazi Chowk — 24/7 emergency, named
              specialists, diagnostics, and a pharmacy in one building.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/appointments" className={cn(buttonVariants({ size: "lg" }), "h-12 px-6")}>
                Book an appointment
              </Link>
              <Link
                href="/emergency"
                className={cn(
                  buttonVariants({ variant: "destructive", size: "lg" }),
                  "h-12 px-6"
                )}
              >
                24/7 Emergency
              </Link>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Call{" "}
              <a className="font-semibold text-primary" href={`tel:${hospital.phoneTel}`}>
                {hospital.phoneDisplay}
              </a>{" "}
              · {hospital.address.line1}
            </p>
          </div>
          <div className="rounded-[2rem] bg-primary p-8 text-primary-foreground shadow-2xl shadow-primary/20">
            <p className="text-xs tracking-[0.2em] uppercase opacity-70">If you need us now</p>
            <p className="mt-3 font-heading text-3xl">Walk in. Or message the desk.</p>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-primary-foreground/85">
              <li>Emergency and critical care — every hour of the day</li>
              <li>In-person clinics and online consultations</li>
              <li>Surgery, gynecology, medicine, psychology</li>
              <li>Diagnostics and on-site pharmacy</li>
            </ul>
            <div className="mt-8 flex flex-col gap-2">
              <a
                href={`tel:${hospital.phoneTel}`}
                className="rounded-2xl bg-gold px-4 py-3 text-center text-sm font-semibold text-gold-foreground"
              >
                Call {hospital.phoneDisplay}
              </a>
              <a
                href={whatsappLink(defaultWhatsappMessage)}
                className="rounded-2xl bg-primary-foreground/10 px-4 py-3 text-center text-sm font-semibold"
              >
                WhatsApp reception
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-card">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["24/7", "Emergency desk never closes"],
            ["Named specialists", "Surgery, gynae, medicine, psychology"],
            ["One building", "Clinics, diagnostics, pharmacy"],
            ["Two ways in", "Walk in or consult online"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="font-heading text-2xl text-primary">{k}</p>
              <p className="mt-1 text-sm text-muted-foreground">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-gold-foreground uppercase">
            Why this hospital
          </p>
          <h2 className="mt-3 font-heading text-4xl text-ink">
            A medical center that behaves like a neighbourhood, not a marketplace.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Most people in Nespak currently find Ruqayya through listing apps.
            This site is the hospital speaking for itself: who is on the panel,
            what happens in an emergency, and how to book without a middleman.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              t: "Local, not distant",
              d: "103-C2, Sutlej Avenue, near Ghazi Chowk. If you live in Nespak or Township, this is a short drive — not a ring-road appointment.",
            },
            {
              t: "Specialists you can name",
              d: "Prof. Dr. Mohammad Akmal Shafiq, Dr. Shazia Ali, Dr. Waseem Iqbal, Ms. Najma Badar, and Dr. Faisal — not an anonymous roster.",
            },
            {
              t: "The full visit, finished here",
              d: "See the doctor, complete investigations, collect medicines, and know when to come back. Fewer city hops.",
            },
          ].map((item) => (
            <article
              key={item.t}
              className="rounded-3xl bg-card p-6 ring-1 ring-foreground/10"
            >
              <h3 className="font-heading text-2xl text-ink">{item.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.d}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase opacity-70">Services</p>
              <h2 className="mt-2 font-heading text-4xl">What we treat, and how we see you</h2>
            </div>
            <Link href="/services" className="text-sm underline underline-offset-4">
              All services
            </Link>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-2xl bg-primary-foreground/8 p-5 transition hover:bg-primary-foreground/14"
              >
                <h3 className="font-heading text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/75">{s.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-gold-foreground uppercase">
              Consultants
            </p>
            <h2 className="mt-2 font-heading text-4xl text-ink">The doctors families ask for</h2>
          </div>
          <Link href="/doctors" className="text-sm text-primary underline underline-offset-4">
            Full panel
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((d) => (
            <Link
              key={d.slug}
              href={`/doctors/${d.slug}`}
              className="rounded-3xl bg-card p-6 ring-1 ring-foreground/10 transition hover:ring-primary/40"
            >
              <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                {d.specialty}
              </p>
              <h3 className="mt-2 font-heading text-2xl text-ink">{d.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d.credentials}</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">{d.bio}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-gold-foreground uppercase">
              Find us
            </p>
            <h2 className="mt-2 font-heading text-4xl text-ink">
              103-C2, Nespak Housing Scheme
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Sutlej Avenue, Block C-2, near Ghazi Chowk. Parking at the
              hospital. The emergency entrance is staffed around the clock.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={mapsDirections} className={cn(buttonVariants(), "h-11 px-5")}>
                Open directions
              </a>
              <Link
                href="/contact"
                className={cn(buttonVariants({ variant: "outline" }), "h-11 px-5")}
              >
                Hours & map
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl ring-1 ring-foreground/10">
            <iframe
              title="Map of Ruqayya Medical Center"
              src={`https://maps.google.com/maps?q=${hospital.address.lat},${hospital.address.lng}&z=16&output=embed`}
              className="h-80 w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
