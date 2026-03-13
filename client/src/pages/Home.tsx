/*
  MuleTech Home Page – Cinematic Dark Tech
  Sections: Hero, Problem, Solution, How It Works, Technology, Product, App Preview, Simulate Fall
  Design: Deep navy background, electric blue glows, orange alerts, Barlow Condensed typography
*/

import { useEffect, useState, useRef } from "react";
import { Link } from "wouter";
import {
  ChevronDown, AlertTriangle, Shield, Wifi, MapPin, Bell, Zap,
  Activity, Cpu, Cloud, Smartphone, Battery, Radio, Lock, ChevronRight
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433886006/N62zTXZRytPpDeHKAdQ6Yy/hero-bg-UjNXYfT2X3AXi9tmVXFi7u.webp";
const PROBLEM_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433886006/N62zTXZRytPpDeHKAdQ6Yy/problem-bg-9rfUcwi6BDhQtFANJBje4q.webp";
const APP_MOCKUP = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433886006/N62zTXZRytPpDeHKAdQ6Yy/app-mockup-oQXX3LXFb6haDiFBKyqCCD.webp";
const TECH_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433886006/N62zTXZRytPpDeHKAdQ6Yy/tech-bg-Tft5h29HwFA9pXZkSjmwLb.webp";
const CRUTCH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433886006/N62zTXZRytPpDeHKAdQ6Yy/muletech-crutch_92f61a56.webp";

// Fall Simulation Component
function FallSimulation() {
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);

  const steps = [
    { icon: AlertTriangle, label: "Queda Detectada", color: "#FF6600", desc: "Acelerômetro detecta impacto súbito de 4.2G" },
    { icon: Activity, label: "Análise de Impacto", color: "#FF8833", desc: "Algoritmo confirma padrão de queda em 0.3s" },
    { icon: Cloud, label: "Sinal Enviado", color: "#4A9EFF", desc: "Dados transmitidos para nuvem via 4G/WiFi" },
    { icon: Bell, label: "Alerta Disparado", color: "#4A9EFF", desc: "Notificação push enviada para contatos" },
    { icon: Smartphone, label: "Família Notificada", color: "#4AFF88", desc: "Familiares recebem localização GPS em tempo real" },
  ];

  const simulate = () => {
    if (running) return;
    setRunning(true);
    setStep(0);
    let current = 0;
    const interval = setInterval(() => {
      current++;
      setStep(current);
      if (current >= steps.length) {
        clearInterval(interval);
        setTimeout(() => {
          setRunning(false);
          setStep(0);
        }, 3000);
      }
    }, 900);
  };

  return (
    <section className="py-24" style={{ background: "linear-gradient(135deg, #070D1A 0%, #0D1F3C 50%, #070D1A 100%)" }}>
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="section-label">Demonstração Interativa</span>
          <h2 className="font-display font-800 text-5xl md:text-6xl mt-4 mb-6" style={{ color: "#F0F8FF" }}>
            SIMULE UMA DETECÇÃO
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(240,248,255,0.6)" }}>
            Veja como o sistema MuleTech reage em menos de 1 segundo após uma queda.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Simulation Steps */}
          <div className="relative mb-12">
            {/* Progress Line */}
            <div className="absolute top-8 left-8 right-8 h-0.5" style={{ background: "rgba(74,158,255,0.15)" }}>
              <div
                className="h-full transition-all duration-700"
                style={{
                  width: step > 0 ? `${((step - 1) / (steps.length - 1)) * 100}%` : "0%",
                  background: "linear-gradient(to right, #FF6600, #4A9EFF)",
                }}
              />
            </div>

            <div className="flex justify-between relative z-10">
              {steps.map((s, i) => {
                const Icon = s.icon;
                const active = step > i;
                const current = step === i + 1;
                return (
                  <div key={i} className="flex flex-col items-center gap-3 flex-1">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500"
                      style={{
                        background: active || current ? `${s.color}22` : "rgba(74,158,255,0.05)",
                        border: `2px solid ${active || current ? s.color : "rgba(74,158,255,0.15)"}`,
                        boxShadow: current ? `0 0 20px ${s.color}66` : "none",
                        transform: current ? "scale(1.15)" : "scale(1)",
                      }}
                    >
                      <Icon size={24} style={{ color: active || current ? s.color : "rgba(240,248,255,0.3)" }} />
                    </div>
                    <div className="text-center hidden md:block">
                      <p className="font-display font-700 text-xs tracking-wider uppercase" style={{ color: active || current ? s.color : "rgba(240,248,255,0.3)" }}>
                        {s.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Current Step Description */}
          <div
            className="glass-card rounded-lg p-6 mb-8 min-h-20 flex items-center justify-center text-center transition-all duration-500"
            style={{ minHeight: "80px" }}
          >
            {step > 0 && step <= steps.length ? (
              <div>
                <p className="font-display font-700 text-xl mb-1" style={{ color: steps[step - 1].color }}>
                  {steps[step - 1].label}
                </p>
                <p className="text-sm" style={{ color: "rgba(240,248,255,0.6)" }}>
                  {steps[step - 1].desc}
                </p>
              </div>
            ) : step > steps.length ? (
              <div>
                <p className="font-display font-700 text-xl mb-1" style={{ color: "#4AFF88" }}>
                  Sistema Completo!
                </p>
                <p className="text-sm" style={{ color: "rgba(240,248,255,0.6)" }}>
                  Família notificada em menos de 3 segundos.
                </p>
              </div>
            ) : (
              <p className="text-sm" style={{ color: "rgba(240,248,255,0.4)" }}>
                Clique no botão abaixo para simular uma detecção de queda
              </p>
            )}
          </div>

          {/* Simulate Button */}
          <div className="text-center">
            <button
              onClick={simulate}
              disabled={running}
              className="btn-primary text-lg px-10 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                boxShadow: running ? "none" : "0 0 30px rgba(255,102,0,0.4)",
              }}
            >
              {running ? "Simulando..." : "Simular Detecção de Queda"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useScrollAnimation();

  return (
    <div className="min-h-screen" style={{ background: "#070D1A" }}>
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "#070D1A" }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            opacity: 0.35,
          }}
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(7,13,26,0.85) 0%, rgba(7,13,26,0.5) 50%, rgba(7,13,26,0.85) 100%)",
          }}
        />
        {/* Bottom Fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{ background: "linear-gradient(to bottom, transparent, #070D1A)" }}
        />

        {/* Particles */}
        <div className="particles-bg">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDuration: `${Math.random() * 15 + 10}s`,
                animationDelay: `${Math.random() * 10}s`,
                opacity: Math.random() * 0.6 + 0.2,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: "rgba(74,158,255,0.1)",
              border: "1px solid rgba(74,158,255,0.25)",
            }}
          >
            <div className="w-2 h-2 rounded-full bg-green-400" style={{ animation: "blink 1.5s ease-in-out infinite" }} />
            <span className="font-mono-tech text-xs tracking-widest uppercase" style={{ color: "#4A9EFF" }}>
              Tecnologia Assistiva Inteligente
            </span>
          </div>

          {/* Main Title */}
          <h1
            className="font-display font-black leading-none mb-6"
            style={{
              fontSize: "clamp(3rem, 10vw, 8rem)",
              color: "#F0F8FF",
              letterSpacing: "-0.02em",
              lineHeight: 0.95,
            }}
          >
            MULETECH
            <br />
            <span style={{ color: "#4A9EFF" }} className="text-glow-blue">
              MOBILIDADE
            </span>
            <br />
            <span style={{ color: "#FF6600" }} className="text-glow-orange">
              INTELIGENTE
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(240,248,255,0.7)" }}
          >
            Protegendo pessoas com tecnologia assistiva inteligente. Detecção de quedas em tempo real, alertas automáticos para familiares.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/produto">
              <button className="btn-primary text-base px-8 py-4">
                Ver Como Funciona
              </button>
            </Link>
            <Link href="/tecnologia">
              <button className="btn-secondary text-base px-8 py-4">
                Explorar a Tecnologia
              </button>
            </Link>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            {[
              { value: "< 1s", label: "Detecção de Queda" },
              { value: "99.7%", label: "Precisão" },
              { value: "72h", label: "Bateria" },
              { value: "4G + WiFi", label: "Conectividade" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display font-800 text-3xl" style={{ color: "#4A9EFF" }}>
                  {stat.value}
                </p>
                <p className="font-mono-tech text-xs tracking-wider uppercase mt-1" style={{ color: "rgba(240,248,255,0.45)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-mono-tech text-xs tracking-widest uppercase" style={{ color: "rgba(74,158,255,0.5)" }}>
            Scroll
          </span>
          <ChevronDown size={20} style={{ color: "rgba(74,158,255,0.5)" }} />
        </div>
      </section>

      {/* ===== PROBLEM SECTION ===== */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${PROBLEM_BG})`, opacity: 0.12 }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #070D1A 0%, rgba(7,13,26,0.7) 50%, #070D1A 100%)" }} />

        <div className="relative z-10 container">
          <div className="max-w-5xl mx-auto">
            <div className="animate-on-scroll text-center mb-16">
              <span className="section-label">O Problema</span>
              <h2 className="font-display font-extrabold text-5xl md:text-7xl mt-4 leading-none" style={{ color: "#F0F8FF" }}>
                QUEDAS SÃO
                <br />
                <span style={{ color: "#FF6600" }}>SILENCIOSAS</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll-left">
                <p className="text-xl leading-relaxed mb-8" style={{ color: "rgba(240,248,255,0.75)" }}>
                  Quedas são um dos maiores riscos para pessoas com mobilidade reduzida e idosos. Muitas vezes ocorrem quando estão sozinhos, sem nenhum familiar por perto para ajudar.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: "rgba(240,248,255,0.55)" }}>
                  Cada minuto sem socorro após uma queda pode significar consequências graves e irreversíveis para a saúde.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 animate-on-scroll-right">
                {[
                  { icon: AlertTriangle, value: "1 em 3", label: "Idosos caem ao menos uma vez por ano", color: "#FF6600" },
                  { icon: Activity, value: "30 min", label: "Tempo médio sem socorro após uma queda", color: "#FF6600" },
                  { icon: Shield, value: "80%", label: "Das quedas são evitáveis com monitoramento", color: "#4A9EFF" },
                  { icon: Zap, value: "< 1s", label: "Tempo de detecção do sistema MuleTech", color: "#4A9EFF" },
                ].map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="glass-card rounded-lg p-5 transition-all duration-300 hover:scale-105"
                      style={{
                        border: `1px solid ${stat.color}22`,
                        boxShadow: `0 0 20px ${stat.color}11`,
                      }}
                    >
                      <Icon size={24} className="mb-3" style={{ color: stat.color }} />
                      <p className="font-display font-800 text-2xl mb-1" style={{ color: stat.color }}>
                        {stat.value}
                      </p>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(240,248,255,0.5)" }}>
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOLUTION SECTION ===== */}
      <section className="py-24" style={{ background: "linear-gradient(180deg, #070D1A 0%, #0D1F3C 50%, #070D1A 100%)" }}>
        <div className="container">
          <div className="animate-on-scroll text-center mb-16">
            <span className="section-label">A Solução</span>
            <h2 className="font-display font-extrabold text-5xl md:text-7xl mt-4 leading-none" style={{ color: "#F0F8FF" }}>
              TECNOLOGIA QUE
              <br />
              <span style={{ color: "#4A9EFF" }}>PROTEGE</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="animate-on-scroll-left">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(74,158,255,0.2)", boxShadow: "0 0 60px rgba(74,158,255,0.1)" }}
              >
                <img
                  src={CRUTCH_IMG}
                  alt="Dispositivo MuleTech"
                  className="w-full object-cover"
                  style={{ maxHeight: "500px", objectFit: "contain", background: "rgba(13,31,60,0.5)", padding: "2rem" }}
                />
                {/* Overlay Labels */}
                <div className="absolute top-4 right-4 glass-card rounded px-3 py-2">
                  <span className="font-mono-tech text-xs" style={{ color: "#4A9EFF" }}>IoT ATIVO</span>
                </div>
                <div className="absolute bottom-4 left-4 glass-card-orange rounded px-3 py-2">
                  <span className="font-mono-tech text-xs" style={{ color: "#FF6600" }}>SENSOR PRONTO</span>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll-right space-y-6">
              <p className="text-xl leading-relaxed" style={{ color: "rgba(240,248,255,0.8)" }}>
                Um dispositivo inteligente integrado a muletas e auxiliares de mobilidade que detecta quedas e alerta automaticamente os familiares.
              </p>

              {[
                { icon: Cpu, title: "Sensores IoT Avançados", desc: "Acelerômetro e giroscópio de alta precisão monitoram cada movimento em tempo real." },
                { icon: MapPin, title: "GPS em Tempo Real", desc: "Localização precisa transmitida instantaneamente para o aplicativo familiar." },
                { icon: Bell, title: "Alertas Automáticos", desc: "Notificações push imediatas para todos os contatos cadastrados na família." },
                { icon: Cloud, title: "Infraestrutura Cloud", desc: "Dados processados na nuvem com redundância e disponibilidade 24/7." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex gap-4 p-4 rounded-lg transition-all duration-300 hover:scale-[1.02]"
                    style={{ background: "rgba(74,158,255,0.05)", border: "1px solid rgba(74,158,255,0.1)" }}
                  >
                    <div
                      className="w-10 h-10 rounded flex items-center justify-center shrink-0"
                      style={{ background: "rgba(74,158,255,0.15)" }}
                    >
                      <Icon size={20} style={{ color: "#4A9EFF" }} />
                    </div>
                    <div>
                      <h4 className="font-display font-700 text-base mb-1" style={{ color: "#F0F8FF" }}>
                        {item.title}
                      </h4>
                      <p className="text-sm" style={{ color: "rgba(240,248,255,0.55)" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS SECTION ===== */}
      <section className="py-24" style={{ background: "#070D1A" }}>
        <div className="container">
          <div className="animate-on-scroll text-center mb-20">
            <span className="section-label">Como Funciona</span>
            <h2 className="font-display font-extrabold text-5xl md:text-6xl mt-4 leading-none" style={{ color: "#F0F8FF" }}>
              DO IMPACTO AO
              <br />
              <span style={{ color: "#FF6600" }}>ALERTA</span>
            </h2>
            <p className="text-lg mt-6 max-w-2xl mx-auto" style={{ color: "rgba(240,248,255,0.55)" }}>
              Em menos de 3 segundos, o sistema completo é acionado.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "01",
                icon: AlertTriangle,
                title: "Queda Detectada",
                desc: "O acelerômetro detecta impacto súbito acima do limiar configurado, identificando o padrão de queda.",
                color: "#FF6600",
                time: "0.0s",
              },
              {
                step: "02",
                icon: Activity,
                title: "Análise de Impacto",
                desc: "O algoritmo de detecção confirma a queda, diferenciando de movimentos normais para evitar falsos alertas.",
                color: "#FF8833",
                time: "0.3s",
              },
              {
                step: "03",
                icon: Cloud,
                title: "Sinal Enviado à Nuvem",
                desc: "Os dados do evento são transmitidos via 4G/WiFi para a infraestrutura cloud da MuleTech.",
                color: "#4A9EFF",
                time: "0.8s",
              },
              {
                step: "04",
                icon: Bell,
                title: "Alerta no Aplicativo",
                desc: "Notificação push é disparada para todos os contatos familiares cadastrados no aplicativo.",
                color: "#4A9EFF",
                time: "1.5s",
              },
              {
                step: "05",
                icon: Smartphone,
                title: "Família Notificada",
                desc: "Familiares recebem localização GPS em tempo real e podem acionar socorro imediatamente.",
                color: "#4AFF88",
                time: "< 3s",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="animate-on-scroll flex gap-6 mb-8 last:mb-0"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  {/* Step Number & Line */}
                  <div className="flex flex-col items-center shrink-0">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center font-display font-800 text-lg"
                      style={{
                        background: `${item.color}15`,
                        border: `2px solid ${item.color}`,
                        color: item.color,
                        boxShadow: `0 0 20px ${item.color}33`,
                      }}
                    >
                      {item.step}
                    </div>
                    {i < 4 && (
                      <div
                        className="w-0.5 flex-1 mt-2"
                        style={{ background: `linear-gradient(to bottom, ${item.color}44, transparent)`, minHeight: "40px" }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1 glass-card rounded-lg p-5 mb-2 hover:scale-[1.01] transition-all duration-300"
                    style={{ border: `1px solid ${item.color}22` }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <Icon size={20} className="mt-0.5 shrink-0" style={{ color: item.color }} />
                        <div>
                          <h4 className="font-display font-700 text-lg mb-1" style={{ color: "#F0F8FF" }}>
                            {item.title}
                          </h4>
                          <p className="text-sm" style={{ color: "rgba(240,248,255,0.55)" }}>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      <div
                        className="shrink-0 px-3 py-1 rounded font-mono-tech text-xs"
                        style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}33` }}
                      >
                        {item.time}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGY SECTION ===== */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${TECH_BG})`, opacity: 0.15 }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #070D1A 0%, rgba(7,13,26,0.8) 50%, #070D1A 100%)" }} />

        <div className="relative z-10 container">
          <div className="animate-on-scroll text-center mb-16">
            <span className="section-label">Stack Tecnológico</span>
            <h2 className="font-display font-extrabold text-5xl md:text-7xl mt-4 leading-none" style={{ color: "#F0F8FF" }}>
              TECNOLOGIA DE
              <br />
              <span style={{ color: "#4A9EFF" }}>PONTA</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Cpu,
                title: "Sensores IoT",
                desc: "Acelerômetro 3-eixos, giroscópio e sensor de pressão integrados em hardware compacto e resistente.",
                tag: "Hardware",
                color: "#4A9EFF",
              },
              {
                icon: Activity,
                title: "Detecção de Impacto",
                desc: "Algoritmos de machine learning treinados para identificar padrões de queda com 99.7% de precisão.",
                tag: "Algoritmo",
                color: "#4A9EFF",
              },
              {
                icon: MapPin,
                title: "GPS Tracking",
                desc: "Módulo GPS de alta sensibilidade com atualização em tempo real, funcionando em ambientes internos e externos.",
                tag: "Localização",
                color: "#4A9EFF",
              },
              {
                icon: Cloud,
                title: "Cloud Backend",
                desc: "Infraestrutura serverless escalável com processamento em tempo real, redundância e SLA de 99.9%.",
                tag: "Infraestrutura",
                color: "#FF6600",
              },
              {
                icon: Smartphone,
                title: "App Mobile",
                desc: "Aplicativo nativo iOS e Android com notificações push, mapa em tempo real e histórico de eventos.",
                tag: "Mobile",
                color: "#FF6600",
              },
              {
                icon: Wifi,
                title: "Conectividade",
                desc: "Suporte a 4G LTE, WiFi 802.11 b/g/n e Bluetooth 5.0 para máxima cobertura e confiabilidade.",
                tag: "Rede",
                color: "#FF6600",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="animate-on-scroll glass-card rounded-xl p-6 hover:scale-[1.03] transition-all duration-300 group"
                  style={{
                    transitionDelay: `${i * 0.08}s`,
                    border: `1px solid ${item.color}18`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${item.color}44`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${item.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${item.color}18`;
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ background: `${item.color}15` }}
                    >
                      <Icon size={24} style={{ color: item.color }} />
                    </div>
                    <span
                      className="font-mono-tech text-xs px-2 py-1 rounded"
                      style={{ background: `${item.color}12`, color: item.color, border: `1px solid ${item.color}25` }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="font-display font-700 text-xl mb-2" style={{ color: "#F0F8FF" }}>
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(240,248,255,0.55)" }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== APP PREVIEW SECTION ===== */}
      <section className="py-24" style={{ background: "linear-gradient(180deg, #070D1A 0%, #0D1F3C 50%, #070D1A 100%)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="animate-on-scroll-left">
              <span className="section-label">Aplicativo Mobile</span>
              <h2 className="font-display font-extrabold text-5xl md:text-6xl mt-4 mb-6 leading-none" style={{ color: "#F0F8FF" }}>
                CONTROLE NA
                <br />
                <span style={{ color: "#4A9EFF" }}>PALMA DA MÃO</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(240,248,255,0.65)" }}>
                O aplicativo MuleTech mantém toda a família conectada e informada sobre a segurança do ente querido em tempo real.
              </p>

              <div className="space-y-4">
                {[
                  { icon: AlertTriangle, title: "Alertas de Emergência", desc: "Notificações instantâneas com vibração e som de alerta" },
                  { icon: MapPin, title: "Localização GPS", desc: "Mapa em tempo real com histórico de rotas" },
                  { icon: Bell, title: "Sistema de Notificações", desc: "Configuração personalizada de alertas por contato" },
                  { icon: Activity, title: "Monitoramento Contínuo", desc: "Dashboard com status do dispositivo e histórico de eventos" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-3 items-start">
                      <div
                        className="w-8 h-8 rounded flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: "rgba(74,158,255,0.12)" }}
                      >
                        <Icon size={16} style={{ color: "#4A9EFF" }} />
                      </div>
                      <div>
                        <p className="font-display font-600 text-base" style={{ color: "#F0F8FF" }}>{item.title}</p>
                        <p className="text-sm" style={{ color: "rgba(240,248,255,0.5)" }}>{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8">
                <Link href="/app">
                  <button className="btn-primary">
                    Ver Detalhes do App
                  </button>
                </Link>
              </div>
            </div>

            <div className="animate-on-scroll-right flex justify-center">
              <div
                className="relative"
                style={{
                  filter: "drop-shadow(0 0 40px rgba(74,158,255,0.3))",
                }}
              >
                <img
                  src={APP_MOCKUP}
                  alt="App MuleTech"
                  className="w-full max-w-xs rounded-3xl"
                  style={{ border: "2px solid rgba(74,158,255,0.2)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FALL SIMULATION ===== */}
      <FallSimulation />

      {/* ===== CTA SECTION ===== */}
      <section className="py-24" style={{ background: "#070D1A" }}>
        <div className="container">
          <div
            className="max-w-4xl mx-auto text-center rounded-2xl p-12 animate-on-scroll"
            style={{
              background: "linear-gradient(135deg, rgba(13,31,60,0.8) 0%, rgba(7,13,26,0.9) 100%)",
              border: "1px solid rgba(74,158,255,0.2)",
              boxShadow: "0 0 60px rgba(74,158,255,0.08)",
            }}
          >
            <span className="section-label">Próximos Passos</span>
            <h2 className="font-display font-extrabold text-5xl md:text-6xl mt-4 mb-6 leading-none" style={{ color: "#F0F8FF" }}>
              PRONTO PARA
              <br />
              <span style={{ color: "#FF6600" }}>PROTEGER</span>
              <br />
              QUEM VOCÊ AMA?
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: "rgba(240,248,255,0.6)" }}>
              Entre em contato com a MuleTech e descubra como nossa tecnologia pode transformar a segurança e independência de pessoas com mobilidade reduzida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <button className="btn-primary text-base px-8 py-4">
                  Entrar em Contato
                </button>
              </Link>
              <Link href="/sobre">
                <button className="btn-secondary text-base px-8 py-4">
                  Conhecer a Empresa
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
