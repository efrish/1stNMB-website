export default function Slide10Database() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{ backgroundColor: "#0C0F1A", fontFamily: "'Inter', sans-serif", color: "#ffffff" }}
    >
      <div style={{ position: "absolute", top: "10vh", left: "5vw", width: "40vw", height: "40vw", borderRadius: "50%", backgroundColor: "#7C6BF0", opacity: 0.06, filter: "blur(10vw)" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "4vw 4vw", opacity: 0.5, pointerEvents: "none" }} />

      <div style={{ position: "absolute", top: "5vh", left: "5vw", display: "flex", alignItems: "center", gap: "1vw", zIndex: 10 }}>
        <div style={{ width: "2vw", height: "2vw", backgroundColor: "#4F7FFF", borderRadius: "0.4vw" }} />
        <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "-0.02em" }}>FNMB</div>
      </div>
      <div style={{ position: "absolute", top: "5vh", right: "5vw", fontSize: "1vw", color: "rgba(255,255,255,0.4)", zIndex: 10 }}>June 2026</div>

      <div style={{ position: "relative", zIndex: 10, display: "flex", width: "90vw", margin: "0 auto", height: "100%", alignItems: "center", gap: "6vw" }}>
        <div style={{ flex: 1, backgroundColor: "#131726", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "1vw", overflow: "hidden" }}>
          <div style={{ padding: "1.5vh 2vw", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", gap: "0.6vw" }}>
            <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#FF5F56" }} />
            <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
            <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#27C93F" }} />
            <div style={{ marginLeft: "1vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)" }}>schema/applications.ts</div>
          </div>
          <div style={{ padding: "2vw", fontFamily: "monospace" }}>
            <div style={{ fontSize: "1.1vw", lineHeight: 1.8 }}>
              <span style={{ color: "#7C6BF0" }}>export const</span>
              <span style={{ color: "#ffffff" }}> applicationsTable </span>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>= pgTable(</span>
            </div>
            <div style={{ fontSize: "1.1vw", lineHeight: 1.8, paddingLeft: "2vw" }}>
              <span style={{ color: "rgba(255,255,255,0.5)" }}>"applications", {"{"}</span>
            </div>
            <div style={{ fontSize: "1.1vw", lineHeight: 1.8, paddingLeft: "4vw" }}>
              <span style={{ color: "#4F7FFF" }}>id</span>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>: serial().primaryKey(),</span>
            </div>
            <div style={{ fontSize: "1.1vw", lineHeight: 1.8, paddingLeft: "4vw" }}>
              <span style={{ color: "#4F7FFF" }}>type</span>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>: text().notNull(),</span>
            </div>
            <div style={{ fontSize: "1.1vw", lineHeight: 1.8, paddingLeft: "4vw" }}>
              <span style={{ color: "#4F7FFF" }}>firstName</span>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>: text().notNull(),</span>
            </div>
            <div style={{ fontSize: "1.1vw", lineHeight: 1.8, paddingLeft: "4vw" }}>
              <span style={{ color: "#4F7FFF" }}>email</span>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>: text().notNull(),</span>
            </div>
            <div style={{ fontSize: "1.1vw", lineHeight: 1.8, paddingLeft: "4vw" }}>
              <span style={{ color: "#4F7FFF" }}>data</span>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>: jsonb().notNull(),</span>
            </div>
            <div style={{ fontSize: "1.1vw", lineHeight: 1.8, paddingLeft: "4vw" }}>
              <span style={{ color: "#4F7FFF" }}>submittedAt</span>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>: timestamp().defaultNow(),</span>
            </div>
            <div style={{ fontSize: "1.1vw", lineHeight: 1.8, paddingLeft: "2vw" }}>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>{"}"}</span>
            </div>
            <div style={{ fontSize: "1.1vw", lineHeight: 1.8 }}>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>);</span>
            </div>
          </div>
        </div>

        <div style={{ flex: "0 0 35vw", display: "flex", flexDirection: "column", gap: "3vh" }}>
          <div style={{ display: "inline-block", alignSelf: "flex-start", padding: "0.5vh 1.2vw", backgroundColor: "rgba(124,107,240,0.12)", border: "1px solid rgba(124,107,240,0.3)", borderRadius: "2vw", color: "#7C6BF0", fontSize: "0.9vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Database Layer
          </div>
          <h2 style={{ fontSize: "4vw", fontWeight: 800, margin: 0, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Type-safe from end to end.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
              <div style={{ width: "0.4vw", height: "2vh", backgroundColor: "#7C6BF0", borderRadius: "0.2vw", marginTop: "0.3vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>PostgreSQL via Replit's managed database</div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
              <div style={{ width: "0.4vw", height: "2vh", backgroundColor: "#7C6BF0", borderRadius: "0.2vw", marginTop: "0.3vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>Drizzle ORM — full type safety, no raw SQL</div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
              <div style={{ width: "0.4vw", height: "2vh", backgroundColor: "#7C6BF0", borderRadius: "0.2vw", marginTop: "0.3vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>JSONB field stores all flexible form data</div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1vw" }}>
              <div style={{ width: "0.4vw", height: "2vh", backgroundColor: "#7C6BF0", borderRadius: "0.2vw", marginTop: "0.3vh", flexShrink: 0 }} />
              <div style={{ fontSize: "1.2vw", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>Schema pushed with a single pnpm command</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>FIRST NATIONWIDE MORTGAGE BANK</div>
      <div style={{ position: "absolute", bottom: "5vh", right: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)" }}>10 / 17</div>
    </div>
  );
}
