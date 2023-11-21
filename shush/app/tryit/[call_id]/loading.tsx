import { Loader2 } from "lucide-react";
import React from "react";

type Props = {};

export default function Loading({}: Props) {
  return (
    <div className="h-[85vh] flex justify-center items-center">
      <div className="bg-gray-100 w-fit px-2.5 rounded-xl border-gray-300 border text-gray-600 flex gap-1 items-center">
        <div className="animate-spin items-center flex">
          <Loader2 size={15} />
        </div>{" "}
        Checking Up On Your Function Call
      </div>
    </div>
  );
}
