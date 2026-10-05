import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Novalix — POS systems, cloud inventory and custom web systems";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "72px",
        background: "linear-gradient(135deg, #101015 0%, #1d1014 58%, #4a0d15 100%)",
        color: "#fff",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div
          style={{ width: "18px", height: "56px", borderRadius: "9px", background: "#e10d19" }}
        />
        <span style={{ fontSize: "42px", fontWeight: 700, letterSpacing: "-1px" }}>Novalix</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
        <span style={{ maxWidth: "1000px", fontSize: "66px", fontWeight: 700, lineHeight: 1.12 }}>
          Software that helps businesses move forward.
        </span>
        <span style={{ fontSize: "28px", color: "#d4d4d8" }}>
          POS systems · Cloud inventory · Custom web systems
        </span>
      </div>
    </div>,
    size,
  );
}
