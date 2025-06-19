"use client"

import { useInView } from "react-intersection-observer";
import { Card } from "./Card";
import { CardProps } from "./Types";
import {
  faBrain,
  faFolder,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";

export function Services() {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const servicesData: CardProps[] = [
    {
      title: "Escritório de Projetos",
      description: "Gestão ágil e estratégica da implantação",
      icon: faFolder,
    },
    {
      title: "Análise Comportamental",
      description: "Perfis mapeados, equipes alinhadas",
      icon: faBrain,
    },
    {
      title: "Fábrica de Software",
      description: "Tecnologia feita sob medida com a Kactux",
      icon: faMicrochip,
    },
  ];

  return (
    <div
      ref={ref}
      className={`p-8 bg-primary rounded-2xl text-center text-tertiary shadow-2xl`}
    >
      <p className={`${!inView && 'anim-paused'} show-fade font-bold text-3xl`}>Nossos serviços</p>
      <p className={`${!inView && 'anim-paused'} show-fade anim-delay-200 font-bold mx-auto mt-2 max-w-[50ch]`}>
        Como Escritório de Projetos, a SAS utiliza as melhores práticas de
        gerenciamento de projetos baseadas no PMBOK
      </p>

      <div className="mt-10 flex flex-col md:flex-row items-stretch justify-between gap-6">
        {servicesData.map((service, index) => (
          <Card
            key={index}
            index={index}
            extraClasses={`show-fade ${!inView && 'anim-paused'}`}
            {...service}
          />
        ))}
      </div>
    </div>
  );
}
