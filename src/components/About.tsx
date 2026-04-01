// DECISÃO CRIATIVA: Fundo bg-warm. Texto ANTES da foto no mobile (order-1/order-2).
// Photo treatment C: border-radius assimétrico 16px 4px. Citação blockquote com border-l-2 secondary.
// Texto biográfico em 1ª pessoa. Credenciais como tags discretas.

import FadeIn from './FadeIn'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden section-padding-lg"
      style={{ backgroundColor: 'var(--color-bg-warm)' }}
    >
      <div className="container-ultra">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">

          {/* ── Coluna de Texto (aparece ANTES no mobile) ── */}
          <div className="w-full lg:w-3/5 order-1">
            <FadeIn>
              <p
                className="eyebrow-ultra mb-8"
                style={{ color: 'var(--color-text)', opacity: 0.5 }}
              >
                Sobre
              </p>
              <h2
                className="leading-[1.1] font-display mb-12"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  color: 'var(--color-text)',
                  letterSpacing: '-0.02em',
                }}
              >
                Aline Roda
              </h2>
            </FadeIn>

            {/* ANTES */}
            <FadeIn delay={0.1}>
              <p
                className="text-base leading-relaxed font-light mb-6"
                style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.8 }}
              >
                Antes de ser terapeuta, fui refém dos mesmos ciclos que hoje ajudo meus pacientes a romper. Carreguei mágoas que não eram minhas, culpa por querer viver diferente e padrões de relacionamento que se repetiam como se eu não tivesse escolha.
              </p>
              <p
                className="text-base leading-relaxed font-light mb-10"
                style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.8 }}
              >
                Eu trabalhava na educação. Era boa no que fazia. Mas sentia que algo dentro de mim estava profundamente travado.
              </p>
            </FadeIn>

            {/* VIRADA */}
            <FadeIn delay={0.2}>
              <p
                className="text-base leading-relaxed font-light mb-6"
                style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.8 }}
              >
                Entre 2016 e 2019, tudo mudou. Não de uma vez. Não por mágica. Mas por um processo de consciência que me exigiu coragem. Conquistei independência residencial. Mudei de carreira. Eliminei 16kg. Reconstruí meus relacionamentos a partir de uma base que era minha, não herdada.
              </p>
              <p
                className="text-base leading-relaxed font-light mb-10"
                style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.8 }}
              >
                Esse processo me mostrou algo que nenhum livro poderia ensinar: a diferença entre saber que precisa mudar e realmente mudar. E foi isso que me levou à clínica.
              </p>
            </FadeIn>

            {/* HOJE */}
            <FadeIn delay={0.3}>
              <p
                className="text-base leading-relaxed font-light mb-10"
                style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.8 }}
              >
                Hoje atendo individualmente, casais e pais com a Tríade: Escuta Psicanalítica, Visão Sistêmica e Filosofia Transpessoal. Cada paciente é um percurso singular. Não uso protocolos prontos. Não aplico fórmulas. Meu trabalho é ser o farol: fornecer a luz e a segurança para que você navegue em águas profundas.
              </p>
            </FadeIn>

            {/* Credenciais */}
            <FadeIn delay={0.35}>
              <div
                className="flex flex-wrap gap-4 mb-10"
              >
                {['Psicanalista Clínica', 'Terapeuta Transpessoal e Sistêmica', 'Atendimento Online'].map((cred, i) => (
                  <span
                    key={i}
                    className="text-[10px] uppercase tracking-[0.2em] font-light px-4 py-2"
                    style={{
                      border: '1px solid rgba(21, 45, 72, 0.15)',
                      color: 'var(--color-text)',
                      opacity: 0.6,
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* Blockquote */}
            <FadeIn delay={0.4}>
              <blockquote
                className="pl-6 my-10"
                style={{ borderLeft: '2px solid var(--color-secondary)' }}
              >
                <p
                  className="text-lg md:text-xl leading-relaxed font-light italic"
                  style={{
                    fontFamily: 'var(--font-sub)',
                    color: 'var(--color-text)',
                    opacity: 0.8,
                  }}
                >
                  Eu não aprendi sobre travessias nos livros. Eu atravessei o mar. E hoje, sustento esse percurso para quem está pronto para recuperar o leme da própria história.
                </p>
              </blockquote>
            </FadeIn>

            {/* Transição */}
            <FadeIn delay={0.45}>
              <p
                className="text-base font-light italic mt-8"
                style={{
                  fontFamily: 'var(--font-sub)',
                  color: 'var(--color-text)',
                  opacity: 0.6,
                }}
              >
                Se o que você leu até aqui faz sentido, entenda como funciona o processo na prática.
              </p>
              <div className="mt-8">
                <button
                  onClick={() => scrollToSection('how')}
                  className="btn-shimmer-light"
                >
                  Ver o processo
                </button>
              </div>
            </FadeIn>
          </div>

          {/* ── Coluna da Foto (aparece DEPOIS no mobile) ── */}
          <div className="w-full lg:w-2/5 order-2 lg:sticky lg:top-32">
            <FadeIn delay={0.3} direction="left">
              <div className="relative">
                <div
                  className="relative aspect-[3/4] overflow-hidden ml-4 max-w-[400px]"
                  style={{
                    borderRadius: '16px 4px 16px 4px',
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)',
                  }}
                >
                  <img
                    src="/sobre.jpg"
                    alt="Aline Roda: Terapeuta"
                    className="w-full h-full object-cover object-center"
                    style={{ filter: 'grayscale(10%) contrast(1.05) sepia(5%)' }}
                  />
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}
