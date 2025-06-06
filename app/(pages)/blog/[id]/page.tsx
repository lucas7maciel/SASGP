"use client";

import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Paragraph } from "./Paragraph";
import { Title } from "./Title";
import { Media } from "./Media";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function News() {
  const pathname = usePathname();

  // Trocar por Use
  const [news, setNews] = useState<undefined | null | News>(undefined);

  async function fetchData() {
    console.log("Procurando");
    try {
      const id = pathname.split("/")?.[2] ?? "0";
      const res: any = await fetch(`/mock/news.json`);

      setNews(
        res.news.find((notice: News) => notice.id === Number(id)) ?? null
      );
      console.log("Noticia:", news);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {news === undefined && <p>Carregando...</p>}

      {news === null && (
        <div className="flex-center flex-col gap-2 text-center pb-12">
          <Image
            className="w-[275px] h-[275px]"
            src="/illustrations/not-found-news.svg"
            alt="Notícia não encontrada"
            width={500}
            height={500}
          />
          <p className="font-bold text-2xl w-3/4">
            Ops... Parece que esta notícia não foi encontrada
          </p>
        </div>
      )}

      {news && (
        <div className="flex flex-col items-center max-w-[50rem] pb-12">
          <Header {...news.header} />
          <hr></hr>
          {news.content.map((block, index) => {
            if (block.type === "title") {
              return <Title key={index} {...block} />;
            }

            if (block.type === "paragraph") {
              return <Paragraph key={index} {...block} />;
            }

            if (block.type === "media") {
              return <Media key={index} {...block} />;
            }
          })}
        </div>
      )}
    </>
  );
}
