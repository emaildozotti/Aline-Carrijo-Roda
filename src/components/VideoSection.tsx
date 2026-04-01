// DECISÃO CRIATIVA: Fundo bg-warm para respiro após PainPoints dark.
// Container 9:16 vertical maxWidth 300px para YouTube embed.
// Texto pré/pós-vídeo em 1ª pessoa.

import FadeIn from './FadeIn'

const VIDEO_ID = '-ELt0O4p0to'

export default function VideoSection() {
  return (
    <section
      id="video"
      className="relative overflow-hidden section-padding"
      style={{ backgroundColor: 'var(--color-bg-warm)' }}
    >
      <div className="container-ultra">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">

          {/* Pré-vídeo */}
          <FadeIn>
            <p
              className="eyebrow-ultra mb-8"
              style={{ color: 'var(--color-text)', opacity: 0.5 }}
            >
              Em primeira pessoa
            </p>
            <p
              className="text-lg md:text-xl leading-relaxed font-light mb-16"
              style={{
                fontFamily: 'var(--font-sub)',
                color: 'var(--color-text)',
                opacity: 0.85,
              }}
            >
              Antes de qualquer técnica, eu acredito que a mudança começa quando alguém sustenta a sua dor sem julgamento. Neste vídeo, compartilho o que me levou a trabalhar com quem carrega padrões que não escolheu.
            </p>
          </FadeIn>

          {/* Container de vídeo 9:16 */}
          <FadeIn delay={0.2}>
            <div
              className="relative mx-auto overflow-hidden rounded-sm"
              style={{
                maxWidth: '300px',
                width: '100%',
                aspectRatio: '9/16',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
              }}
            >
              {VIDEO_ID && VIDEO_ID !== 'YOUTUBE_VIDEO_ID' ? (
                <iframe
                  src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                  title="Vídeo Aline Roda"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  <div className="text-center px-8">
                    <div
                      className="w-16 h-16 rounded-full border-2 flex items-center justify-center mx-auto mb-6"
                      style={{ borderColor: 'rgba(181, 84, 106, 0.4)' }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8 5v14l11-7L8 5z" fill="var(--color-secondary)" />
                      </svg>
                    </div>
                    <p
                      className="text-xs uppercase tracking-[0.2em] font-light"
                      style={{ color: 'var(--color-off-white)', opacity: 0.6 }}
                    >
                      Vídeo em breve
                    </p>
                  </div>
                </div>
              )}
            </div>
          </FadeIn>

          {/* Pós-vídeo */}
          <FadeIn delay={0.3}>
            <p
              className="text-base md:text-lg leading-relaxed font-light mt-16 max-w-xl"
              style={{
                fontFamily: 'var(--font-sub)',
                color: 'var(--color-text)',
                opacity: 0.7,
              }}
            >
              O que você acabou de ouvir não é teoria. É o que vivi entre 2016 e 2019, quando rompi com meus próprios ciclos de mágoa e repetição familiar. Hoje, sustento no consultório o mesmo processo que atravessei na minha própria pele.
            </p>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
