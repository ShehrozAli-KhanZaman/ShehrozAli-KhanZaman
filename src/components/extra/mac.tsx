import { Briefcase, User } from "lucide-react";
import Image from "next/image";

const Mac = () => {
  return (
    <div
      className={`relative mt-2 w-full max-w-4xl animate-in fade-in duration-1000 delay-700 fill-mode-forwards`}
    >
      <div className="rounded-lg border bg-card shadow-lg">
        <div className="flex h-7 items-center rounded-t-lg bg-zinc-800 px-4">
          <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
          <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>

        <div className="flex h-[400px] overflow-hidden rounded-b-lg sm:h-[420px]">
          <div className="w-12 shrink-0 bg-zinc-900">
            <div className="flex flex-col items-center gap-4 py-4">
              <div className="h-6 w-6 rounded-sm bg-zinc-700"></div>
              <div className="h-6 w-6 rounded-sm bg-zinc-700"></div>
              <div className="h-6 w-6 rounded-sm bg-zinc-700"></div>
              <div className="h-6 w-6 rounded-sm bg-zinc-700"></div>
            </div>
          </div>

          <div className="hidden w-48 shrink-0 bg-zinc-800 p-2 md:block">
            <div className="mb-2 text-xs text-zinc-400">EXPLORER</div>
            <div className="space-y-1 text-xs text-zinc-300">
              <div className="rounded px-1 py-0.5 hover:bg-zinc-700">project-name</div>
              <div className="ml-2 space-y-1">
                <div className="rounded px-1 py-0.5 hover:bg-zinc-700">node_modules</div>
                <div className="rounded px-1 py-0.5 hover:bg-zinc-700">public</div>
                <div className="rounded px-1 py-0.5 hover:bg-zinc-700">src</div>
                <div className="rounded px-1 py-0.5 hover:bg-zinc-700">package.json</div>
                <div className="rounded bg-zinc-700 px-1 py-0.5">README.md</div>
              </div>
            </div>
          </div>

          <div className="flex min-h-0 min-w-0 flex-1 flex-col bg-zinc-950 p-3 sm:p-4">
            <div className="flex shrink-0 gap-3 sm:gap-4">
              <div className="h-4 w-20 rounded bg-zinc-800 sm:h-5 sm:w-24"></div>
              <div className="h-4 w-20 rounded bg-zinc-800 sm:h-5 sm:w-24"></div>
            </div>

            <div className="mt-2 flex shrink-0 flex-col items-center gap-3 sm:mt-3">
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border border-zinc-600/60 shadow-md ring-2 ring-zinc-700/35">
                <Image
                  src="/images/shehroz.png"
                  alt="Shehroz Ali Khan"
                  fill
                  className="object-cover object-top"
                  sizes="112px"
                  priority
                />
              </div>
              <div className="flex w-full min-w-0 flex-col items-center gap-2 text-center">
                <div className="flex items-center justify-center gap-2">
                  <User
                    className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400"
                    aria-hidden
                  />
                  <span className="text-2xl font-bold leading-tight tracking-tight text-zinc-100 sm:text-3xl">
                    Shehroz Ali Khan
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Briefcase
                    className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400"
                    aria-hidden
                  />
                  <span className="text-lg leading-snug text-zinc-400 sm:text-xl">Senior React Native Developer</span>
                </div>
              </div>
            </div>

            <div className="mt-3 min-h-0 flex-1 space-y-1.5 overflow-y-auto sm:mt-4 sm:space-y-2">
              <div className="h-3 w-full rounded bg-zinc-800 sm:h-4"></div>
              <div className="h-3 w-5/6 rounded bg-zinc-800 sm:h-4"></div>
              <div className="h-3 w-4/6 rounded bg-zinc-800 sm:h-4"></div>
              <div className="h-3 w-3/6 rounded bg-zinc-800 sm:h-4"></div>
              {/* <div className="h-3 w-2/6 rounded bg-zinc-800 sm:h-4"></div>
              <div className="h-3 w-4/6 rounded bg-zinc-800 sm:h-4"></div> */}
              <div className="h-3 w-5/6 rounded bg-zinc-800 sm:h-4"></div>
              <div className="h-3 w-3/6 rounded bg-zinc-800 sm:h-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mac;
