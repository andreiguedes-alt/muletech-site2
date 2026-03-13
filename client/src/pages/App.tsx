/*
  MuleTech App Page – Cinematic Dark Tech
  Funcionalidades do aplicativo mobile: alertas, GPS, notificações, monitoramento
*/

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AlertTriangle, MapPin, Bell, Activity, Users, Shield, Smartphone, ChevronRight } from "lucide-react";
import { Link } from "wouter";

const APP_MOCKUP = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433886006/N62zTXZRytPpDeHKAdQ6Yy/app-mockup-oQXX3LXFb6haDiFBKyqCCD.webp";

export default function AppPage() {
  useScrollAnimation();

  return (
    <div className="min-h-screen pt-20" style={{ background: "#070D1A" }}>
      {/* Hero */}
      <section className="py-20" style={{ background: "linear-gradient(180deg, #0D1F3C 0%, #070D1A 100%)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="animate-on-scroll-left">
              <span className="section-label">Aplicativo Mobile</span>
              <h1 className="font-display font-800 text-6xl md:text-7xl mt-4 leading-none" style={{ color: "#F0F8FF" }}>
                SEU FAMILIAR
                <br />
                SEMPRE
                <br />
                <span style={{ color: "#4A9EFF" }}>PROTEGIDO</span>
              </h1>
              <p className="text-xl mt-6 mb-8 leading-relaxed" style={{ color: "rgba(240,248,255,0.65)" }}>
                O aplicativo MuleTech conecta toda a família ao dispositivo de monitoramento, oferecendo tranquilidade e segurança em tempo real.
              </p>
              <div className="flex gap-4">
                <button className="btn-primary px-6 py-3">App Store</button>
                <button className="btn-secondary px-6 py-3">Google Play</button>
              </div>
            </div>
            <div className="animate-on-scroll-right flex justify-center">
              <div style={{ filter: "drop-shadow(0 0 50px rgba(74,158,255,0.35))" }}>
                <img
                  src={APP_MOCKUP}
                  alt="App MuleTech"
                  className="w-full max-w-sm rounded-3xl"
                  style={{ border: "2px solid rgba(74,158,255,0.25)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container">
          <div className="animate-on-scroll text-center mb-16">
            <span className="section-label">Funcionalidades</span>
            <h2 className="font-display font-800 text-5xl md:text-6xl mt-4" style={{ color: "#F0F8FF" }}>
              TUDO QUE VOCÊ <span style={{ color: "#FF6600" }}>PRECISA</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: AlertTriangle,
                title: "Alertas de Emergência",
                desc: "Notificações instantâneas com vibração e som de alerta quando uma queda é detectada. Inclui localização GPS precisa e opção de ligar diretamente para o usuário.",
                color: "#FF6600",
                features: ["Push notification imediata", "Vibração e alerta sonoro", "Localização em tempo real", "Botão de ligação rápida"],
              },
              {
                icon: MapPin,
                title: "Rastreamento GPS",
                desc: "Mapa interativo com localização em tempo real do usuário. Histórico de rotas, zonas seguras configuráveis e alertas de saída de área.",
                color: "#4A9EFF",
                features: ["Mapa em tempo real", "Histórico de rotas", "Zonas seguras", "Alertas de área"],
              },
              {
                icon: Bell,
                title: "Sistema de Notificações",
                desc: "Configure alertas personalizados para cada membro da família. Defina horários, tipos de eventos e prioridades de notificação.",
                color: "#4A9EFF",
                features: ["Configuração por contato", "Horários personalizados", "Tipos de evento", "Prioridades de alerta"],
              },
              {
                icon: Activity,
                title: "Monitoramento de Status",
                desc: "Dashboard completo com status do dispositivo, nível de bateria, qualidade do sinal e histórico de eventos em tempo real.",
                color: "#4AFF88",
                features: ["Status do dispositivo", "Nível de bateria", "Qualidade do sinal", "Histórico de eventos"],
              },
              {
                icon: Users,
                title: "Alertas para Família",
                desc: "Adicione múltiplos contatos familiares, cada um com suas próprias configurações de alerta e nível de acesso ao monitoramento.",
                color: "#4AFF88",
                features: ["Múltiplos contatos", "Configuração individual", "Grupos de alerta", "Hierarquia de contatos"],
              },
              {
                icon: Shield,
                title: "Privacidade e Segurança",
                desc: "Todos os dados são criptografados e armazenados com segurança. O usuário tem controle total sobre quem pode acessar suas informações.",
                color: "#FF6600",
                features: ["Criptografia E2E", "Controle de acesso", "LGPD compliant", "Exclusão de dados"],
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="animate-on-scroll glass-card rounded-xl p-6 hover:scale-[1.02] transition-all duration-300"
                  style={{
                    transitionDelay: `${i * 0.08}s`,
                    border: `1px solid ${feature.color}18`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: `${feature.color}15` }}
                  >
                    <Icon size={24} style={{ color: feature.color }} />
                  </div>
                  <h3 className="font-display font-700 text-xl mb-3" style={{ color: "#F0F8FF" }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(240,248,255,0.55)" }}>
                    {feature.desc}
                  </p>
                  <ul className="space-y-1.5">
                    {feature.features.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs" style={{ color: "rgba(240,248,255,0.45)" }}>
                        <ChevronRight size={12} style={{ color: feature.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compatibility */}
      <section className="py-20" style={{ background: "linear-gradient(180deg, #070D1A 0%, #0D1F3C 50%, #070D1A 100%)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <span className="section-label">Compatibilidade</span>
            <h2 className="font-display font-800 text-5xl mt-4 mb-8" style={{ color: "#F0F8FF" }}>
              DISPONÍVEL EM <span style={{ color: "#4A9EFF" }}>TODAS</span> AS PLATAFORMAS
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {[
                { platform: "iOS", version: "iOS 14+", icon: Smartphone, color: "#4A9EFF" },
                { platform: "Android", version: "Android 8.0+", icon: Smartphone, color: "#4AFF88" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.platform}
                    className="glass-card rounded-xl p-8 text-center"
                    style={{ border: `1px solid ${item.color}22` }}
                  >
                    <Icon size={40} className="mx-auto mb-4" style={{ color: item.color }} />
                    <p className="font-display font-800 text-2xl mb-1" style={{ color: "#F0F8FF" }}>{item.platform}</p>
                    <p className="font-mono-tech text-xs" style={{ color: item.color }}>{item.version}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container animate-on-scroll">
          <h2 className="font-display font-800 text-5xl mb-6" style={{ color: "#F0F8FF" }}>
            PRONTO PARA <span style={{ color: "#FF6600" }}>COMEÇAR?</span>
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "rgba(240,248,255,0.6)" }}>
            Entre em contato para acesso antecipado ao aplicativo MuleTech.
          </p>
          <Link href="/contato">
            <button className="btn-primary text-base px-10 py-4">Solicitar Acesso</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
