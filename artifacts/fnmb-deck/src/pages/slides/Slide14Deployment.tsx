export default function Slide14Deployment() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{ backgroundColor: "#0C0F1A", fontFamily: "'Inter', sans-serif", color: "#ffffff" }}
    >
      <div style={{ position: "absolute", top: "10vh", right: "10vw", width: "40vw", height: "40vw", borderRadius: "50%", backgroundColor: "#4F7FFF", opacity: 0.07, filter: "blur(10vw)" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "4vw 4vw", opacity: 0.5, pointerEvents: "none" }} />

      <div style={{ position: "absolute", top: "5vh", left: "5vw", display: "flex", alignItems: "center", gap: "1vw", zIndex: 10 }}>
        <div style={{ width: "2vw", height: "2vw", backgroundColor: "#4F7FFF", borderRadius: "0.4vw" }} />
        <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "-0.02em" }}>FNMB</div>
      </div>
      <div style={{ position: "absolute", top: "5vh", right: "5vw", fontSize: "1vw", color: "rgba(255,255,255,0.4)", zIndex: 10 }}>June 2026</div>

      <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "0 8vw" }}>
        <div style={{ display: "inline-block", padding: "0.5vh 1.2vw", backgroundColor: "rgba(79,127,255,0.12)", border: "1px solid rgba(79,127,255,0.3)", borderRadius: "2vw", color: "#4F7FFF", fontSize: "0.9vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "3vh" }}>
          Deployment
        </div>
        <h2 style={{ fontSize: "4.5vw", fontWeight: 800, margin: "0 0 5vh 0", lineHeight: 1.05, letterSpacing: "-0.03em", textAlign: "center" }}>
          Live on Replit.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2vw", width: "100%" }}>
          <div style={{ padding: "3vh 2.5vw", backgroundColor: "#131726", border: "1px solid rgba(79,127,255,0.2)", borderRadius: "1vw" }}>
            <div style={{ fontSize: "1.8vw", fontWeight: 800, color: "#4F7FFF", marginBottom: "1.5vh" }}>Autoscale</div>
            <div style={{ fontSize: "1.1vw", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>Scales with traffic. Only runs when requests arrive — cost-efficient.</div>
          </div>
          <div style={{ padding: "3vh 2.5vw", backgroundColor: "#131726", border: "1px solid rgba(124,107,240,0.2)", borderRadius: "1vw" }}>
            <div style={{ fontSize: "1.8vw", fontWeight: 800, color: "#7C6BF0", marginBottom: "1.5vh" }}>Isolated Envs</div>
            <div style={{ fontSize: "1.1vw", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>Production and development environments fully separated.</div>
          </div>
          <div style={{ padding: "3vh 2.5vw", backgroundColor: "#131726", border: "1px solid rgba(79,127,255,0.2)", borderRadius: "1vw" }}>
            <div style={{ fontSize: "1.8vw", fontWeight: 800, color: "#4F7FFF", marginBottom: "1.5vh" }}>Secure Secrets</div>
            <div style={{ fontSize: "1.1vw", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>All credentials stored as Replit environment variables — never in code.</div>
          </div>
        </div>

        <div style={{ marginTop: "3vh", padding: "2vh 3vw", backgroundColor: "rgba(79,127,255,0.06)", border: "1px solid rgba(79,127,255,0.15)", borderRadius: "0.8vw", display: "flex", alignItems: "center", gap: "1.5vw", width: "100%" }}>
          <div style={{ width: "0.4vw", height: "3vh", backgroundColor: "#4F7FFF", borderRadius: "0.2vw", flexShrink: 0 }} />
          <div style={{ fontSize: "1.2vw", color: "rgba(255,255,255,0.7)" }}>API + Frontend served through a shared reverse proxy — one domain, TLS included, no extra configuration</div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>FIRST NATIONWIDE MORTGAGE BANK</div>
      <div style={{ position: "absolute", bottom: "5vh", right: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)" }}>14 / 17</div>
    </div>
  );
}
