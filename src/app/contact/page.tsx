import { hospital, mapsDirections, mapsEmbed } from "@/lib/hospital";
import { photos } from "@/lib/photos";
import { FacilityImage } from "@/components/facility-image";
import { HafizMedicos } from "@/components/hafiz-medicos";
import { LabPartnership } from "@/components/lab-partnership";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Visit us",
  "Find Ruqayya Medical Center at 103-C2, Nespak Housing Scheme, Lahore, near Ghazi Chowk. Open 24 hours. Call 0300 9400020."
);

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <p className="text-xs font-semibold tracking-[0.2em] text-gold-foreground uppercase">
        Location
      </p>
      <h1 className="mt-3 font-heading text-4xl text-ink sm:text-5xl">
        Come to 103-C2. We are already open.
      </h1>
      <div className="mt-10 overflow-hidden rounded-[2rem] ring-1 ring-foreground/10">
        <FacilityImage
          photo={photos.reception}
          sizes="100vw"
          className="aspect-[4/3]"
          objectPosition="center"
        />
      </div>
      <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
        The granite desk under the Ruqayya Medical Center mark. Prof. Dr. Waseem
        Iqbal’s clinic is the door on the left; Chughtai Lab is on the right.
        The corridor beyond is OPD.
      </p>
      <div className="mt-4 overflow-hidden rounded-[2rem] ring-1 ring-foreground/10">
        <FacilityImage
          photo={photos.opdWaiting}
          sizes="100vw"
          className="aspect-[4/3]"
        />
      </div>
      <div className="mt-12">
        <LabPartnership />
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-3xl bg-card p-6 ring-1 ring-foreground/10">
            <h2 className="font-heading text-2xl">Address</h2>
            <p className="mt-3 leading-relaxed">
              {hospital.address.line1}
              <br />
              {hospital.address.line2}
              <br />
              {hospital.address.landmark}
              <br />
              {hospital.address.city}, {hospital.address.region}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Look for the red RUQAYYA CLINIC letters and the digital X-ray
              board. Hafiz Medicos, the owner-run pharmacy, is at street level.
            </p>
            <a
              href={mapsDirections}
              className="mt-4 inline-block text-sm font-semibold text-primary underline underline-offset-4"
            >
              Google Maps directions
            </a>
          </div>
          <div className="rounded-3xl bg-card p-6 ring-1 ring-foreground/10">
            <h2 className="font-heading text-2xl">Phone, WhatsApp & email</h2>
            <p className="mt-3 text-sm text-muted-foreground">Hospital line</p>
            <p>
              <a className="text-xl font-semibold" href={`tel:${hospital.phoneTel}`}>
                {hospital.phoneDisplay}
              </a>
            </p>
            <p className="mt-3 text-sm text-muted-foreground">WhatsApp bookings</p>
            <p>
              <a className="text-xl font-semibold" href={`https://wa.me/${hospital.whatsapp}`}>
                {hospital.whatsappDisplay}
              </a>
            </p>
            <p className="mt-3 text-sm text-muted-foreground">Email</p>
            <p>
              <a className="font-semibold" href={`mailto:${hospital.email}`}>
                {hospital.email}
              </a>
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{hospital.hours}</p>
            <p className="mt-2 text-sm text-muted-foreground">{hospital.clinicHours}</p>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl ring-1 ring-foreground/10">
          <iframe
            title="Map of Ruqayya Medical Center"
            src={mapsEmbed}
            className="h-[28rem] w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
      <div className="mt-12">
        <HafizMedicos />
      </div>
    </div>
  );
}
