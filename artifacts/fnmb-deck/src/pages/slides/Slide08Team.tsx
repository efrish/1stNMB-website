export default function Slide08Team() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{ backgroundColor: "#0C0F1A", fontFamily: "'Inter', sans-serif", color: "#ffffff" }}
    >
      <div style={{ position: "absolute", top: "-10vh", right: "10vw", width: "45vw", height: "45vw", borderRadius: "50%", backgroundColor: "#7C6BF0", opacity: 0.06, filter: "blur(10vw)" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "4vw 4vw", opacity: 0.5, pointerEvents: "none" }} />

      <div style={{ position: "absolute", top: "5vh", left: "5vw", display: "flex", alignItems: "center", gap: "1vw", zIndex: 10 }}>
        <div style={{ width: "2vw", height: "2vw", backgroundColor: "#4F7FFF", borderRadius: "0.4vw" }} />
        <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "-0.02em" }}>FNMB</div>
      </div>
      <div style={{ position: "absolute", top: "5vh", right: "5vw", fontSize: "1vw", color: "rgba(255,255,255,0.4)", zIndex: 10 }}>June 2026</div>

      <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "0 8vw" }}>
        <div style={{ display: "inline-block", padding: "0.5vh 1.2vw", backgroundColor: "rgba(124,107,240,0.12)", border: "1px solid rgba(124,107,240,0.3)", borderRadius: "2vw", color: "#7C6BF0", fontSize: "0.9vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "3vh" }}>
          The Team
        </div>
        <h2 style={{ fontSize: "4.5vw", fontWeight: 800, margin: "0 0 5vh 0", lineHeight: 1.05, letterSpacing: "-0.03em", textAlign: "center" }}>
          Pyramid layout on the About page.
        </h2>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2.5vh", width: "100%" }}>
          <div style={{ padding: "2.5vh 4vw", backgroundColor: "#131726", border: "1px solid rgba(79,127,255,0.3)", borderRadius: "1vw", textAlign: "center", width: "35vw" }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 800, marginBottom: "0.5vh" }}>Edward Frish</div>
            <div style={{ fontSize: "1.1vw", color: "#4F7FFF", fontWeight: 600 }}>President · Broker · Owner</div>
          </div>
          <div style={{ display: "flex", gap: "2vw", width: "100%", justifyContent: "center" }}>
            <div style={{ padding: "2.5vh 3vw", backgroundColor: "#131726", border: "1px solid rgba(124,107,240,0.2)", borderRadius: "1vw", textAlign: "center", flex: 1, maxWidth: "30vw" }}>
              <div style={{ fontSize: "1.4vw", fontWeight: 700, marginBottom: "0.5vh" }}>Annabel R.</div>
              <div style={{ fontSize: "1vw", color: "#7C6BF0", fontWeight: 600 }}>Real Estate Agent · Educator · Marketing</div>
            </div>
            <div style={{ padding: "2.5vh 3vw", backgroundColor: "#131726", border: "1px solid rgba(124,107,240,0.2)", borderRadius: "1vw", textAlign: "center", flex: 1, maxWidth: "30vw" }}>
              <div style={{ fontSize: "1.4vw", fontWeight: 700, marginBottom: "0.5vh" }}>Gaudy R.</div>
              <div style={{ fontSize: "1vw", color: "#7C6BF0", fontWeight: 600 }}>Transaction Coordinator · Office Manager</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "3vh", fontSize: "1.1vw", color: "rgba(255,255,255,0.4)" }}>
          Each team member shown with a real photo and bio on the About page.
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>FIRST NATIONWIDE MORTGAGE BANK</div>
      <div style={{ position: "absolute", bottom: "5vh", right: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)" }}>08 / 17</div>
    </div>
  );
}
