"use client";

import { useState } from "react";
import { Chip } from "./Chip";
import { Header } from "./Header";
import { categories, news } from "./Mock";
import { NewsCard } from "./NewsCard";

export default function Blog() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategories = (category: string) => {
    setSelectedCategories((categories) => {
      if (categories.includes(category)) {
        return categories.filter((c) => c !== category);
      }

      return [...categories, category];
    });
  };

  return (
    <>
      <head>
        <title>SASGP - Blog</title>
        <meta
          name="description"
          content="Fique por dentro das novidades a respeito de nossa empresa e de nossos produtos!"
        />
      </head>

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

          <div className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-7">
            {news.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
