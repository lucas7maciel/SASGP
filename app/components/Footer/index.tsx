import Image from "next/image";
import Link from "next/link";
import { Instagram, LinkedIn, WhatsApp, X } from "@mui/icons-material";

export function Footer() {
  return (
    <footer className="bg-primary px-6 py-3">
      <div className="flex">
        {/* Logo e endereço */}
        <div className="flex-1 flex flex-col justify-between gap-4">
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
            <p className="font-bold text-3xl text-tertiary">SASGP</p>
          </div>

          {/* Endereço */}
          <div>
            <p className="font-bold text-tertiary text-xs">Localizada em</p>
            <p className="font-bold text-tertiary">
              Centro de Inovações, Jaraguá
            </p>
            <p className="font-bold text-tertiary">Maceió, Alagoas</p>
          </div>
        </div>

        {/* Orçamento e redes sociais */}
        <div className="flex-1 flex flex-col justify-between items-end">
          <Link
            className="bg-tertiary rounded-full px-4 py-2 font-bold"
            href="/tender"
          >
            Fazer um orçamento
          </Link>

          <div className="flex gap-2.5 text-tertiary mt-6">
            <Link className="text-5xl" href="/">
              <LinkedIn fontSize="inherit" />
            </Link>
            <Link className="text-5xl" href="/">
              <WhatsApp fontSize="inherit" />
            </Link>
            <Link className="text-5xl" href="/">
              <Instagram fontSize="inherit" />
            </Link>
            <Link className="text-5xl" href="/">
              <X fontSize="inherit" />
            </Link>
          </div>
        </div>
      </div>

      <hr className="text-tertiary my-3" />

      <div className="flex items-center justify-between">
        <p className="font-semibold text-tertiary">© Todos os direitos reservados.</p>
        <p className="font-semibold text-tertiary">
          SAS Soluções Ágeis em Gestão de Projetos
        </p>
      </div>
    </footer>
  );
}
