"use client";

import { useState } from "react";

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
        relative cursor-pointer flex-center font-bold 
        p-2 rounded-lg md:rounded-none md:rounded-l-lg transition-all overflow-visible
        ${props.selected ? "bg-tertiary" : "text-tertiary hover:bg-primary-40"}`}
      onClick={() => props.onClick()}
    >
      {props.title}

      {/* Borda decorativa */}
      {props.selected && (
        <>
          <div className="hidden md:block transition-all absolute top-[100%] right-0 bg-tertiary w-3 aspect-square overflow-hidden">
            <div className={`absolute top-[-5px] right-[-5px] w-[200%] rounded-tr-full bg-primary aspect-square`}></div>
          </div>
          <div className="hidden md:block transition-all absolute bottom-[100%] right-0 bg-tertiary w-3 aspect-square overflow-hidden">
            <div className="absolute bottom-[-5px] right-[-5px] w-[200%] rounded-br-full bg-primary aspect-square"></div>
          </div>
        </>
      )}
    </div>
  );
};
