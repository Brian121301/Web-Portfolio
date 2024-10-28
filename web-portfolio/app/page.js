import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0c1221]">
    <container className="container mt-24 mx-auto px-8 py-8">
      <HeroSection />
    </container>

    </main>
  );
}
