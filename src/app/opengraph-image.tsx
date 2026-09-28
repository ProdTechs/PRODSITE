import { ImageResponse } from "next/og";
import { SITE } from "@/lib/content";

// Provisório: substituir pela arte do post de Instagram do branding (public/og.png + metadata.openGraph.images).
export const alt = SITE.title;
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
          justifyContent: "space-between",
          background: "#EDEBE6",
          color: "#111111",
          padding: 64,
          fontSize: 20,
          letterSpacing: 3,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", color: "#8A8A85" }}>
          <span>CONSULTORIA DIGITAL</span>
          <span>FORTALEZA — BR</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 150, fontWeight: 700, letterSpacing: -8, lineHeight: 1 }}>
            ProdTech<span style={{ color: "#FF5A1F" }}>_</span>
          </div>
          <div style={{ display: "flex", marginTop: 32, fontSize: 34, letterSpacing: -1 }}>
            Sites, bots, automações e apps sob medida.
          </div>
        </div>
        <div style={{ display: "flex", borderTop: "1px solid rgba(138,138,133,0.4)", paddingTop: 20, color: "#8A8A85" }}>
          {SITE.domain.toUpperCase()}
        </div>
      </div>
    ),
    size,
  );
}
