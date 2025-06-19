"use client";

import { CalendarMonthRounded, TimerRounded } from "@mui/icons-material";
import { useInView } from "react-intersection-observer";

export function Location() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="mx-auto px-8 py-16 md:p-20 max-w-[100rem]">
      <div className="md:px-14 py-6 font-bold text-center rounded-3xl mx-auto max-w-[40rem]">
        <p className={`${!inView && "anim-paused"} show-fade text-4xl`}>
          Onde nos encontrar
        </p>
      </div>
      <div
        className={`relative w-full h-[455px] show-fade anim-delay-400 ${
          !inView && "anim-paused"
        }`}
      >
        <div className="absolute bottom-0 left-0 w-[calc(100%-10px)] h-[445px] bg-primary"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.133494661809!2d-35.72379572423551!3d-9.669633290419526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7014572f7a6b6ab%3A0xcc734c0976fff3c!2zQ2VudHJvIGRlIElub3Zhw6fDo28gZG8gSmFyYWd1w6E!5e0!3m2!1spt-BR!2sbr!4v1748022385413!5m2!1spt-BR!2sbr"
          className="absolute top-0 right-0 w-[calc(100%-10px)] h-[445px] border-0 mx-auto"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div
        className={`
          flex items-center justify-center text-center
          gap-7 mt-0.5 px-4 py-3 font-bold show-fade anim-delay-800 ${
            !inView && "anim-paused"
          }`}
      >
        <p className="text-lg flex items-center gap-1.5">
          <CalendarMonthRounded className="!leading-none" fontSize="inherit" />{" "}
          Seg - Sex
        </p>

        <p className="text-lg flex items-center gap-1.5">
          <TimerRounded fontSize="inherit" /> 8:00 - 18:00
        </p>
      </div>
    </div>
  );
}
