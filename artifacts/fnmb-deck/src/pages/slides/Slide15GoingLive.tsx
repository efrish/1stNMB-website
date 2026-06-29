export default function Slide15GoingLive() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{ backgroundColor: "#0C0F1A", fontFamily: "'Inter', sans-serif", color: "#ffffff" }}
    >
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "60vw", height: "60vw", borderRadius: "50%", backgroundColor: "#7C6BF0", opacity: 0.05, filter: "blur(15vw)" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "4vw 4vw", opacity: 0.5, pointerEvents: "none" }} />

      <div style={{ position: "absolute", top: "5vh", left: "5vw", display: "flex", alignItems: "center", gap: "1vw", zIndex: 10 }}>
        <div style={{ width: "2vw", height: "2vw", backgroundColor: "#4F7FFF", borderRadius: "0.4vw" }} />
        <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "-0.02em" }}>FNMB</div>
      </div>
      <div style={{ position: "absolute", top: "5vh", right: "5vw", fontSize: "1vw", color: "rgba(255,255,255,0.4)", zIndex: 10 }}>June 2026</div>

      <div style={{ position: "relative", zIndex: 10, display: "flex", width: "90vw", margin: "0 auto", height: "100%", alignItems: "center", gap: "6vw" }}>
        <div style={{ flex: "0 0 33vw", display: "flex", flexDirection: "column", gap: "3vh" }}>
          <div style={{ display: "inline-block", alignSelf: "flex-start", padding: "0.5vh 1.2vw", backgroundColor: "rgba(124,107,240,0.12)", border: "1px solid rgba(124,107,240,0.3)", borderRadius: "2vw", color: "#7C6BF0", fontSize: "0.9vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Going Live
          </div>
          <h2 style={{ fontSize: "4vw", fontWeight: 800, margin: 0, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Replacing the Wix site.
          </h2>
          <p style={{ fontSize: "1.3vw", fontWeight: 300, color: "rgba(255,255,255,0.55)", lineHeight: 1.6, margin: 0 }}>
            Two steps to point 1stnmb.com at the new platform. The old site stays live during DNS propagation — zero downtime.
          </p>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2.5vh" }}>
          <div style={{ padding: "3vh 2.5vw", backgroundColor: "#131726", border: "1px solid rgba(79,127,255,0.25)", borderRadius: "1vw", display: "flex", gap: "2vw", alignItems: "flex-start" }}>
            <div style={{ fontSize: "3vw", fontWeight: 800, color: "#4F7FFF", lineHeight: 1, flexShrink: 0 }}>01</div>
            <div>
              <div style={{ fontSize: "1.4vw", fontWeight: 700, marginBottom: "1vh" }}>Add custom domain in Replit</div>
              <div style={{ fontSize: "1.1vw", color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>Go to Deployments → Custom Domains → add 1stnmb.com and www.1stnmb.com. Replit provides the DNS record to add.</div>
            </div>
          </div>
          <div style={{ padding: "3vh 2.5vw", backgroundColor: "#131726", border: "1px solid rgba(124,107,240,0.25)", borderRadius: "1vw", display: "flex", gap: "2vw", alignItems: "flex-start" }}>
            <div style={{ fontSize: "3vw", fontWeight: 800, color: "#7C6BF0", lineHeight: 1, flexShrink: 0 }}>02</div>
            <div>
              <div style={{ fontSize: "1.4vw", fontWeight: 700, marginBottom: "1vh" }}>Update DNS at your registrar</div>
              <div style={{ fontSize: "1.1vw", color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>Log into GoDaddy / Namecheap / etc. Remove Wix DNS records. Add the CNAME or A record Replit provided.</div>
            </div>
          </div>
          <div style={{ padding: "2vh 2.5vw", backgroundColor: "rgba(39,201,63,0.06)", border: "1px solid rgba(39,201,63,0.15)", borderRadius: "0.8vw", display: "flex", alignItems: "center", gap: "1.5vw" }}>
            <div style={{ width: "0.4vw", height: "2.5vh", backgroundColor: "#27C93F", borderRadius: "0.2vw", flexShrink: 0 }} />
            <div style={{ fontSize: "1.1vw", color: "rgba(255,255,255,0.65)" }}>DNS propagation: minutes to 24 hours. No downtime during the switch.</div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>FIRST NATIONWIDE MORTGAGE BANK</div>
      <div style={{ position: "absolute", bottom: "5vh", right: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)" }}>15 / 17</div>
    </div>
  );
}
