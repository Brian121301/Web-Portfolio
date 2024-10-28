import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0c1221]">
    <NavBar />
    <container className="container mt-24 mx-auto px-8 py-8">
      <HeroSection />
      <AboutMe />
      <ProjectsSection />
      <EmailSection />
    </container>
    <Footer />
    </main>
  );
}
