export default function Page() {
  return (
    <div className="transition group grid h-dvh place-items-center p-10 duration-500 has-[:checked]:bg-zinc-800">
      <button className="absolute text-sm font-bold top-3 left-3 border p-2 rounded-full text-zinc-500">
        Close
      </button>
      <div className="w-full transition duration-500 group-has-[button:hover]:scale-75 group-has-[button:hover]:opacity-0 overflow-hidden rounded-xl border shadow-xl">
        <div className="flex items-center justify-between gap-2 border-b bg-zinc-50 p-3">
          <div className="flex *:size-3 *:rounded-full gap-2">
            <div className="bg-red-500"></div>
            <div className="bg-yellow-500"></div>
            <div className="bg-green-500"></div>
          </div>

          <div className="flex items-center px-3 max-w-xs w-full border rounded-full">
            <input
              type="text"
              className="outline-none text-zinc-400 flex-1 pr-2"
            />
            <img
              className="size-4"
              src="https://unpkg.com/lucide-static@latest/icons/loader-circle.svg"
              alt=""
            />
          </div>

          <label className="opacity-50 hover:cursor-pointer flex items-center">
            <input type="checkbox" className="hidden" />
            <img
              src="https://unpkg.com/lucide-static@latest/icons/moon.svg"
              alt=""
              className="hidden group-has-[:checked]:block"
            />
            <img
              className="group-has-[:checked]:hidden"
              src="https://unpkg.com/lucide-static@latest/icons/sun.svg"
              alt=""
            />
          </label>
        </div>
        <div className="aspect-video bg-slate-500">
          <img
            className="transition duration-500 group-has-[:checked]:grayscale"
            src="https://cdn.pixabay.com/photo/2023/09/25/10/05/ai-generated-8274619_1280.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
