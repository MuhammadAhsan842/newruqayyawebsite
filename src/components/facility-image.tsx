import Image from "next/image";
import type { FacilityPhoto } from "@/lib/photos";
import { cn } from "@/lib/utils";

export function FacilityImage({
  photo,
  className,
  sizes,
  priority = false,
  objectPosition = "center",
  fill = false,
}: {
  photo: FacilityPhoto;
  className?: string;
  sizes: string;
  priority?: boolean;
  objectPosition?: string;
  fill?: boolean;
}) {
  if (fill) {
    return (
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", className)}
        style={{ objectPosition }}
      />
    );
  }
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      sizes={sizes}
      priority={priority}
      className={cn("h-full w-full object-cover", className)}
      style={{ objectPosition }}
    />
  );
}
