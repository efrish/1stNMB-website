export default function Slide03Goals() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{ backgroundColor: "#0C0F1A", fontFamily: "'Inter', sans-serif", color: "#ffffff" }}
    >
      <div style={{ position: "absolute", top: "10vh", left: "20vw", width: "40vw", height: "40vw", borderRadius: "50%", backgroundColor: "#7C6BF0", opacity: 0.07, filter: "blur(12vw)" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "4vw 4vw", opacity: 0.5, pointerEvents: "none" }} />

      <div style={{ position: "absolute", top: "5vh", left: "5vw", display: "flex", alignItems: "center", gap: "1vw", zIndex: 10 }}>
        <div style={{ width: "2vw", height: "2vw", backgroundColor: "#4F7FFF", borderRadius: "0.4vw" }} />
        <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "-0.02em" }}>FNMB</div>
      </div>
      <div style={{ position: "absolute", top: "5vh", right: "5vw", fontSize: "1vw", color: "rgba(255,255,255,0.4)", zIndex: 10 }}>June 2026</div>

      <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "0 8vw" }}>
        <div style={{ display: "inline-block", padding: "0.5vh 1.2vw", backgroundColor: "rgba(79,127,255,0.12)", border: "1px solid rgba(79,127,255,0.3)", borderRadius: "2vw", color: "#4F7FFF", fontSize: "0.9vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "3vh" }}>
          Project Goals
        </div>
        <h2 style={{ fontSize: "4.5vw", fontWeight: 800, margin: "0 0 5vh 0", lineHeight: 1.05, letterSpacing: "-0.03em", textAlign: "center", textWrap: "balance" }}>
          Four problems. Four solutions.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2vw", width: "100%" }}>
          <div style={{ padding: "3vh 2.5vw", backgroundColor: "#131726", border: "1px solid rgba(79,127,255,0.2)", borderRadius: "1vw" }}>
            <div style={{ fontSize: "2.5vw", fontWeight: 800, color: "#4F7FFF", marginBottom: "1.5vh" }}>01</div>
            <div style={{ fontSize: "1.4vw", fontWeight: 700, marginBottom: "1vh" }}>Polished web presence</div>
            <div style={{ fontSize: "1.1vw", color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>Replace the Wix page with a professional, branded site that earns client trust.</div>
          </div>
          <div style={{ padding: "3vh 2.5vw", backgroundColor: "#131726", border: "1px solid rgba(124,107,240,0.2)", borderRadius: "1vw" }}>
            <div style={{ fontSize: "2.5vw", fontWeight: 800, color: "#7C6BF0", marginBottom: "1.5vh" }}>02</div>
            <div style={{ fontSize: "1.4vw", fontWeight: 700, marginBottom: "1vh" }}>Online mortgage applications</div>
            <div style={{ fontSize: "1.1vw", color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>Let clients apply for long-term and bridge loans directly from the website.</div>
          </div>
          <div style={{ padding: "3vh 2.5vw", backgroundColor: "#131726", border: "1px solid rgba(79,127,255,0.2)", borderRadius: "1vw" }}>
            <div style={{ fontSize: "2.5vw", fontWeight: 800, color: "#4F7FFF", marginBottom: "1.5vh" }}>03</div>
            <div style={{ fontSize: "1.4vw", fontWeight: 700, marginBottom: "1vh" }}>Instant email notifications</div>
            <div style={{ fontSize: "1.1vw", color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>Staff get an email the moment a new application comes in — no more missed leads.</div>
          </div>
          <div style={{ padding: "3vh 2.5vw", backgroundColor: "#131726", border: "1px solid rgba(124,107,240,0.2)", borderRadius: "1vw" }}>
            <div style={{ fontSize: "2.5vw", fontWeight: 800, color: "#7C6BF0", marginBottom: "1.5vh" }}>04</div>
            <div style={{ fontSize: "1.4vw", fontWeight: 700, marginBottom: "1vh" }}>Private admin dashboard</div>
            <div style={{ fontSize: "1.1vw", color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>A password-protected portal to view and manage all incoming applications.</div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>FIRST NATIONWIDE MORTGAGE BANK</div>
      <div style={{ position: "absolute", bottom: "5vh", right: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)" }}>03 / 17</div>
    </div>
  );
}
