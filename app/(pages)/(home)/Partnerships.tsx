import { Carousel } from "@/app/components/Carousel";

export function PartnerShips() {
  const partners: string[] = [
    "/partnerships/itefy.webp",
    "/partnerships/maceio.webp",
    "/partnerships/salvador.webp",
    "/partnerships/start.webp",
    "/partnerships/tremdy.webp",
  ];

  return (
    <div className="text-center">
      <div className="px-16">
        <h1 className="font-bold text-3xl">Projetos e Parceiros</h1>
        <h2 className="font-semibold text-lg max-w-[40ch] mx-auto mt-1 mb-14">
          Conheça algumas das empresas que confiaram e utilizam de nossa gestão
          de projetos
        </h2>
      </div>

      <Carousel urlList={partners} />
    </div>
  );
}
