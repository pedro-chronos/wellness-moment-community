import { AppSection } from './components/AppSection';
import { AudienceSection } from './components/AudienceSection';
import { BelongingSection } from './components/BelongingSection';
import { BenefitsSection } from './components/BenefitsSection';
import { BrandPartnerSection } from './components/BrandPartnerSection';
import { ConceptSection } from './components/ConceptSection';
import { EcosystemSection } from './components/EcosystemSection';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { MonthlyExperience } from './components/MonthlyExperience';
import { StickyCTA } from './components/StickyCTA';
import { SubscriptionSection } from './components/SubscriptionSection';
import { useInView } from './hooks/useInView';
import { useScrolledPast } from './hooks/useScrolledPast';

/*
 * Ordem da página — desejo, compreensão, objeção, decisão.
 *
 * 01 hero            promessa e primeiro CTA
 * 02 conceito        o que é o Wellness Moment, para quem chega sem saber
 * 03 benefícios      o que se recebe · segundo CTA
 * 04 ecossistema     por que não é só um grupo · elemento-assinatura
 * 05 aplicativo      a ferramenta
 * 06 pertencimento   a objeção emocional
 * 07 recorrência     por que continuar no segundo e no terceiro mês
 * 08 para quem é     reconhecimento imediato antes da oferta
 * 09 assinatura      conversão primária · terceiro CTA
 * 10 como funciona   o que acontece depois de pagar
 * 11 marcas          conversão secundária, subordinada
 * 12 faq             últimas objeções
 * 13 fechamento      quarto e último CTA
 */
export default function App() {
  // O CTA fixo do mobile só aparece quando o hero sai da viewport, e a
  // segunda condição impede que ele pisque durante o carregamento.
  const { ref: heroRef, inView: heroVisible } = useInView<HTMLDivElement>({
    once: false,
    rootMargin: '0px',
  });
  const scrolled = useScrolledPast(320);

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-wm focus:bg-wm-primary focus:px-5 focus:py-3 focus:font-sans focus:text-label focus:font-semibold focus:uppercase focus:text-wm-invert"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <div ref={heroRef}>
          <Hero />
        </div>

        <ConceptSection />
        <BenefitsSection />
        <EcosystemSection />
        <AppSection />
        <BelongingSection />
        <MonthlyExperience />
        <AudienceSection />
        <SubscriptionSection />
        <HowItWorks />
        <BrandPartnerSection />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />

      <StickyCTA visible={scrolled && !heroVisible} />
    </>
  );
}
