import Image from "next/image";

export function Media(props: Media) {
  return (
    <>
      {props.format === "image" && (
        <div className="px-2 mt-8 w-full">
          <Image
            className="object-cover w-full h-[375px] rounded-xl"
            src={props.url}
            alt={props.alt}
            width={1500}
            height={1500}
          />
        </div>
      )}
    </>
  );
}
