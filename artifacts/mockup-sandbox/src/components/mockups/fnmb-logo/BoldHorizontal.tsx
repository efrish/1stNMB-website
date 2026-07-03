export function BoldHorizontal() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-8">
      <div className="w-full max-w-4xl">
        <div className="text-xs uppercase tracking-wider text-slate-400 mb-3 text-center">Option B — Bold Horizontal Lockup</div>
        <header className="bg-[hsl(213,78%,20%)] py-4 px-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/__mockup/images/fnmb-icon.png"
                alt="First Nationwide Mortgage Bank icon"
                className="h-20 w-auto object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-2xl tracking-tight whitespace-nowrap">
                  First Nationwide Mortgage Bank
                </span>
                <span className="text-[hsl(197,77%,56%)] text-[11px] font-semibold tracking-[0.2em] uppercase mt-1.5">
                  Your Path to Home Ownership
                </span>
              </div>
            </div>
            <nav className="hidden lg:flex items-center gap-6 text-white/90 font-medium text-sm">
              <span>Home</span>
              <span>Services</span>
              <span>About Us</span>
              <span>Contact</span>
            </nav>
          </div>
        </header>
        <p className="text-center text-sm text-slate-500 mt-4">
          Larger icon paired with a single-line bold wordmark and a subtle tagline underneath for extra presence.
        </p>
      </div>
    </div>
  );
}
