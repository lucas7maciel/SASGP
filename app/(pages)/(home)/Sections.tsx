"use client";

import { useState } from "react";
import Image from "next/image";

export function Sections() {
  const sections = [
    "Gestão de Projetos",
    "Fábrica de Software",
    "Análise Comportamental",
  ];

  const [selected, setSelected] = useState<string>(sections[0]);

  return (
    <div className="flex-center min-h-[80vh] px-12 py-8 bg-primary">
      <div className="flex flex-col md:flex-row gap-y-3.5 items-stretch w-[80%] min-h-[60vh]">
        <div className="flex flex-col justify-center gap-y-1 md:gap-y-0">
          {sections.map((section) => (
            <Section
              key={section}
              title={section}
              selected={selected === section}
              onClick={() => setSelected(section)}
            />
          ))}
        </div>
        <div className="flex-1 min-h-[60vh] flex-center text-center bg-tertiary p-24 rounded-3xl">
          <p className="font-bold text-2xl">{selected}</p>
        </div>
      </div>
    </div>
  );
}

const Section = (props: {
  title: string;
  selected: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`
        relative cursor-pointer flex-center font-bold z-30
        p-2 rounded-lg transition-[background] overflow-visible duration-[8s]
        ${
          props.selected
            ? "md:rounded-l-lg md:rounded-r-none bg-tertiary"
            : "text-tertiary hover:bg-primary-40"
        }`}
      onClick={() => props.onClick()}
    >
      {props.title}

      {/* Borda decorativa */}
      <Image
        className={`absolute top-full right-0 h-2 w-2 aspect-square opacity-0
          ${props.selected && "opacity-100 transition-all"} duration-[8s]`}
        src="/icons/negative_radius.svg"
        alt="Negative radius"
        width={50}
        height={50}
      />
      <Image
        className={`absolute bottom-full right-0 h-2 w-2 aspect-square rotate-x-180 opacity-0
          ${props.selected && "opacity-100 transition-all"} duration-[8s]`}
        src="/icons/negative_radius.svg"
        alt="Negative radius"
        width={50}
        height={50}
      />
    </div>
  );
};
