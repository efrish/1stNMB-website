export default function Slide01Title() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{ backgroundColor: "#0C0F1A", fontFamily: "'Inter', sans-serif", color: "#ffffff" }}
    >
      <div style={{ position: "absolute", top: "-20vh", right: "-10vw", width: "50vw", height: "50vw", borderRadius: "50%", backgroundColor: "#4F7FFF", opacity: 0.06, filter: "blur(8vw)" }} />
      <div style={{ position: "absolute", bottom: "-25vh", left: "-10vw", width: "55vw", height: "55vw", borderRadius: "50%", backgroundColor: "#7C6BF0", opacity: 0.06, filter: "blur(10vw)" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "4vw 4vw", opacity: 0.5, pointerEvents: "none" }} />

      <div style={{ position: "absolute", top: "5vh", left: "5vw", display: "flex", alignItems: "center", gap: "1vw", zIndex: 10 }}>
        <div style={{ width: "2vw", height: "2vw", backgroundColor: "#4F7FFF", borderRadius: "0.4vw" }} />
        <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "-0.02em" }}>FNMB</div>
      </div>
      <div style={{ position: "absolute", top: "5vh", right: "5vw", fontSize: "1vw", color: "rgba(255,255,255,0.4)", zIndex: 10 }}>June 2026</div>

      <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", padding: "0 10vw" }}>
        <div style={{ display: "inline-flex", alignItems: "center", padding: "0.6vh 1.5vw", backgroundColor: "rgba(79, 127, 255, 0.12)", border: "1px solid rgba(79, 127, 255, 0.3)", borderRadius: "2vw", color: "#4F7FFF", fontSize: "1vw", fontWeight: 600, marginBottom: "4vh", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Digital Rebuild · 2026
        </div>
        <h1 style={{ fontSize: "6.5vw", fontWeight: 800, margin: "0 0 2vh 0", lineHeight: 1.05, letterSpacing: "-0.04em", textWrap: "balance" }}>
          First Nationwide
        </h1>
        <h1 style={{ fontSize: "6.5vw", fontWeight: 800, margin: "0 0 3vh 0", lineHeight: 1.05, letterSpacing: "-0.04em", color: "rgba(255,255,255,0.35)" }}>
          Mortgage Bank
        </h1>
        <p style={{ fontSize: "1.8vw", fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.5, maxWidth: "50vw", margin: "0 0 6vh 0" }}>
          A complete digital rebuild — from static Wix page to a fully interactive mortgage platform.
        </p>
        <div style={{ display: "flex", gap: "3vw", alignItems: "center" }}>
          <div style={{ padding: "1vh 2vw", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.4vw", fontSize: "1vw", color: "rgba(255,255,255,0.7)" }}>Woodland Hills, CA</div>
          <div style={{ width: "1px", height: "2vh", backgroundColor: "rgba(255,255,255,0.15)" }} />
          <div style={{ padding: "1vh 2vw", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.4vw", fontSize: "1vw", color: "rgba(255,255,255,0.7)" }}>DRE #01875449</div>
          <div style={{ width: "1px", height: "2vh", backgroundColor: "rgba(255,255,255,0.15)" }} />
          <div style={{ padding: "1vh 2vw", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.4vw", fontSize: "1vw", color: "rgba(255,255,255,0.7)" }}>NMLS #327221</div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>FIRST NATIONWIDE MORTGAGE BANK</div>
      <div style={{ position: "absolute", bottom: "5vh", right: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)" }}>01 / 17</div>
    </div>
  );
}
