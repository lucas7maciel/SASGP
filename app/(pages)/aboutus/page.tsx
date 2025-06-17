"use client"

import { useEffect } from "react";
import { DecorativePic } from "./DecorativePic";
import { Services } from "./Services";

export default function AboutUs() {
  const sectionStyles: string =
    "flex-center md:flex-row gap-x-16 lg:gap-x-24 gap-y-8 text-center";
  const titleStyles: string = "text-3xl font-bold mb-1.5";
  const paragraphStyles: string = "font-semibold text-justify";

  useEffect(() => {
    document.title = "SASGP - Sobre Nós";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Conheça um pouco mais a respeito da nossa empresa!");
    }
  }, []);

  return (
    <div className="flex flex-col gap-x-16 gap-y-8 py-8 px-12 max-w-[75rem]">
      <section className={`${sectionStyles} flex-col-reverse`}>
        <DecorativePic
          extraClasses={`flex-1 show-fade anim-delay-200`}
          pics={[
            "/pictures/team4.JPG",
            "/pictures/team6.JPG",
            "/pictures/team8.JPG",
            "/pictures/team10.JPG",
            "/pictures/team12.JPG",
            "/pictures/team14.JPG",
          ]}
          distance={8}
          alt="Equipe SASGP"
        />

        <div className="flex-1 md:text-end show-fade anim-delay-400">
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

      <section className={`${sectionStyles} flex-col`}>
        <div className="flex-1 md:text-left md:text-secondary show-fade anim-delay-600">
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
          extraClasses={`flex-1 show-fade anim-delay-800`}
          pics={[
            "/pictures/team5.JPG",
            "/pictures/team3.JPG",
            "/pictures/team7.JPG",
            "/pictures/team9.JPG",
            "/pictures/team11.JPG",
            "/pictures/team13.JPG",
            "/pictures/team15.JPG",
          ]}
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
