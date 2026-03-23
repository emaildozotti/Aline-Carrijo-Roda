// DECISÃO CRIATIVA: Fundo escuro (#0D1F33) quebrando o padrão — cards com número decorativo
// grande em Cormorant Garamond 7rem, opacity 6%. Abertura Opção C (1ª pessoa, história pessoal).
// Texto off-white sobre dark para contraste dramático. Metáforas de herança sistêmica.

import FadeIn from './FadeIn'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const pains = [
  {
    num: '01',
    text: 'Existe uma voz que repete o que seus pais diziam. Sobre dinheiro, sobre amor, sobre o que você merece. Ela opera nas suas reações, nos seus medos, nas escolhas que parecem suas, mas não são.',
    sub: 'Determinações inconscientes: o roteiro herdado que ninguém te mostrou.',
  },
  {
    num: '02',
    text: 'O relacionamento começa. A entrega acontece. E no mesmo ponto de sempre, tudo desanda. A desconfiança, o sufocamento, a sensação de se perder dentro do outro.',
    sub: 'Padrão que se repete porque a raiz nunca foi tocada.',
  },
  {
    num: '03',
    text: 'A culpa por querer viver diferente do que te ensinaram. Por não seguir a religião, a carreira ou o modelo de família que esperavam de você. Querer algo próprio e sentir que está traindo quem te criou.',
    sub: 'Lealdade invisível que paralisa sem que você perceba.',
  },
  {
    num: '04',
    text: 'A sensação de que a vida está travada por algo que não consegue nomear. Um peso que vem de longe. Uma fadiga que não é do corpo: é de carregar decisões que nunca foram realmente suas.',
    sub: 'O cansaço de quem pensa demais e vive de menos.',
  },
]

export default function PainPoints() {
  return (
    <section
      id="pain"
      className="relative overflow-hidden section-padding-lg"
      style={{ backgroundColor: 'var(--color-dark)' }}
    >
      <div className="relative z-10 container-ultra">

        {/* Abertura Opção C — 1ª pessoa */}
        <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
          <FadeIn>
            <p
              className="eyebrow-ultra mb-8"
              style={{ color: 'var(--color-secondary)', opacity: 0.8 }}
            >
              Reconhecimento
            </p>
            <p
              className="text-lg md:text-xl leading-relaxed font-light mb-6"
              style={{ fontFamily: 'var(--font-sub)', color: 'var(--color-off-white)', opacity: 0.9 }}
            >
              Eu sei como é sentir que algo invisível controla suas escolhas.
            </p>
            <p
              className="text-base leading-relaxed font-light"
              style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-off-white)', opacity: 0.6 }}
            >
              Entre 2016 e 2019, vivi presa nos mesmos ciclos de mágoa, culpa e repetição que via na minha família. A vida funcionava por fora. Por dentro, eu sabia que estava repetindo um roteiro que não era meu.
            </p>
          </FadeIn>
        </div>

        {/* Cards de Dor — Grid com número decorativo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pains.map((pain, i) => (
            <FadeIn key={i} delay={i * 0.15} direction="up">
              <div
                className="relative p-10 h-full flex flex-col justify-between transition-colors duration-500"
                style={{
                  border: '1px solid rgba(248, 244, 238, 0.08)',
                  backgroundColor: 'rgba(248, 244, 238, 0.03)',
                }}
              >
                {/* Número decorativo grande */}
                <span
                  className="font-display absolute top-6 right-8 select-none"
                  style={{
                    fontSize: '7rem',
                    lineHeight: 1,
                    color: 'var(--color-secondary)',
                    opacity: 0.06,
                  }}
                  aria-hidden="true"
                >
                  {pain.num}
                </span>

                <div className="relative z-10">
                  <h3
                    className="text-lg md:text-xl mb-4 leading-snug font-light"
                    style={{ fontFamily: 'var(--font-sub)', color: 'var(--color-off-white)' }}
                  >
                    {pain.text}
                  </h3>
                  <p
                    className="text-sm font-light leading-relaxed"
                    style={{ color: 'var(--color-off-white)', opacity: 0.5 }}
                  >
                    {pain.sub}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Transição cliffhanger */}
        <FadeIn delay={0.4} className="mt-16 md:mt-24">
          <div className="max-w-2xl mx-auto text-center">
            <div
              className="w-12 h-px mx-auto mb-8"
              style={{ backgroundColor: 'rgba(181, 84, 106, 0.3)' }}
              aria-hidden="true"
            />
            <p
              className="text-lg md:text-xl leading-relaxed font-light italic"
              style={{
                fontFamily: 'var(--font-sub)',
                color: 'var(--color-off-white)',
                opacity: 0.8,
              }}
            >
              Se algo nestas palavras ecoou, o que vem a seguir foi feito para você.
            </p>
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => scrollToSection('video')}
                className="btn-shimmer"
              >
                Continuar
              </button>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
