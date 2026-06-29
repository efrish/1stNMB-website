export default function Slide09Forms() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{ backgroundColor: "#0C0F1A", fontFamily: "'Inter', sans-serif", color: "#ffffff" }}
    >
      <div style={{ position: "absolute", bottom: "-15vh", right: "-5vw", width: "45vw", height: "45vw", borderRadius: "50%", backgroundColor: "#4F7FFF", opacity: 0.06, filter: "blur(10vw)" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "4vw 4vw", opacity: 0.5, pointerEvents: "none" }} />

      <div style={{ position: "absolute", top: "5vh", left: "5vw", display: "flex", alignItems: "center", gap: "1vw", zIndex: 10 }}>
        <div style={{ width: "2vw", height: "2vw", backgroundColor: "#4F7FFF", borderRadius: "0.4vw" }} />
        <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "-0.02em" }}>FNMB</div>
      </div>
      <div style={{ position: "absolute", top: "5vh", right: "5vw", fontSize: "1vw", color: "rgba(255,255,255,0.4)", zIndex: 10 }}>June 2026</div>

      <div style={{ position: "relative", zIndex: 10, display: "flex", width: "90vw", margin: "0 auto", height: "100%", alignItems: "center", gap: "6vw" }}>
        <div style={{ flex: "0 0 35vw", display: "flex", flexDirection: "column", gap: "3vh" }}>
          <div style={{ display: "inline-block", alignSelf: "flex-start", padding: "0.5vh 1.2vw", backgroundColor: "rgba(79,127,255,0.12)", border: "1px solid rgba(79,127,255,0.3)", borderRadius: "2vw", color: "#4F7FFF", fontSize: "0.9vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Loan Application Forms
          </div>
          <h2 style={{ fontSize: "4vw", fontWeight: 800, margin: 0, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Two forms. Zero friction.
          </h2>
          <p style={{ fontSize: "1.3vw", fontWeight: 300, color: "rgba(255,255,255,0.55)", lineHeight: 1.6, margin: 0 }}>
            Built with react-hook-form + Zod. Every field is validated client-side before the request reaches the server.
          </p>
          <div style={{ display: "flex", gap: "1.5vw" }}>
            <div style={{ padding: "1.5vh 2vw", backgroundColor: "rgba(79,127,255,0.1)", border: "1px solid rgba(79,127,255,0.25)", borderRadius: "0.5vw", fontSize: "1.1vw", color: "#4F7FFF", fontWeight: 600 }}>Long-Term</div>
            <div style={{ padding: "1.5vh 2vw", backgroundColor: "rgba(124,107,240,0.1)", border: "1px solid rgba(124,107,240,0.25)", borderRadius: "0.5vw", fontSize: "1.1vw", color: "#7C6BF0", fontWeight: 600 }}>Bridge Loan</div>
          </div>
        </div>

        <div style={{ flex: 1, backgroundColor: "#131726", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "1vw", overflow: "hidden" }}>
          <div style={{ padding: "1.5vh 2vw", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", gap: "0.6vw" }}>
            <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#FF5F56" }} />
            <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
            <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#27C93F" }} />
            <div style={{ marginLeft: "1vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)" }}>Long-Term Mortgage Application</div>
          </div>
          <div style={{ padding: "2.5vw", display: "flex", flexDirection: "column", gap: "1.8vh" }}>
            <div style={{ display: "flex", gap: "1.5vw" }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.4)", marginBottom: "0.8vh" }}>First Name</div>
                <div style={{ height: "4vh", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.4vw" }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.4)", marginBottom: "0.8vh" }}>Last Name</div>
                <div style={{ height: "4vh", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.4vw" }} />
              </div>
            </div>
            <div>
              <div style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.4)", marginBottom: "0.8vh" }}>Email Address</div>
              <div style={{ height: "4vh", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(79,127,255,0.3)", borderRadius: "0.4vw" }} />
            </div>
            <div>
              <div style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.4)", marginBottom: "0.8vh" }}>Property Address</div>
              <div style={{ height: "4vh", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.4vw" }} />
            </div>
            <div style={{ display: "flex", gap: "1.5vw" }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.4)", marginBottom: "0.8vh" }}>Purchase Price</div>
                <div style={{ height: "4vh", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.4vw" }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.4)", marginBottom: "0.8vh" }}>Down Payment</div>
                <div style={{ height: "4vh", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "0.4vw" }} />
              </div>
            </div>
            <div style={{ height: "4.5vh", backgroundColor: "#4F7FFF", borderRadius: "0.4vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ fontSize: "1.1vw", fontWeight: 600 }}>Submit Application</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>FIRST NATIONWIDE MORTGAGE BANK</div>
      <div style={{ position: "absolute", bottom: "5vh", right: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)" }}>09 / 17</div>
    </div>
  );
}
