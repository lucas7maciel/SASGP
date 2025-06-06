import Image from "next/image";
import { MiniChip } from "./Chip";

export function Header() {
  const categories: string[] = ["Jogos", "Empresa", "Moda"];

  return (
    <div className="px-12 py-10 bg-primary flex items-center justify-center">
      <div className="flex flex-col md:flex-row bg-tertiary rounded-3xl shadow-xl max-w-[50rem] overflow-hidden">
        <Image
          className="object-cover rounded-b-3xl md:rounded-r-3xl shadow-xl md:shadow-2xl flex-[0_0_16rem] md:flex-[0_0_400px] h-[16rem] md:h-[17rem] w-[16rem] md:w-[400px]"
          src="/mocked_news/header.jpg"
          alt="Principal notícia"
          width={500}
          height={500}
        />

        <div className="py-8 px-10 flex flex-col justify-center items-center md:items-start">
          <p className="text-2xl font-bold line-clamp-2">Notícia pipipipi popopo</p>
          <p className="text-center md:text-justify mt-2 line-clamp-3 md:line-clamp-4">
            Ah, o lero-lero... uma arte de tecer palavras sem pressa, como um
            rio que serpenteia pela planície. É um jeito de deixar a conversa
            fluir leve.
          </p>
          <div className="flex gap-1.5 mt-3.5 md:mt-3">
            {categories.map((title) => (
              <MiniChip key={title} title={title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
