import { OnePageNavigation } from "@/components/one-page-navigation";
import { EnhancedHero } from "@/components/enhanced-hero";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="relative">
      <OnePageNavigation />
      <EnhancedHero />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
