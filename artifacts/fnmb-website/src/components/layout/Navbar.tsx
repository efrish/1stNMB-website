import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoIcon from "@assets/fnmb-icon.png";

const CRM_URL = "https://century-hollywood-crm.replit.app";

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
        isScrolled
          ? "bg-white shadow-md py-2 border-b border-border"
          : "bg-primary text-white py-4 border-b-2 border-accent/60"
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
        <a
          href={CRM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-accent transition-colors"
        >
          <LogIn className="h-4 w-4" />
          <span>Staff Login</span>
        </a>
      </div>

      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src={logoIcon}
            alt="First Nationwide Mortgage Bank"
            className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col leading-none">
            <span
              className={`font-bold text-lg md:text-xl tracking-tight whitespace-nowrap transition-colors ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              First Nationwide Mortgage Bank
            </span>
            <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase mt-1 text-accent">
              Your Path to Home Ownership
            </span>
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
          <a
            href={CRM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground border border-border rounded-lg py-2.5 mt-2"
            onClick={() => setIsOpen(false)}
          >
            <LogIn className="h-4 w-4" />
            <span>Staff Login</span>
          </a>
        </div>
      )}
    </header>
  );
}