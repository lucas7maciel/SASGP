import Image from "next/image";

export function Media(props: Media) {
  return (
    <>
      {props.format === "image" && (
        <Image
          className="mt-8 object-cover w-full h-[375px] rounded-xl"
          src={props.url}
          alt={props.alt}
          width={1500}
          height={1500}
        />
      )}
    </>
  );
}
