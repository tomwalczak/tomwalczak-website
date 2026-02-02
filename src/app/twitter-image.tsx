import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Tom Walczak - Building verifiable, truth-seeking AI agents";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#1c1c1c",
          padding: "80px",
        }}
      >
        {/* TW Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80px",
            height: "80px",
            backgroundColor: "#2a2a2a",
            borderRadius: "12px",
            marginBottom: "40px",
          }}
        >
          <span
            style={{
              fontSize: "36px",
              fontWeight: 700,
              color: "#e5e5e5",
              fontFamily: "monospace",
              letterSpacing: "-2px",
            }}
          >
            TW
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#e5e5e5",
            fontFamily: "monospace",
            marginBottom: "16px",
          }}
        >
          Tom Walczak
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "32px",
            color: "#a0a0a0",
            fontFamily: "monospace",
            marginBottom: "40px",
          }}
        >
          Building verifiable, truth-seeking AI agents
        </div>

        {/* Separator */}
        <div
          style={{
            width: "60px",
            height: "4px",
            backgroundColor: "#404040",
            marginBottom: "40px",
          }}
        />

        {/* Description */}
        <div
          style={{
            fontSize: "24px",
            color: "#707070",
            fontFamily: "monospace",
            maxWidth: "900px",
            lineHeight: 1.5,
          }}
        >
          AI Engineer in London · Open Debate · AlexAI · tomwalczak.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
