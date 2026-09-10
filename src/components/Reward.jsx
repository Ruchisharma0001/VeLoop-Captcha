import { Gem, Sparkles } from "lucide-react";

function Reward({ amount = 1 }) {
  return (
    <div className="relative mx-auto mt-6 mb-10 sm:mb-12 flex w-fit flex-col items-center">
      <div className="absolute h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-cyan-300/30 bg-linear-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/30 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
        
        <Gem
          size={48}
          strokeWidth={1.8}
          className="text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"/>

        <Sparkles
          size={20}
          className="absolute right-3 top-3 text-yellow-300"/>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm font-medium text-white/50">
          Reward Earned
        </p>

        <h2 className="mt-1 bg-linear-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-3xl font-black text-transparent">
          +{amount} GEM{amount !== 1 ? "S" : ""}
        </h2>
      </div>

    </div>
  );
}

export default Reward;