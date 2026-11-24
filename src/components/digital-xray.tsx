import Link from "next/link";
import { digitalXray } from "@/lib/hospital";
import { photos } from "@/lib/photos";
import { FacilityImage } from "@/components/facility-image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function DigitalXray({
  className,
  showLink = true,
}: {
  className?: string;
  showLink?: boolean;
}) {
  return (
    <div className={cn("space-y-8", className)}>
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-gold-foreground uppercase">
          {digitalXray.kicker}
        </p>
        <h2 className="mt-2 font-heading text-4xl text-ink">{digitalXray.name}</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">{digitalXray.lead}</p>
      </div>

      <div className="grid gap-3 lg:grid-cols-[0.85fr_1.15fr]">
        <figure className="overflow-hidden rounded-[1.75rem] ring-1 ring-foreground/10">
          <FacilityImage
            photo={photos.xrayRoom}
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="aspect-[3/4]"
            objectPosition="center"
          />
          <figcaption className="bg-card px-5 py-4 text-sm text-muted-foreground">
            {photos.xrayRoom.caption}
          </figcaption>
        </figure>
        <figure className="overflow-hidden rounded-[1.75rem] ring-1 ring-foreground/10">
          <FacilityImage
            photo={photos.xrayConsole}
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="aspect-[4/3]"
            objectPosition="center"
          />
          <figcaption className="bg-card px-5 py-4 text-sm text-muted-foreground">
            {photos.xrayConsole.caption}
          </figcaption>
        </figure>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {digitalXray.steps.map((step, i) => (
          <div key={step.t} className="rounded-3xl bg-card p-5 ring-1 ring-foreground/10">
            <p className="text-xs font-semibold tracking-[0.16em] text-gold-foreground uppercase">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 font-heading text-2xl text-ink">{step.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.d}</p>
          </div>
        ))}
      </div>

      <div>
        <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
          Sample films from this lab
        </p>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Digital studies produced here for trauma and orthopedic follow-up.
          Patient names are not shown.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <figure className="overflow-hidden rounded-[1.75rem] bg-ink ring-1 ring-foreground/10">
            <FacilityImage
              photo={photos.xrayAnkle}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="aspect-[4/3] bg-ink"
              objectPosition="center"
              objectFit="contain"
            />
            <figcaption className="px-5 py-3 text-sm text-primary-foreground/80">
              {photos.xrayAnkle.caption}
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-[1.75rem] bg-ink ring-1 ring-foreground/10">
            <FacilityImage
              photo={photos.xrayArm}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="aspect-[4/3] bg-ink"
              objectPosition="center"
              objectFit="contain"
            />
            <figcaption className="px-5 py-3 text-sm text-primary-foreground/80">
              {photos.xrayArm.caption}
            </figcaption>
          </figure>
        </div>
      </div>

      {showLink ? (
        <Link
          href="/services/diagnostics"
          className={cn(buttonVariants({ variant: "outline" }), "h-11 px-5")}
        >
          Digital X-ray details
        </Link>
      ) : null}
    </div>
  );
}
