import Link from "next/link";
import { photos } from "@/lib/photos";
import { FacilityImage } from "@/components/facility-image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-16 text-center">
      <div className="mx-auto mb-8 max-w-md overflow-hidden rounded-[2rem] ring-1 ring-foreground/10">
        <FacilityImage
          photo={photos.facadeHero}
          sizes="32rem"
          className="aspect-[16/9]"
        />
      </div>
      <p className="text-xs tracking-[0.2em] text-gold-foreground uppercase">404</p>
      <h1 className="mt-3 font-heading text-4xl text-ink">That page is not on this site.</h1>
      <p className="mt-4 text-muted-foreground">
        You may want the appointment desk, the emergency page, or the list of
        doctors.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className={cn(buttonVariants(), "h-11 px-5")}>
          Home
        </Link>
        <Link href="/doctors" className={cn(buttonVariants({ variant: "outline" }), "h-11 px-5")}>
          Doctors
        </Link>
        <Link href="/emergency" className={cn(buttonVariants({ variant: "destructive" }), "h-11 px-5")}>
          Emergency
        </Link>
      </div>
    </div>
  );
}
