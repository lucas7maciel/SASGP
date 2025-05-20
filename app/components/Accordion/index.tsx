"use client";

import { Add } from "@mui/icons-material";
import { useState } from "react";

export function Accordion(props: AccordionProps) {
  const [open, setOpen] = useState<boolean>(false);

  const animationDuration = 500; // Em milissegundos

  return (
    <div className="bg-primary rounded-lg text-tertiary text-start px-4 py-3 max-w-[50rem]">
      <div
        className="flex items-center justify-start gap-2 cursor-pointer"
        onClick={() => setOpen((open) => !open)}
      >
        <Add fontSize="small" />
        <p className="font-semibold text-xl text-tertiary">{props.title}</p>
      </div>

      <div
        className={`overflow-hidden transition-all duration-${animationDuration} ${
          open ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <hr />
        <p
          className={`transition-all delay-[${
            animationDuration * 0.75
          }ms] duration-[${animationDuration}] ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          Em consonância com os preceitos normativos vigentes e em estrito
          cumprimento às diretrizes estabelecidas pelos órgãos competentes,
          torna-se imperioso salientar que a implementação das ações propostas
          demanda uma reavaliação crítica dos paradigmas convencionalmente
          adotados. Nesse sentido, cabe ressaltar que a complexidade inerente
          aos fatores multidimensionais que norteiam o presente contexto exige
          uma abordagem holística e sinérgica, pautada em critérios
          técnico-científicos que visam à otimização dos processos em questão.{" "}
        </p>
      </div>
    </div>
  );
}
