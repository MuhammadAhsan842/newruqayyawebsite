import Link from "next/link";
import { pharmacy } from "@/lib/hospital";
import { photos } from "@/lib/photos";
import { FacilityImage } from "@/components/facility-image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HafizMedicos({
  className,
  showLink = true,
}: {
  className?: string;
  showLink?: boolean;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[2rem] bg-card ring-2 ring-gold/50",
        className
      )}
    >
      <div className="grid lg:grid-cols-[17rem_1fr]">
        <div className="relative min-h-72 bg-muted">
          <FacilityImage
            photo={photos.hafizOwner}
            fill
            sizes="(max-width: 1024px) 100vw, 272px"
            objectPosition="center top"
          />
        </div>
        <div className="flex flex-col">
          <div className="relative min-h-[18rem] lg:min-h-[22rem]">
            <FacilityImage
              photo={photos.hafizMedicos}
              fill
              sizes="(max-width: 1024px) 100vw, 70vw"
              objectPosition="center"
            />
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold-foreground uppercase">
              {pharmacy.role}
            </p>
            <h2 className="mt-2 font-heading text-3xl text-ink sm:text-4xl">
              {pharmacy.name}
            </h2>
            <p className="mt-1 text-sm font-medium text-primary">{pharmacy.ownerLabel}</p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {pharmacy.bio}
            </p>
            {showLink ? (
              <Link
                href="/services/pharmacy"
                className={cn(buttonVariants({ variant: "outline" }), "mt-6 h-11 px-5")}
              >
                Pharmacy details
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
