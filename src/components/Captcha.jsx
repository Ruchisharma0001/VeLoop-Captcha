import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw, Check, Gem, ShieldCheck } from "lucide-react";
import PhoneScreen from "./PhoneScreen";

function Captcha({ coin, code, options, onSelect, onRefresh }) {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setSelected(null);
  }, [code]);

  const handleClick = (option) => {
    if (selected) return;
    setSelected(option);
    setTimeout(() => onSelect(option), 500);
  };

  return (
    <PhoneScreen coin={coin}>
      <h2 className="text-xl sm:text-2xl font-bold text-white">Earn Gems</h2>
      <p className="text-xs sm:text-sm text-white/70 mt-1">
        Complete a quick security check to earn rewards.
      </p>

      <div className="mt-5 rounded-xl border border-[rgba(255,255,255,0.08)] bg-white/5 py-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-black tracking-[6px] sm:tracking-[10px] text-white">
          {code}
        </h2>
      </div>

      <div className="flex justify-center mt-2">
        <button
          onClick={onRefresh}
          className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300"
        >
          <RefreshCw size={12} /> New Code
        </button>
      </div>

      <h3 className="text-sm text-white/70 mt-4">Select the matching code</h3>

      <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mt-3">
        {options.map((option) => {
          const isSelected = selected === option;
          const isLocked = selected !== null && !isSelected;

          return (
            <motion.div
              key={option}
              onClick={() => handleClick(option)}
              whileTap={!selected ? { scale: 0.95 } : {}}
              className={`relative rounded-xl border py-3 text-center text-sm sm:text-base font-semibold transition-colors
                ${isLocked ? "opacity-30" : "cursor-pointer"}
                ${isSelected
                  ? "border-cyan-400 bg-cyan-400/10 text-cyan-300"
                  : "border-[rgba(255,255,255,0.1)] bg-white/5 text-white hover:border-white/30"}`}
            >
              {option}
              <AnimatePresence>
                {isSelected && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -right-1.5 -top-1.5 h-5 w-5 rounded-full bg-cyan-400 flex items-center justify-center"
                  >
                    <Check size={12} strokeWidth={3} className="text-black" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-5 flex items-center gap-2 rounded-xl border border-[rgba(255,255,255,0.06)] bg-white/[0.03] px-3 py-2.5 text-xs text-white">
        <ShieldCheck size={14} className="text-white shrink-0" />
        This helps protect your account from automated access.
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-xl border border-yellow-400/10 bg-yellow-400/[0.05] px-3 py-2.5 text-sm text-yellow-300">
        <Gem size={14} className="shrink-0" />
        Complete verification to earn +1 Gem
      </div>
    </PhoneScreen>
  );
}

export default Captcha;