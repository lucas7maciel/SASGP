import Image from "next/image";
import styles from "./Carousel.module.css";

interface CarouselProps {
  urlList: string[];
}

export function Carousel(props: CarouselProps) {
  const rowStyles: string = `flex items-center gap-4 px-2 ${styles.carousel}`;

  return (
    <div className="flex items-center mt-6 overflow-hidden">
      <div className={rowStyles}>
        {props.urlList.map((url) => (
          <Image
            className="object-contain"
            key={url + "-1"}
            src={url}
            alt="Imagem do carrossel"
            width={500}
            height={500}
          />
        ))}
      </div>
      <div className={`${rowStyles} ${styles.after}`}>
        {props.urlList.map((url) => (
          <Image
            className="object-contain"
            key={url + "-2"}
            src={url}
            alt="Imagem do carrossel"
            width={500}
            height={500}
          />
        ))}
      </div>
    </div>
  );
}
