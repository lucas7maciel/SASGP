import Image from "next/image";
import Link from "next/link";
import { Instagram, LinkedIn, WhatsApp, X } from "@mui/icons-material";

export function Footer() {
  return (
    <footer className="bg-primary px-6 py-3 relative">
      <div className="flex flex-col items-center md:flex-row">
        {/* Logo e endereço */}
        <div className="w-full flex-1 flex flex-col md:flex-col items-center md:items-start justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative w-11 h-11">
              <Image
                className="absolute-center aspect-square w-[56rem] invert"
                src="/Logo-Black.svg"
                alt="SASGP"
                width={500}
                height={500}
              />
            </div>
            <p className="font-bold text-4xl md:text-3xl text-tertiary">
              SASGP
            </p>
          </div>

          {/* Endereço */}
          <div className="text-center md:text-start">
            <p className="block font-bold text-tertiary text-xs">
              Localizada em
            </p>
            <p className="font-bold text-tertiary">
              Centro de Inovações, Jaraguá
            </p>
            <p className="font-bold text-tertiary">Maceió, Alagoas</p>
          </div>
        </div>

        {/* Orçamento e redes sociais */}
        <div className="flex-1 flex flex-col justify-between items-end">
          <div className="flex items-center gap-2.5">
            <Link
              className="hidden md:block h-10 max-w-10 border-tertiary"
              href="/"
            >
              <Image
                className="h-full w-full"
                src="/icons/gptw.svg"
                alt="Selo GPTW"
                width={500}
                height={500}
              />
            </Link>
            <Link
              className="hidden md:block bg-tertiary rounded-full px-4 py-2 text-xl text-center font-bold"
              href="/tender"
            >
              Fazer um orçamento
            </Link>
          </div>

          <div className="flex gap-2.5 text-tertiary mt-4 md:mt-10">
            <Link
              className="text-4xl"
              href="https://www.linkedin.com/company/sasgp-br/"
            >
              <LinkedIn fontSize="inherit" />
            </Link>
            <Link className="text-4xl" href="/">
              <WhatsApp fontSize="inherit" />
            </Link>
            <Link className="text-4xl" href="/">
              <Instagram fontSize="inherit" />
            </Link>
            <Link className="text-4xl" href="/">
              <X fontSize="inherit" />
            </Link>
          </div>
        </div>
      </div>

      <hr className="text-tertiary my-2" />

      <div className="flex items-center justify-center md:justify-between">
        <p className="font-semibold text-tertiary">
          © Todos os direitos reservados.
        </p>
        <p className="font-semibold text-tertiary hidden md:block">
          SAS Soluções Ágeis em Gestão de Projetos
        </p>
      </div>

      <Link className="md:hidden absolute right-6 top-3 h-12 max-w-12 border-tertiary" href="/">
        <Image
          className="h-full w-full"
          src="/icons/gptw.svg"
          alt="Selo GPTW"
          width={500}
          height={500}
        />
      </Link>
    </footer>
  );
}
