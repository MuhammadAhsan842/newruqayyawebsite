import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <p className="text-xs tracking-[0.2em] text-gold-foreground uppercase">404</p>
      <h1 className="mt-3 font-heading text-4xl text-ink">That page is not on this site.</h1>
      <p className="mt-4 text-muted-foreground">
        You may want the appointment desk, the emergency page, or the list of
        doctors.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className={cn(buttonVariants(), "h-11 px-5")}>
          Home
        </Link>
        <Link href="/emergency" className={cn(buttonVariants({ variant: "destructive" }), "h-11 px-5")}>
          Emergency
        </Link>
      </div>
    </div>
  );
}
