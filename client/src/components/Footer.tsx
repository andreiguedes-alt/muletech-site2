/*
  MuleTech Footer – Cinematic Dark Tech
  Links de navegação, informações de contato, redes sociais, copyright
*/

import { Link } from "wouter";
import { Mail, MapPin, Phone, Instagram, Linkedin, Twitter, Github } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433886006/N62zTXZRytPpDeHKAdQ6Yy/muletech-logo_cf9b7fe7.webp";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(to bottom, #070D1A, #040810)",
        borderTop: "1px solid rgba(74, 158, 255, 0.1)",
      }}
    >
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={LOGO_URL} alt="MuleTech" className="h-10 w-10 object-contain rounded-lg" />
              <span className="font-display font-800 text-xl tracking-widest uppercase" style={{ color: "#4A9EFF" }}>
                MuleTech
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(240,248,255,0.55)" }}>
              Reimaginando a locomoção com tecnologia assistiva inteligente. Protegendo pessoas com mobilidade reduzida através de inovação.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Github, label: "GitHub" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded flex items-center justify-center transition-all duration-300"
                  style={{
                    background: "rgba(74, 158, 255, 0.08)",
                    border: "1px solid rgba(74, 158, 255, 0.15)",
                    color: "rgba(240,248,255,0.5)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(74, 158, 255, 0.15)";
                    (e.currentTarget as HTMLElement).style.color = "#4A9EFF";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(74, 158, 255, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(74, 158, 255, 0.08)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(240,248,255,0.5)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(74, 158, 255, 0.15)";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-700 text-sm tracking-widest uppercase mb-6" style={{ color: "#4A9EFF" }}>
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Início", href: "/" },
                { label: "Produto", href: "/produto" },
                { label: "Tecnologia", href: "/tecnologia" },
                { label: "Aplicativo", href: "/app" },
                { label: "Sobre Nós", href: "/sobre" },
                { label: "Contato", href: "/contato" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      className="text-sm transition-colors duration-300 hover:text-white"
                      style={{ color: "rgba(240,248,255,0.55)" }}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h4 className="font-display font-700 text-sm tracking-widest uppercase mb-6" style={{ color: "#4A9EFF" }}>
              Tecnologia
            </h4>
            <ul className="space-y-3">
              {[
                "Sensores IoT",
                "Detecção de Impacto",
                "Rastreamento GPS",
                "Infraestrutura Cloud",
                "App Mobile",
                "Alertas em Tempo Real",
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm" style={{ color: "rgba(240,248,255,0.55)" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-700 text-sm tracking-widest uppercase mb-6" style={{ color: "#4A9EFF" }}>
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0" style={{ color: "#FF6600" }} />
                <a
                  href="mailto:contact@muletech.com"
                  className="text-sm transition-colors duration-300 hover:text-white"
                  style={{ color: "rgba(240,248,255,0.55)" }}
                >
                  contact@muletech.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0" style={{ color: "#FF6600" }} />
                <span className="text-sm" style={{ color: "rgba(240,248,255,0.55)" }}>
                  +55 (11) 9 9999-9999
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "#FF6600" }} />
                <span className="text-sm" style={{ color: "rgba(240,248,255,0.55)" }}>
                  São Paulo, SP – Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{ borderTop: "1px solid rgba(74, 158, 255, 0.08)" }}
      >
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "rgba(240,248,255,0.35)", fontFamily: "'Space Mono', monospace" }}>
            © 2024 MuleTech. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {["Política de Privacidade", "Termos de Uso"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors duration-300 hover:text-white"
                style={{ color: "rgba(240,248,255,0.35)" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
