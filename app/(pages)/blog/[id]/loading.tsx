import { Skeleton } from "@/app/components/Skeleton";

export default function Loading() {
  return (
    <div className="pb-12 min-h-screen w-full max-w-[50rem] flex flex-col items-start mt-6">
      {/* Header */}
      <div className="px-9 w-full max-w-[50rem]">
        <Skeleton extraClasses="rounded-full max-w-full" width="180px" height="24px" />

        <Skeleton
          extraClasses="rounded-full mt-3 max-w-full"
          width="400px"
          height="36px"
        />
        <Skeleton extraClasses="rounded-lg mt-3" width="100%" height="84px" />

        <div className="mt-2 flex items-center gap-2">
          <Skeleton extraClasses="rounded-full" width="110px" height="22px" />
          <Skeleton extraClasses="rounded-full" width="5px" height="5px" />
          <Skeleton extraClasses="rounded-full" width="95px" height="22px" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center w-full max-w-[50rem] px-6 pb-12">
        <Skeleton
          extraClasses="px-6 mt-8 rounded-xl"
          width="100%"
          height="375px"
        />

        <div className="w-full mt-6 mb-3 mx-9">
          <Skeleton width="calc(100%-2.25rem)" height="80px" />
        </div>
        <Skeleton extraClasses="mb-0.5 mx-9" width="100%" height="112px" />
      </div>
    </div>
  );
}
