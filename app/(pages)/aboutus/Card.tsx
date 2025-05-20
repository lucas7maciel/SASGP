import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardProps } from "./Types";

export function Card(props: CardProps) {
  return (
    <div className="aspect-square flex flex-col gap-6 items-center justify-center p-4 bg-tertiary text-secondary rounded-xl shadow-[0_0_15px_0.5px_rgba(0,0,0,0.3)]">
      <p className="font-bold text-2xl">{props.title}</p>
      <FontAwesomeIcon className="aspect-square w-34 h-34" icon={props.icon} />
      <p className="font-bold text-lg">{props.description}</p>
    </div>
  );
}
