import { ChevronLeft } from "@mui/icons-material";
import Link from "next/link";

export function Header(props: Header) {
  return (
    <div>
      <Link className="flex items-center gap-2" href="/blog">
        <ChevronLeft />
        Voltar para o Blog
      </Link>

      <h1 className="text-3xl font-bold">{props.title}</h1>
      <h2 className="text-xl font-semibold opacity-70">{props.description}</h2>

      <p>
        Por <span className="font-bold">{props.author}</span>•
        <span className="font-bold">{props.date}</span>
      </p>
    </div>
  );
}
