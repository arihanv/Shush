"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {
  data: any;
};

export default function DataViewer({ data }: Props) {
  return (
    <section className=" flex flex-col gap-3 items-center w-full h-[80vh]">
      <Tabs defaultValue="timestamps" className="w-full h-full">
        <div className="w-full justify-between flex items-center">
          <TabsList>
            <TabsTrigger value="text">Text</TabsTrigger>
            <TabsTrigger value="timestamps">Timestamps</TabsTrigger>
            <TabsTrigger value="json">JSON</TabsTrigger>
          </TabsList>
          <div className="bg-gray-100 text-sm px-2 rounded-lg border-gray-300 border text-gray-600">
          <span className="sm:inline hidden">Finished on a <span className="font-medium">NVIDIA A10G</span> in{" "}</span>
            <span className="font-medium">~{data[1].toFixed(2)}s</span>
          </div>
        </div>
        <TabsContent
          className="bg-gray-100 px-5 py-3 rounded-lg border-gray-300 border text-gray-600 h-fit max-h-[90%] overflow-scroll"
          value="text"
        >
          {data[0].text}
        </TabsContent>
        <TabsContent
          className="bg-gray-100 px-5 rounded-lg border-gray-300 border text-gray-600 h-fit max-h-[90%] overflow-scroll"
          value="timestamps"
        >
          {data[0].chunks.map((chunk: any, index: number) => (
            <div className="border-b py-3" key={index}>
              <p>{chunk.text}</p>
              <p className="text-sm opacity-70">
                {chunk.timestamp[0]}s - {chunk.timestamp[1]}s
              </p>
            </div>
          ))}
        </TabsContent>
        <TabsContent
          className="bg-gray-100 px-5 py-3 rounded-lg border-gray-300 border text-gray-600 font-mono h-fit max-h-[90%] overflow-scroll"
          value="json"
        >
          <pre>{JSON.stringify(data[0], null, 2)}</pre>
        </TabsContent>
      </Tabs>
    </section>
  );
}
