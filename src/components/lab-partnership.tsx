import Image from "next/image";
import { hospital, labPartner } from "@/lib/hospital";
import { photos } from "@/lib/photos";
import { FacilityImage } from "@/components/facility-image";
import { cn } from "@/lib/utils";

function RuqayyaLockup({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={cn(
          "flex size-14 shrink-0 items-center justify-center rounded-full font-heading text-2xl",
          inverted ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground"
        )}
      >
        ر
      </span>
      <span>
        <span
          className={cn(
            "block font-heading text-xl leading-tight sm:text-2xl",
            inverted ? "text-primary-foreground" : "text-ink"
          )}
        >
          {hospital.name}
        </span>
        <span
          className={cn(
            "mt-0.5 block text-[11px] tracking-[0.16em] uppercase",
            inverted ? "text-primary-foreground/70" : "text-muted-foreground"
          )}
        >
          Nespak · Lahore
        </span>
      </span>
    </div>
  );
}

function ChughtaiLockup() {
  return (
    <Image
      src="/brand/chughtai-lab.png"
      alt={labPartner.name}
      width={170}
      height={80}
      unoptimized
      className="h-14 w-auto object-contain object-left sm:h-16"
    />
  );
}

export function BrandLockup({
  inverted = false,
  className,
}: {
  inverted?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8",
        className
      )}
    >
      <RuqayyaLockup inverted={inverted} />
      <span
        className={cn(
          "flex size-9 items-center justify-center rounded-full font-heading text-lg",
          inverted
            ? "bg-primary-foreground/10 text-gold"
            : "bg-gold/20 text-gold-foreground"
        )}
        aria-hidden
      >
        ×
      </span>
      <ChughtaiLockup />
    </div>
  );
}

export function LabPartnership({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[2rem] bg-card ring-1 ring-foreground/10",
        className
      )}
    >
      <div className="relative">
        <FacilityImage
          photo={photos.receptionPartnership}
          sizes="100vw"
          className="aspect-[21/9] sm:aspect-[3/1]"
          objectPosition="center"
        />
        <p className="absolute bottom-3 left-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-ink uppercase backdrop-blur-sm">
          {labPartner.plaque}
        </p>
      </div>
      <div className="px-6 py-10 sm:px-10">
        <p className="text-center text-xs font-semibold tracking-[0.22em] text-gold-foreground uppercase">
          {labPartner.role}
        </p>
        <div className="mt-8 rounded-3xl bg-cream px-6 py-8 ring-1 ring-foreground/8 sm:px-10">
          <BrandLockup />
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
          {labPartner.line}
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {labPartner.points.map((point) => (
            <div key={point.t} className="rounded-2xl bg-muted/60 p-5">
              <h3 className="font-heading text-xl text-ink">{point.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm">
          <a
            href={labPartner.url}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-primary underline underline-offset-4"
          >
            Chughtai Lab
          </a>
          <span className="text-muted-foreground"> — collection at Ruqayya Medical Center</span>
        </p>
      </div>
    </div>
  );
}
