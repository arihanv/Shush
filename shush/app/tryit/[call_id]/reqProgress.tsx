import { Loader2 } from "lucide-react";

export default function ReqProgress() {
  return (
    <div className="h-[80vh] flex justify-center items-center">
        <div className="flex flex-col gap-2 items-center">
      <div className="bg-gray-100 w-fit px-2.5 rounded-xl border-gray-300 border text-gray-600 flex gap-1 items-center">
        <div className="animate-spin items-center flex">
          <Loader2 size={15} />
        </div>{" "}
        Function Call Is In Progress
      </div>
        <div className="text-gray-600 text-opacity-70 text-xs sm:text-sm">
            You can stay on this page or come back later to the same url
        </div>
      </div>
    </div>
  )
}