import { LinkedIn } from "@mui/icons-material";
import { WhatsApp } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { X } from "@mui/icons-material";

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

      <div className="flex justify-center md:justify-start gap-3 mt-4 text-5xl">
        <LinkedIn fontSize="inherit" />
        <WhatsApp fontSize="inherit" />
        <Instagram fontSize="inherit" />
        <X fontSize="inherit" />
      </div>
    </div>
  );
}
