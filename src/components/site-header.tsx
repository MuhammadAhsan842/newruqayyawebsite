"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { hospital, nav } from "@/lib/hospital";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-1.5 text-xs sm:text-sm">
          <p className="font-medium tracking-wide">
            24/7 emergency · Nespak Housing Scheme, Lahore
          </p>
          <a
            href={`tel:${hospital.phoneTel}`}
            className="inline-flex items-center gap-1.5 font-semibold underline-offset-2 hover:underline"
          >
            <Phone className="size-3.5" />
            {hospital.phoneDisplay}
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg text-primary-foreground">
            ر
          </span>
          <span className="min-w-0">
            <span className="block font-heading text-lg leading-tight text-ink sm:text-xl">
              {hospital.name}
            </span>
            <span className="block text-xs text-muted-foreground">
              Nespak · Lahore
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm transition-colors",
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/80 hover:bg-muted"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/emergency"
            className={cn(
              buttonVariants({ variant: "destructive", size: "sm" }),
              "hidden sm:inline-flex"
            )}
          >
            Emergency
          </Link>
          <Link
            href="/appointments"
            className={cn(buttonVariants({ size: "sm" }), "hidden md:inline-flex")}
          >
            Book visit
          </Link>
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="lg:hidden"
                  aria-label="Open menu"
                />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <SheetHeader>
                <SheetTitle>{hospital.name}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-lg px-3 py-3 text-base",
                      pathname === item.href
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/emergency"
                  className="rounded-lg bg-destructive px-3 py-3 text-base text-white"
                >
                  24/7 Emergency
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
