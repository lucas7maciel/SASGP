"use client";

export function Location() {
  return (
    <div className="mx-auto p-20 max-w-[100rem]">
      <div className="px-14 py-8 font-bold text-center rounded-3xl mx-auto max-w-[40rem]">
        <p className="text-3xl">Onde nos encontrar</p>
        <p className="mx-auto mt-1 mb-2 max-w-[45ch]">Venha nos visitar!</p>
        <p className="mx-auto mt-1 mb-1 max-w-[45ch]">
          Estamos te esperando com o melhor atendimento. Confira nosso endereço
          e conheça nosso espaço pessoalmente!
        </p>
        <p className="mx-auto mt-1 mb-1 max-w-[45ch]">
          Horários de funcionamento:
        </p>
        <p className="mx-auto mt-1 mb-1 max-w-[45ch]">
          Segunda a Sexta: 8h às 18h e Sábado: 8h às 14h
        </p>
      </div>
      <div className="relative w-full h-[455px]">
        <div className="absolute bottom-0 left-0 w-[calc(100%-10px)] h-[445px] bg-primary"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.133494661809!2d-35.72379572423551!3d-9.669633290419526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7014572f7a6b6ab%3A0xcc734c0976fff3c!2zQ2VudHJvIGRlIElub3Zhw6fDo28gZG8gSmFyYWd1w6E!5e0!3m2!1spt-BR!2sbr!4v1748022385413!5m2!1spt-BR!2sbr"
          className="absolute top-0 right-0 w-[calc(100%-10px)] h-[445px] border-0 mx-auto"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
