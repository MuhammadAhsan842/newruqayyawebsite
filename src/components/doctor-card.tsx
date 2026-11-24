import Link from "next/link";
import type { Doctor } from "@/lib/hospital";
import { DoctorPortrait } from "@/components/doctor-portrait";
import { cn } from "@/lib/utils";

export function DoctorCard({
  doctor,
  featured = false,
  titleAs: Title = "h3",
}: {
  doctor: Doctor;
  featured?: boolean;
  titleAs?: "h2" | "h3";
}) {
  return (
    <Link
      href={`/doctors/${doctor.slug}`}
      className={cn(
        "group rounded-3xl bg-card ring-1 ring-foreground/10 transition duration-300 hover:-translate-y-0.5 hover:ring-primary/40",
        featured
          ? "grid gap-5 p-5 sm:grid-cols-[16rem_1fr] sm:p-6 lg:col-span-2"
          : "p-5"
      )}
    >
      <DoctorPortrait
        doctor={doctor}
        sizes={
          featured
            ? "(max-width: 640px) 100vw, 256px"
            : "(max-width: 768px) 100vw, 33vw"
        }
        className={cn(
          "rounded-2xl",
          featured ? "aspect-[4/5] sm:min-h-full" : "mb-4 aspect-[4/5]"
        )}
        priority={featured}
      />
      <div className="flex flex-col justify-center">
        <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
          {doctor.specialty}
        </p>
        <Title
          className={cn(
            "mt-2 font-heading text-ink",
            featured ? "text-3xl sm:text-4xl" : "text-2xl"
          )}
        >
          {doctor.name}
        </Title>
        <p className="mt-1 text-sm text-muted-foreground">{doctor.credentials}</p>
        <p
          className={cn(
            "mt-3 text-sm leading-relaxed text-foreground/80",
            featured ? "" : "line-clamp-4"
          )}
        >
          {doctor.bio}
        </p>
        <p className="mt-4 text-sm font-medium text-primary transition group-hover:underline">
          Profile & booking
        </p>
      </div>
    </Link>
  );
}
