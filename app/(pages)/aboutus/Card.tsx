import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardProps } from "./Types";

export function Card(props: CardProps) {
  return (
    <div
      className={`
        flex flex-col items-center justify-center gap-6 
        p-4 bg-tertiary text-secondary rounded-xl md:aspect-square 
        shadow-[0_0_15px_0.5px_rgba(0,0,0,0.3)]
        ${props.extraClasses}
      `}
    >
      <p className="font-bold text-2xl">{props.title}</p>
      <FontAwesomeIcon className="aspect-square !w-34 !h-34" icon={props.icon} />
      <p className="font-bold text-lg mx-auto w-3/4 md:w-full">{props.description}</p>
    </div>
  );
}
