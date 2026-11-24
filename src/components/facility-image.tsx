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
        unoptimized
      />
    );
  }

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={{ objectPosition }}
        unoptimized
      />
    </div>
  );
}
