"use client";

import { useEffect, useState } from "react";
import { Chip } from "./Chip";
import { Header } from "./Header";
import { categories as mockedCategories } from "./Mock";
import { NewsCard } from "./NewsCard";
import { Skeleton } from "@/app/components/Skeleton";

export default function Blog() {
  const [news, setNews] = useState<undefined | News[]>(undefined);
  const [headerNotice, setHeaderNotice] = useState<undefined | News>(undefined);
  const [categories, setCategories] = useState<
    { value: string; selected: boolean }[] | undefined
  >(undefined);

  const toggleCategories = (category: string) => {
    setCategories((categories) => {
      return (
        categories?.map((c) => {
          if (c.value === category) {
            c.selected = !c.selected;
          }

          return c;
        }) ?? []
      );
    });
  };

  useEffect(() => {
    document.title = "SASGP - Blog";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Fique por dentro das novidades a respeito de nossa empresa e de nossos produtos!"
      );
    }

    fetch(`/mock/news.json`)
      .then((res) => res.json())
      .then((res: { news: News[] }) => {
        setTimeout(() => {
          setHeaderNotice(
            res.news?.find(({ id }) => id === 5) as News | undefined
          );
          setNews(res.news as News[]);
          setCategories(
            mockedCategories.map((value) => ({ value, selected: false }))
          );
        }, 1500);
      });
  }, []);

  return (
    <>
      <div className="min-h-screen w-full">
        <Header notice={headerNotice as News | undefined} />

        <div className="mx-auto text-center max-w-[60rem] px-8 py-10">
          <h1 className="font-bold text-4xl">Confira nossas notícias</h1>

          <div className="flex justify-between gap-4 mt-6 overflow-x-auto overflow-y-clip snap-mandatory">
            {categories &&
              categories.map((category, index) => (
                <Chip
                  key={category.value}
                  index={index}
                  title={category.value}
                  selected={category.selected}
                  extraClasses={`show-opacity`}
                  onClick={() => toggleCategories(category.value)}
                />
              ))}

            {/* Loader */}
            {!categories &&
              [76, 104, 107, 76, 125, 104, 55, 78].map((w, index) => (
                <Skeleton
                  key={index}
                  extraClasses="!rounded-full"
                  width={`${w}px`}
                  height="38px"
                />
              ))}
          </div>

          <div
            className={`py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-7`}
          >
            {!news &&
              [1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                <Skeleton key={index} width="100%" height="235px" />
              ))}

            {news?.map((news, index) => (
              <NewsCard key={news.id} index={index} {...news} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
