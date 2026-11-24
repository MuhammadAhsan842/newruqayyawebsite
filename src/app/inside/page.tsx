import { FacilityGallery } from "@/components/facility-gallery";
import { FacilityImage } from "@/components/facility-image";
import { photos } from "@/lib/photos";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Inside the center",
  "See Ruqayya Medical Center: the Sutlej Avenue front, reception, consulting rooms, and inpatient ward in Nespak, Lahore."
);

export default function InsidePage() {
  return (
    <div>
      <section className="relative h-[42vh] min-h-72 overflow-hidden">
        <FacilityImage
          photo={photos.facadeHero}
          fill
          priority
          sizes="100vw"
          objectPosition="center 40%"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative mx-auto flex h-full max-w-6xl items-end px-4 pb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              A walk through the building
            </p>
            <h1 className="mt-2 font-heading text-4xl text-white sm:text-5xl">
              Inside Ruqayya Medical Center
            </h1>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-4 py-14">
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          These are photographs of this hospital — not a catalogue of borrowed
          corridors. Use them to recognise the street front, the granite desk,
          the consulting rooms, and the ward before you arrive.
        </p>
        <div className="mt-10">
          <FacilityGallery />
        </div>
      </div>
    </div>
  );
}
