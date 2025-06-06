import { Header } from "./Header";
import { Paragraph } from "./Paragraph";
import { Title } from "./Title";
import { Media } from "./Media";
import Image from "next/image";
import Link from "next/link";

async function getNewsData(id: string): Promise<News | null | undefined> {
  try {
    // return undefined;
    const res = await fetch(`${process.env.BASE_URL}/mock/news.json`);
    const data: { news?: News[] } = await res.json();
    return (
      data.news?.find((notice: News) => notice.id.toString() === id) ?? null
    );
  } catch (e) {
    console.error(e);
    return undefined;
  }
}

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}) {
  const paramsRes = await props.params;
  const news = await getNewsData(paramsRes.id);

  return {
    title: news?.header?.title ?? "Notícia - SASGP",
    description:
      news?.header?.description ?? "Venha conferir esta notícia da SASGP",
    openGraph: {
      images: [
        {
          url: news?.header?.coverUrl ?? `${process.env.BASE_URL}/Logo.png`,
          width: 1200,
          height: 630,
          alt: news?.header?.title ?? "Notícia - SASGP",
          type: "image/png",
        },
      ],
      type: "article",
    },
  };
}

export default async function NewsPage(props: {
  params: Promise<{ id: string }>;
}) {
  const paramsRes = await props.params;
  const news = await getNewsData(paramsRes.id);

  return (
    <main>
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

      {news === undefined && (
        <div className="flex-center flex-col gap-1 text-center pb-12">
          <Image
            className="w-[275px] h-[275px]"
            src="/illustrations/bad-request-news.svg"
            alt="Notícia não encontrada"
            width={500}
            height={500}
          />
          <p className="font-bold text-2xl">
            Falha ao pesquisar por notícia
          </p>
          <p className="font-semibold w-3/4 mx-auto text-lg">Verifique sua conexão com a internet ou tente novamente em alguns instantes</p>
        </div>
      )}

      {news && (
        <div className="flex flex-col items-center max-w-[50rem] pb-12">
          <Header {...news.header} />
          <hr />
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
            return null;
          })}
        </div>
      )}
    </main>
  );
}
