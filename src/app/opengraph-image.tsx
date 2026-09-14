import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #17151a 0%, #0a0a0b 60%, #0a0a0b 100%)",
          color: "#f5f4f1",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#c9a34e",
            marginBottom: 24,
          }}
        >
          Premium Fahrzeugaufbereitung
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 600, letterSpacing: -3 }}>
          UNO AutoCare
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "rgba(245,244,241,0.6)", marginTop: 24 }}>
          {siteConfig.tagline} · {siteConfig.region}
        </div>
      </div>
    ),
    { ...size }
  );
}
