"use client";

import { useState } from "react";

// Renders a product screenshot from /public/products/<slug>.png.
// If the file is missing, it falls back to a neutral placeholder with the
// product name — so the grid never shows a broken image. Drop a PNG in
// public/products/ named <slug>.png and it appears automatically.
export function ProductImage({ slug, name }: { slug: string; name: string }) {
  const [ok, setOk] = useState(true);

  return (
    <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-md border border-border bg-muted">
      {ok ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/products/${slug}.png`}
          alt={`${name} screenshot`}
          className="h-full w-full object-cover"
          onError={() => setOk(false)}
        />
      ) : (
        <div className="flex h-full items-center justify-center px-4 text-center text-xs text-muted-foreground/40">
          {name}
        </div>
      )}
    </div>
  );
}
