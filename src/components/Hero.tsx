// DECISÃO CRIATIVA: Split-Layout Editorial (Opção A). Azul profundo naval (#1B3A5C) com aurora
// rosa queimado + azul. Tipografia Cormorant Garamond editorial. Foto 3:4 com border-radius assimétrico.
// Unicidade: profundidade do mar, estética de travessia — não bege-terapeuta genérica.

import { motion } from 'motion/react'
import FadeIn from './FadeIn'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-primary section-padding"
    >
      {/* ── Header desktop sticky ── */}
      <header className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between container-ultra py-6">
        <span
          className="font-display text-lg tracking-wide italic"
          style={{ color: 'var(--color-off-white)', opacity: 0.9 }}
        >
          Aline Roda
        </span>
        <button
          onClick={() => scrollToSection('faq')}
          className="text-[10px] uppercase tracking-[0.25em] font-light transition-opacity hover:opacity-100"
          style={{ color: 'var(--color-secondary)', opacity: 0.7, fontFamily: 'var(--font-sans)' }}
        >
          Agendar sessão
        </button>
      </header>

      {/* ── Aurora blobs ── */}
      <div
        className="blur-orb w-[600px] h-[600px] -top-32 -left-40"
        style={{
          backgroundColor: 'rgba(181, 84, 106, 0.15)',
          animation: 'aurora-1 18s ease-in-out infinite',
        }}
        aria-hidden="true"
      />
      <div
        className="blur-orb w-[500px] h-[500px] top-1/2 -right-32"
        style={{
          backgroundColor: 'rgba(27, 58, 92, 0.4)',
          animation: 'aurora-2 22s ease-in-out infinite',
          animationDelay: '2s',
        }}
        aria-hidden="true"
      />
      <div
        className="blur-orb w-[400px] h-[400px] -bottom-24 left-1/3"
        style={{
          backgroundColor: 'rgba(240, 230, 211, 0.08)',
          animation: 'aurora-3 26s ease-in-out infinite',
          animationDelay: '4s',
        }}
        aria-hidden="true"
      />

      {/* ── Conteúdo Split Layout ── */}
      <div className="relative z-10 container-ultra mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20 mt-12 lg:mt-0">

        {/* ── Coluna de Texto ── */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-8 md:gap-10">

          {/* Callout */}
          <FadeIn direction="down" delay={0}>
            <p
              className="eyebrow-ultra"
              style={{ color: 'var(--color-secondary)' }}
            >
              Autonomia Emocional
            </p>
          </FadeIn>

          {/* H1 */}
          <FadeIn delay={0.15}>
            <h1
              className="font-display leading-[1.1] max-w-2xl tracking-tight"
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
                color: 'var(--color-off-white)',
              }}
            >
              Herdou a dor.{' '}
              <span
                className="italic font-light block mt-2"
                style={{ color: 'var(--color-secondary)' }}
              >
                Não precisa herdar o destino.
              </span>
            </h1>
          </FadeIn>

          {/* Subtítulo */}
          <FadeIn delay={0.30}>
            <p
              className="max-w-xl text-lg md:text-xl leading-relaxed font-light"
              style={{
                fontFamily: 'var(--font-sub)',
                color: 'var(--color-off-white)',
                opacity: 0.7,
              }}
            >
              Psicanálise, visão sistêmica e filosofia transpessoal para quem quer parar de repetir padrões que não escolheu.
            </p>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.45}>
            <motion.button
              onClick={() => scrollToSection('pain')}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-shimmer mt-4 lg:mt-8"
            >
              Recupere o leme da sua história
            </motion.button>
          </FadeIn>
        </div>

        {/* ── Coluna da Imagem Editorial ── */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
          <FadeIn delay={0.4} direction="left" className="w-full max-w-[280px] md:max-w-sm lg:max-w-[420px] relative">

            <div
              className="relative aspect-[3/4] overflow-hidden ml-4"
              style={{
                borderRadius: '16px 4px 16px 4px',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
              }}
            >
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 pointer-events-none" />

              <img
                src="/hero.jpg"
                alt="Aline Roda: Psicanalista Clínica, Terapeuta Transpessoal e Sistêmica"
                className="w-full h-full object-cover object-center transition-transform duration-[2s] ease-out hover:scale-105"
                style={{ filter: 'grayscale(10%) contrast(1.05) sepia(5%)' }}
              />

              <div
                className="absolute bottom-0 left-0 right-0 h-1/2 z-20 pointer-events-none"
                style={{ background: 'linear-gradient(to top, var(--color-primary) 0%, transparent 100%)' }}
              />

              <div className="absolute inset-0 border border-white/10 z-30 pointer-events-none" style={{ borderRadius: '16px 4px 16px 4px' }} />
            </div>
          </FadeIn>
        </div>

      </div>

      {/* Indicador de scroll — Oculto no mobile */}
      <FadeIn delay={1.4} className="hidden md:flex absolute bottom-12 flex-col items-center gap-4 cursor-pointer z-20">
        <div onClick={() => scrollToSection('pain')} className="flex flex-col items-center gap-4 hover:opacity-70 transition-opacity">
          <span
            className="text-[10px] uppercase tracking-[0.2em] opacity-50"
            style={{ color: 'var(--color-secondary)' }}
          >
            Descubra
          </span>
          <div className="line-separator h-12" />
        </div>
      </FadeIn>

      {/* Gradiente de base */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, var(--color-primary), transparent)' }}
        aria-hidden="true"
      />
    </section>
  )
}
