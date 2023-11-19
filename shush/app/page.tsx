import Link from "next/link";
import {Github} from "lucide-react"
import { buttonVariants } from "@/components/ui/button";
import { twMerge } from 'tailwind-merge';
import CodeHost from "@/components/code-host";

export default function Home() {
  return (
    <div className="container flex w-full flex-col items-center gap-12">
      <section className="text-center py-32 max-w-3xl flex flex-col gap-3 items-center">
        <h1 className="pt-24 text-6xl tracking-tighter font-semibold">Transcribe in minutes with WhisperV3</h1>
        <Link className="bg-gray-100 text-sm w-fit px-2.5 rounded-xl border-gray-300 border text-gray-600 hover:shadow-lg transition-shadow" href={"https://github.com/Vaibhavs10/insanely-fast-whisper"}>
          Powered by <span className="underline">Insanely-Fast-Whisper</span>
        </Link>
        <div className="flex gap-4 flex-wrap py-6">
          <Link href="#host" className={twMerge(buttonVariants(),"w-48")}>
            Host it yourself
          </Link>
          <Link href="/app" className={twMerge(buttonVariants(),"w-48")}>
            Try it out
          </Link>
        </div>
      </section>
      <section className="text-center py-32 max-w-3xl flex flex-col gap-3 items-center" id="host">
        <CodeHost/>
      </section>
    </div>
  );
}
