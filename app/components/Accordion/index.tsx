"use client";

import { Add as AddIcon } from "@mui/icons-material";
import { useState } from "react";

export function Accordion(props: AccordionProps) {
  const [open, setOpen] = useState<boolean>(false);

  const animationDuration = 500; // Em milissegundos

  return (
    <div
      className={`
      bg-primary rounded-xl text-tertiary select-none
      text-start px-4 py-3 w-full cursor-pointer
    `}
      onClick={() => setOpen((open) => !open)}
    >
      <div className="flex items-center justify-start gap-2 p-1.5">
        <AddIcon fontSize="small" />
        <p className="font-semibold text-xl text-tertiary">{props.title}</p>
      </div>

      <div
        className={`overflow-hidden transition-all duration-${animationDuration} ${
          open ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <hr
          className={`
        transition-all delay-[${
          animationDuration * 0.75
        }ms] duration-[${animationDuration}] ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <p
          className={`
          mt-1.5 transition-all delay-[${
            animationDuration * 0.75
          }ms] duration-[${animationDuration}] ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          {props.content}
        </p>
      </div>
    </div>
  );
}
