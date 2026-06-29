export default function Slide04TechStack() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{ backgroundColor: "#0C0F1A", fontFamily: "'Inter', sans-serif", color: "#ffffff" }}
    >
      <div style={{ position: "absolute", top: "-15vh", right: "-5vw", width: "40vw", height: "40vw", borderRadius: "50%", backgroundColor: "#4F7FFF", opacity: 0.06, filter: "blur(8vw)" }} />
      <div style={{ position: "absolute", bottom: "-10vh", left: "-5vw", width: "40vw", height: "40vw", borderRadius: "50%", backgroundColor: "#7C6BF0", opacity: 0.05, filter: "blur(10vw)" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "4vw 4vw", opacity: 0.5, pointerEvents: "none" }} />

      <div style={{ position: "absolute", top: "5vh", left: "5vw", display: "flex", alignItems: "center", gap: "1vw", zIndex: 10 }}>
        <div style={{ width: "2vw", height: "2vw", backgroundColor: "#4F7FFF", borderRadius: "0.4vw" }} />
        <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "-0.02em" }}>FNMB</div>
      </div>
      <div style={{ position: "absolute", top: "5vh", right: "5vw", fontSize: "1vw", color: "rgba(255,255,255,0.4)", zIndex: 10 }}>June 2026</div>

      <div style={{ position: "relative", zIndex: 10, display: "flex", width: "90vw", margin: "0 auto", height: "100%", alignItems: "center", gap: "5vw" }}>
        <div style={{ flex: "0 0 35vw", display: "flex", flexDirection: "column", gap: "3vh" }}>
          <div style={{ display: "inline-block", alignSelf: "flex-start", padding: "0.5vh 1.2vw", backgroundColor: "rgba(79,127,255,0.12)", border: "1px solid rgba(79,127,255,0.3)", borderRadius: "2vw", color: "#4F7FFF", fontSize: "0.9vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Tech Stack
          </div>
          <h2 style={{ fontSize: "4.5vw", fontWeight: 800, margin: 0, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Modern.
          </h2>
          <h2 style={{ fontSize: "4.5vw", fontWeight: 800, margin: 0, lineHeight: 1.05, letterSpacing: "-0.03em", color: "rgba(255,255,255,0.3)" }}>
            Type-safe.
          </h2>
          <p style={{ fontSize: "1.3vw", fontWeight: 300, color: "rgba(255,255,255,0.55)", lineHeight: 1.6, margin: 0 }}>
            Every layer of the stack is strongly typed and contract-driven — from the database schema to the React components.
          </p>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5vh" }}>
          <div style={{ padding: "2vh 2vw", backgroundColor: "#131726", border: "1px solid rgba(79,127,255,0.2)", borderRadius: "0.8vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontSize: "1.2vw", fontWeight: 600 }}>Frontend</div>
            <div style={{ fontSize: "1.1vw", color: "#4F7FFF", fontWeight: 500 }}>React + Vite + Tailwind CSS + shadcn/ui</div>
          </div>
          <div style={{ padding: "2vh 2vw", backgroundColor: "#131726", border: "1px solid rgba(124,107,240,0.2)", borderRadius: "0.8vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontSize: "1.2vw", fontWeight: 600 }}>Backend</div>
            <div style={{ fontSize: "1.1vw", color: "#7C6BF0", fontWeight: 500 }}>Express 5 + Node.js 24</div>
          </div>
          <div style={{ padding: "2vh 2vw", backgroundColor: "#131726", border: "1px solid rgba(79,127,255,0.2)", borderRadius: "0.8vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontSize: "1.2vw", fontWeight: 600 }}>Database</div>
            <div style={{ fontSize: "1.1vw", color: "#4F7FFF", fontWeight: 500 }}>PostgreSQL + Drizzle ORM</div>
          </div>
          <div style={{ padding: "2vh 2vw", backgroundColor: "#131726", border: "1px solid rgba(124,107,240,0.2)", borderRadius: "0.8vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontSize: "1.2vw", fontWeight: 600 }}>Validation</div>
            <div style={{ fontSize: "1.1vw", color: "#7C6BF0", fontWeight: 500 }}>Zod + OpenAPI + Orval codegen</div>
          </div>
          <div style={{ padding: "2vh 2vw", backgroundColor: "#131726", border: "1px solid rgba(79,127,255,0.2)", borderRadius: "0.8vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontSize: "1.2vw", fontWeight: 600 }}>Monorepo</div>
            <div style={{ fontSize: "1.1vw", color: "#4F7FFF", fontWeight: 500 }}>pnpm workspaces + TypeScript 5.9</div>
          </div>
          <div style={{ padding: "2vh 2vw", backgroundColor: "#131726", border: "1px solid rgba(124,107,240,0.2)", borderRadius: "0.8vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontSize: "1.2vw", fontWeight: 600 }}>Email</div>
            <div style={{ fontSize: "1.1vw", color: "#7C6BF0", fontWeight: 500 }}>Nodemailer + Gmail SMTP</div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>FIRST NATIONWIDE MORTGAGE BANK</div>
      <div style={{ position: "absolute", bottom: "5vh", right: "5vw", fontSize: "0.9vw", color: "rgba(255,255,255,0.3)" }}>04 / 17</div>
    </div>
  );
}
