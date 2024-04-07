import Image from "next/image";
import background from "../../public/background.jpg"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={background} alt="bgimage" className="w-full h-full object-cover object-center opacity-25" />
    </main>
  );
}
