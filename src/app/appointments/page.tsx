import { AppointmentForm } from "@/components/appointment-form";
import { FacilityImage } from "@/components/facility-image";
import { hospital, whatsappLink, defaultWhatsappMessage } from "@/lib/hospital";
import { photos } from "@/lib/photos";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Book an appointment",
  "Book an in-person visit or online consultation at Ruqayya Medical Center by WhatsApp or phone. Reception confirms your slot."
);

export default function AppointmentsPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <p className="text-xs font-semibold tracking-[0.2em] text-gold-foreground uppercase">
          Appointments
        </p>
        <h1 className="mt-3 font-heading text-4xl text-ink sm:text-5xl">
          Tell the desk who you need. They will confirm the time.
        </h1>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          There is no paid booking engine on this site. Your request opens
          WhatsApp to {hospital.phoneDisplay} with the details filled in. That
          is the same number families already call — it works on a free
          hosting plan, and the hospital does not need extra software.
        </p>
        <ol className="mt-8 space-y-4 text-sm">
          {[
            "Choose in-person or online, and a doctor if you know one.",
            "Send the WhatsApp. Reception replies with the next available slot.",
            "Arrive a few minutes early, or join the call at the agreed time.",
          ].map((step, i) => (
            <li key={step} className="flex gap-3">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                {i + 1}
              </span>
              <span className="pt-1">{step}</span>
            </li>
          ))}
        </ol>
        <div className="mt-8 overflow-hidden rounded-3xl ring-1 ring-foreground/10">
          <FacilityImage
            photo={photos.reception}
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="aspect-[4/3]"
          />
        </div>
        <p className="mt-8 text-sm">
          Prefer to speak?{" "}
          <a className="font-semibold text-primary" href={`tel:${hospital.phoneTel}`}>
            Call {hospital.phoneDisplay}
          </a>{" "}
          or{" "}
          <a
            className="font-semibold text-primary"
            href={whatsappLink(defaultWhatsappMessage)}
          >
            open WhatsApp
          </a>
          .
        </p>
      </div>
      <AppointmentForm />
    </div>
  );
}
