// DECISÃO CRIATIVA: FadeIn wrapper reutilizável com whileInView + once: true como padrão global.
// Composição vertical em ordem narrativa: Hook → Dor → Prova → Método → Autoridade → Processo → Social → FAQ → Footer.
// Unicidade: azul profundo naval com tipografia Cormorant Garamond editorial — estética de profundidade do mar.

import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import VideoSection from './components/VideoSection'
import Method from './components/Method'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <PainPoints />
      <VideoSection />
      <Method />
      <About />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
