import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import PhoneScreen from "./PhoneScreen";
import LockImage from "./Lock.png";

function Checking({ coin }) {
  return (
    <PhoneScreen coin={coin}>
      <div className="flex flex-col items-center text-center py-6">
        <motion.img
          src={LockImage}
          alt="Verifying"
          style={{ mixBlendMode: "lighten" }}
          animate={{ scale: [1.5, 1.0, 1.5] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="h-32 w-32 object-contain"
        />

        <h2 className="mt-6 text-xl font-bold text-white">Verifying...</h2>
        <p className="mt-1 text-sm text-white/70">
          Please wait while we check your answer.
        </p>

        <div className="mt-6 w-full h-2 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            initial={{ width: "10%" }}
            animate={{ width: ["10%", "60%", "85%", "60%"] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-full rounded-full bg-linear-to-r from-purple-600 via-purple-500 to-purple-700"
          />
        </div>

        <div className="mt-6 w-full flex items-center gap-2 rounded-xl border border-[rgba(255,255,255,0.06)] bg-white/[0.03] px-3 py-2.5 text-xs text-white">
          <ShieldCheck size={14} className="text-white shrink-0" />
          Do not close this screen while verification is in progress.
        </div>
      </div>
    </PhoneScreen>
  );
}

export default Checking;