export default function Slide17Closing() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{ backgroundColor: "#0C0F1A", fontFamily: "'Inter', sans-serif", color: "#ffffff" }}
    >
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "65vw", height: "65vw", borderRadius: "50%", backgroundColor: "#4F7FFF", opacity: 0.07, filter: "blur(16vw)" }} />
      <div style={{ position: "absolute", top: "-20vh", right: "-10vw", width: "45vw", height: "45vw", borderRadius: "50%", backgroundColor: "#7C6BF0", opacity: 0.05, filter: "blur(10vw)" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "4vw 4vw", opacity: 0.5, pointerEvents: "none" }} />

      <div style={{ position: "absolute", top: "5vh", left: "5vw", display: "flex", alignItems: "center", gap: "1vw", zIndex: 10 }}>
        <div style={{ width: "2vw", height: "2vw", backgroundColor: "#4F7FFF", borderRadius: "0.4vw" }} />
        <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "-0.02em" }}>FNMB</div>
      </div>
      <div style={{ position: "absolute", top: "5vh", right: "5vw", fontSize: "1vw", color: "rgba(255,255,255,0.4)", zIndex: 10 }}>June 2026</div>

      <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", padding: "0 10vw" }}>
        <div style={{ marginBottom: "4vh" }}>
          <div style={{ width: "5vw", height: "5vw", backgroundColor: "rgba(79,127,255,0.1)", border: "1px solid rgba(79,127,255,0.25)", borderRadius: "1vw", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
            <div style={{ width: "2.5vw", height: "2.5vw", backgroundColor: "#4F7FFF", borderRadius: "0.5vw" }} />
          </div>
        </div>

        <h1 style={{ fontSize: "5.5vw", fontWeight: 800, margin: "0 0 1vh 0", lineHeight: 1.05, letterSpacing: "-0.04em" }}>
          First Nationwide Mortgage Bank
        </h1>
        <div style={{ height: "1px", width: "20vw", backgroundColor: "rgba(79,127,255,0.4)", margin: "3vh auto" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh", marginBottom: "5vh" }}>
          <div style={{ fontSize: "1.4vw", color: "rgba(255,255,255,0.7)" }}>21900 Burbank Blvd., #205, Woodland Hills CA 91367</div>
          <div style={{ fontSize: "1.4vw", color: "rgba(255,255,255,0.7)" }}>(818) 371-1665 · info@1stnmb.com</div>
          <div style={{ fontSize: "1.4vw", color: "#4F7FFF", fontWeight: 600 }}>1stnmb.com</div>
        </div>

        <div style={{ display: "flex", gap: "3vw" }}>
          <div style={{ padding: "1vh 2vw", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "0.4vw", fontSize: "1vw", color: "rgba(255,255,255,0.5)" }}>DRE #01875449</div>
          <div style={{ padding: "1vh 2vw", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "0.4vw", fontSize: "1vw", color: "rgba(255,255,255,0.5)" }}>NMLS #327221</div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>FIRST NATIONWIDE MORTGAGE BANK</div>
      <div style={{ position: "absolute", bottom: "5vh", right: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)" }}>17 / 17</div>
    </div>
  );
}
