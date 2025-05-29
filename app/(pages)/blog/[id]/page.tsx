"use client";

import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Paragraph } from "./Paragraph";
import { Title } from "./Title";
import { Media } from "./Media";

export default function News(props: { params: { id: string } }) {
  // Trocar por Use
  const [news, setNews] = useState<undefined | News>(undefined);

  useEffect(() => {
    fetch(`/mock/news.json`)
      .then((res) => res.json())
      .then((res: { news: News[] }) => {
        console.log(res.news);
        setNews(
          res.news.find((notice) => notice.id === Number(props.params.id))
        );
      });
  }, []);

  return (
    <div>
      {news === undefined ? (
        <p>Carregando...</p>
      ) : (
        <>
          <Header {...news.header} />
          <hr></hr>
          {news.content.map((block, index) => {
            if (block.type === 'title') {
                return <Title key={index} {...block} />
            }
            
            if (block.type === 'paragraph') {
                return <Paragraph key={index} {...block} />
            }

            if (block.type === 'media') {
                return <Media key={index} {...block} />
            }
          })}
        </>
      )}
    </div>
  );
}
