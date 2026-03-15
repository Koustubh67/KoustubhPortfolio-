import { useState } from "react";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import FooterMain from "./components/footer/FooterMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import SubHeroMain from "./components/subHeroSection/SubHeroMain";
import TestimonialsMain from "./components/testimonialsSection/TestimonialsMain";
import AchievementsMain from "./components/achievementsSection/AchievementsMain";
import BeyondMain from "./components/beyondSection/BeyondMain";
import SplashScreen from "./components/splashScreen/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <main className="font-body text-white relative overflow-hidden">
        <NavbarMain />
        <HeroMain />
        <HeroGradient />
        <SubHeroMain />
        <AboutMeMain />
        <ProjectsMain />
        <AchievementsMain />
        <SkillsMain />
        <SubSkills />
        <ExperienceMain />
        <BeyondMain />
        <TestimonialsMain />
        <ContactMeMain />
        <FooterMain />
      </main>
    </>
  );
}

export default App;
