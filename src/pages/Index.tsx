import { LangProvider } from "@/context/LangContext";
import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <LangProvider>
      <div className="min-h-screen bg-background">
        <FloatingNav />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <Footer />
      </div>
    </LangProvider>
  );
};

export default Index;
