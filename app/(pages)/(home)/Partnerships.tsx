"use client"

import { Carousel } from "@/app/components/Carousel";
import { useInView } from "react-intersection-observer";

export function PartnerShips() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const partners: string[] = [
    "/partnerships/coplan.webp",
    // "/partnerships/itefy.webp",
    "/partnerships/maceio.webp",
    "/partnerships/mascarenhaselins.webp",
    "/partnerships/salvador.webp",
    "/partnerships/start.webp",
    "/partnerships/tremdy.webp",
    "/partnerships/unovo.webp",
    "/partnerships/vieiralins.webp",
  ];

  return (
    <div ref={ref} className="text-center">
      <div className="px-10 md:px-16">
        <h1 className={`${!inView && 'anim-paused'} show-fade font-bold text-3xl`}>Projetos e Parceiros</h1>
        <h2 className={`${!inView && 'anim-paused'} show-fade anim-delay-200 font-semibold text-lg max-w-[40ch] mx-auto mt-1 mb-14`}>
          Conheça algumas das empresas que confiaram e utilizam de nossa gestão
          de projetos
        </h2>
      </div>

      <Carousel urlList={partners} />
    </div>
  );
}
