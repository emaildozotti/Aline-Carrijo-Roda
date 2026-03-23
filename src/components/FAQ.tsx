// DECISÃO CRIATIVA: Fundo bg-warm para respiro após Testimonials dark.
// Accordion com AnimatePresence (NÃO max-height CSS). Seta rotativa (+→×).
// ZERO boxes/cards coloridos. 6 perguntas. CTA final hesitante_sensivel com 3 frases de permissão.

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import FadeIn from './FadeIn'

const WHATSAPP_URL = 'https://wa.me/5521994168812?text=Olá%20Aline%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20iniciar%20minha%20travessia.'

const faqs = [
  {
    q: 'Para quem é esse atendimento?',
    a: 'Para adultos e casais que sentem que padrões familiares controlam suas escolhas, seus relacionamentos e sua identidade. Pessoas que já tentaram outras abordagens e querem ir à raiz. Pais que percebem que estão reproduzindo dinâmicas que não desejam. Não atendo casos de ideação suicida ativa ou psicose (nestes casos, encaminho para rede especializada).',
  },
  {
    q: 'Qual o investimento por sessão?',
    a: 'Sei que é uma decisão financeira real. O valor é conversado na primeira conversa, levando em conta o formato e a frequência que fazem sentido para o seu momento. O que posso dizer: o custo de permanecer preso em padrões que não são seus é muito maior do que o investimento em liberdade emocional.',
  },
  {
    q: 'Como funciona o atendimento online?',
    a: 'As sessões acontecem por videochamada em plataforma segura, com total privacidade e sigilo. Você precisa de um ambiente tranquilo, conexão estável e disponibilidade para estar presente. A qualidade da escuta é a mesma do presencial.',
  },
  {
    q: 'Tenho medo de mexer no passado e piorar.',
    a: 'A dor já existe no presente. Ela aparece nos relacionamentos que não funcionam, na irritação crônica, na culpa que não passa. Mexer no passado não cria dor nova: ilumina a que já opera em silêncio. E iluminar é o primeiro passo para parar de repeti-la.',
  },
  {
    q: 'Nunca fiz terapia. Por onde começo?',
    a: 'Pelo começo: uma conversa. Na primeira sessão, não existe roteiro nem expectativa. Você não precisa chegar com uma história organizada ou saber nomear o que sente. O espaço terapêutico acolhe inclusive quem ainda não sabe por onde começar. Se algo nesta página ecoou, esse já é o começo.',
  },
  {
    q: 'A terapia demora muito para funcionar?',
    a: 'Cada percurso é singular. Não existe fórmula de "X sessões para resultado Y". O que posso dizer é que a maioria das pessoas sente diferença já nas primeiras sessões: não porque o problema desapareceu, mas porque encontraram um espaço onde a verdade pode ser dita. A transformação profunda vem com o tempo e com o compromisso com o próprio processo.',
  },
]

function FAQItem({ faq, isOpen, onToggle }: {
  faq: { q: string; a: string }
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className="border-b"
      style={{ borderColor: 'rgba(21, 45, 72, 0.1)' }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 md:py-8 text-left cursor-pointer gap-6 group"
        aria-expanded={isOpen}
      >
        <span
          className="text-lg md:text-xl font-light leading-snug group-hover:opacity-100 transition-opacity"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--color-text)',
            opacity: isOpen ? 1 : 0.85,
          }}
        >
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0"
          style={{ color: 'var(--color-secondary)' }}
          aria-hidden="true"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              className="pb-8 pr-12 text-base leading-relaxed font-light"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-text)',
                opacity: 0.7,
              }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function handleToggle(i: number) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section
      id="faq"
      className="relative overflow-hidden section-padding-lg"
      style={{ backgroundColor: 'var(--color-bg-warm)' }}
    >
      <div className="container-ultra">

        {/* Layout Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 mb-32">

          {/* Coluna Esquerda: Título */}
          <div className="lg:sticky lg:top-32 h-fit">
            <FadeIn>
              <p
                className="eyebrow-ultra mb-6"
                style={{ color: 'var(--color-text)', opacity: 0.5 }}
              >
                Esclarecimentos
              </p>
              <h2
                className="leading-[1.1] font-display"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  color: 'var(--color-text)',
                  letterSpacing: '-0.02em',
                }}
              >
                O que você{' '}
                <span className="italic font-light block mt-2" style={{ color: 'var(--color-secondary)' }}>
                  precisa saber.
                </span>
              </h2>
            </FadeIn>
          </div>

          {/* Coluna Direita: Acordeões */}
          <div className="border-t" style={{ borderColor: 'rgba(21, 45, 72, 0.1)' }}>
            <FadeIn delay={0.1}>
              <div>
                {faqs.map((faq, i) => (
                  <FAQItem
                    key={i}
                    faq={faq}
                    isOpen={openIndex === i}
                    onToggle={() => handleToggle(i)}
                  />
                ))}
              </div>
            </FadeIn>
          </div>

        </div>

        {/* Linha separadora */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(21,45,72,0.1)] to-transparent mb-24 md:mb-32" />

        {/* CTA Final — hesitante_sensivel: 3 frases de permissão */}
        <FadeIn delay={0.2} direction="up">
          <div className="text-center max-w-3xl mx-auto">
            <h3
              className="leading-[1.1] mb-10 font-display"
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
                color: 'var(--color-text)',
              }}
            >
              O leme sempre foi seu.{' '}
              <span className="italic block mt-2" style={{ color: 'var(--color-secondary)' }}>
                Agora é hora de pegá-lo.
              </span>
            </h3>

            <div className="max-w-xl mx-auto mb-12">
              <p
                className="text-base leading-relaxed font-light mb-2"
                style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.7 }}
              >
                Você não precisa ter certeza para começar.
              </p>
              <p
                className="text-base leading-relaxed font-light mb-2"
                style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.7 }}
              >
                Você não precisa entender tudo o que sente.
              </p>
              <p
                className="text-base leading-relaxed font-light"
                style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)', opacity: 0.7 }}
              >
                Você só precisa de um espaço seguro para começar a ouvir o que já sabe.
              </p>
            </div>

            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-shimmer inline-block"
            >
              Recupere o leme da sua história
            </motion.a>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
