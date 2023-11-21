import DataViewer from "@/components/data-viewer";
import React from "react";
import { headers } from "next/headers";
import ShareUrl from "@/components/share-url";
import ReqFail from "./reqFail";
import ReqProgress from "./reqProgress";

async function getFunctionOutput(call_id: string) {
  const formData = new FormData();
  formData.append("call_id", call_id);
  const response = await fetch(`${process.env.NEXT_PUBLIC_MODAL_URL}/call_id`, {
    method: "POST",
    body: formData,
  });
  return response;
}

export default async function Page({
  params,
}: {
  params: { call_id: string };
}) {
  const headersList = headers();
  const host = headersList.get("host");
  const data = await getFunctionOutput(params.call_id);
  if (data.status == 202) {
    setTimeout(() => {
      Page({ params });
    }, 5000);
    return <ReqProgress />;
  }
  if (!data.ok) {
    return <ReqFail />;
  }
  const res = await data.json();

  return (
    <>
      <div className="container flex w-full flex-col items-center gap-4 max-w-3xl">
        <DataViewer data={res} />
        <div className="flex items-center w-full text-lg gap-4">
          <span className="opacity-70 font-mono text-base font-medium">
            Share
          </span>
          <ShareUrl host={host || "localhost:3000"} />
        </div>
      </div>
    </>
  );
}
