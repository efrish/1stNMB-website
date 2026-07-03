export function MarkFirst() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-8">
      <div className="w-full max-w-4xl">
        <div className="text-xs uppercase tracking-wider text-slate-400 mb-3 text-center">Option C — Monogram Mark + Tagline</div>
        <header className="bg-[hsl(213,78%,20%)] py-4 px-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/__mockup/images/fnmb-icon.png"
                alt="First Nationwide Mortgage Bank icon"
                className="h-16 w-auto object-contain"
              />
              <div className="flex items-baseline gap-2.5">
                <span className="text-white font-extrabold text-3xl tracking-tight">FNMB</span>
                <span className="hidden sm:inline text-white/50 text-lg">|</span>
                <span className="hidden sm:inline text-[hsl(197,77%,56%)] text-xs font-medium tracking-[0.15em] uppercase">
                  First Nationwide<br className="hidden" /> Mortgage Bank
                </span>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-white/90 font-medium text-sm">
              <span>Home</span>
              <span>Services</span>
              <span>About Us</span>
              <span>Contact</span>
            </nav>
          </div>
        </header>
        <p className="text-center text-sm text-slate-500 mt-4">
          Punchy "FNMB" monogram leads, with the full name as a compact label beside it — modern and highly legible at a glance.
        </p>
      </div>
    </div>
  );
}
