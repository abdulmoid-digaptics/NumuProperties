// Static hosting (GitHub Pages) has no image optimizer: serve the file as-is under the site's base path.
// `w` only satisfies next/image's loader contract; the static host ignores it.
export default function imageLoader({ src, width }: { src: string; width: number }) {
  const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH ||
    (process.env.NODE_ENV === "production" ? "/NumuProperties" : "");
  return `${basePath}${src}?w=${width}`;
}
