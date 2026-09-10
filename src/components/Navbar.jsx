import { Gem, Bell } from "lucide-react";
function Navbar({ coin = 0 }) {
  return (
    <header className="w-full border-b border-white/10 bg-[#070719]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8 md:py-3">

        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-yellow-400 to-orange-500 font-black text-black">
            V
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight">
              <span className="text-yellow-400">VE</span>LOOP
            </h1>

            <p className="text-[9px] uppercase tracking-[0.25em] text-white/40">
              Rewards
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 sm:gap-2 rounded-xl border border-white/10 bg-white/5 px-2.5 sm:px-4 py-1.5 sm:py-2">
            <Gem size={14} className="text-yellow-400 sm:w-4 sm:h-4" />

            <span className="font-semibold text-sm sm:text-base">
              {coin}
            </span>

            <span className="text-[10px] sm:text-xs text-white/40">
              Gems
            </span>
          </div>

          <button className="rounded-xl border border-white/10 bg-white/5 p-2.5 sm:p-3">
            <Bell size={18} />
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;