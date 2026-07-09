/**
 * next/image does not apply `basePath` to image URLs in a static export,
 * so on GitHub Pages every image would 404 without this loader prepending
 * it. Locally the base path is empty and URLs pass through unchanged.
 */
export default function imageLoader({ src }: { src: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return src.startsWith("/") ? `${basePath}${src}` : src;
}
