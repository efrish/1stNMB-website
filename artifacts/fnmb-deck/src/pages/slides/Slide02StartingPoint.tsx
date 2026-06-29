export default function Slide02StartingPoint() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{ backgroundColor: "#0C0F1A", fontFamily: "'Inter', sans-serif", color: "#ffffff" }}
    >
      <div style={{ position: "absolute", top: "-10vh", right: "-5vw", width: "45vw", height: "45vw", borderRadius: "50%", backgroundColor: "#4F7FFF", opacity: 0.05, filter: "blur(8vw)" }} />
      <div style={{ position: "absolute", bottom: "-20vh", left: "-10vw", width: "50vw", height: "50vw", borderRadius: "50%", backgroundColor: "#7C6BF0", opacity: 0.05, filter: "blur(10vw)" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "4vw 4vw", opacity: 0.5, pointerEvents: "none" }} />

      <div style={{ position: "absolute", top: "5vh", left: "5vw", display: "flex", alignItems: "center", gap: "1vw", zIndex: 10 }}>
        <div style={{ width: "2vw", height: "2vw", backgroundColor: "#4F7FFF", borderRadius: "0.4vw" }} />
        <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "-0.02em" }}>FNMB</div>
      </div>
      <div style={{ position: "absolute", top: "5vh", right: "5vw", fontSize: "1vw", color: "rgba(255,255,255,0.4)", zIndex: 10 }}>June 2026</div>

      <div style={{ position: "relative", zIndex: 10, display: "flex", width: "90vw", margin: "0 auto", height: "100%", alignItems: "center", gap: "6vw" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh" }}>
          <div style={{ display: "inline-block", alignSelf: "flex-start", padding: "0.5vh 1.2vw", backgroundColor: "rgba(124,107,240,0.12)", border: "1px solid rgba(124,107,240,0.3)", borderRadius: "2vw", color: "#7C6BF0", fontSize: "0.9vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            The Starting Point
          </div>
          <h2 style={{ fontSize: "4.5vw", fontWeight: 800, margin: 0, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            A sparse Wix page
          </h2>
          <p style={{ fontSize: "1.5vw", fontWeight: 300, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0, maxWidth: "38vw" }}>
            1stnmb.com existed — but it couldn't do much. No way for clients to apply, no tools for staff, no real brand.
          </p>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{ padding: "2.5vh 2vw", backgroundColor: "#131726", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "0.8vw" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "1vh" }}>
              <div style={{ width: "0.4vw", height: "2.5vh", backgroundColor: "#7C6BF0", borderRadius: "0.2vw" }} />
              <div style={{ fontSize: "1.3vw", fontWeight: 600 }}>No online application forms</div>
            </div>
            <div style={{ fontSize: "1.1vw", color: "rgba(255,255,255,0.5)", paddingLeft: "1.4vw" }}>Clients had to call or email to start a loan inquiry.</div>
          </div>
          <div style={{ padding: "2.5vh 2vw", backgroundColor: "#131726", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "0.8vw" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "1vh" }}>
              <div style={{ width: "0.4vw", height: "2.5vh", backgroundColor: "#7C6BF0", borderRadius: "0.2vw" }} />
              <div style={{ fontSize: "1.3vw", fontWeight: 600 }}>No admin tools for staff</div>
            </div>
            <div style={{ fontSize: "1.1vw", color: "rgba(255,255,255,0.5)", paddingLeft: "1.4vw" }}>Zero visibility into who had reached out or applied.</div>
          </div>
          <div style={{ padding: "2.5vh 2vw", backgroundColor: "#131726", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "0.8vw" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "1vh" }}>
              <div style={{ width: "0.4vw", height: "2.5vh", backgroundColor: "#7C6BF0", borderRadius: "0.2vw" }} />
              <div style={{ fontSize: "1.3vw", fontWeight: 600 }}>No email notifications</div>
            </div>
            <div style={{ fontSize: "1.1vw", color: "rgba(255,255,255,0.5)", paddingLeft: "1.4vw" }}>New inquiries could sit unnoticed for hours or days.</div>
          </div>
          <div style={{ padding: "2.5vh 2vw", backgroundColor: "#131726", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "0.8vw" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "1vh" }}>
              <div style={{ width: "0.4vw", height: "2.5vh", backgroundColor: "#7C6BF0", borderRadius: "0.2vw" }} />
              <div style={{ fontSize: "1.3vw", fontWeight: 600 }}>Static, outdated design</div>
            </div>
            <div style={{ fontSize: "1.1vw", color: "rgba(255,255,255,0.5)", paddingLeft: "1.4vw" }}>No clear brand identity or professional presence.</div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>FIRST NATIONWIDE MORTGAGE BANK</div>
      <div style={{ position: "absolute", bottom: "5vh", right: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)" }}>02 / 17</div>
    </div>
  );
}
