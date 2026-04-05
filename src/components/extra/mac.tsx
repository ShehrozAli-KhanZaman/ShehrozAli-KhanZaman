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

        <div className="flex h-[350px] overflow-hidden rounded-b-lg">
          <div className="w-12 shrink-0 bg-zinc-900">
            <div className="flex flex-col items-center gap-4 py-4">
              <div className="h-6 w-6 rounded-sm bg-zinc-700"></div>
              <div className="h-6 w-6 rounded-sm bg-zinc-700"></div>
              <div className="h-6 w-6 rounded-sm bg-zinc-700"></div>
              <div className="h-6 w-6 rounded-sm bg-zinc-700"></div>
            </div>
          </div>

          <div className="w-48 shrink-0 bg-zinc-800 p-2">
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

          <div className="flex-1 bg-zinc-950 p-4">
            <div className="flex gap-4">
              <div className="h-5 w-24 rounded bg-zinc-800"></div>
              <div className="h-5 w-24 rounded bg-zinc-800"></div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-4 w-full rounded bg-zinc-800"></div>
              <div className="h-4 w-5/6 rounded bg-zinc-800"></div>
              <div className="h-4 w-4/6 rounded bg-zinc-800"></div>
              <div className="h-4 w-3/6 rounded bg-zinc-800"></div>
              <div className="h-4 w-2/6 rounded bg-zinc-800"></div>
              <div className="h-4 w-4/6 rounded bg-zinc-800"></div>
              <div className="h-4 w-5/6 rounded bg-zinc-800"></div>
              <div className="h-4 w-3/6 rounded bg-zinc-800"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mac;
