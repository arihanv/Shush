"use client";

import { useState } from "react";
import Waveform from "@/components/waveform";
import Stats from "@/components/stats";

export default function TryIt() {
  const [file, setFile] = useState<File | undefined>();

  return (
    <div className="container flex w-full flex-col items-center gap-12">
      <section className="text-center py-28 max-w-3xl flex flex-col gap-3 items-center w-full">
        { file &&
        <h1 className="pt-24 font-semibold w-full">
          <Waveform file={file}/>
        </h1>
        }
        <input type="file" accept=".mp3" onChange={(e) => setFile(e.target.files?.[0])} />
      </section>
      {/* <Stats/> */}
    </div>
  );
}
