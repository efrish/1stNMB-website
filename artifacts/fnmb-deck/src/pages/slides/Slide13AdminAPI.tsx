export default function Slide13AdminAPI() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{ backgroundColor: "#0C0F1A", fontFamily: "'Inter', sans-serif", color: "#ffffff" }}
    >
      <div style={{ position: "absolute", bottom: "-15vh", left: "-5vw", width: "45vw", height: "45vw", borderRadius: "50%", backgroundColor: "#4F7FFF", opacity: 0.06, filter: "blur(10vw)" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "4vw 4vw", opacity: 0.5, pointerEvents: "none" }} />

      <div style={{ position: "absolute", top: "5vh", left: "5vw", display: "flex", alignItems: "center", gap: "1vw", zIndex: 10 }}>
        <div style={{ width: "2vw", height: "2vw", backgroundColor: "#4F7FFF", borderRadius: "0.4vw" }} />
        <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "-0.02em" }}>FNMB</div>
      </div>
      <div style={{ position: "absolute", top: "5vh", right: "5vw", fontSize: "1vw", color: "rgba(255,255,255,0.4)", zIndex: 10 }}>June 2026</div>

      <div style={{ position: "relative", zIndex: 10, display: "flex", width: "90vw", margin: "0 auto", height: "100%", alignItems: "center", gap: "6vw" }}>
        <div style={{ flex: "0 0 33vw", display: "flex", flexDirection: "column", gap: "3vh" }}>
          <div style={{ display: "inline-block", alignSelf: "flex-start", padding: "0.5vh 1.2vw", backgroundColor: "rgba(79,127,255,0.12)", border: "1px solid rgba(79,127,255,0.3)", borderRadius: "2vw", color: "#4F7FFF", fontSize: "0.9vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Admin API
          </div>
          <h2 style={{ fontSize: "4vw", fontWeight: 800, margin: 0, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Secured by design.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
              <div style={{ width: "0.4vw", height: "2vh", backgroundColor: "#4F7FFF", borderRadius: "0.2vw", marginTop: "0.3vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>Bearer token required on every request</div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
              <div style={{ width: "0.4vw", height: "2vh", backgroundColor: "#4F7FFF", borderRadius: "0.2vw", marginTop: "0.3vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>Returns all applications newest-first</div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
              <div style={{ width: "0.4vw", height: "2vh", backgroundColor: "#4F7FFF", borderRadius: "0.2vw", marginTop: "0.3vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>Password stored as a secure env variable</div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
              <div style={{ width: "0.4vw", height: "2vh", backgroundColor: "#4F7FFF", borderRadius: "0.2vw", marginTop: "0.3vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>Separate route — no public API exposure</div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, backgroundColor: "#131726", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "1vw", overflow: "hidden" }}>
          <div style={{ padding: "1.5vh 2vw", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", gap: "0.6vw" }}>
            <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#FF5F56" }} />
            <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
            <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#27C93F" }} />
            <div style={{ marginLeft: "1vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)" }}>routes/admin.ts</div>
          </div>
          <div style={{ padding: "2vw", fontFamily: "monospace", display: "flex", flexDirection: "column", gap: "0.3vh" }}>
            <div style={{ fontSize: "1.1vw", lineHeight: 1.9 }}>
              <span style={{ color: "#7C6BF0" }}>function</span>
              <span style={{ color: "#ffffff" }}> requireAdminAuth</span>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>(req, res, next) {"{"}</span>
            </div>
            <div style={{ fontSize: "1.1vw", lineHeight: 1.9, paddingLeft: "2vw" }}>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>const token = auth.</span>
              <span style={{ color: "#4F7FFF" }}>slice</span>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>(7);</span>
            </div>
            <div style={{ fontSize: "1.1vw", lineHeight: 1.9, paddingLeft: "2vw" }}>
              <span style={{ color: "#7C6BF0" }}>if </span>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>(token !== ADMIN_PASSWORD) {"{"}</span>
            </div>
            <div style={{ fontSize: "1.1vw", lineHeight: 1.9, paddingLeft: "4vw" }}>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>res.</span>
              <span style={{ color: "#4F7FFF" }}>status</span>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>(401).json({"{"} error: </span>
              <span style={{ color: "#27C93F" }}>"Unauthorized"</span>
              <span style={{ color: "rgba(255,255,255,0.4)" }}> {"}"});</span>
            </div>
            <div style={{ fontSize: "1.1vw", lineHeight: 1.9, paddingLeft: "2vw" }}>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>{"}"}</span>
            </div>
            <div style={{ fontSize: "1.1vw", lineHeight: 1.9 }}>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>{"}"}</span>
            </div>
            <div style={{ height: "1.5vh" }} />
            <div style={{ fontSize: "1.1vw", lineHeight: 1.9 }}>
              <span style={{ color: "#7C6BF0" }}>router</span>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>.</span>
              <span style={{ color: "#4F7FFF" }}>get</span>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>(</span>
              <span style={{ color: "#27C93F" }}>"/admin/applications"</span>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>,</span>
            </div>
            <div style={{ fontSize: "1.1vw", lineHeight: 1.9, paddingLeft: "2vw" }}>
              <span style={{ color: "#7C6BF0" }}>requireAdminAuth</span>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>, async (req, res) =&gt; {"{"}</span>
            </div>
            <div style={{ fontSize: "1.1vw", lineHeight: 1.9, paddingLeft: "4vw" }}>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>const apps = await db.</span>
              <span style={{ color: "#4F7FFF" }}>select</span>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>().</span>
              <span style={{ color: "#4F7FFF" }}>orderBy</span>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>(desc(...));</span>
            </div>
            <div style={{ fontSize: "1.1vw", lineHeight: 1.9, paddingLeft: "4vw" }}>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>res.</span>
              <span style={{ color: "#4F7FFF" }}>json</span>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>(apps);</span>
            </div>
            <div style={{ fontSize: "1.1vw", lineHeight: 1.9, paddingLeft: "2vw" }}>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>{"}"});</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>FIRST NATIONWIDE MORTGAGE BANK</div>
      <div style={{ position: "absolute", bottom: "5vh", right: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)" }}>13 / 17</div>
    </div>
  );
}
