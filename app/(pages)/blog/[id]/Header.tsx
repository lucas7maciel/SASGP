import { ChevronLeft } from "@mui/icons-material";
import Link from "next/link";

export function Header(props: Header) {
  return (
    <div className="px-9">
      <Link className="flex items-center gap-2 font-bold hover:opacity-80 transition" href="/blog">
        <ChevronLeft />
        Voltar para o Blog
      </Link>

      <h1 className="mt-3 line-clamp-2 text-3xl font-bold">{props.title}</h1>
      <h2 className="mt-3 text-justify text-xl font-semibold opacity-70">{props.description}</h2>

      <p className="mt-2">
        Por <span className="font-bold">{props.author}</span><span className="px-2">•</span>
        <span className="font-bold">{props.date}</span>
      </p>
    </div>
  );
}
