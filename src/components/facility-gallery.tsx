"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryPhotos, type FacilityPhoto } from "@/lib/photos";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const mosaic: Record<string, string> = {
  reception: "md:col-span-2 md:row-span-2",
  "opd-waiting": "md:col-span-2 md:row-span-2",
  facade: "md:col-span-2",
  "consulting-room": "",
  "consultant-office": "",
  "clinic-room": "",
  ward: "md:col-span-2",
  observation: "",
};

export function FacilityGallery() {
  const [active, setActive] = useState<FacilityPhoto | null>(null);

  return (
    <>
      <div className="grid auto-rows-[14rem] gap-3 sm:auto-rows-[16rem] md:grid-cols-4">
        {galleryPhotos.map((photo) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setActive(photo)}
            className={cn(
              "group relative overflow-hidden rounded-3xl text-left ring-1 ring-foreground/10",
              mosaic[photo.id]
            )}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-4 py-4">
              <span className="text-[0.7rem] font-semibold tracking-[0.18em] text-gold uppercase">
                {photo.place}
              </span>
            </span>
          </button>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent
          className="max-h-[92vh] overflow-y-auto sm:max-w-4xl"
          showCloseButton
        >
          {active ? (
            <>
              <DialogHeader>
                <DialogTitle className="font-heading text-2xl">
                  {active.place}
                </DialogTitle>
                <DialogDescription>{active.caption}</DialogDescription>
              </DialogHeader>
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={active.src}
                  alt={active.alt}
                  width={active.width}
                  height={active.height}
                  className="h-auto w-full"
                />
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
