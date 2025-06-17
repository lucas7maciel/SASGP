import Image from "next/image";
import { MiniChip } from "./Chip";
import { Skeleton } from "@/app/components/Skeleton";

export function Header(props: { notice: News | any }) {
  const categories: string[] = ["Jogos", "Empresa", "Moda"];
  const notice = props.notice;

  return (
    <div className="px-12 py-10 bg-primary flex items-center justify-center">
      <div className="flex flex-col md:flex-row bg-tertiary rounded-3xl shadow-xl max-w-[50rem] overflow-hidden">
        {notice && (
          <Image
            className="object-cover rounded-b-3xl md:rounded-r-3xl shadow-xl md:shadow-2xl flex-[0_0_16rem] md:flex-[0_0_400px] h-[16rem] md:h-[17rem] w-full md:w-[400px]"
            src={notice.header?.coverUrl || "/Logo.png"}
            alt={notice.header?.title ?? "Capa da notícia"}
            width={500}
            height={500}
          />
        )}

        {!notice && (
          <Skeleton
            extraClasses={`
              !flex-[0_0_16rem] md:!flex-[0_0_400px]
              !h-[16rem] md:!h-[17rem] !w-full md:!w-[400px]
              rounded-b-3xl md:rounded-r-3xl shadow-xl md:shadow-2xl
            `}
            width="500px"
            height="500px"
          />
        )}

        <div className="py-8 px-10 flex flex-col justify-center items-center md:items-start">
          {notice && (
            <>
              <p className="text-center truncate max-w-full md:whitespace-normal md:overflow-auto md:text-start text-2xl font-bold line-clamp-2">
                {notice.header.title}
              </p>
              <p className="text-center md:text-justify mt-2 line-clamp-3 md:line-clamp-4">
                {notice.header.description}
              </p>
            </>
          )}

          {!notice && (
            <>
              <Skeleton width="257px" height="32px" />
              <Skeleton extraClasses="mt-2" width="100%" height="96px" />
            </>
          )}
          <div className="flex gap-1.5 mt-3.5 md:mt-3">
            {notice &&
              categories.map((title) => <MiniChip key={title} title={title} />)}

            {!notice &&
              [72, 64, 78].map((width) => (
                <Skeleton
                  key={width}
                  extraClasses="rounded-full"
                  width={`${width}px`}
                  height="24px"
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
