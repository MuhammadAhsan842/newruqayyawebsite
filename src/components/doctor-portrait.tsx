import Image from "next/image";
import type { Doctor } from "@/lib/hospital";
import { cn } from "@/lib/utils";

function initials(name: string) {
  return name
    .replace(/^Prof\.\s+/i, "")
    .replace(/^Dr\.\s+/i, "")
    .replace(/^Ms\.\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function DoctorPortrait({
  doctor,
  className,
  sizes,
  priority = false,
}: {
  doctor: Doctor;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  if (doctor.portrait) {
    return (
      <div className={cn("relative overflow-hidden bg-muted", className)}>
        <Image
          src={doctor.portrait.src}
          alt={doctor.portrait.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
          unoptimized
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center bg-muted px-3 text-center",
        className
      )}
    >
      <span className="font-heading text-3xl text-ink">{initials(doctor.name)}</span>
      <span className="mt-1 text-[11px] tracking-wide text-muted-foreground uppercase">
        Portrait to follow
      </span>
    </div>
  );
}
