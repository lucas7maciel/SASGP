import { DecorativePic } from "./DecorativePic";
import { Services } from "./Services";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'SASGP - Sobre Nós',
  description: 'Conheça um pouco mais a respeito da nossa empresa!',
}

export default function AboutUs() {
  const sectionStyles: string = "flex-center gap-24";
  const titleStyles: string = "text-3xl font-bold mb-1.5";
  const paragraphStyles: string = "font-semibold text-justify";

  return (
    <div className="flex flex-col gap-16 py-8 px-10 max-w-[75rem]">
      <section className={sectionStyles}>
        <DecorativePic
          extraClasses={`flex-1`}
          src="/pictures/team1.webp"
          distance={8}
          alt="Equipe SASGP"
        />

        <div className="flex-1 text-end">
          <p className={titleStyles}>Quem é a SASGP?</p>
          <p className={paragraphStyles}>
            A SASGP nasceu em 17 de agosto de 2021 com um propósito claro:
            tornar simples o que costuma ser complexo. Somos um Escritório de
            Projetos (PMO) especializado na{" "}
            <span className="font-bold">implantação de software de gestão</span>
            para o setor público, com foco em prazos cumpridos, processos
            integrados e custos otimizados.
          </p>
          <p className={paragraphStyles}>
            Nosso time técnico carrega mais de 22 anos de experiência e é movido
            por um princípio que norteia todas as nossas entregas:{" "}
            <span className="font-bold">Pessoa Certa no Lugar Certo</span>.
          </p>
        </div>
      </section>

      <section className={sectionStyles}>
        <div className="flex-1 text-left text-secondary">
          <p className={titleStyles}>Nosso propósito</p>
          <p className={paragraphStyles}>
            O propósito final da empresa SASGP em Soluções é 
            <span className="font-bold">inspirar pessoas</span> e 
            <span className="font-bold">clientes</span>, fornecendo planejamento
            de gestão de projetos altamente eficiente para a implantação
            de software. Além disso, o nosso ideal é sempre o desenvolvimento de
            pessoas, equipando-as com as habilidades técnicas e de soft skills
            necessárias para aplicar as melhores práticas de gestão de projetos.
          </p>
          <p className={paragraphStyles}>
            Combinamos inovação, simplicidade e empatia para garantir que cada
            projeto seja uma experiência positiva — para os nossos clientes,
            suas equipes e suas realidades.
          </p>
        </div>

        <DecorativePic
          extraClasses={`flex-1`}
          src="/pictures/team2.webp"
          alt="Equipe SASGP"
          distance={8}
          side="left"
          color="secondary"
        />
      </section>
      <Services />
    </div>
  );
}
