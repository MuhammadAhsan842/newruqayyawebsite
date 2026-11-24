import Link from "next/link";
import { hospital } from "@/lib/hospital";
import { photos } from "@/lib/photos";
import { FacilityImage } from "@/components/facility-image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "24/7 Emergency",
  "Ruqayya Medical Center emergency and critical care is open 24 hours at 103-C2, Nespak Housing Scheme, Lahore. Call 0300 9400020."
);

export default function EmergencyPage() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="relative min-h-[48vh] overflow-hidden">
        <FacilityImage
          photo={photos.ward}
          fill
          priority
          sizes="100vw"
          objectPosition="center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/55 to-primary/25" />
        <div className="relative mx-auto flex min-h-[48vh] max-w-3xl flex-col justify-end px-4 py-16 text-center">
          <p className="text-xs tracking-[0.24em] uppercase opacity-80">
            Emergency & critical care
          </p>
          <h1 className="mt-4 font-heading text-4xl sm:text-6xl">
            If it cannot wait until morning, neither can we.
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-14 text-center">
        <p className="text-lg text-primary-foreground/80">
          Walk in at any hour. Call from the car if you need the desk to be
          ready. Do not use the appointment form for chest pain, collapse,
          severe bleeding, seizures, or breathing difficulty.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3">
          <a
            href={`tel:${hospital.phoneTel}`}
            className="inline-flex h-16 min-w-64 items-center justify-center rounded-full bg-gold px-8 text-xl font-semibold text-gold-foreground"
          >
            Call {hospital.phoneDisplay}
          </a>
          <p className="text-sm text-primary-foreground/70">
            {hospital.address.line1}, {hospital.address.landmark}
          </p>
        </div>
        <ul className="mx-auto mt-12 max-w-lg space-y-3 text-left text-sm text-primary-foreground/85">
          <li>Come straight to the emergency desk — you do not need a prior booking.</li>
          <li>Bring any current medicines and previous reports if you have them.</li>
          <li>One family member can stay with the patient; others wait in reception.</li>
        </ul>
        <Link
          href="/appointments"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "mt-12 h-11 border-primary-foreground/30 bg-transparent px-5 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          )}
        >
          This is not urgent — book a clinic slot
        </Link>
      </div>
    </div>
  );
}
