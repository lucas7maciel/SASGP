import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMedal } from "@fortawesome/free-solid-svg-icons";
import styles from "./Home.module.css";
import Image from "next/image";

export function HomeSection() {
  const secondaryCardStyles = `
    flex-[0_0_24rem] flex-center flex-col gap-4 
    h-[20rem] w-[28rem] p-6 text-secondary text-center
    bg-tertiary rounded-2xl shadow-[0_0_15px_0.5px_rgba(0,0,0,0.3)]
  `;

  return (
    <div className="min-h-[95vh] relative flex-center flex-col text-center overflow-hidden">
      {/* Gradientes decorativos */}
      <div
        style={{
          background:
            "linear-gradient(transparent, var(--color-primary), var(--color-primary), var(--color-primary))",
        }}
        className={`absolute z-[-1] bottom-0 w-full h-[47.5%] ${styles["bottom-gradient"]}`}
      ></div>
      <DecorativeEllipse
        classes={`hidden md:block absolute z-[-1] top-0 left-[-7.5rem] h-full w-auto ${styles["oval-gradient"]}`}
      />
      <DecorativeEllipse
        classes={`hidden md:block absolute z-[-1] top-0 right-[-7.5rem] h-full w-auto scale-x-[-1] ${styles["oval-gradient"]}`}
      />

      <h1 className={`font-bold text-6xl ${styles.title}`}>
        Construindo o futuro
      </h1>
      <h2
        className={`font-semibold text-2xl w-[35ch] mt-2 mx-auto ${styles.subtitle}`}
      >
        Por trás de cada implantação eficiente, tem gente que entende de gente
      </h2>

      <div className="w-full flex-center gap-12 mt-18 py-2">
        <div className={`${secondaryCardStyles} ${styles["secondary-card"]}`}>
          <FontAwesomeIcon className="p-8" icon={faLightbulb} />
          <p className="font-bold text-3xl">Gestão de inovação</p>
        </div>

        <div
          className={`flex-center bg-tertiary rounded-2xl shadow-[0_0_15px_0.5px_rgba(0,0,0,0.3)] flex-[0_0_32.5rem] h-[26rem] overflow-hidden ${styles["main-card"]}`}
        >
          <Image
            className=""
            src="/Spaced-Logo.svg"
            alt="Logo"
            width={500}
            height={500}
          />
        </div>

        <div className={`${secondaryCardStyles} ${styles["secondary-card"]}`}>
          <FontAwesomeIcon className="p-8" icon={faMedal} />
          <p className="font-bold text-3xl">Gestão de inovação</p>
        </div>
      </div>
    </div>
  );
}

const DecorativeEllipse = (props: { classes: string }) => {
  return (
    <svg
      className={props.classes}
      width="200"
      height="200"
      viewBox="0 0 200 200"
      preserveAspectRatio="xMinYMin slice"
    >
      <defs>
        <linearGradient id="ellipseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0" />
          <stop
            offset="45%"
            stopColor="var(--color-primary)"
            stopOpacity="1"
          />
        </linearGradient>
      </defs>

      <ellipse cx="0" cy="200" rx="60" ry="200" fill="url(#ellipseGradient)" />
    </svg>
  );
};
