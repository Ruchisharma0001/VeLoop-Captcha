import { motion } from "framer-motion";
import PhoneScreen from "./PhoneScreen";
import CorrectImg from "./correct.png";
import { ShieldCheck } from "lucide-react";

function Success({ coin, prevBalance, newBalance, onAddToBalance, onMaybeLater }) {
  return (
    <PhoneScreen coin={coin}>
      <div className="flex flex-col items-center text-center py-4">
        <motion.img
          src={CorrectImg}
          alt="Successful"
          style={{ mixBlendMode: "lighten" }}
          animate={{ scale: [0.5, 1.5] }}
          transition={{ duration: 1.2 }}
          className="h-32 w-32 object-contain"
        >

        </motion.img>

        <h2 className="mt-5 text-xl font-bold text-lime-300">Verification Complete!</h2>
        <p className="mt-1 text-sm text-white">You earned</p>
        <p className="mt-1 text-2xl font-black text-yellow-300">💎 +1 Gem</p>

        <div className="mt-6 w-full flex items-center justify-between rounded-xl border border-[rgba(255,255,255,0.08)] bg-white/[0.03] px-4 py-3">
          <div className="text-left">
            <p className="text-lg font-bold text-white">{prevBalance}</p>
            <p className="text-[10px] text-white">Previous Balance</p>
          </div>
          <span className="text-white">→</span>
          <div className="text-right">
            <p className="text-lg font-bold text-emerald-400">{newBalance}</p>
            <p className="text-[10px] text-white">New Balance</p>
          </div>
        </div>

        <div className="mt-6 w-full flex flex-col gap-2.5">
          <button
            onClick={onAddToBalance}
            className="w-full rounded-xl py-3 font-bold text-white bg-linear-to-r from-green-700 via-green-700 to-emerald-500 transition"
          >
            Add to Balance
          </button>
          <button
            onClick={onMaybeLater}
            className="w-full rounded-xl border border-[rgba(255,255,255,0.08)] bg-white/5 py-3 font-semibold text-white hover:bg-white/10"
          >
            Maybe Later
          </button>
        </div>

        <div className="mt-5 flex items-center gap-2 rounded-xl border border-[rgba(255,255,255,0.06)] bg-white/[0.03] px-10 py-2.5 text-xs text-white">
          <ShieldCheck size={14} className="text-white shrink-0" />
          Your reward has been added to your account.
        </div>
      </div>
    </PhoneScreen>
  );
}

export default Success;