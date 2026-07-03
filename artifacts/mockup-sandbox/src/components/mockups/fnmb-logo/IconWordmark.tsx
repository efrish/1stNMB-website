export function IconWordmark() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-8">
      <div className="w-full max-w-4xl">
        <div className="text-xs uppercase tracking-wider text-slate-400 mb-3 text-center">Option A — Icon + Two-Line Wordmark</div>
        <header className="bg-[hsl(213,78%,20%)] py-4 px-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/__mockup/images/fnmb-icon.png"
                alt="First Nationwide Mortgage Bank icon"
                className="h-14 w-auto object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-white font-serif font-semibold text-xl tracking-wide">
                  First Nationwide
                </span>
                <span className="text-[hsl(197,77%,56%)] font-serif font-semibold text-xl tracking-wide">
                  Mortgage Bank
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
          Icon isolated from the original mark, paired with a crisp two-line text wordmark that scales cleanly at any size.
        </p>
      </div>
    </div>
  );
}
