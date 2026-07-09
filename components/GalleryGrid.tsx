import Image from "next/image";
import type { GalleryPhoto } from "@/lib/gallery";

/**
 * Masonry-style layout (CSS columns) for the mixed portrait/landscape
 * field photos. Each photo carries a dignified caption.
 */
export default function GalleryGrid({ photos }: { photos: GalleryPhoto[] }) {
  return (
    <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>li]:mb-5">
      {photos.map((photo) => (
        <li key={photo.src} className="break-inside-avoid">
          <figure className="overflow-hidden rounded-2xl border border-forest-600/10 bg-white shadow-sm">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="h-auto w-full"
            />
            <figcaption className="px-4 py-3 text-sm leading-snug text-stone">
              {photo.caption}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
