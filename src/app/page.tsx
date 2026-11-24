import Link from "next/link";
import {
  doctors,
  hospital,
  mapsDirections,
  services,
  whatsappLink,
  defaultWhatsappMessage,
} from "@/lib/hospital";
import { photos } from "@/lib/photos";
import { FacilityImage } from "@/components/facility-image";
import { DoctorPortrait } from "@/components/doctor-portrait";
import { FacilityGallery } from "@/components/facility-gallery";
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
      <section className="grid lg:min-h-[78vh] lg:grid-cols-2">
        <div className="relative order-1 h-[52vh] min-h-72 lg:order-2 lg:min-h-[78vh]">
          <FacilityImage
            photo={photos.facadeHero}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            objectPosition="center 40%"
          />
        </div>
        <div className="order-2 flex flex-col justify-center bg-cream px-4 py-12 lg:order-1 lg:px-12 xl:px-16">
          <p className="text-xs font-semibold tracking-[0.22em] text-gold-foreground uppercase">
            Multi-specialty hospital · Nespak Housing Scheme
          </p>
          <h1 className="mt-4 max-w-xl font-heading text-4xl leading-[1.08] text-ink sm:text-5xl xl:text-6xl">
            This is the building on Sutlej Avenue.
            <span className="mt-2 block text-primary">Walk in when you need it.</span>
          </h1>
          <p
            className="mt-4 text-2xl text-primary"
            style={{ fontFamily: "var(--font-urdu), serif" }}
            dir="rtl"
          >
            {hospital.urduLine}
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Ruqayya Medical Center — 24/7 emergency, named specialists, digital
            X-ray, a partner lab at reception, and a pharmacy on the ground floor.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/appointments" className={cn(buttonVariants({ size: "lg" }), "h-12 px-6")}>
              Book an appointment
            </Link>
            <Link
              href="/emergency"
              className={cn(
                buttonVariants({ variant: "destructive", size: "lg" }),
                "h-12 px-6 bg-destructive text-white hover:bg-destructive/90"
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
      </section>

      <section className="grid md:grid-cols-2">
        <figure className="relative min-h-[48vh]">
          <FacilityImage
            photo={photos.reception}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 px-5 py-5 font-heading text-2xl text-white">
            Reception
          </figcaption>
        </figure>
        <figure className="relative min-h-[48vh]">
          <FacilityImage
            photo={photos.opdWaiting}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 px-5 py-5 font-heading text-2xl text-white">
            OPD
          </figcaption>
        </figure>
      </section>

      <section className="border-y bg-card">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["24/7", "Emergency desk never closes"],
            ["Named specialists", "Surgery, gynae, medicine, psychology"],
            ["One building", "Clinics, X-ray, lab, pharmacy"],
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
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-gold-foreground uppercase">
              Arrival
            </p>
            <h2 className="mt-3 font-heading text-4xl text-ink">
              You do not guess the door. The desk is granite, the name is on the wall.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Reception sits under the Ruqayya Medical Center mark. Prof. Dr.
              Waseem Iqbal’s clinic is the first door on the left. Chughtai Lab
              collects here. If it is an emergency, say so — they will not send
              you to a booking form.
            </p>
            <Link
              href="/inside"
              className={cn(buttonVariants({ variant: "outline" }), "mt-6 h-11 px-5")}
            >
              See inside the center
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-gold-foreground uppercase">
                The rooms
              </p>
              <h2 className="mt-2 font-heading text-4xl text-ink">
                Photographs of this hospital, not a stock corridor.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Tap any frame. These are the consulting rooms, the ward, and the
                street front patients already recognise.
              </p>
            </div>
            <Link href="/inside" className="text-sm text-primary underline underline-offset-4">
              Full walkthrough
            </Link>
          </div>
          <div className="mt-10">
            <FacilityGallery />
          </div>
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
            what the rooms look like, and how to book without a middleman.
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
              d: "Prof. Dr. Mohammad Akmal Shafiq, Dr. Waqas Ahmad Bhullar, Dr. Shazia Ali, Dr. Asim Suhail, Prof. Dr. Waseem Iqbal, Ms. Najma Badar, and Dr. Faisal — not an anonymous roster.",
            },
            {
              t: "The full visit, finished here",
              d: "See the doctor, take a digital X-ray, send labs, collect medicines downstairs, and know when to come back.",
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
              className="rounded-3xl bg-card p-5 ring-1 ring-foreground/10 transition hover:ring-primary/40"
            >
              <DoctorPortrait
                doctor={d}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="mb-4 aspect-[4/5] rounded-2xl"
              />
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
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-gold-foreground uppercase">
              Find us
            </p>
            <h2 className="mt-2 font-heading text-4xl text-ink">
              103-C2, Nespak Housing Scheme
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Look for the red RUQAYYA CLINIC letters and the digital X-ray
              board. Hafiz Medicos is the pharmacy on the ground floor. Parking
              at the hospital. Emergency is staffed around the clock.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={mapsDirections} className={cn(buttonVariants(), "h-11 px-5")}>
                Open directions
              </a>
              <a
                href={whatsappLink(defaultWhatsappMessage)}
                className={cn(buttonVariants({ variant: "outline" }), "h-11 px-5")}
              >
                WhatsApp the desk
              </a>
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
