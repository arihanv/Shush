import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";
import CodeHost from "@/components/code-host";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="container flex w-full flex-col items-center gap-12">
      <section className="text-center py-28 max-w-3xl flex flex-col gap-3 items-center">
        <h1 className="pt-24 text-5xl sm:text-6xl tracking-tighter font-semibold">
          Transcribe audio in minutes with WhisperV3
        </h1>
        <Link
          target="_"
          className="bg-gray-100 text-xs sm:text-sm w-fit px-2.5 rounded-xl border-gray-300 border text-gray-600 hover:shadow-lg transition-shadow"
          href={"https://github.com/Vaibhavs10/insanely-fast-whisper"}
        >
          Accelerated by <span className="underline">Flash Attention v2</span> +{" "}
          <span className="underline">Transformers</span>
        </Link>
        <div className="flex gap-4 flex-wrap py-6">
          <Link href="#host" className={twMerge(buttonVariants(), "w-full sm:w-48")}>
            Host it yourself
          </Link>
          <Link href="/tryit" className={twMerge(buttonVariants(), "w-full sm:w-48")}>
            Try it out
          </Link>
        </div>
      </section>
      <section
        className="text-center py-20 sm:py-32 max-w-3xl flex flex-col gap-3 items-center"
        id="host"
      >
        <CodeHost />
      </section>
      <Footer/>
    </div>
  );
}
