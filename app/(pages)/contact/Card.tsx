import { LinkedIn } from "@mui/icons-material";
import { WhatsApp } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { X } from "@mui/icons-material";

export function Card() {
  return (
    <div className="w-auto p-5 bg-primary rounded-xl text-tertiary shadow-xl">
      <p className="font-bold text-2xl">Estamos nas redes sociais!</p>
      <p className="text-lg">Entre em contato por outras plataformas:</p>

      <div className="flex gap-3 mt-4">
        <LinkedIn className="w-12 h-12" />
        <WhatsApp className="w-12 h-12" />
        <Instagram className="w-12 h-12" />
        <X className="w-12 h-12" />
      </div>
    </div>
  );
}
