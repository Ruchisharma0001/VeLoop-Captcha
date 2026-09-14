import { ChevronLeft, Gem } from "lucide-react";

function PhoneScreen({ coin, onBack, children }) {
  return (
    <div className="w-full flex flex-col items-center">
      <nav className="w-full sticky top-0 z-50 border-b border-[rgba(255,255,255,0.2)] bg-[#0a0e27]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-md items-center justify-between px-4 py-4 ">
          <button onClick={onBack} className="text-white/60 hover:text-white transition-colors">
            <ChevronLeft size={22} />
          </button>
    
          <div className="text-center">
            <h1 className="text-lg font-bold tracking-tight"><span className="text-yellow-400">VE</span>LOOP</h1>
            <p className="text-[9px] uppercase tracking-[0.25em] text-white">Rewards</p>
          </div>

          <div className="flex items-center gap-1 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-2.5 py-1">
            <Gem size={12} className="text-yellow-400" />
            <span className="text-xs font-semibold text-yellow-300">{coin}</span>
          </div>
        </div>
      </nav>

      <div className="w-full flex justify-center px-3 pt-25 pb-8 sm:pt-10 sm:pb-12">
        <div className="w-full max-w-sm sm:max-w-md rounded-3xl border border-gray-500 bg-[#0a0e27] shadow-2xl overflow-hidden">
          <div className="px-4 py-5 sm:px-6 sm:py-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default PhoneScreen;