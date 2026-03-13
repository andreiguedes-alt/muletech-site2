/*
  MuleTech Tecnologia Page – Cinematic Dark Tech
  Arquitetura IoT, sensores, microcontroladores, cloud backend, comunicação mobile
*/

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Cpu, Cloud, Smartphone, Wifi, Activity, Database, Server, Code, ChevronRight } from "lucide-react";
import { Link } from "wouter";

const TECH_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433886006/N62zTXZRytPpDeHKAdQ6Yy/tech-bg-Tft5h29HwFA9pXZkSjmwLb.webp";

export default function Tecnologia() {
  useScrollAnimation();

  return (
    <div className="min-h-screen pt-20" style={{ background: "#070D1A" }}>
      {/* Hero */}
      <section
        className="relative py-24 text-center overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0D1F3C 0%, #070D1A 100%)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${TECH_BG})` }}
        />
        <div className="relative z-10 container animate-on-scroll">
          <span className="section-label">Tecnologia</span>
          <h1 className="font-display font-800 text-6xl md:text-8xl mt-4 leading-none" style={{ color: "#F0F8FF" }}>
            ARQUITETURA
            <br />
            <span style={{ color: "#4A9EFF" }}>INTELIGENTE</span>
          </h1>
          <p className="text-xl mt-6 max-w-2xl mx-auto" style={{ color: "rgba(240,248,255,0.6)" }}>
            Uma stack tecnológica completa, do sensor ao smartphone, projetada para máxima confiabilidade e velocidade.
          </p>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-20">
        <div className="container">
          <div className="animate-on-scroll text-center mb-16">
            <span className="section-label">Arquitetura do Sistema</span>
            <h2 className="font-display font-800 text-5xl mt-4" style={{ color: "#F0F8FF" }}>
              FLUXO DE <span style={{ color: "#4A9EFF" }}>DADOS</span>
            </h2>
          </div>

          {/* Architecture Flow */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              {[
                { icon: Cpu, label: "Dispositivo IoT", sublabel: "Sensores + MCU", color: "#4A9EFF" },
                { icon: Wifi, label: "Transmissão", sublabel: "4G / WiFi / BLE", color: "#4A9EFF" },
                { icon: Cloud, label: "Cloud Backend", sublabel: "AWS / Firebase", color: "#FF6600" },
                { icon: Smartphone, label: "App Mobile", sublabel: "iOS & Android", color: "#4AFF88" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex md:flex-col items-center gap-4 animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0"
                      style={{
                        background: `${item.color}15`,
                        border: `2px solid ${item.color}44`,
                        boxShadow: `0 0 30px ${item.color}22`,
                      }}
                    >
                      <Icon size={32} style={{ color: item.color }} />
                    </div>
                    <div className="text-center">
                      <p className="font-display font-700 text-lg" style={{ color: "#F0F8FF" }}>{item.label}</p>
                      <p className="font-mono-tech text-xs mt-1" style={{ color: "rgba(240,248,255,0.4)" }}>{item.sublabel}</p>
                    </div>
                    {i < 3 && (
                      <div className="hidden md:block absolute" style={{ right: "-12px", top: "50%" }}>
                        <ChevronRight size={20} style={{ color: "rgba(74,158,255,0.4)" }} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Tech Sections */}
      <section className="py-20" style={{ background: "linear-gradient(180deg, #070D1A 0%, #0D1F3C 50%, #070D1A 100%)" }}>
        <div className="container max-w-5xl mx-auto space-y-16">
          {/* IoT Architecture */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll">
            <div>
              <span className="section-label">Camada 1</span>
              <h3 className="font-display font-800 text-4xl mt-3 mb-4" style={{ color: "#F0F8FF" }}>
                Arquitetura <span style={{ color: "#4A9EFF" }}>IoT</span>
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(240,248,255,0.65)" }}>
                O dispositivo embarcado combina múltiplos sensores com um microcontrolador de baixo consumo, processando dados localmente antes de transmitir eventos críticos para a nuvem.
              </p>
              <ul className="space-y-3">
                {[
                  "Processamento de sinal em tempo real no dispositivo",
                  "Algoritmo de detecção de queda embarcado (edge ML)",
                  "Modo sleep inteligente para economia de bateria",
                  "Watchdog timer para garantir disponibilidade 24/7",
                  "OTA updates para atualização remota de firmware",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "rgba(240,248,255,0.55)" }}>
                    <ChevronRight size={14} className="mt-0.5 shrink-0" style={{ color: "#4A9EFF" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Latência", value: "< 50ms", icon: Activity },
                { label: "Frequência", value: "200Hz", icon: Cpu },
                { label: "Consumo", value: "< 5mW", icon: Wifi },
                { label: "Memória", value: "512KB", icon: Database },
              ].map((spec) => {
                const Icon = spec.icon;
                return (
                  <div
                    key={spec.label}
                    className="glass-card rounded-xl p-5 text-center"
                    style={{ border: "1px solid rgba(74,158,255,0.15)" }}
                  >
                    <Icon size={20} className="mx-auto mb-2" style={{ color: "#4A9EFF" }} />
                    <p className="font-display font-800 text-2xl" style={{ color: "#4A9EFF" }}>{spec.value}</p>
                    <p className="font-mono-tech text-xs mt-1" style={{ color: "rgba(240,248,255,0.4)" }}>{spec.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sensor Technology */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              {[
                { name: "Acelerômetro", spec: "±16g, 16-bit", color: "#4A9EFF" },
                { name: "Giroscópio", spec: "±2000°/s", color: "#4A9EFF" },
                { name: "GPS", spec: "< 2.5m CEP", color: "#FF6600" },
                { name: "Barômetro", spec: "±1 hPa", color: "#FF6600" },
              ].map((sensor) => (
                <div
                  key={sensor.name}
                  className="glass-card rounded-xl p-5"
                  style={{ border: `1px solid ${sensor.color}22` }}
                >
                  <p className="font-display font-700 text-base mb-1" style={{ color: "#F0F8FF" }}>{sensor.name}</p>
                  <p className="font-mono-tech text-xs" style={{ color: sensor.color }}>{sensor.spec}</p>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <span className="section-label">Camada 2</span>
              <h3 className="font-display font-800 text-4xl mt-3 mb-4" style={{ color: "#F0F8FF" }}>
                Tecnologia de <span style={{ color: "#FF6600" }}>Sensores</span>
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(240,248,255,0.65)" }}>
                Sensores MEMS de última geração combinados com algoritmos de fusão de dados garantem detecção precisa e confiável de eventos de queda.
              </p>
              <ul className="space-y-3">
                {[
                  "Fusão de dados multi-sensor com filtro de Kalman",
                  "Calibração automática por temperatura",
                  "Compensação de vibração do ambiente",
                  "Detecção de postura e orientação corporal",
                  "Reconhecimento de padrões de marcha",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "rgba(240,248,255,0.55)" }}>
                    <ChevronRight size={14} className="mt-0.5 shrink-0" style={{ color: "#FF6600" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cloud Backend */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll">
            <div>
              <span className="section-label">Camada 3</span>
              <h3 className="font-display font-800 text-4xl mt-3 mb-4" style={{ color: "#F0F8FF" }}>
                Cloud <span style={{ color: "#4A9EFF" }}>Backend</span>
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(240,248,255,0.65)" }}>
                Infraestrutura serverless escalável na nuvem, processando eventos em tempo real com alta disponibilidade e redundância geográfica.
              </p>
              <div className="space-y-3">
                {[
                  { label: "Event Processing", tech: "AWS Lambda + Kinesis" },
                  { label: "Database", tech: "DynamoDB + TimeSeries" },
                  { label: "Push Notifications", tech: "Firebase Cloud Messaging" },
                  { label: "API Gateway", tech: "REST + WebSocket" },
                  { label: "Segurança", tech: "TLS 1.3 + AES-256" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-3 rounded-lg" style={{ background: "rgba(74,158,255,0.05)", border: "1px solid rgba(74,158,255,0.1)" }}>
                    <span className="text-sm" style={{ color: "rgba(240,248,255,0.6)" }}>{item.label}</span>
                    <span className="font-mono-tech text-xs px-2 py-1 rounded" style={{ background: "rgba(74,158,255,0.12)", color: "#4A9EFF" }}>{item.tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Uptime SLA", value: "99.9%", icon: Server },
                { label: "Latência API", value: "< 100ms", icon: Activity },
                { label: "Retenção", value: "5 anos", icon: Database },
                { label: "Criptografia", value: "AES-256", icon: Code },
              ].map((spec) => {
                const Icon = spec.icon;
                return (
                  <div
                    key={spec.label}
                    className="glass-card rounded-xl p-5 text-center"
                    style={{ border: "1px solid rgba(255,102,0,0.15)" }}
                  >
                    <Icon size={20} className="mx-auto mb-2" style={{ color: "#FF6600" }} />
                    <p className="font-display font-800 text-2xl" style={{ color: "#FF6600" }}>{spec.value}</p>
                    <p className="font-mono-tech text-xs mt-1" style={{ color: "rgba(240,248,255,0.4)" }}>{spec.label}</p>
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
            QUER SABER <span style={{ color: "#4A9EFF" }}>MAIS?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/produto">
              <button className="btn-primary px-8 py-4">Ver o Produto</button>
            </Link>
            <Link href="/contato">
              <button className="btn-secondary px-8 py-4">Falar com Engenheiro</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
