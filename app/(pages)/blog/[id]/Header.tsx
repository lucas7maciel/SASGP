"use client";

import {
  ChevronLeft,
  LinkedIn,
  ShareRounded,
  WhatsApp,
  X,
} from "@mui/icons-material";
import { ClickAwayListener } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export function Header(props: Header) {
  const [openShare, setOpenShare] = useState(false);

  const message = "Confira esta notícia de SASGP: \n";
  const title = encodeURIComponent("Confira esta notícia de SASGP:");
  const summary = encodeURIComponent("Encontre mais notícias em nosso blog!");
  const currentUrl = encodeURIComponent(
    window ? window.location.href : "https://sasgp.vercel.app/blog/1"
  );
  const postSource = encodeURIComponent(
    window ? window.location.hostname : "https://sasgp.vercel.app"
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

      <div className="flex items-center gap-2.5 mt-2">
        <p className="leading-none flex items-center gap-1.5 truncate">
          Por <span className="font-bold">{props.author}</span>
          <span className="">•</span>
          <span className="font-bold">{props.date}</span>
        </p>

        <div className="relative">
          <div
            onClick={() =>
              setOpenShare((open) => {
                console.log("Open", !open);
                return !open;
              })
            }
          >
            <ShareRounded className="!cursor-pointer hover:!opacity-70 !text-base !transition-all !mb-1" />

            <ClickAwayListener onClickAway={() => {}}>
              <div
                className={`${
                  !openShare ? "scale-0 opacity-0" : "scale-100 opacity-100"
                } origin-top-right md:origin-top-left absolute top-full left-0 bg-tertiary shadow-lg transition-all
                  px-3 py-2.5 rounded-xl
          `}
              >
                <div className="flex items-center gap-3.5 text-4xl">
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
            </ClickAwayListener>
          </div>
        </div>
      </div>
    </div>
  );
}
