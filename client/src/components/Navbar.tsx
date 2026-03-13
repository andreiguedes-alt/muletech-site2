/*
  MuleTech Navbar – Cinematic Dark Tech
  Sticky transparent nav that becomes solid on scroll
  Logo: MuleTech brand mark
  Links: Início, Produto, Tecnologia, Aplicativo, Sobre, Contato
*/

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433886006/N62zTXZRytPpDeHKAdQ6Yy/muletech-logo_cf9b7fe7.webp";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Produto", href: "/produto" },
  { label: "Tecnologia", href: "/tecnologia" },
  { label: "Aplicativo", href: "/app" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(7, 13, 26, 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(74, 158, 255, 0.1)" : "none",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 group">
              <img
                src={LOGO_URL}
                alt="MuleTech Logo"
                className="h-10 w-10 object-contain rounded-lg"
              />
              <span
                className="font-display font-800 text-xl tracking-widest uppercase"
                style={{ color: "#4A9EFF", letterSpacing: "0.15em" }}
              >
                MuleTech
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className="nav-link"
                  style={{
                    color: location === link.href ? "#4A9EFF" : undefined,
                  }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contato">
              <button className="btn-primary text-sm py-2.5 px-5">
                Fale Conosco
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            background: "rgba(7, 13, 26, 0.98)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(74, 158, 255, 0.1)",
          }}
        >
          <div className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className="block font-display font-700 text-lg tracking-widest uppercase py-2"
                  style={{
                    color: location === link.href ? "#4A9EFF" : "rgba(240,248,255,0.8)",
                  }}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/contato">
              <button className="btn-primary w-full mt-2">Fale Conosco</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
