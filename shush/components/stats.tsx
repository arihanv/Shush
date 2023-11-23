"use client"

import React from "react";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

type ModalStats = {
  backlog: number;
  num_active_runners: number;
  num_total_runners: number;
};

export default function Stats() {
  const [stats, setStats] = useState<ModalStats | undefined>();
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const fetchData = async () => {
      fetch(`${process.env.NEXT_PUBLIC_MODAL_URL}/stats`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setStats(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        })
        .finally(() => {
          timeoutId = setTimeout(fetchData, 2000);
        });
    };
    fetchData();
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div className="fixed bottom-0 mb-10 px-10 flex flex-col justify-center gap-2 w-[375px]">
      {stats ? (
        <>
          <div className="flex gap-3 items-center bg-gray-100 px-2.5 rounded-xl border-gray-300 border text-gray-600 justify-around text-opacity-70">
            <div>{stats.backlog} Files in Backlog</div>{" "}
            {stats.num_active_runners == 0 && stats.backlog > 0 ? (
              <div className="flex gap-1">
                <div className="animate-spin items-center flex">
                  <Loader2 size={15} />
                </div>
                <div>Cold Starting</div>
              </div>
            ) : (
              <div>{stats.num_active_runners} Runners Online</div>
            )}
          </div>
          <div className="bg-gray-100 px-2.5 rounded-xl border-gray-300 border text-gray-600">
            <div className="flex gap-3 items-center justify-between border-b py-0.5">
              <div className="opacity-70">GPU</div>{" "}
              <div className="font-medium">A10G</div>
            </div>
            <div className="flex gap-3 items-center justify-between border-b py-0.5">
              <div className="opacity-70">Precision</div>{" "}
              <div className="font-medium">fp16</div>
            </div>
            <div className="flex gap-3 items-center justify-between py-0.5">
              <div className="opacity-70">Optimizer</div>{" "}
              <div className="font-medium">flash-attn 2</div>
            </div>
          </div>
        </>
      ) : (
        <div className="h-[122px] bg-gray-100 px-2.5 rounded-xl border-gray-300 border flex">
          {" "}
          <div className="animate-spin items-center m-auto">
            <Loader2 opacity={0.5} size={30} />
          </div>
        </div>
      )}
    </div>
  );
}
