export default function Slide11Email() {
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

      <div style={{ position: "relative", zIndex: 10, display: "flex", width: "90vw", margin: "0 auto", height: "100%", alignItems: "center", gap: "6vw" }}>
        <div style={{ flex: "0 0 35vw", display: "flex", flexDirection: "column", gap: "3vh" }}>
          <div style={{ display: "inline-block", alignSelf: "flex-start", padding: "0.5vh 1.2vw", backgroundColor: "rgba(79,127,255,0.12)", border: "1px solid rgba(79,127,255,0.3)", borderRadius: "2vw", color: "#4F7FFF", fontSize: "0.9vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Email Notifications
          </div>
          <h2 style={{ fontSize: "4vw", fontWeight: 800, margin: 0, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            No lead
          </h2>
          <h2 style={{ fontSize: "4vw", fontWeight: 800, margin: 0, lineHeight: 1.05, letterSpacing: "-0.03em", color: "rgba(255,255,255,0.3)" }}>
            goes unnoticed.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh", marginTop: "1vh" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
              <div style={{ width: "0.4vw", height: "2vh", backgroundColor: "#4F7FFF", borderRadius: "0.2vw", marginTop: "0.3vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>SMTP via Gmail — Nodemailer</div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
              <div style={{ width: "0.4vw", height: "2vh", backgroundColor: "#4F7FFF", borderRadius: "0.2vw", marginTop: "0.3vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>Sent to efrish@c21edva.com on every submission</div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
              <div style={{ width: "0.4vw", height: "2vh", backgroundColor: "#4F7FFF", borderRadius: "0.2vw", marginTop: "0.3vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>Non-fatal — application always saves to DB first</div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, backgroundColor: "#131726", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "1vw", overflow: "hidden" }}>
          <div style={{ padding: "1.5vh 2vw", borderBottom: "1px solid rgba(255,255,255,0.05)", backgroundColor: "rgba(79,127,255,0.05)", display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "1.5vw", height: "1.5vw", backgroundColor: "#4F7FFF", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: "0.7vw", height: "0.5vw", borderBottom: "0.15vw solid #fff", borderLeft: "0.15vw solid #fff", transform: "rotate(-45deg)", marginTop: "-0.2vh" }} />
            </div>
            <div style={{ fontSize: "1vw", fontWeight: 600 }}>New Application Received</div>
          </div>
          <div style={{ padding: "2.5vw", display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div style={{ display: "flex", gap: "1vw" }}>
              <div style={{ fontSize: "1vw", color: "rgba(255,255,255,0.4)", width: "8vw", flexShrink: 0 }}>From:</div>
              <div style={{ fontSize: "1vw" }}>noreply@1stnmb.com</div>
            </div>
            <div style={{ display: "flex", gap: "1vw" }}>
              <div style={{ fontSize: "1vw", color: "rgba(255,255,255,0.4)", width: "8vw", flexShrink: 0 }}>To:</div>
              <div style={{ fontSize: "1vw" }}>efrish@c21edva.com</div>
            </div>
            <div style={{ display: "flex", gap: "1vw" }}>
              <div style={{ fontSize: "1vw", color: "rgba(255,255,255,0.4)", width: "8vw", flexShrink: 0 }}>Subject:</div>
              <div style={{ fontSize: "1vw" }}>New Long-Term Mortgage Application — John Smith</div>
            </div>
            <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.06)", margin: "1vh 0" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
              <div style={{ fontSize: "1vw", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>Name: John Smith</div>
              <div style={{ fontSize: "1vw", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>Email: john@example.com · Phone: (818) 555-1234</div>
              <div style={{ fontSize: "1vw", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>Property: 123 Main St, Los Angeles CA</div>
              <div style={{ fontSize: "1vw", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>Purchase Price: $850,000 · Down Payment: $170,000</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>FIRST NATIONWIDE MORTGAGE BANK</div>
      <div style={{ position: "absolute", bottom: "5vh", right: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)" }}>11 / 17</div>
    </div>
  );
}
