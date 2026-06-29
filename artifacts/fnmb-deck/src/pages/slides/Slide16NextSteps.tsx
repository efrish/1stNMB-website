export default function Slide16NextSteps() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{ backgroundColor: "#0C0F1A", fontFamily: "'Inter', sans-serif", color: "#ffffff" }}
    >
      <div style={{ position: "absolute", top: "-5vh", right: "10vw", width: "40vw", height: "40vw", borderRadius: "50%", backgroundColor: "#4F7FFF", opacity: 0.06, filter: "blur(10vw)" }} />
      <div style={{ position: "absolute", bottom: "-10vh", left: "5vw", width: "35vw", height: "35vw", borderRadius: "50%", backgroundColor: "#7C6BF0", opacity: 0.05, filter: "blur(10vw)" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "4vw 4vw", opacity: 0.5, pointerEvents: "none" }} />

      <div style={{ position: "absolute", top: "5vh", left: "5vw", display: "flex", alignItems: "center", gap: "1vw", zIndex: 10 }}>
        <div style={{ width: "2vw", height: "2vw", backgroundColor: "#4F7FFF", borderRadius: "0.4vw" }} />
        <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "-0.02em" }}>FNMB</div>
      </div>
      <div style={{ position: "absolute", top: "5vh", right: "5vw", fontSize: "1vw", color: "rgba(255,255,255,0.4)", zIndex: 10 }}>June 2026</div>

      <div style={{ position: "relative", zIndex: 10, display: "flex", width: "90vw", margin: "0 auto", height: "100%", alignItems: "center", gap: "6vw" }}>
        <div style={{ flex: "0 0 30vw", display: "flex", flexDirection: "column", gap: "3vh" }}>
          <div style={{ display: "inline-block", alignSelf: "flex-start", padding: "0.5vh 1.2vw", backgroundColor: "rgba(79,127,255,0.12)", border: "1px solid rgba(79,127,255,0.3)", borderRadius: "2vw", color: "#4F7FFF", fontSize: "0.9vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Next Steps
          </div>
          <h2 style={{ fontSize: "4vw", fontWeight: 800, margin: 0, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            What comes next.
          </h2>
          <p style={{ fontSize: "1.3vw", fontWeight: 300, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, margin: 0 }}>
            The foundation is solid. These are the logical next moves to grow the platform.
          </p>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.8vh" }}>
          <div style={{ padding: "2vh 2vw", backgroundColor: "#131726", border: "1px solid rgba(79,127,255,0.2)", borderRadius: "0.8vw", display: "flex", alignItems: "center", gap: "1.5vw" }}>
            <div style={{ width: "2vw", height: "2vw", backgroundColor: "rgba(79,127,255,0.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <div style={{ width: "0.5vw", height: "0.5vw", backgroundColor: "#4F7FFF", borderRadius: "50%" }} />
            </div>
            <div>
              <div style={{ fontSize: "1.2vw", fontWeight: 600 }}>Connect 1stnmb.com</div>
              <div style={{ fontSize: "1vw", color: "rgba(255,255,255,0.4)" }}>Add the custom domain and update DNS records</div>
            </div>
          </div>
          <div style={{ padding: "2vh 2vw", backgroundColor: "#131726", border: "1px solid rgba(124,107,240,0.2)", borderRadius: "0.8vw", display: "flex", alignItems: "center", gap: "1.5vw" }}>
            <div style={{ width: "2vw", height: "2vw", backgroundColor: "rgba(124,107,240,0.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <div style={{ width: "0.5vw", height: "0.5vw", backgroundColor: "#7C6BF0", borderRadius: "50%" }} />
            </div>
            <div>
              <div style={{ fontSize: "1.2vw", fontWeight: 600 }}>Populate the Blog</div>
              <div style={{ fontSize: "1vw", color: "rgba(255,255,255,0.4)" }}>Real articles for SEO and client education</div>
            </div>
          </div>
          <div style={{ padding: "2vh 2vw", backgroundColor: "#131726", border: "1px solid rgba(79,127,255,0.2)", borderRadius: "0.8vw", display: "flex", alignItems: "center", gap: "1.5vw" }}>
            <div style={{ width: "2vw", height: "2vw", backgroundColor: "rgba(79,127,255,0.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <div style={{ width: "0.5vw", height: "0.5vw", backgroundColor: "#4F7FFF", borderRadius: "50%" }} />
            </div>
            <div>
              <div style={{ fontSize: "1.2vw", fontWeight: 600 }}>Add Google Analytics</div>
              <div style={{ fontSize: "1vw", color: "rgba(255,255,255,0.4)" }}>Track traffic, pages, and conversion</div>
            </div>
          </div>
          <div style={{ padding: "2vh 2vw", backgroundColor: "#131726", border: "1px solid rgba(124,107,240,0.15)", borderRadius: "0.8vw", display: "flex", alignItems: "center", gap: "1.5vw", opacity: 0.7 }}>
            <div style={{ width: "2vw", height: "2vw", backgroundColor: "rgba(124,107,240,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <div style={{ width: "0.5vw", height: "0.5vw", backgroundColor: "#7C6BF0", borderRadius: "50%" }} />
            </div>
            <div>
              <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "rgba(255,255,255,0.6)" }}>Optional: SMS notifications</div>
              <div style={{ fontSize: "1vw", color: "rgba(255,255,255,0.35)" }}>Twilio integration for instant text alerts</div>
            </div>
          </div>
          <div style={{ padding: "2vh 2vw", backgroundColor: "#131726", border: "1px solid rgba(79,127,255,0.15)", borderRadius: "0.8vw", display: "flex", alignItems: "center", gap: "1.5vw", opacity: 0.7 }}>
            <div style={{ width: "2vw", height: "2vw", backgroundColor: "rgba(79,127,255,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <div style={{ width: "0.5vw", height: "0.5vw", backgroundColor: "#4F7FFF", borderRadius: "50%" }} />
            </div>
            <div>
              <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "rgba(255,255,255,0.6)" }}>Optional: Client portal</div>
              <div style={{ fontSize: "1vw", color: "rgba(255,255,255,0.35)" }}>Applicants log in to check their application status</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>FIRST NATIONWIDE MORTGAGE BANK</div>
      <div style={{ position: "absolute", bottom: "5vh", right: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)" }}>16 / 17</div>
    </div>
  );
}
