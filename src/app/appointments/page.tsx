import { AppointmentForm } from "@/components/appointment-form";
import { FacilityImage } from "@/components/facility-image";
import {
  dummyBooking,
  dummyBookingMessage,
  emailLink,
  hospital,
  whatsappLink,
} from "@/lib/hospital";
import { photos } from "@/lib/photos";
import { pageMeta } from "@/lib/seo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = pageMeta(
  "Book a visit",
  "Book Ruqayya Medical Center by WhatsApp or email. No login and no payment on this page."
);

export default function AppointmentsPage() {
  const dummyWhatsapp = whatsappLink(dummyBookingMessage);
  const dummyEmail = emailLink(
    `Appointment request — ${dummyBooking.name} — ${dummyBooking.doctor}`,
    dummyBookingMessage
  );

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <p className="text-xs font-semibold tracking-[0.2em] text-gold-foreground uppercase">
          Book on WhatsApp
        </p>
        <h1 className="mt-3 font-heading text-4xl text-ink sm:text-5xl">
          Message the desk. Do not wait on a booking portal.
        </h1>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          WhatsApp is the main path — it reaches {hospital.whatsappDisplay}{" "}
          immediately. Email to {hospital.email} is the backup if WhatsApp is
          not installed. Emergency still uses {hospital.phoneDisplay}.
        </p>
        <p className="mt-8 rounded-2xl bg-muted px-4 py-3 text-sm leading-relaxed">
          A sample message is already filled in the form:{" "}
          <strong>{dummyBooking.name}</strong> for{" "}
          <strong>{dummyBooking.doctor}</strong>, {dummyBooking.when.toLowerCase()}.
          Edit it, then send on WhatsApp to {hospital.whatsappDisplay}.
        </p>
        <div className="mt-4 flex flex-col gap-3">
          <a
            href={dummyWhatsapp}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "h-11 px-5")}
          >
            Open the sample WhatsApp message
          </a>
          <a href={dummyEmail} className="text-sm text-primary underline underline-offset-4">
            Or send that sample by email
          </a>
        </div>
        <div className="mt-8 overflow-hidden rounded-3xl ring-1 ring-foreground/10">
          <FacilityImage
            photo={photos.reception}
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="aspect-[4/3]"
          />
        </div>
      </div>
      <AppointmentForm startAsDummy />
    </div>
  );
}
