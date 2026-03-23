// DECISÃO CRIATIVA: Fundo dark (#0D1F33). Nome em Cormorant Garamond italic como assinatura editorial.
// CTA WhatsApp com shimmer e mensagem personalizada. py-16 mínimo.

import { motion } from 'motion/react'
import FadeIn from './FadeIn'

const WHATSAPP_URL = 'https://wa.me/5521994168812?text=Olá%20Aline%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20iniciar%20minha%20travessia.'
const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden py-16 md:py-24"
      style={{ backgroundColor: 'var(--color-dark)' }}
    >
      <div className="container-ultra relative z-10 flex flex-col items-center gap-12 text-center">

        <FadeIn>
          <div className="flex flex-col items-center gap-4">
            <h2
              className="leading-none font-display italic"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--color-off-white)',
                letterSpacing: '-0.02em',
              }}
            >
              Aline Roda
            </h2>
            <p
              className="text-xs uppercase tracking-[0.3em]"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-secondary)',
                opacity: 0.7,
              }}
            >
              Psicanalista Clínica · Terapeuta Transpessoal e Sistêmica
            </p>
          </div>
        </FadeIn>

        {/* Separator */}
        <div
          className="w-12 h-px"
          style={{ backgroundColor: 'rgba(181, 84, 106, 0.3)' }}
          aria-hidden="true"
        />

        {/* CTA WhatsApp */}
        <FadeIn delay={0.1}>
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="btn-shimmer"
          >
            Agende sua sessão pelo WhatsApp
          </motion.a>
        </FadeIn>

        {/* Footer info */}
        <FadeIn delay={0.2}>
          <div className="flex flex-col items-center gap-4">
            <p
              className="text-sm font-light tracking-wide"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-off-white)',
                opacity: 0.6,
              }}
            >
              Atendimento online.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mt-6">
              <p
                className="text-[10px] sm:text-[11px] uppercase tracking-widest"
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--color-off-white)',
                  opacity: 0.3,
                }}
              >
                &copy; {currentYear} Aline Roda &middot; Todos os direitos reservados
              </p>
            </div>
          </div>
        </FadeIn>

      </div>
    </footer>
  )
}
