"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface DecorativePicProps {
  pics: string[];
  alt: string;
  distance?: number | `${number}px` | `${number}%`;
  side?: "left" | "right";
  color?: "primary" | "secondary" | string;
  extraClasses?: string;
}

export function DecorativePic(props: DecorativePicProps) {
  const color = props.color ?? "primary";
  const side = props.side ?? "right";
  const distance = typeof props.distance === "number" ? `${props.distance}px` : props.distance ?? `5px`;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * props.pics.length);
        } while (props.pics.length > 1 && newIndex === currentImageIndex);
        setCurrentImageIndex(newIndex);
        setFade(true);
      }, 500);
    }, 6000);

    return () => clearInterval(timer);
  }, [currentImageIndex, props.pics.length]);

  return (
    <div className={`aspect-video relative w-full ${props.extraClasses}`}>
      <div
        style={{
          position: "absolute",
          top: distance,
          [side]: distance,
          width: `calc(100% - ${distance})`,
          height: `calc(100% - ${distance})`,
          backgroundColor: ["primary", "secondary"].includes(color) ? `var(--color-${color})` : color,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: 0,
          [side]: 0,
          width: `calc(100% - ${distance})`,
          height: `calc(100% - ${distance})`,
          opacity: fade ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <Image
          style={{ width: '100%', height: '100%', objectFit: "cover" }}
          src={props.pics[currentImageIndex]}
          alt={props.alt}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}