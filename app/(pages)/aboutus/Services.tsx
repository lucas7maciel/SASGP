import { Card } from "./Card";
import { CardProps } from "./Types";
import {
  faBrain,
  faFolder,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";

export function Services() {
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
    <div className="p-8 bg-primary rounded-2xl text-center text-tertiary shadow-2xl">
      <p className="font-bold text-3xl">Nossos serviços</p>
      <p className="font-bold mx-auto mt-2 max-w-[50ch]">
        Como Escritório de Projetos, a SAS utiliza as melhores práticas de
        gerenciamento de projetos baseadas no PMBOK
      </p>

      <div className="mt-10 flex flex-col md:flex-row items-stretch justify-between gap-6">
        {servicesData.map((service, index) => (
          <Card key={index} {...service} />
        ))}
      </div>
    </div>
  );
}
