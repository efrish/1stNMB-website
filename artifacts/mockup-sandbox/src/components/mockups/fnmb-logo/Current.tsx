export function Current() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-8">
      <div className="w-full max-w-4xl">
        <div className="text-xs uppercase tracking-wider text-slate-400 mb-3 text-center">Current (as seen on the live site)</div>
        <header className="bg-[hsl(213,78%,20%)] py-4 px-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/__mockup/images/fnmb-logo-full.png"
                alt="First Nationwide Mortgage Bank"
                className="h-16 w-auto object-contain rounded-lg ring-2 ring-white/30"
              />
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
          Problem: the wordmark baked into the image becomes tiny and unreadable at navbar height.
        </p>
      </div>
    </div>
  );
}
