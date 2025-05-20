import Image from "next/image";
import { MiniChip } from "./Chip";

export function Header() {
  const categories: string[] = ["Jogos", "Empresa", "Moda"];

  return (
    <div className="px-12 py-10 bg-primary flex items-center justify-center">
      <div className="flex bg-tertiary rounded-3xl shadow-xl max-w-[50rem] overflow-hidden">
        <Image
          className="object-cover rounded-r-3xl shadow-2xl flex-[0_0_25rem] h-[21rem]"
          src="/pictures/team1.webp"
          alt="Principal notícia"
          width={500}
          height={500}
        />

        <div className="py-8 px-10 flex flex-col justify-center">
          <p className="text-2xl font-bold">Notícia pipipipi popopo</p>
          <p className="text-justify mt-2">
            Ah, o lero-lero... uma arte de tecer palavras sem pressa, como um
            rio que serpenteia pela planície. É um jeito de deixar a conversa
            fluir leve.
          </p>
          <div className="flex gap-1.5 mt-3">
            {categories.map((title) => (
              <MiniChip key={title} title={title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
