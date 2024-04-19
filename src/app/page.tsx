import HeroEffect from "@/components/about/heroEffect";
import Skills from "@/components/skills/skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <HeroEffect />
        <Skills />
      </div>
    </main>
  );
}
