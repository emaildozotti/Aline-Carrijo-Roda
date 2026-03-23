// DECISÃO CRIATIVA: Fundo dark (#0D1F33). Carrossel 3 depoimentos curados, crossfade AnimatePresence.
// Aspa analítica gigante 120px em Cormorant Garamond opacity 8% como fundo.
// Border-left 3px secondary rosa queimado. NÃO marquee.

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import FadeIn from './FadeIn'

const testimonials = [
  {
    text: 'Cheguei no consultório com vergonha de dizer que estava repetindo tudo o que jurei que nunca faria. As mesmas brigas dos meus pais, a mesma impaciência, a mesma culpa. Aline não me deu fórmulas. Me ajudou a ver de onde aquilo vinha. Em quatro meses, pela primeira vez, me senti livre para reagir diferente.',
    name: 'Mariana T.',
    role: 'Livre de padrões em 4 meses',
  },
  {
    text: 'Minha esposa e eu estávamos no piloto automático da crise. Cada conversa virava briga. Cada briga repetia o mesmo roteiro. Com a Aline, entendemos que estávamos reproduzindo dinâmicas das nossas famílias. Quando isso ficou claro, tudo mudou. Não ficou perfeito, ficou real.',
    name: 'Carlos R.',
    role: 'Relacionamento transformado',
  },
  {
    text: 'Passei anos vivendo a vida que esperavam de mim. Carreira certa, casamento certo, tudo certo. Menos eu. Na terapia com Aline, reencontrei quem eu era antes de todas as expectativas. Hoje, minhas escolhas são minhas. E pela primeira vez, isso não me dá culpa.',
    name: 'Fernanda S.',
    role: 'Identidade reencontrada',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden section-padding-lg"
      style={{ backgroundColor: 'var(--color-dark)' }}
    >
      <div className="container-ultra relative z-10 flex flex-col items-center">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-16 md:mb-24">
          <FadeIn>
            <p
              className="eyebrow-ultra mb-6"
              style={{ color: 'var(--color-secondary)', opacity: 0.8 }}
            >
              Vozes Reais
            </p>
            <h2
              className="leading-[1.1] font-display"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: 'var(--color-off-white)',
                letterSpacing: '-0.02em',
              }}
            >
              O que dizem quem já{' '}
              <span className="italic font-light block mt-2" style={{ color: 'var(--color-secondary)', opacity: 0.9 }}>
                fez a travessia.
              </span>
            </h2>
          </FadeIn>
        </div>

        {/* Carrossel */}
        <FadeIn delay={0.2} className="w-full max-w-4xl mx-auto relative px-4 md:px-16">
          {/* Aspa analítica gigante */}
          <span
            className="absolute -top-10 md:-top-16 left-0 md:left-8 leading-none select-none font-display"
            style={{
              fontSize: '120px',
              color: 'var(--color-secondary)',
              opacity: 0.08,
            }}
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <div className="relative min-h-[320px] md:min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex flex-col justify-center items-center text-center"
              >
                {/* Border-left secondary no card */}
                <div
                  className="w-full pl-6 md:pl-10"
                  style={{ borderLeft: '3px solid var(--color-secondary)' }}
                >
                  <p
                    className="text-lg md:text-2xl leading-relaxed mb-10 font-light text-left"
                    style={{
                      fontFamily: 'var(--font-sub)',
                      color: 'var(--color-off-white)',
                      opacity: 0.95,
                    }}
                  >
                    {testimonials[currentIndex].text}
                  </p>
                </div>
                <footer className="flex flex-col gap-2 items-center mt-4">
                  <div
                    className="w-8 h-px mb-2"
                    style={{ backgroundColor: 'rgba(181, 84, 106, 0.4)' }}
                  />
                  <p
                    className="text-sm md:text-base uppercase tracking-widest font-medium"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      color: 'var(--color-secondary)',
                    }}
                  >
                    {testimonials[currentIndex].name}
                  </p>
                  <p
                    className="text-xs md:text-sm font-light tracking-wide"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      color: 'var(--color-off-white)',
                      opacity: 0.4,
                    }}
                  >
                    {testimonials[currentIndex].role}
                  </p>
                </footer>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-center gap-8 mt-16 md:mt-24 relative z-20">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-105"
              style={{ borderColor: 'rgba(181, 84, 106, 0.3)', color: 'var(--color-secondary)' }}
              aria-label="Depoimento Anterior"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${i === currentIndex ? 'scale-125' : 'opacity-30'}`}
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-105"
              style={{ borderColor: 'rgba(181, 84, 106, 0.3)', color: 'var(--color-secondary)' }}
              aria-label="Próximo Depoimento"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
