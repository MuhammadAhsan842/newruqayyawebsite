import Link from "next/link";
import { hospital, nav, services } from "@/lib/hospital";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <p className="font-heading text-2xl">{hospital.name}</p>
          <p className="text-sm text-primary-foreground/80">{hospital.urduLine}</p>
          <p className="text-sm leading-relaxed text-primary-foreground/75">
            Multi-specialty hospital care in Nespak Housing Scheme — emergency,
            clinics, surgery, diagnostics, and pharmacy under one roof.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] uppercase opacity-70">
            Visit
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            {hospital.address.line1}
            <br />
            {hospital.address.line2}
            <br />
            {hospital.address.landmark}, {hospital.address.city}
          </p>
          <a
            href={`tel:${hospital.phoneTel}`}
            className="mt-3 block text-sm font-medium underline underline-offset-4"
          >
            Call {hospital.phoneDisplay}
          </a>
          <a
            href={`https://wa.me/${hospital.whatsapp}`}
            className="mt-1 block text-sm font-medium underline underline-offset-4"
          >
            WhatsApp {hospital.whatsappDisplay}
          </a>
          <a
            href={`mailto:${hospital.email}`}
            className="mt-1 block text-sm font-medium underline underline-offset-4"
          >
            {hospital.email}
          </a>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] uppercase opacity-70">
            Care
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link className="hover:underline" href={`/services/${s.slug}`}>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] uppercase opacity-70">
            Site
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link className="hover:underline" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="hover:underline" href="/emergency">
                Emergency
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-primary-foreground/65">
          © 2026 {hospital.name}. This website helps you
          find care and book a visit. It does not replace emergency assessment
          — if you are in danger, call {hospital.phoneDisplay} or come to the
          desk immediately.
        </p>
      </div>
    </footer>
  );
}
