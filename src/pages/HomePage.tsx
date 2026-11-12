import { AboutSection } from '../components/AboutSection'
import { ContactCTA } from '../components/ContactCTA'
import { HeroSection } from '../components/HeroSection'
import { ProcessSection } from '../components/ProcessSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { ServicesSection } from '../components/ServicesSection'
import { StatsSection } from '../components/StatsSection'
import { TestimonialsSection } from '../components/TestimonialsSection'
import { WhyChooseUs } from '../components/WhyChooseUs'

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <ProjectsSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactCTA />
    </main>
  )
}
