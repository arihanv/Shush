"use client";

import { useState, useRef } from "react";
import Waveform from "@/components/waveform";
import Stats from "@/components/stats";
import { File, Upload } from "lucide-react";

export default function TryIt() {
  const [file, setFile] = useState<File | undefined>();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  return (
    <div className="container flex w-full flex-col items-center gap-12">
      <section className="text-center py-28 max-w-3xl flex flex-col gap-3 items-center w-full">
        <div className="text-5xl tracking-tighter font-semibold">
          Upload an mp3 file
        </div>
        {file && (
          <h1 className="pt-12 font-semibold w-full">
            <Waveform file={file} />
          </h1>
        )}
        <div
          onClick={() => fileInputRef.current?.click()}
          className="cursor-pointer justify-center"
        >
          {!file ? (
            <div className="my-5 flex gap-2 items-center px-2.5 py-1.5 rounded-lg border border-dashed border-gray-300 text-gray-600 bg-gray-100 bg-opacity-40">
              <Upload size={20} /> Select a File
            </div>
          ) : (
            <div className="my-5 flex gap-2 items-center px-2.5 py-1.5  rounded-lg border border-dashed border-gray-300 text-gray-600 bg-gray-100 bg-opacity-40">
              <File size={20} /> Change File
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept=".mp3"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files?.[0])}
          />
        </div>
      </section>
      {/* <Stats/> */}
    </div>
  );
}
