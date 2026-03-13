/*
  MuleTech Sobre Page – Cinematic Dark Tech
  Missão, Visão, Foco em Inovação, Roadmap Futuro
*/

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Eye, Lightbulb, Map, ChevronRight } from "lucide-react";
import { Link } from "wouter";

const ABOUT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433886006/N62zTXZRytPpDeHKAdQ6Yy/about-bg-6wbAfnRYKQ6L4eSWHPnMNE.webp";
const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433886006/N62zTXZRytPpDeHKAdQ6Yy/muletech-logo_cf9b7fe7.webp";

export default function Sobre() {
  useScrollAnimation();

  return (
    <div className="min-h-screen pt-20" style={{ background: "#070D1A" }}>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${ABOUT_BG})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0D1F3C 0%, rgba(7,13,26,0.9) 100%)" }} />
        <div className="relative z-10 container text-center animate-on-scroll">
          <img src={LOGO_URL} alt="MuleTech" className="w-20 h-20 mx-auto mb-6 object-contain rounded-xl" />
          <span className="section-label">Sobre a MuleTech</span>
          <h1 className="font-display font-800 text-6xl md:text-8xl mt-4 leading-none" style={{ color: "#F0F8FF" }}>
            REIMAGINANDO
            <br />
            <span style={{ color: "#4A9EFF" }}>A LOCOMOÇÃO</span>
          </h1>
          <p className="text-xl mt-6 max-w-3xl mx-auto leading-relaxed" style={{ color: "rgba(240,248,255,0.65)" }}>
            A MuleTech nasceu da convicção de que a tecnologia pode e deve ser usada para proteger as pessoas mais vulneráveis, devolvendo independência e segurança a quem mais precisa.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Innovation */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: "Nossa Missão",
                color: "#FF6600",
                content: "Desenvolver tecnologia assistiva inteligente que proteja pessoas com mobilidade reduzida, conectando-as a seus familiares através de sistemas de monitoramento em tempo real, simples de usar e acessíveis.",
              },
              {
                icon: Eye,
                title: "Nossa Visão",
                color: "#4A9EFF",
                content: "Ser a principal referência global em tecnologia de segurança para mobilidade assistiva, tornando quedas e emergências sem socorro uma realidade do passado para pessoas idosas e com limitações físicas.",
              },
              {
                icon: Lightbulb,
                title: "Foco em Inovação",
                color: "#4AFF88",
                content: "Combinamos IoT, machine learning e design centrado no usuário para criar soluções que realmente funcionam no dia a dia. Cada feature é validada com usuários reais e seus familiares.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="animate-on-scroll glass-card rounded-xl p-8 hover:scale-[1.02] transition-all duration-300"
                  style={{
                    transitionDelay: `${i * 0.1}s`,
                    border: `1px solid ${item.color}22`,
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: `${item.color}15` }}
                  >
                    <Icon size={28} style={{ color: item.color }} />
                  </div>
                  <h3 className="font-display font-800 text-2xl mb-4" style={{ color: "#F0F8FF" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(240,248,255,0.6)" }}>
                    {item.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20" style={{ background: "linear-gradient(180deg, #070D1A 0%, #0D1F3C 50%, #070D1A 100%)" }}>
        <div className="container max-w-4xl mx-auto">
          <div className="animate-on-scroll text-center mb-16">
            <span className="section-label">Nossa História</span>
            <h2 className="font-display font-800 text-5xl mt-4" style={{ color: "#F0F8FF" }}>
              POR QUE <span style={{ color: "#FF6600" }}>CRIAMOS</span> A MULETECH
            </h2>
          </div>

          <div className="animate-on-scroll glass-card rounded-2xl p-10" style={{ border: "1px solid rgba(74,158,255,0.15)" }}>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(240,248,255,0.75)" }}>
              A MuleTech surgiu de uma necessidade real: a de proteger pessoas com mobilidade reduzida que muitas vezes ficam sozinhas em casa, sem nenhum sistema de segurança adequado.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(240,248,255,0.6)" }}>
              Vimos de perto como quedas podem ser devastadoras quando não há socorro imediato. Decidimos usar nossa expertise em IoT, desenvolvimento mobile e machine learning para criar uma solução que realmente funciona no mundo real.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(240,248,255,0.6)" }}>
              Cada linha de código, cada sensor escolhido, cada feature do aplicativo foi pensada com uma única pergunta em mente: isso vai realmente salvar vidas?
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20">
        <div className="container">
          <div className="animate-on-scroll text-center mb-16">
            <span className="section-label">Roadmap</span>
            <h2 className="font-display font-800 text-5xl mt-4" style={{ color: "#F0F8FF" }}>
              O FUTURO DA <span style={{ color: "#4A9EFF" }}>MULETECH</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                phase: "Q1 2024",
                title: "MVP e Validação",
                status: "Concluído",
                statusColor: "#4AFF88",
                items: ["Protótipo do dispositivo IoT", "App mobile básico", "Testes com usuários beta"],
              },
              {
                phase: "Q2 2024",
                title: "Produto v1.0",
                status: "Em Andamento",
                statusColor: "#FF6600",
                items: ["Dispositivo de produção", "App completo iOS/Android", "Infraestrutura cloud escalável"],
              },
              {
                phase: "Q3 2024",
                title: "Expansão de Features",
                status: "Planejado",
                statusColor: "#4A9EFF",
                items: ["Integração com wearables", "IA preditiva de quedas", "Painel para cuidadores profissionais"],
              },
              {
                phase: "Q4 2024",
                title: "Escala e Parcerias",
                status: "Planejado",
                statusColor: "#4A9EFF",
                items: ["Parcerias com hospitais e clínicas", "Integração com planos de saúde", "Expansão para América Latina"],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="animate-on-scroll flex gap-6 mb-8 last:mb-0"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="w-4 h-4 rounded-full mt-1"
                    style={{
                      background: item.statusColor,
                      boxShadow: `0 0 10px ${item.statusColor}66`,
                    }}
                  />
                  {i < 3 && (
                    <div
                      className="w-0.5 flex-1 mt-2"
                      style={{ background: "rgba(74,158,255,0.2)", minHeight: "40px" }}
                    />
                  )}
                </div>

                <div
                  className="flex-1 glass-card rounded-xl p-5 mb-2"
                  style={{ border: `1px solid ${item.statusColor}22` }}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <p className="font-mono-tech text-xs mb-1" style={{ color: "rgba(240,248,255,0.4)" }}>{item.phase}</p>
                      <h4 className="font-display font-700 text-xl" style={{ color: "#F0F8FF" }}>{item.title}</h4>
                    </div>
                    <span
                      className="font-mono-tech text-xs px-2 py-1 rounded shrink-0"
                      style={{ background: `${item.statusColor}15`, color: item.statusColor, border: `1px solid ${item.statusColor}33` }}
                    >
                      {item.status}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {item.items.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm" style={{ color: "rgba(240,248,255,0.5)" }}>
                        <ChevronRight size={12} style={{ color: item.statusColor }} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container animate-on-scroll">
          <h2 className="font-display font-800 text-5xl mb-6" style={{ color: "#F0F8FF" }}>
            FAÇA PARTE DA <span style={{ color: "#4A9EFF" }}>MISSÃO</span>
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "rgba(240,248,255,0.6)" }}>
            Investidores, parceiros e early adopters são bem-vindos. Vamos juntos transformar a segurança de mobilidade.
          </p>
          <Link href="/contato">
            <button className="btn-primary text-base px-10 py-4">Entre em Contato</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
