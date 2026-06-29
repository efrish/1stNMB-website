export default function Slide12AdminDashboard() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{ backgroundColor: "#0C0F1A", fontFamily: "'Inter', sans-serif", color: "#ffffff" }}
    >
      <div style={{ position: "absolute", top: "-10vh", right: "-5vw", width: "45vw", height: "45vw", borderRadius: "50%", backgroundColor: "#7C6BF0", opacity: 0.06, filter: "blur(10vw)" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "4vw 4vw", opacity: 0.5, pointerEvents: "none" }} />

      <div style={{ position: "absolute", top: "5vh", left: "5vw", display: "flex", alignItems: "center", gap: "1vw", zIndex: 10 }}>
        <div style={{ width: "2vw", height: "2vw", backgroundColor: "#4F7FFF", borderRadius: "0.4vw" }} />
        <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "-0.02em" }}>FNMB</div>
      </div>
      <div style={{ position: "absolute", top: "5vh", right: "5vw", fontSize: "1vw", color: "rgba(255,255,255,0.4)", zIndex: 10 }}>June 2026</div>

      <div style={{ position: "relative", zIndex: 10, display: "flex", width: "90vw", margin: "0 auto", height: "100%", alignItems: "center", gap: "5vw" }}>
        <div style={{ flex: "0 0 30vw", display: "flex", flexDirection: "column", gap: "3vh" }}>
          <div style={{ display: "inline-block", alignSelf: "flex-start", padding: "0.5vh 1.2vw", backgroundColor: "rgba(124,107,240,0.12)", border: "1px solid rgba(124,107,240,0.3)", borderRadius: "2vw", color: "#7C6BF0", fontSize: "0.9vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Admin Dashboard
          </div>
          <h2 style={{ fontSize: "4vw", fontWeight: 800, margin: 0, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Private. Instant. Complete.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
              <div style={{ width: "0.4vw", height: "2vh", backgroundColor: "#7C6BF0", borderRadius: "0.2vw", marginTop: "0.3vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>Password-protected at /admin</div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
              <div style={{ width: "0.4vw", height: "2vh", backgroundColor: "#7C6BF0", borderRadius: "0.2vw", marginTop: "0.3vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>Stats cards: total, long-term, bridge loan counts</div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
              <div style={{ width: "0.4vw", height: "2vh", backgroundColor: "#7C6BF0", borderRadius: "0.2vw", marginTop: "0.3vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>Searchable, filterable application table</div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
              <div style={{ width: "0.4vw", height: "2vh", backgroundColor: "#7C6BF0", borderRadius: "0.2vw", marginTop: "0.3vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>Click any row to expand full applicant details</div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
              <div style={{ width: "0.4vw", height: "2vh", backgroundColor: "#7C6BF0", borderRadius: "0.2vw", marginTop: "0.3vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>Auto-refreshes every 30 seconds</div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, backgroundColor: "#131726", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "1vw", overflow: "hidden" }}>
          <div style={{ padding: "1.5vh 2vw", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "rgba(17,254,C,0.03)" }}>
            <div style={{ fontSize: "1.1vw", fontWeight: 700 }}>FNMB Admin</div>
            <div style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.3)" }}>Application Dashboard</div>
          </div>
          <div style={{ padding: "2vw", display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div style={{ display: "flex", gap: "1.5vw" }}>
              <div style={{ flex: 1, padding: "1.5vh 1.5vw", backgroundColor: "rgba(79,127,255,0.08)", border: "1px solid rgba(79,127,255,0.15)", borderRadius: "0.6vw" }}>
                <div style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.4)" }}>Total Applications</div>
                <div style={{ fontSize: "2.5vw", fontWeight: 800, color: "#4F7FFF" }}>6</div>
              </div>
              <div style={{ flex: 1, padding: "1.5vh 1.5vw", backgroundColor: "rgba(124,107,240,0.08)", border: "1px solid rgba(124,107,240,0.15)", borderRadius: "0.6vw" }}>
                <div style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.4)" }}>Long-Term</div>
                <div style={{ fontSize: "2.5vw", fontWeight: 800, color: "#7C6BF0" }}>4</div>
              </div>
              <div style={{ flex: 1, padding: "1.5vh 1.5vw", backgroundColor: "rgba(255,189,46,0.08)", border: "1px solid rgba(255,189,46,0.15)", borderRadius: "0.6vw" }}>
                <div style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.4)" }}>Bridge Loan</div>
                <div style={{ fontSize: "2.5vw", fontWeight: 800, color: "#FFBD2E" }}>2</div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8vh" }}>
              <div style={{ display: "flex", gap: "2vw", padding: "1.2vh 1vw", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: "0.85vw", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                <div style={{ flex: 2 }}>Name</div>
                <div style={{ flex: 2 }}>Email</div>
                <div style={{ flex: 1 }}>Type</div>
              </div>
              <div style={{ display: "flex", gap: "2vw", padding: "1.2vh 1vw", backgroundColor: "rgba(79,127,255,0.05)", borderRadius: "0.3vw", fontSize: "1vw" }}>
                <div style={{ flex: 2, fontWeight: 600 }}>John Smith</div>
                <div style={{ flex: 2, color: "rgba(255,255,255,0.5)" }}>john@example.com</div>
                <div style={{ flex: 1 }}><span style={{ color: "#4F7FFF", fontSize: "0.9vw", backgroundColor: "rgba(79,127,255,0.1)", padding: "0.3vh 0.6vw", borderRadius: "2vw" }}>Long-Term</span></div>
              </div>
              <div style={{ display: "flex", gap: "2vw", padding: "1.2vh 1vw", fontSize: "1vw" }}>
                <div style={{ flex: 2, fontWeight: 600 }}>Maria Garcia</div>
                <div style={{ flex: 2, color: "rgba(255,255,255,0.5)" }}>maria@example.com</div>
                <div style={{ flex: 1 }}><span style={{ color: "#FFBD2E", fontSize: "0.9vw", backgroundColor: "rgba(255,189,46,0.1)", padding: "0.3vh 0.6vw", borderRadius: "2vw" }}>Bridge Loan</span></div>
              </div>
              <div style={{ display: "flex", gap: "2vw", padding: "1.2vh 1vw", fontSize: "1vw" }}>
                <div style={{ flex: 2, fontWeight: 600 }}>Edward Frish</div>
                <div style={{ flex: 2, color: "rgba(255,255,255,0.5)" }}>efrish@c21edva.com</div>
                <div style={{ flex: 1 }}><span style={{ color: "#4F7FFF", fontSize: "0.9vw", backgroundColor: "rgba(79,127,255,0.1)", padding: "0.3vh 0.6vw", borderRadius: "2vw" }}>Long-Term</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>FIRST NATIONWIDE MORTGAGE BANK</div>
      <div style={{ position: "absolute", bottom: "5vh", right: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)" }}>12 / 17</div>
    </div>
  );
}
