import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/posts";

export const alt = "Blog post";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  const title = post?.title || "Blog Post";
  const description = post?.description || "";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#1c1c1c",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* TW Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "60px",
              height: "60px",
              backgroundColor: "#2a2a2a",
              borderRadius: "8px",
              marginBottom: "40px",
            }}
          >
            <span
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#e5e5e5",
                fontFamily: "monospace",
                letterSpacing: "-2px",
              }}
            >
              TW
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "56px",
              fontWeight: 700,
              color: "#e5e5e5",
              fontFamily: "monospace",
              marginBottom: "24px",
              maxWidth: "1000px",
              lineHeight: 1.2,
            }}
          >
            {title}
          </div>

          {/* Description */}
          {description && (
            <div
              style={{
                fontSize: "28px",
                color: "#a0a0a0",
                fontFamily: "monospace",
                maxWidth: "900px",
                lineHeight: 1.4,
              }}
            >
              {description}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              color: "#707070",
              fontFamily: "monospace",
            }}
          >
            tomwalczak.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
