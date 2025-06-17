"use client";

import {
  ChevronLeft,
  LinkedIn,
  WhatsApp,
  X,
} from "@mui/icons-material";
import Link from "next/link";

export function Header(props: Header) {
  const message = "Confira esta notícia de SASGP: \n";
  const title = encodeURIComponent("Confira esta notícia de SASGP:")
  const summary = encodeURIComponent("Encontre mais notícias em nosso blog!")
  const currentUrl = encodeURIComponent(
    window.location.href && "https://sasgp.vercel.app/blog/1"
  );
  const postSource = encodeURIComponent(
    window.location.hostname && "https://sasgp.vercel.app"
  );

  const whatsappLink = `https://wa.me/?text=${message}${currentUrl}`;
  const linkedinLink = `https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${title}&summary=${summary}&source=${postSource}`;
  const xLink = `https://twitter.com/intent/tweet?url=${currentUrl}&text=${message}`;

  return (
    <div className="px-9">
      <Link
        className="flex items-center gap-2 font-bold hover:opacity-80 transition"
        href="/blog"
      >
        <ChevronLeft />
        Voltar para o Blog
      </Link>

      <h1 className="mt-3 line-clamp-2 text-3xl font-bold">{props.title}</h1>
      <h2 className="mt-3 text-justify text-xl font-semibold opacity-70">
        {props.description}
      </h2>

      <p className="mt-2">
        Por <span className="font-bold">{props.author}</span>
        <span className="px-2">•</span>
        <span className="font-bold">{props.date}</span>
      </p>

      <div>
        <p className="font-semibold">Compartilhar notícia</p>
        <div className="flex items-center gap-2 text-3xl">
          <Link href={linkedinLink} target="__blank">
            <LinkedIn fontSize="inherit" />
          </Link>
          <Link href={whatsappLink} target="__blank">
            <WhatsApp fontSize="inherit" />
          </Link>
          <Link href={xLink} target="__blank">
            <X fontSize="inherit" />
          </Link>
        </div>
      </div>
    </div>
  );
}
