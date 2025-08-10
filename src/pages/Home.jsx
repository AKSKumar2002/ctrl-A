import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const loadingDuration = 5000; // 5 seconds
    const fadeDuration = 1500; // 1.5s fade

    const timer1 = setTimeout(() => {
      setIsFadingOut(true); // start fade
    }, loadingDuration);

    const timer2 = setTimeout(() => {
      setIsLoading(false); // fully hide loader
    }, loadingDuration + fadeDuration);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen isFadingOut={isFadingOut} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
