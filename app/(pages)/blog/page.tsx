"use client";

import { useEffect, useState } from "react";
import { Chip } from "./Chip";
import { Header } from "./Header";
import { categories, news } from "./Mock";
import { NewsCard } from "./NewsCard";
import { Skeleton } from "@mui/material";

export default function Blog() {
  const [news, setNews] = useState<undefined | News[]>(undefined);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategories = (category: string) => {
    setSelectedCategories((categories) => {
      if (categories.includes(category)) {
        return categories.filter((c) => c !== category);
      }

      return [...categories, category];
    });
  };

  useEffect(() => {
    document.title = "SASGP - Blog";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Fique por dentro das novidades a respeito de nossa empresa e de nossos produtos!");
    }

    fetch(`/mock/news.json`)
      .then((res) => res.json())
      .then((res: { news: News[] }) => {
        setTimeout(() => {
          setNews(res.news as News[]);
        }, 1000);
      });
  }, []);

  return (
    <>
      <div className="min-h-screen w-full">
        <Header />

        <div className="mx-auto text-center max-w-[60rem] px-8 py-10">
          <h1 className="font-bold text-4xl">Confira nossas notícias</h1>

          <div className="flex justify-between gap-4 mt-6 overflow-x-auto snap-mandatory">
            {categories.map((category) => (
              <Chip
                key={category}
                title={category}
                selected={!!selectedCategories.some((c) => c === category)}
                onClick={toggleCategories}
              />
            ))}
          </div>

          <div className={`py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 ${news ? 'gap-y-7' : 'gap-y-2'}`}>
            {!news && [0, 1, 2].map((index) => (
              <Skeleton key={index} className="!rounded-2xl !h-[300px]" height={300} />
            ))}

            {news?.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
