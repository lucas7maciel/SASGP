import { LinkedIn } from "@mui/icons-material";
import { WhatsApp } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import Link from "next/link";

interface CardProps {
  extraClasses?: string;
}

export function Card(props: CardProps) {
  return (
    <div
      className={`
      w-auto p-6 bg-primary rounded-xl text-center md:text-start
      text-tertiary shadow-xl ${props.extraClasses}
    `}
    >
      <p className="font-bold text-2xl">Estamos nas redes sociais!</p>
      <p className="text-lg">Entre em contato por outras plataformas:</p>

      <div className="flex justify-center md:justify-start gap-3 mt-2.5 text-5xl">
        <Link
          href="https://www.linkedin.com/company/sasgp-br/posts/?feedView=all"
          target="__blank"
        >
          <LinkedIn fontSize="inherit" />
        </Link>
        <Link
          href="https://api.whatsapp.com/send/?phone=11981909659&text&type=phone_number&app_absent=0"
          target="__blank"
        >
          <WhatsApp fontSize="inherit" />
        </Link>
        <Link href="https://www.instagram.com/sasgp.br/" target="__blank">
          <Instagram fontSize="inherit" />
        </Link>
      </div>
    </div>
  );
}
