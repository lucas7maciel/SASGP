import Image from "next/image";

export function Media(props: Media) {
  return (
    <>
      {props.format === "image" && (
        <Image
          className="rounded-xl"
          src={props.url}
          alt={props.alt}
          width={500}
          height={500}
        />
      )}
    </>
  );
}
