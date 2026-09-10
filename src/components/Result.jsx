import { motion } from "framer-motion";
import { Gem } from "lucide-react";
function Result({ correct, reward, onClaim, onNoThanks }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex min-h-screen w-full items-center justify-center bg-[#070719] px-4">

      <div className="w-full max-w-lg text-center">

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 180 }}
          className={`
            mx-auto flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center
            rounded-full border
            ${correct
              ? "border-emerald-400/30 bg-emerald-400/10"
              : "border-orange-400/30 bg-orange-400/10"
            }`}>
          <span className="text-3xl sm:text-4xl">
            {correct ? "✓" : "!"}
          </span>
        </motion.div>

        <h2 className="mt-6 sm:mt-7 text-2xl sm:text-3xl font-bold">
          {correct ? "Correct!" : "Almost there"}
        </h2>

        <p className="mt-2 text-sm sm:text-base text-white/50">
          {correct
            ? "CAPTCHA verified successfully"
            : "That answer wasn't correct, but you still earned a reward."}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 sm:mt-7 w-fit rounded-3xl border border-yellow-400/20 bg-linear-to-br from-yellow-400/10 to-purple-500/10 px-8 sm:px-10 py-5 sm:py-6">
          <Gem size={28} className="mx-auto text-yellow-400 sm:hidden" />
          <Gem size={32} className="mx-auto text-yellow-400 hidden sm:block" />

          <p className="mt-2 text-3xl sm:text-4xl font-black text-yellow-300">
            +{reward} Gem{reward !== 1 ? "s" : ""}
          </p>

          <p className="mt-1 text-xs text-white/40">
            Reward earned
          </p>
        </motion.div>

        <div className="mt-12 mb-10 sm:mt-14 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={onClaim}
            className="flex-1 rounded-2xl bg-linear-to-r from-yellow-400 via-orange-400 to-pink-500 px-6 py-3.5 sm:py-4 font-bold text-black shadow-lg shadow-orange-500/20 transition hover:scale-[1.02]">
            Claim Reward →
          </button>

          <button
            onClick={onNoThanks}
            className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 sm:py-4 font-semibold text-white/70 transition hover:bg-white/10"          >
            No Thanks
          </button>
        </div>

      </div>

    </motion.section>
  );
}

export default Result;