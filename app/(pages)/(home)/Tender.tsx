import Link from "next/link";

export function Tender() {
  return (
    <div className="p-20">
    <div className="bg-primary px-14 py-8 font-bold text-center text-tertiary rounded-3xl shadow-lg mx-auto max-w-[40rem]">
      <p className="text-3xl">Transforme seu Projeto!</p>
      <p className="mx-auto mt-1 mb-4 max-w-[45ch]">
        Soluções digitais mais produtivas, eficientes e escaláveis para uma
        Gestão de excelência no seu Projeto!
      </p>

      <Link href="/tender">
        <p className="bg-tertiary text-primary font-bold text-2xl px-5 py-2.5 rounded-full shadow-2xl">
          Fazer um orçamento
        </p>
      </Link>
      <p className="text-xs mt-1.5 opacity-90">
        <span className="pr-0.5">*</span>Respostas em cerca de 24 horas
      </p>
    </div>
    </div>
  );
}
