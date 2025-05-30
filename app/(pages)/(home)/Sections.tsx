"use client";

import { useState } from "react";
import Image from "next/image";

export function Sections() {
  const sections = [
    "Gestão de Projetos",
    "Fábrica de Software",
    "Análise Comportamental",
  ];

  const sectionsMap: Record<string, { text: string; image: string }> = {
    "Gestão de Projetos": {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. " +
        "Cras venenatis euismod malesuada. Nullam ac erat ante. Sed dignissim, diam nec tempor placerat, turpis dui pretium turpis, " +
        "non ultrices metus lectus vel orci. Praesent ac diam vel quam feugiat hendrerit nec nec nulla. Nullam ac erat ante. Sed dignissim, diam nec tempor placerat, turpis dui pretium turpis, " +
        "non ultrices metus lectus vel orci. Praesent ac diam vel quam feugiat hendrerit nec nec nulla.",
      image: "/pictures/team1.webp",
    },
    "Fábrica de Software": {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt, tortor nec facilisis porta, " +
        "erat elit fermentum risus, at sollicitudin risus orci sed libero. Aenean in commodo nisi. " +
        "Vestibulum vel nunc sit amet tortor porttitor facilisis. Nulla facilisi.",
      image: "/pictures/team2.webp",
    },
    "Análise Comportamental": {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut ultrices elit. Etiam quis lorem id sapien mattis finibus. " +
        "Suspendisse potenti. Integer euismod, risus ut lacinia ullamcorper, velit turpis convallis mauris, sed lacinia odio lorem nec eros. Nullam ac erat ante. Sed dignissim, diam nec tempor placerat, turpis dui pretium turpis, " +
        "non ultrices metus lectus vel orci. Praesent ac diam vel quam feugiat hendrerit nec nec nulla. Nullam ac erat ante. Sed dignissim, diam nec tempor placerat, turpis dui pretium turpis, " +
        "non ultrices metus lectus vel orci. Praesent ac diam vel quam feugiat hendrerit nec nec nulla. Nullam ac erat ante. Sed dignissim, diam nec tempor placerat, turpis dui pretium turpis, " +
        "non ultrices metus lectus vel orci. Praesent ac diam vel quam feugiat hendrerit nec nec nulla.",
      image: "/pictures/team1.webp",
    },
  };

  const [selected, setSelected] = useState<string>(sections[0]);
  const content = sectionsMap[selected];

  return (
    <div className="flex-center min-h-[80vh] px-12 py-8 bg-primary">
      <div className="flex flex-col xl:flex-row gap-y-3.5 items-stretch w-[80%] min-h-[60vh]">
        {/* Menu lateral */}
        <div className="flex flex-col justify-center gap-y-1 xl:gap-y-0">
          {sections.map((section) => (
            <Section
              key={section}
              title={section}
              selected={selected === section}
              onClick={() => setSelected(section)}
            />
          ))}
        </div>

        {/* Conteúdo dinâmico */}
        <div className="flex-1 min-h-[60vh] flex flex-col xl:flex-row items-center justify-center gap-8 bg-tertiary p-12 rounded-3xl">
          <Image
            src={content.image}
            alt={selected}
            width={300}
            height={300}
            className="rounded-lg max-w-full h-auto object-cover"
          />
          <div className="text-black max-w-xl text-center xl:text-left">
            <h2 className="text-2xl font-bold mb-3">{selected}</h2>
            <p className="text-base">{content.text}</p>
          </div>
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
      className={`relative cursor-pointer flex-center font-bold z-30
        p-2 rounded-lg transition-[background] overflow-visible duration-[.8s]
        ${props.selected ? "xl:rounded-l-lg xl:rounded-r-none bg-tertiary" : "text-tertiary hover:bg-primary-40"}
      `}
      onClick={props.onClick}
    >
      {props.title}
    </div>
  );
};
