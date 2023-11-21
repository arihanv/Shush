"use client";

import DataViewer from "@/components/data-viewer";
import React, { useEffect, useState } from "react";
import ShareUrl from "@/components/share-url";
import ReqFail from "./reqFail";
import ReqProgress from "./reqProgress";
import Loading from "./loading";

export default function Page({ params }: { params: { call_id: string } }) {
  const [data, setData] = useState<any | undefined>();
  const [status, setStatus] = useState<number>();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const formData = new FormData();
    formData.append("call_id", params.call_id);
    const fetchData = async () => {
      fetch(`${process.env.NEXT_PUBLIC_MODAL_URL}/call_id`, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          setStatus(response.status);
          if (response.status == 202) {
            timeoutId = setTimeout(fetchData, 10000);
          } else {
            return response.json();
          }
        }).then((data) => {
          setData(data);
        }
        )

        .catch((error) => {
          setStatus(500);
          console.error("Error:", error);
        });
    };
    fetchData();
    return () => clearTimeout(timeoutId);
  }, []);

  if (status == 202) {
    return <ReqProgress />;
  }

  if (status == 500) {
    return <ReqFail />;
  }

  if (!data) {
    return <Loading />;
  }

  if (data) {
    return (
      <>
        <div className="container flex flex-col items-center gap-4 max-w-3xl">
          <DataViewer data={data} />
          <div className="flex items-center text-lg gap-4 w-full">
            <div className="opacity-70 font-mono text-base font-medium">
              Share
            </div>
            <ShareUrl
              host={
                window.location.protocol +
                "//" +
                window.location.host +
                "/tryit"
              }
              call_id={params.call_id}
            />
          </div>
        </div>
      </>
    );
  }
}
