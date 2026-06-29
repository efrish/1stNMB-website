export default function Slide07Brand() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{ backgroundColor: "#0C0F1A", fontFamily: "'Inter', sans-serif", color: "#ffffff" }}
    >
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "55vw", height: "55vw", borderRadius: "50%", backgroundColor: "#4F7FFF", opacity: 0.05, filter: "blur(14vw)" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "4vw 4vw", opacity: 0.5, pointerEvents: "none" }} />

      <div style={{ position: "absolute", top: "5vh", left: "5vw", display: "flex", alignItems: "center", gap: "1vw", zIndex: 10 }}>
        <div style={{ width: "2vw", height: "2vw", backgroundColor: "#4F7FFF", borderRadius: "0.4vw" }} />
        <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "-0.02em" }}>FNMB</div>
      </div>
      <div style={{ position: "absolute", top: "5vh", right: "5vw", fontSize: "1vw", color: "rgba(255,255,255,0.4)", zIndex: 10 }}>June 2026</div>

      <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "0 8vw" }}>
        <div style={{ display: "inline-block", padding: "0.5vh 1.2vw", backgroundColor: "rgba(79,127,255,0.12)", border: "1px solid rgba(79,127,255,0.3)", borderRadius: "2vw", color: "#4F7FFF", fontSize: "0.9vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "3vh" }}>
          Brand &amp; Design
        </div>
        <h2 style={{ fontSize: "4.5vw", fontWeight: 800, margin: "0 0 5vh 0", lineHeight: 1.05, letterSpacing: "-0.03em", textAlign: "center" }}>
          Built for trust.
        </h2>

        <div style={{ display: "flex", gap: "2.5vw", width: "100%", justifyContent: "center" }}>
          <div style={{ flex: 1, padding: "3vh 2.5vw", backgroundColor: "#131726", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "1vw", display: "flex", flexDirection: "column", gap: "2vh" }}>
            <div style={{ fontSize: "1vw", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Color Palette</div>
            <div style={{ display: "flex", gap: "1vw", alignItems: "center" }}>
              <div style={{ width: "3vw", height: "3vw", backgroundColor: "#17254C", borderRadius: "0.5vw", border: "1px solid rgba(255,255,255,0.1)" }} />
              <div>
                <div style={{ fontSize: "1.1vw", fontWeight: 600 }}>Navy Primary</div>
                <div style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.4)" }}>#17254C</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1vw", alignItems: "center" }}>
              <div style={{ width: "3vw", height: "3vw", backgroundColor: "#C9A84C", borderRadius: "0.5vw", border: "1px solid rgba(255,255,255,0.1)" }} />
              <div>
                <div style={{ fontSize: "1.1vw", fontWeight: 600 }}>Gold Accent</div>
                <div style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.4)" }}>#C9A84C</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1vw", alignItems: "center" }}>
              <div style={{ width: "3vw", height: "3vw", backgroundColor: "#F8F9FA", borderRadius: "0.5vw", border: "1px solid rgba(255,255,255,0.1)" }} />
              <div>
                <div style={{ fontSize: "1.1vw", fontWeight: 600 }}>Clean White</div>
                <div style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.4)" }}>#F8F9FA</div>
              </div>
            </div>
          </div>

          <div style={{ flex: 1, padding: "3vh 2.5vw", backgroundColor: "#131726", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "1vw", display: "flex", flexDirection: "column", gap: "2vh" }}>
            <div style={{ fontSize: "1vw", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Design System</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
                <div style={{ width: "0.4vw", height: "2vh", backgroundColor: "#4F7FFF", borderRadius: "0.2vw", marginTop: "0.3vh", flexShrink: 0 }} />
                <div style={{ fontSize: "1.1vw", color: "rgba(255,255,255,0.7)" }}>Diamond logo mark in navbar and footer</div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
                <div style={{ width: "0.4vw", height: "2vh", backgroundColor: "#4F7FFF", borderRadius: "0.2vw", marginTop: "0.3vh", flexShrink: 0 }} />
                <div style={{ fontSize: "1.1vw", color: "rgba(255,255,255,0.7)" }}>Framer Motion animations throughout</div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
                <div style={{ width: "0.4vw", height: "2vh", backgroundColor: "#4F7FFF", borderRadius: "0.2vw", marginTop: "0.3vh", flexShrink: 0 }} />
                <div style={{ fontSize: "1.1vw", color: "rgba(255,255,255,0.7)" }}>Fully responsive — mobile, tablet, and desktop</div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
                <div style={{ width: "0.4vw", height: "2vh", backgroundColor: "#4F7FFF", borderRadius: "0.2vw", marginTop: "0.3vh", flexShrink: 0 }} />
                <div style={{ fontSize: "1.1vw", color: "rgba(255,255,255,0.7)" }}>shadcn/ui component library for consistency</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>FIRST NATIONWIDE MORTGAGE BANK</div>
      <div style={{ position: "absolute", bottom: "5vh", right: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)" }}>07 / 17</div>
    </div>
  );
}
