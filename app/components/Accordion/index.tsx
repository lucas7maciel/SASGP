import { Add as AddIcon } from "@mui/icons-material";
import { useState } from "react";

export function Accordion(props: AccordionProps) {
  const [open, setOpen] = useState<boolean>(false);

  const animationDuration = 500; // Em milissegundos

  return (
    <div
      className={`
        bg-primary hover:bg-primary-50 rounded-xl text-tertiary anim-backwards
        select-none text-start px-4 py-3 w-full cursor-pointer show-opacity
    `}
      style={{
        animationDuration: "450ms",
        animationDelay: `${(props.index + 1) * 175 + 300}ms`,
      }}
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

        {props.content.split("•").map((text, index) => (
          <p
            key={index}
            className={`
          mt-1.5 transition-all delay-[${
            animationDuration * 0.75
          }ms] duration-[${animationDuration}] ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            {index !== 0 && <span className="font-bold mr-1">•</span>}
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}
