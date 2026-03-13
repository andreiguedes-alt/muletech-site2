/*
  MuleTech Contato Page – Cinematic Dark Tech
  Formulário de contato com nome, email, mensagem + informações de contato
*/

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function Contato() {
  useScrollAnimation();

  const [form, setForm] = useState({ nome: "", email: "", assunto: "", mensagem: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.email || !form.mensagem) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setForm({ nome: "", email: "", assunto: "", mensagem: "" });
  };

  const inputStyle = {
    background: "rgba(74,158,255,0.05)",
    border: "1px solid rgba(74,158,255,0.2)",
    borderRadius: "6px",
    color: "#F0F8FF",
    padding: "0.875rem 1rem",
    width: "100%",
    fontSize: "0.95rem",
    fontFamily: "'Barlow', sans-serif",
    outline: "none",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  };

  return (
    <div className="min-h-screen pt-20" style={{ background: "#070D1A" }}>
      {/* Hero */}
      <section className="py-20 text-center" style={{ background: "linear-gradient(180deg, #0D1F3C 0%, #070D1A 100%)" }}>
        <div className="container animate-on-scroll">
          <span className="section-label">Contato</span>
          <h1 className="font-display font-800 text-6xl md:text-8xl mt-4 leading-none" style={{ color: "#F0F8FF" }}>
            VAMOS
            <br />
            <span style={{ color: "#FF6600" }}>CONVERSAR</span>
          </h1>
          <p className="text-xl mt-6 max-w-2xl mx-auto" style={{ color: "rgba(240,248,255,0.6)" }}>
            Seja você um investidor, parceiro, cuidador ou familiar interessado — adoraríamos ouvir você.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="animate-on-scroll-left space-y-8">
              <div>
                <h2 className="font-display font-800 text-4xl mb-4" style={{ color: "#F0F8FF" }}>
                  INFORMAÇÕES DE <span style={{ color: "#4A9EFF" }}>CONTATO</span>
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "rgba(240,248,255,0.6)" }}>
                  Nossa equipe está disponível para responder perguntas sobre o produto, parcerias, investimentos ou qualquer outra dúvida.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "E-mail",
                    value: "contact@muletech.com",
                    href: "mailto:contact@muletech.com",
                    color: "#FF6600",
                  },
                  {
                    icon: Phone,
                    label: "Telefone",
                    value: "+55 (11) 9 9999-9999",
                    href: "tel:+5511999999999",
                    color: "#4A9EFF",
                  },
                  {
                    icon: MapPin,
                    label: "Localização",
                    value: "São Paulo, SP – Brasil",
                    href: "#",
                    color: "#4AFF88",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                      >
                        <Icon size={20} style={{ color: item.color }} />
                      </div>
                      <div>
                        <p className="font-mono-tech text-xs mb-1" style={{ color: "rgba(240,248,255,0.4)" }}>
                          {item.label}
                        </p>
                        <a
                          href={item.href}
                          className="text-base transition-colors duration-300 hover:text-white"
                          style={{ color: "rgba(240,248,255,0.75)" }}
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Response Time */}
              <div
                className="glass-card rounded-xl p-6"
                style={{ border: "1px solid rgba(74,158,255,0.15)" }}
              >
                <h4 className="font-display font-700 text-lg mb-2" style={{ color: "#F0F8FF" }}>
                  Tempo de Resposta
                </h4>
                <p className="text-sm" style={{ color: "rgba(240,248,255,0.55)" }}>
                  Respondemos todas as mensagens em até <span style={{ color: "#4A9EFF" }}>24 horas úteis</span>. Para urgências, use o e-mail diretamente.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-on-scroll-right">
              <div
                className="glass-card rounded-2xl p-8"
                style={{ border: "1px solid rgba(74,158,255,0.2)" }}
              >
                {sent ? (
                  <div className="text-center py-12">
                    <CheckCircle size={64} className="mx-auto mb-6" style={{ color: "#4AFF88" }} />
                    <h3 className="font-display font-800 text-3xl mb-3" style={{ color: "#F0F8FF" }}>
                      Mensagem Enviada!
                    </h3>
                    <p className="text-base" style={{ color: "rgba(240,248,255,0.6)" }}>
                      Obrigado pelo contato. Nossa equipe responderá em breve.
                    </p>
                    <button
                      className="btn-secondary mt-6 px-6 py-3"
                      onClick={() => setSent(false)}
                    >
                      Enviar Nova Mensagem
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-display font-800 text-2xl mb-6" style={{ color: "#F0F8FF" }}>
                      Envie uma Mensagem
                    </h3>

                    <div>
                      <label className="block font-display font-600 text-sm mb-2 tracking-wider uppercase" style={{ color: "rgba(240,248,255,0.6)" }}>
                        Nome *
                      </label>
                      <input
                        type="text"
                        value={form.nome}
                        onChange={(e) => setForm({ ...form, nome: e.target.value })}
                        placeholder="Seu nome completo"
                        style={inputStyle}
                        onFocus={(e) => {
                          (e.target as HTMLInputElement).style.borderColor = "rgba(74,158,255,0.5)";
                          (e.target as HTMLInputElement).style.boxShadow = "0 0 15px rgba(74,158,255,0.1)";
                        }}
                        onBlur={(e) => {
                          (e.target as HTMLInputElement).style.borderColor = "rgba(74,158,255,0.2)";
                          (e.target as HTMLInputElement).style.boxShadow = "none";
                        }}
                      />
                    </div>

                    <div>
                      <label className="block font-display font-600 text-sm mb-2 tracking-wider uppercase" style={{ color: "rgba(240,248,255,0.6)" }}>
                        E-mail *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="seu@email.com"
                        style={inputStyle}
                        onFocus={(e) => {
                          (e.target as HTMLInputElement).style.borderColor = "rgba(74,158,255,0.5)";
                          (e.target as HTMLInputElement).style.boxShadow = "0 0 15px rgba(74,158,255,0.1)";
                        }}
                        onBlur={(e) => {
                          (e.target as HTMLInputElement).style.borderColor = "rgba(74,158,255,0.2)";
                          (e.target as HTMLInputElement).style.boxShadow = "none";
                        }}
                      />
                    </div>

                    <div>
                      <label className="block font-display font-600 text-sm mb-2 tracking-wider uppercase" style={{ color: "rgba(240,248,255,0.6)" }}>
                        Assunto
                      </label>
                      <select
                        value={form.assunto}
                        onChange={(e) => setForm({ ...form, assunto: e.target.value })}
                        style={{ ...inputStyle, cursor: "pointer" }}
                        onFocus={(e) => {
                          (e.target as HTMLSelectElement).style.borderColor = "rgba(74,158,255,0.5)";
                        }}
                        onBlur={(e) => {
                          (e.target as HTMLSelectElement).style.borderColor = "rgba(74,158,255,0.2)";
                        }}
                      >
                        <option value="" style={{ background: "#0D1F3C" }}>Selecione um assunto</option>
                        <option value="produto" style={{ background: "#0D1F3C" }}>Informações sobre o Produto</option>
                        <option value="parceria" style={{ background: "#0D1F3C" }}>Parceria Comercial</option>
                        <option value="investimento" style={{ background: "#0D1F3C" }}>Investimento</option>
                        <option value="imprensa" style={{ background: "#0D1F3C" }}>Imprensa / Mídia</option>
                        <option value="outro" style={{ background: "#0D1F3C" }}>Outro</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-display font-600 text-sm mb-2 tracking-wider uppercase" style={{ color: "rgba(240,248,255,0.6)" }}>
                        Mensagem *
                      </label>
                      <textarea
                        value={form.mensagem}
                        onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                        placeholder="Escreva sua mensagem aqui..."
                        rows={5}
                        style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                        onFocus={(e) => {
                          (e.target as HTMLTextAreaElement).style.borderColor = "rgba(74,158,255,0.5)";
                          (e.target as HTMLTextAreaElement).style.boxShadow = "0 0 15px rgba(74,158,255,0.1)";
                        }}
                        onBlur={(e) => {
                          (e.target as HTMLTextAreaElement).style.borderColor = "rgba(74,158,255,0.2)";
                          (e.target as HTMLTextAreaElement).style.boxShadow = "none";
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {sending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Enviar Mensagem
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
