import Image from "next/image";
import styles from "./Carousel.module.css";

interface CarouselProps {
  urlList: string[];
}

export function Carousel(props: CarouselProps) {
  const rowStyles: string = `flex items-center gap-4 px-2 ${styles.carousel}`;

  return (
    <div className="max-w-[75rem] mx-auto overflow-hidden">
    <div className="flex items-center mt-6 w-max">
      {[1, 2, 3].map((row) => (
        <div key={row} className={rowStyles}>
          {props.urlList.map((url) => (
            <Image
              className="object-contain"
              key={`${url}-${row}`}
              src={url}
              alt="Imagem do carrossel"
              width={500}
              height={500}
            />
          ))}
        </div>
      ))}
    </div>
    </div>
  );
}
