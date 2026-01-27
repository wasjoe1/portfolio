import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { TechArsenalSection } from "@/components/sections/tech-arsenal";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { EducationSection } from "@/components/sections/education";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <TechArsenalSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <Footer />
      </main>
    </>
  );
}
