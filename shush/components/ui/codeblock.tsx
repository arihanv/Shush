// @ts-nocheck
// @see https://github.com/mckaywrigley/chatbot-ui/blob/main/components/Markdown/CodeBlock.tsx

"use client";

import { FC, memo } from "react";
import PythonLogo from "../python-logo";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { useCopyToClipboard } from "@/lib/hooks/use-copy-to-clipboard";

import { Check, Copy, Download } from "lucide-react";

interface Props {
  language: string;
  value: string;
  fileName: string;
}

interface languageMap {
  [key: string]: string | undefined;
}

export const programmingLanguages: languageMap = {
  javascript: ".js",
  python: ".py",
  java: ".java",
  c: ".c",
  cpp: ".cpp",
  "c++": ".cpp",
  "c#": ".cs",
  ruby: ".rb",
  php: ".php",
  swift: ".swift",
  "objective-c": ".m",
  kotlin: ".kt",
  typescript: ".ts",
  go: ".go",
  perl: ".pl",
  rust: ".rs",
  scala: ".scala",
  haskell: ".hs",
  lua: ".lua",
  shell: ".sh",
  sql: ".sql",
  html: ".html",
  css: ".css",
};

const CodeBlock: FC<Props> = memo(({ language, value, fileName }) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 });

  const downloadAsFile = () => {
    if (typeof window === "undefined") {
      return;
    }

    const blob = new Blob([value], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = fileName;
    link.href = url;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const onCopy = () => {
    if (isCopied) return;
    copyToClipboard(value);
  };

  return (
    <div className="codeblock relative w-full bg-white font-sans shadow-md rounded-lg">
      <div className="flex w-full items-center justify-between pr-4 bg-gray-100 rounded-t-lg">
        <div className="lowercase bg-white h-full flex items-center text-sm p-2 justify-between border-t px-3 gap-2.5 border-t-blue-500">
          <div className="gap-1 flex">
            {language == "python" && <PythonLogo height={14} className="mt-[.2rem]" />} {fileName}{" "}
          </div>{" "}
          <span className="rounded-full bg-gray-700 h-2 w-2 mt-[.15rem]"></span>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={downloadAsFile}>
            <Download height={15} />
            <span className="sr-only">Download</span>
          </button>
          <button
            onClick={onCopy}
          >
            {isCopied ? <Check height={15}  /> : <Copy height={15}  />}
            <span className="sr-only">Copy code</span>
          </button>
        </div>
      </div>
      <SyntaxHighlighter
        language={language}
        style={coldarkCold}
        PreTag="div"
        customStyle={{
          margin: 0,
          width: "100%",
          background: "transparent",
          lineHeight: "1.2",
        }}
        codeTagProps={{
          style: {
            lineHeight: "inherit",
            fontSize: "0.85em",
            fontFamily: "var(--font-mono)",
          },
        }}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
});
CodeBlock.displayName = "CodeBlock";

export { CodeBlock };
