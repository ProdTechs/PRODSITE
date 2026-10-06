import type { Metadata } from "next";
import { FAQ_ITEMS, SITE } from "@/lib/content";
import { faqSchema, servicesSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/ui/JsonLd";
import { Hero } from "@/components/home/Hero";
import { Manifesto } from "@/components/home/Manifesto";
import { Services } from "@/components/home/Services";
// Seção "Solução em destaque" desativada — para voltar, descomente este import e o <SmartCatalog /> abaixo.
// import { SmartCatalog } from "@/components/home/SmartCatalog";
import { Process } from "@/components/home/Process";
import { References } from "@/components/home/References";
import { Faq } from "@/components/home/Faq";
import { Contact } from "@/components/home/Contact";

export const metadata: Metadata = {
  alternates: { canonical: SITE.url },
  openGraph: { url: SITE.url, images: ["/opengraph-image"] },
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(FAQ_ITEMS)} />
      <JsonLd data={servicesSchema()} />
      <Hero />
      <Manifesto />
      <Services />
      {/* <SmartCatalog /> */}
      <Process />
      <References />
      <Faq />
      <Contact />
    </>
  );
}
