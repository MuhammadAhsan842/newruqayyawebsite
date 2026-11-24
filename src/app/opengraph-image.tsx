import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1f4a46",
          color: "#f6f1e4",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase" }}>
          Nespak Housing Scheme · Lahore
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, lineHeight: 1.05 }}>Ruqayya Medical Center</div>
          <div style={{ fontSize: 32, marginTop: 16, opacity: 0.85 }}>
            24/7 emergency · specialist clinics · surgery
          </div>
        </div>
        <div style={{ fontSize: 28 }}>0300 9400020</div>
      </div>
    ),
    size
  );
}
