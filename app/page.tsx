import { Hero } from "@/components/hero";
import { QuiSommesNous, Sample } from "@/components/sample";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Sample />
      <QuiSommesNous />
    </div>
  );
}
