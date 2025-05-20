import Image from "next/image";
import Link from "next/link";

export function NewsCard(props: NewsCardProps) {
  const formattedDate = (date: String | Date) => {
    if (typeof date === "string") {
      return date;
    }

    return "Ontem";
  };

  return (
    <Link href={`/blog/${props.id}`} className="flex items-stretch flex-col cursor-pointer hover:scale-[102%] -[-0.5rem] transition-all">
      <Image
        className="w-full h-20 rounded-t-2xl object-cover"
        src={props.coverUrl ?? "/public/team2.webp"}
        alt="Capa da notícia"
        width={500}
        height={500}
      />
      <div className="text-start bg-tertiary rounded-b-2xl shadow-lg px-3 py-4">
        <p className="font-bold">{props.title}</p>
        <p className="font-semibold text-justify line-clamp-3">{props.description}</p>
        <p className="font-bold opacity-20">
          {props.author}
          <span className="mx-1">•</span>
          {formattedDate(props.date)}
        </p>
      </div>
    </Link>
  );
}
