import Image from "next/image";

interface DecorativePicProps {
  src: string;
  alt: string;
  distance?: number | `${number}px` | `${number}%`;
  side?: "left" | "right";
  color?: "primary" | "secondary" | string;
  extraClasses?: string;
}

export function DecorativePic(props: DecorativePicProps) {
  const color = props.color ?? "primary";
  const side = props.side ?? "right";
  const distance =
    typeof props.distance === "number"
      ? `${props.distance}px`
      : props.distance ?? `5px`;

  return (
    <div className={`aspect-video relative ${props.extraClasses}`} style={{}}>
      <div
        style={{
          position: "absolute",
          top: distance,
          [side]: distance,

          width: `calc(100% - ${distance})`,
          height: `calc(100% - ${distance})`,

          backgroundColor: ["primary", "secondary"].includes(color)
            ? `var(--color-${color})`
            : color,
        }}
      ></div>
      <Image
        style={{
          position: "absolute",
          top: 0,
          [side]: 0,

          width: `calc(100% - ${distance})`,
          height: `calc(100% - ${distance})`,

          objectFit: "cover"
        }}
        src={props.src}
        alt={props.alt}
        width={500}
        height={500}
        
      />
    </div>
  );
}
