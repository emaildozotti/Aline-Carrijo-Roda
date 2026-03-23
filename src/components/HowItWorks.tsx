// DECISÃO CRIATIVA: Fundo bg-light. 3 passos do processo TERAPÊUTICO (não do funil).
// Numeração decorativa Cormorant Garamond. Remove Ansiedade integrado ao final.

import FadeIn from './FadeIn'

const steps = [
  {
    num: '01',
    title: 'A fala encontra um espaço seguro',
    text: 'Na primeira sessão, não existe roteiro. Você fala. Eu escuto. Sem julgamento, sem pressa, sem expectativa de que tudo faça sentido logo de cara. O espaço terapêutico é onde o que ficou silenciado pode finalmente ser dito. Não é sobre contar a história certa. É sobre permitir que a verdade apareça.',
  },
  {
    num: '02',
    title: 'Os padrões são iluminados',
    text: 'Com o tempo, a escuta começa a revelar o que opera em silêncio: as determinações inconscientes herdadas, os padrões sistêmicos que atravessam gerações, as lealdades invisíveis que travam suas escolhas. Minha intervenção pontua esses momentos. Não para julgar. Para abrir a possibilidade de uma nova posição: de quem repete para quem decide.',
  },
  {
    num: '03',
    title: 'O leme volta para as suas mãos',
    text: 'A transformação não é um evento. É um processo. Aos poucos, a confusão dá lugar à clareza. A culpa dá lugar à consciência. As escolhas deixam de ser automáticas. Você não precisa mais do farol externo. Porque a luz agora é sua.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="relative overflow-hidden section-padding-lg"
      style={{ backgroundColor: 'var(--color-bg-light)' }}
    >
      <div className="container-ultra">

        {/* Header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <FadeIn>
            <p
              className="eyebrow-ultra mb-8"
              style={{ color: 'var(--color-text)', opacity: 0.5 }}
            >
              A Travessia
            </p>
            <h2
              className="leading-[1.1] font-display"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: 'var(--color-text)',
                letterSpacing: '-0.02em',
              }}
            >
              O percurso{' '}
              <span className="italic font-light" style={{ color: 'var(--color-secondary)' }}>
                da consciência.
              </span>
            </h2>
          </FadeIn>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20 mb-20 md:mb-28">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="relative">
                {/* Número decorativo */}
                <span
                  className="font-display block mb-6 select-none"
                  style={{
                    fontSize: '5rem',
                    lineHeight: 1,
                    color: 'var(--color-secondary)',
                    opacity: 0.15,
                  }}
                  aria-hidden="true"
                >
                  {step.num}
                </span>
                <h3
                  className="text-xl md:text-2xl leading-tight font-display mb-6"
                  style={{ color: 'var(--color-text)' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-base leading-relaxed font-light"
                  style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.7 }}
                >
                  {step.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Remove Ansiedade */}
        <FadeIn delay={0.1}>
          <div
            className="max-w-2xl mx-auto text-center p-10"
            style={{
              border: '1px solid rgba(21, 45, 72, 0.1)',
              backgroundColor: 'rgba(181, 84, 106, 0.03)',
            }}
          >
            <p
              className="text-base leading-relaxed font-light"
              style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.7 }}
            >
              Não existe compromisso mínimo de sessões. Não existe formato rígido. A frequência e o ritmo são definidos juntos, respeitando o que faz sentido para o seu momento. Se após a primeira sessão você sentir que não é o caminho, tudo bem. Sem pressão, sem cobrança.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
