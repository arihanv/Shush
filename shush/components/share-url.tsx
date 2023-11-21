"use client"

import React from 'react'
import { usePathname } from 'next/navigation';
import { useCopyToClipboard } from "@/lib/hooks/use-copy-to-clipboard";
import { Check, Copy } from 'lucide-react';

type Props = {
    host: string;
}

export default function ShareUrl({host}: Props) {
 const pathname = usePathname();
const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 });
  const onCopy = () => {
    if (isCopied) return;
    copyToClipboard(`${host}${pathname}`);
  };
  return (
    <div className="prose flex w-full">
      <pre className="p-2 flex flex-1 bg-gray-100 text-black border-gray-300 border relative">
      {host}{pathname}

      <button
            className='absolute w-full flex justify-end items-center px-4 py-1'
            onClick={onCopy}
          >
            {isCopied ? <Check height={15}  /> : <Copy height={15}  />}
            <span className="sr-only">Copy code</span>
          </button>
    </pre>
    </div>
  )
}