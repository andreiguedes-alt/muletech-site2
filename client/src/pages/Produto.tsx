/*
  MuleTech Produto Page – Cinematic Dark Tech
  Seções: Hardware, Sensores, Bateria, Conectividade, Sistema de Detecção
*/

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Cpu, Battery, Wifi, Shield, Activity, MapPin, Lock, Radio, Zap, ChevronRight } from "lucide-react";
import { Link } from "wouter";

const CRUTCH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433886006/N62zTXZRytPpDeHKAdQ6Yy/muletech-crutch_92f61a56.webp";

export default function Produto() {
  useScrollAnimation();

  return (
    <div className="min-h-screen pt-20" style={{ background: "#070D1A" }}>
      {/* Hero */}
      <section className="py-20 text-center" style={{ background: "linear-gradient(180deg, #0D1F3C 0%, #070D1A 100%)" }}>
        <div className="container animate-on-scroll">
          <span className="section-label">Produto</span>
          <h1 className="font-display font-800 text-6xl md:text-8xl mt-4 leading-none" style={{ color: "#F0F8FF" }}>
            O DISPOSITIVO
            <br />
            <span style={{ color: "#4A9EFF" }}>MULETECH</span>
          </h1>
          <p className="text-xl mt-6 max-w-2xl mx-auto" style={{ color: "rgba(240,248,255,0.6)" }}>
            Hardware inteligente projetado para integração perfeita com muletas e auxiliares de mobilidade.
          </p>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="animate-on-scroll-left">
              <div
                className="relative rounded-2xl overflow-hidden p-8"
                style={{
                  background: "rgba(13,31,60,0.5)",
                  border: "1px solid rgba(74,158,255,0.2)",
                  boxShadow: "0 0 60px rgba(74,158,255,0.1)",
                }}
              >
                <img
                  src={CRUTCH_IMG}
                  alt="Dispositivo MuleTech"
                  className="w-full object-contain"
                  style={{ maxHeight: "500px" }}
                />
                {/* Floating Labels */}
                <div className="absolute top-6 right-6 glass-card rounded-lg px-3 py-2">
                  <span className="font-mono-tech text-xs" style={{ color: "#4A9EFF" }}>● IoT ATIVO</span>
                </div>
                <div className="absolute bottom-6 left-6 glass-card-orange rounded-lg px-3 py-2">
                  <span className="font-mono-tech text-xs" style={{ color: "#FF6600" }}>● SENSOR PRONTO</span>
                </div>
                <div className="absolute top-1/2 right-6 glass-card rounded-lg px-3 py-2">
                  <span className="font-mono-tech text-xs" style={{ color: "#4AFF88" }}>● GPS ON</span>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll-right space-y-6">
              <h2 className="font-display font-800 text-4xl" style={{ color: "#F0F8FF" }}>
                Design Compacto,<br />
                <span style={{ color: "#4A9EFF" }}>Proteção Máxima</span>
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: "rgba(240,248,255,0.65)" }}>
                O dispositivo MuleTech foi projetado para ser discreto e ergonômico, integrando-se naturalmente a qualquer muleta ou auxiliar de mobilidade sem comprometer o conforto do usuário.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Peso", value: "< 85g" },
                  { label: "Dimensões", value: "8 × 4 × 2cm" },
                  { label: "Resistência", value: "IP67" },
                  { label: "Temperatura", value: "-10°C a 60°C" },
                ].map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-lg p-4"
                    style={{ background: "rgba(74,158,255,0.06)", border: "1px solid rgba(74,158,255,0.12)" }}
                  >
                    <p className="font-mono-tech text-xs mb-1" style={{ color: "rgba(240,248,255,0.4)" }}>{spec.label}</p>
                    <p className="font-display font-700 text-xl" style={{ color: "#4A9EFF" }}>{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20" style={{ background: "linear-gradient(180deg, #070D1A 0%, #0D1F3C 50%, #070D1A 100%)" }}>
        <div className="container">
          <div className="animate-on-scroll text-center mb-16">
            <span className="section-label">Componentes</span>
            <h2 className="font-display font-800 text-5xl md:text-6xl mt-4" style={{ color: "#F0F8FF" }}>
              ESPECIFICAÇÕES <span style={{ color: "#4A9EFF" }}>TÉCNICAS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Cpu,
                title: "Componentes de Hardware",
                color: "#4A9EFF",
                items: [
                  "Microcontrolador ARM Cortex-M4",
                  "Acelerômetro 3-eixos ±16g",
                  "Giroscópio de alta precisão",
                  "Sensor de pressão barométrica",
                  "Processador de sinal digital",
                ],
              },
              {
                icon: Activity,
                title: "Sensores",
                color: "#4A9EFF",
                items: [
                  "Acelerômetro MEMS 6-DOF",
                  "Sensor de impacto piezoelétrico",
                  "Termômetro integrado",
                  "Sensor de luminosidade",
                  "Detecção de postura",
                ],
              },
              {
                icon: Battery,
                title: "Sistema de Bateria",
                color: "#FF6600",
                items: [
                  "Bateria Li-Po 3000mAh",
                  "Autonomia de até 72 horas",
                  "Carregamento USB-C rápido",
                  "Indicador LED de carga",
                  "Proteção contra sobrecarga",
                ],
              },
              {
                icon: Wifi,
                title: "Conectividade",
                color: "#FF6600",
                items: [
                  "4G LTE Cat-M1",
                  "WiFi 802.11 b/g/n",
                  "Bluetooth 5.0 BLE",
                  "GPS/GLONASS integrado",
                  "Antena interna omnidirecional",
                ],
              },
              {
                icon: Shield,
                title: "Sistema de Detecção",
                color: "#4AFF88",
                items: [
                  "Algoritmo ML embarcado",
                  "Detecção em < 300ms",
                  "99.7% de precisão",
                  "Modo de baixo consumo",
                  "Calibração automática",
                ],
              },
              {
                icon: Lock,
                title: "Segurança",
                color: "#4AFF88",
                items: [
                  "Criptografia AES-256",
                  "Autenticação TLS 1.3",
                  "LGPD compliant",
                  "Dados anonimizados",
                  "Backup automático",
                ],
              },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="animate-on-scroll glass-card rounded-xl p-6 hover:scale-[1.02] transition-all duration-300"
                  style={{ transitionDelay: `${i * 0.08}s`, border: `1px solid ${card.color}18` }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: `${card.color}15` }}
                  >
                    <Icon size={24} style={{ color: card.color }} />
                  </div>
                  <h3 className="font-display font-700 text-xl mb-4" style={{ color: "#F0F8FF" }}>
                    {card.title}
                  </h3>
                  <ul className="space-y-2">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "rgba(240,248,255,0.55)" }}>
                        <ChevronRight size={14} style={{ color: card.color }} />
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

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container animate-on-scroll">
          <h2 className="font-display font-800 text-5xl mb-6" style={{ color: "#F0F8FF" }}>
            INTERESSADO NO <span style={{ color: "#FF6600" }}>PRODUTO?</span>
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "rgba(240,248,255,0.6)" }}>
            Entre em contato para saber mais sobre disponibilidade, parcerias e demonstrações.
          </p>
          <Link href="/contato">
            <button className="btn-primary text-base px-10 py-4">Falar com a Equipe</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
