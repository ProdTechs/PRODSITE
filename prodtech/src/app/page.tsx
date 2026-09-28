import { Hero } from "@/components/home/Hero";
import { Manifesto } from "@/components/home/Manifesto";
import { Services } from "@/components/home/Services";
import { SmartCatalog } from "@/components/home/SmartCatalog";
import { Process } from "@/components/home/Process";
import { Cases } from "@/components/home/Cases";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Services />
      <SmartCatalog />
      <Process />
      <Cases />
      <FinalCta />
    </>
  );
}
