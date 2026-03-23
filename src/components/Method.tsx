// DECISÃO CRIATIVA: Fundo bg-light para clareza do método. 3 pilares com secondary rosa queimado nos números.
// Conceito-mecanismo: "Tríade: Escuta + Visão Sistêmica + Transpessoal". Texto em 1ª pessoa.

import FadeIn from './FadeIn'

const pillars = [
  {
    num: '01',
    title: 'Escuta Psicanalítica',
    text: 'Cada sessão é um espaço de fala sem roteiro. Eu escuto o que está por trás das palavras: onde o discurso falha, onde o silêncio aparece, onde a repetição aponta para determinações inconscientes que operam sem o seu consentimento. A escuta localiza o que precisa ser nomeado.',
  },
  {
    num: '02',
    title: 'Visão Sistêmica',
    text: 'Os padrões que você repete raramente começaram em você. Eles atravessam gerações: na forma como seus pais lidaram com dinheiro, com afeto, com conflito. A visão sistêmica mapeia essas heranças e revela os fios invisíveis que conectam a sua dor atual às histórias da sua família.',
  },
  {
    num: '03',
    title: 'Filosofia Transpessoal',
    text: 'A consciência que liberta vai além da compreensão racional. A filosofia transpessoal abre espaço para a dimensão de sentido: por que essa dor existe na sua história? O que ela pede de você? Não é esoterismo. É profundidade filosófica a serviço da autonomia.',
  },
]

export default function Method() {
  return (
    <section
      id="method"
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
              A Tríade
            </p>
            <h2
              className="leading-[1.1] font-display mb-8"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: 'var(--color-text)',
                letterSpacing: '-0.02em',
              }}
            >
              Três lentes para enxergar o que a dor{' '}
              <span className="italic font-light" style={{ color: 'var(--color-secondary)' }}>
                esconde.
              </span>
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed font-light max-w-2xl"
              style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.7 }}
            >
              A maioria das abordagens terapêuticas trata o sintoma. Oferece técnicas para aliviar o desconforto. A Tríade faz o caminho inverso: ilumina a raiz para que o padrão pare de se repetir.
            </p>
          </FadeIn>
        </div>

        {/* Pilares */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-20 md:mb-28">
          {pillars.map((pillar, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="flex flex-col gap-6">
                <span
                  className="font-display text-5xl"
                  style={{ color: 'var(--color-secondary)', opacity: 0.3 }}
                >
                  {pillar.num}
                </span>
                <h3
                  className="text-xl md:text-2xl leading-tight font-display"
                  style={{ color: 'var(--color-text)' }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-base leading-relaxed font-light"
                  style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.7 }}
                >
                  {pillar.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Não Prometo */}
        <FadeIn>
          <div
            className="max-w-3xl mx-auto p-10 md:p-14"
            style={{
              borderLeft: '3px solid var(--color-secondary)',
              backgroundColor: 'rgba(181, 84, 106, 0.04)',
            }}
          >
            <p
              className="text-base md:text-lg leading-relaxed font-light italic"
              style={{
                fontFamily: 'var(--font-sub)',
                color: 'var(--color-text)',
                opacity: 0.85,
              }}
            >
              Não prometo milagres em X sessões. Não prometo felicidade constante. Não prometo que será fácil. Prometo uma escuta que sustenta, uma presença que não recua e um espaço onde a sua verdade é tratada com a dignidade que merece.
            </p>
          </div>
        </FadeIn>

        {/* Transição */}
        <FadeIn delay={0.2}>
          <p
            className="text-center text-lg font-light italic mt-16 md:mt-24"
            style={{
              fontFamily: 'var(--font-sub)',
              color: 'var(--color-text)',
              opacity: 0.6,
            }}
          >
            Mas quem é a pessoa por trás dessa escuta? E por que ela escolheu trabalhar justamente com quem carrega padrões herdados?
          </p>
        </FadeIn>

      </div>
    </section>
  )
}
