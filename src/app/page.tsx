import HeroEffect from "@/components/about/heroEffect";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[850px] gap-20">
        <HeroEffect />
      </div>
    </main>
  );
}
