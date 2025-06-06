import Image from "next/image";
import Link from "next/link";
import { MiniChip } from "./Chip";

export function NewsCard(props: News) {
  return (
    <Link
      href={`/blog/${props.id}`}
      className="flex items-stretch flex-col cursor-pointer hover:scale-[102%] -[-0.5rem] transition-all"
    >
      <Image
        className="w-full h-20 rounded-t-2xl object-cover"
        src={props.header.coverUrl ?? "/mocked_news/news1.webp"}
        alt="Capa da notícia"
        width={500}
        height={500}
      />
      <div className="text-center bg-tertiary rounded-b-2xl shadow-lg px-3 pt-2 pb-3">
        <p className="text-lg font-bold truncate">{props.header.title}</p>
        <p className="font-semibold text-justify text-sm line-clamp-2 sm:line-clamp-3 mt-0.5 mb-2">
          {props.header.description}
        </p>
        <hr className="opacity-20 mb-3" />
        <div className="flex flex-wrap justify-center gap-1.5 mt-2">
          {props.tags.map((tag) => (
            <MiniChip key={tag} title={tag} />
          ))}
        </div>
        {/* <p className="font-bold opacity-20">
          {props.author}
          <span className="mx-1">•</span>
          {formattedDate(props.date)}
        </p> */}
      </div>
    </Link>
  );
}
