import Link from "next/link";
import { Section as SectionProps } from "./Types";

export function Section(props: SectionProps) {
  return (
    <Link
      className={`
        flex-center gap-2 text-center
        w-full py-2 px-4 rounded-xl 
        font-bold text-2xl opacity-75 
        hover:opacity-90 hover:bg-gray-200 transition-all ${
        props.isSelected && "opacity-100"
      }`}
      key={props.title}
      href={props.url}
    >
      {props.title}
    </Link>
  );
}
