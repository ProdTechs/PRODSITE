import { ImageResponse } from "next/og";
import { SITE } from "@/lib/content";

export const alt = "ProdTech — consultoria digital, tecnológica e de produto";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#EDEBE6", color: "#111111", padding: 64 }}>
      <div style={{ display: "flex", justifyContent: "space-between", color: "#777770", fontSize: 20, letterSpacing: 3 }}><span>CONSULTORIA DE PRODUTO</span><span>FORTALEZA — BR</span></div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 116, fontWeight: 700, letterSpacing: -7, lineHeight: 1 }}>ProdTech<span style={{ color: "#FF5A1F" }}>_</span></div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 38, letterSpacing: -1 }}>Transformamos processos em produtos digitais.</div>
      </div>
      <div style={{ display: "flex", borderTop: "1px solid rgba(138,138,133,0.4)", paddingTop: 20, color: "#777770", fontSize: 18 }}>{SITE.domain.toUpperCase()}</div>
    </div>,
    size,
  );
}
