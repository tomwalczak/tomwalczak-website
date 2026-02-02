import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: "#1c1c1c",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#e5e5e5",
          fontWeight: 700,
          fontFamily: "monospace",
          letterSpacing: "-4px",
        }}
      >
        TW
      </div>
    ),
    {
      ...size,
    }
  );
}
