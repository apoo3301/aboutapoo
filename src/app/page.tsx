import HeroEffect from "@/components/about/heroEffect";
import Encryption from "@/components/encryption/encryption";
import Projects from "@/components/project/project";
import Skills from "@/components/skills/skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <HeroEffect />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
