import { motion } from "framer-motion";
import IncorrectImg from "./incorrect.png";
import PhoneScreen from "./PhoneScreen";
import { ShieldCheck } from "lucide-react";

function Incorrect({ coin, onTryAgain, onGetNewCode }) {
  return (
    <PhoneScreen coin={coin}>
      <div className="flex flex-col items-center text-center py-4">
        <motion.img
          src={IncorrectImg}
          alt="Unsuccessful"
          style={{ mixBlendMode: "lighten" }}
          animate={{ scale: [0.5, 1.5] }}
          transition={{ duration: 1.2 }}
          className="h-32 w-32 object-contain">
        </motion.img>

        <h2 className="mt-5 text-xl font-bold text-red-400">Verification Unsuccessful</h2>
        <p className="mt-2 text-sm text-white/60 max-w-xs">
          The selected code doesn't match the image shown.
        </p>
        <p className="mt-1 text-sm text-white/60">Please try again with a new challenge.</p>

        <div className="mt-6 w-full flex flex-col gap-2.5">
          <button
            onClick={onTryAgain}
            className="w-full rounded-xl bg-red-500 py-3 font-bold text-white hover:bg-red-400 transition"
          >
            Try Again
          </button>
          <button
            onClick={onGetNewCode}
            className="w-full rounded-xl border border-[rgba(255,255,255,0.08)] bg-white/5 py-3 font-semibold text-white hover:bg-white/10"
          >
            Get New Code
          </button>
        </div>

        <div className="mt-5 flex items-center gap-2 rounded-xl border border-[rgba(255,255,255,0.06)] bg-white/[0.03] px-10 py-2.5 text-xs text-white">
          <ShieldCheck size={14} className="text-white shrink-0" />
          Security checks keep your account safe.
        </div>
      </div>
    </PhoneScreen>
  );
}

export default Incorrect;