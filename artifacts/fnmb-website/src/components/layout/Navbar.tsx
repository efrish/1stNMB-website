import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-primary/95 text-white py-4 backdrop-blur-sm"
      }`}
    >
      {/* Top Bar for Contact Info */}
      <div className={`container mx-auto px-4 hidden md:flex justify-end items-center gap-6 text-sm mb-2 transition-all ${isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/80'}`}>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <span>(818) 371-1665</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <span>info@1stnmb.com</span>
        </div>
      </div>

      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 flex items-center justify-center bg-accent text-primary font-bold text-xl rounded-sm transform group-hover:rotate-12 transition-transform shadow-lg">
            <div className="absolute inset-0 bg-primary transform rotate-45 -z-10 opacity-10"></div>
            1
          </div>
          <div className={`font-serif font-bold text-xl leading-tight ${isScrolled ? 'text-primary' : 'text-white'}`}>
            First Nationwide<br />
            <span className="text-sm font-sans font-normal opacity-80">Mortgage Bank</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 font-medium">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`transition-colors hover:text-accent ${
                    location === link.path 
                      ? (isScrolled ? "text-primary font-semibold" : "text-accent font-semibold") 
                      : (isScrolled ? "text-foreground" : "text-primary-foreground")
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <Link href="/long-term-application">
              <Button variant={isScrolled ? "default" : "secondary"} className="font-semibold shadow-sm">
                Apply Now
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 ${isScrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden flex flex-col py-4 px-4 gap-4 text-foreground border-t">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`block py-2 text-lg font-medium border-b border-border/50 ${
                location === link.path ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <Link href="/long-term-application" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Long Term Application</Button>
            </Link>
            <Link href="/short-term-application" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full border-primary text-primary">Short Term/Bridge Loan</Button>
            </Link>
          </div>
          <div className="flex flex-col gap-2 mt-4 text-sm text-muted-foreground bg-muted p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(818) 371-1665</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@1stnmb.com</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}