export default function Slide06Website() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{ backgroundColor: "#0C0F1A", fontFamily: "'Inter', sans-serif", color: "#ffffff" }}
    >
      <div style={{ position: "absolute", top: "-10vh", right: "-5vw", width: "40vw", height: "40vw", borderRadius: "50%", backgroundColor: "#7C6BF0", opacity: 0.06, filter: "blur(10vw)" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "4vw 4vw", opacity: 0.5, pointerEvents: "none" }} />

      <div style={{ position: "absolute", top: "5vh", left: "5vw", display: "flex", alignItems: "center", gap: "1vw", zIndex: 10 }}>
        <div style={{ width: "2vw", height: "2vw", backgroundColor: "#4F7FFF", borderRadius: "0.4vw" }} />
        <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "-0.02em" }}>FNMB</div>
      </div>
      <div style={{ position: "absolute", top: "5vh", right: "5vw", fontSize: "1vw", color: "rgba(255,255,255,0.4)", zIndex: 10 }}>June 2026</div>

      <div style={{ position: "relative", zIndex: 10, display: "flex", width: "90vw", margin: "0 auto", height: "100%", alignItems: "center", gap: "6vw" }}>
        <div style={{ flex: "0 0 30vw", display: "flex", flexDirection: "column", gap: "2.5vh" }}>
          <div style={{ display: "inline-block", alignSelf: "flex-start", padding: "0.5vh 1.2vw", backgroundColor: "rgba(124,107,240,0.12)", border: "1px solid rgba(124,107,240,0.3)", borderRadius: "2vw", color: "#7C6BF0", fontSize: "0.9vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            The Website
          </div>
          <h2 style={{ fontSize: "4vw", fontWeight: 800, margin: 0, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Seven pages. One brand.
          </h2>
          <p style={{ fontSize: "1.3vw", fontWeight: 300, color: "rgba(255,255,255,0.55)", lineHeight: 1.6, margin: 0 }}>
            Every page built from scratch in React — fully responsive across mobile, tablet, and desktop.
          </p>
        </div>

        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5vw" }}>
          <div style={{ padding: "2vh 1.8vw", backgroundColor: "#131726", border: "1px solid rgba(79,127,255,0.2)", borderRadius: "0.8vw" }}>
            <div style={{ fontSize: "1vw", color: "#4F7FFF", fontWeight: 700, marginBottom: "0.8vh" }}>Home</div>
            <div style={{ fontSize: "1vw", color: "rgba(255,255,255,0.45)" }}>Hero · value prop · loan cards · testimonials</div>
          </div>
          <div style={{ padding: "2vh 1.8vw", backgroundColor: "#131726", border: "1px solid rgba(124,107,240,0.2)", borderRadius: "0.8vw" }}>
            <div style={{ fontSize: "1vw", color: "#7C6BF0", fontWeight: 700, marginBottom: "0.8vh" }}>About</div>
            <div style={{ fontSize: "1vw", color: "rgba(255,255,255,0.45)" }}>Team pyramid · bios · photos</div>
          </div>
          <div style={{ padding: "2vh 1.8vw", backgroundColor: "#131726", border: "1px solid rgba(79,127,255,0.2)", borderRadius: "0.8vw" }}>
            <div style={{ fontSize: "1vw", color: "#4F7FFF", fontWeight: 700, marginBottom: "0.8vh" }}>Services</div>
            <div style={{ fontSize: "1vw", color: "rgba(255,255,255,0.45)" }}>Long-term mortgage · bridge loan detail</div>
          </div>
          <div style={{ padding: "2vh 1.8vw", backgroundColor: "#131726", border: "1px solid rgba(124,107,240,0.2)", borderRadius: "0.8vw" }}>
            <div style={{ fontSize: "1vw", color: "#7C6BF0", fontWeight: 700, marginBottom: "0.8vh" }}>Blog</div>
            <div style={{ fontSize: "1vw", color: "rgba(255,255,255,0.45)" }}>Articles for SEO and client education</div>
          </div>
          <div style={{ padding: "2vh 1.8vw", backgroundColor: "#131726", border: "1px solid rgba(79,127,255,0.2)", borderRadius: "0.8vw" }}>
            <div style={{ fontSize: "1vw", color: "#4F7FFF", fontWeight: 700, marginBottom: "0.8vh" }}>Contact</div>
            <div style={{ fontSize: "1vw", color: "rgba(255,255,255,0.45)" }}>Form · map · full contact info</div>
          </div>
          <div style={{ padding: "2vh 1.8vw", backgroundColor: "#131726", border: "1px solid rgba(124,107,240,0.2)", borderRadius: "0.8vw" }}>
            <div style={{ fontSize: "1vw", color: "#7C6BF0", fontWeight: 700, marginBottom: "0.8vh" }}>Applications</div>
            <div style={{ fontSize: "1vw", color: "rgba(255,255,255,0.45)" }}>Long-Term Application · Short-Term Application</div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>FIRST NATIONWIDE MORTGAGE BANK</div>
      <div style={{ position: "absolute", bottom: "5vh", right: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)" }}>06 / 17</div>
    </div>
  );
}
