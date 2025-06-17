import Image from "next/image";

export function Media(props: Media) {
  return (
    <>
      <div className="px-2 mt-8 w-full">
        {["image", "gif"].includes(props.format) && (
          <Image
            className="object-cover w-full h-[375px] rounded-xl"
            src={props.url}
            alt={props.alt}
            width={1500}
            height={1500}
          />
        )}

        {props.format === "video" && (
          <video
            className="object-cover w-full h-full rounded-xl"
            width={"100%"}
            height={"375px"}
            autoPlay={true}
            loop={true}
            muted={true}
            controls={true}
            playsInline
          >
            <source src={props.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </>
  );
}
