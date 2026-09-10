import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, RefreshCw, Check, Gem } from "lucide-react";
import GemImage from "./cosmic-gem.jpg";

function Captcha({ coin, code, options, onSelect, onRefresh }) {
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        setSelected(null);
    }, [code]);

    const handleClick = (option) => {
        if (selected) return;
        setSelected(option);
        setTimeout(() => {
            onSelect(option);
        }, 500);
    };

    return (
        <div className="min-h-screen w-full pt-2 sm:pt-6 pb-5 overflow-x-hidden">
            <div className="fixed top-2 right-5 lg:hidden z-40 flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white text-purple-900 font-bold shadow-lg text-sm">💎 {coin}</div>

            <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 pt-5 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10 lg:px-8">
                <div className="w-full text-center pt-10 lg:w-1/2 lg:text-left">
                    <div className="flex justify-center lg:justify-start">
                        <img
                            style={{ WebkitMaskImage: "radial-gradient(circle, black 10%, transparent 40%)", mixBlendMode: "lighten", width: "150px", height: "auto", maxWidth: "100%" }}
                            className="sm:w-200px ml-30"
                            src={GemImage}
                            alt="Images"
                        />
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-0 bg-linear-to-r from-blue-400 via-purple-400 to-purple-500 bg-clip-text text-transparent leading-tight">
                        Verify to earn Gems
                    </h1>
                    <h2 className="text-xs sm:text-sm lg:text-base mt-3 sm:mt-4 lg:mt-3 text-white/60 max-w-md mx-auto lg:mx-0">
                        Complete verification to claim your reward
                    </h2>
                    <div className="hidden lg:flex mt-6 items-center gap-2 text-sm text-white/40">
                        <Gem size={16} className="text-yellow-400" />
                        Balance: <span className="font-semibold text-white">{coin}</span> Gems
                    </div>
                    <div className="mx-auto mt-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 lg:mx-0">
                        <ShieldCheck size={14} />
                        Secure Verification
                    </div>
                </div>

                <div className="w-full max-w-380px sm:max-w-sm shrink-0 border rounded-2xl bg-white text-black pt-4 pb-4 mx-auto">
                    <div className="px-4">
                        <h2 className="font-bold text-base sm:text-lg">CAPTCHA Verification</h2>
                        <p className="text-[11px] sm:text-xs text-gray-500">Please select the correct code shown below</p>
                    </div>

                    <div className="relative mx-3 sm:mx-4 mt-4 mb-2 overflow-hidden rounded-lg border border-gray-400 bg-gray-300 py-3 sm:py-4">
                        <div
                            className="pointer-events-none absolute inset-0 opacity-40"
                            style={{
                                backgroundImage: `
                radial-gradient(circle, rgba(0,0,0,0.35) 1px, transparent 1px),
                radial-gradient(circle, rgba(0,0,0,0.25) 1px, transparent 1px)
            `,
                                backgroundSize: "6px 6px, 9px 9px",
                                backgroundPosition: "0 0, 3px 4px",
                            }}
                        />
                        <div className="pointer-events-none absolute inset-0">
                            <span className="absolute left-[8%] top-[35%] h-[1px] w-[84%] rotate-[-8deg] bg-black/30" />
                            <span className="absolute left-[8%] top-[48%] h-[1px] w-[84%] rotate-12deg bg-black/30" />
                            <span className="absolute left-[10%] top-[60%] h-[1px] w-[84%] rotate-[-30deg] bg-black/30" />
                            <span className="absolute left-[10%] top-[60%] h-[1px] w-[80%] rotate-[-150deg] bg-black/30" />
                            <span className="absolute left-[8%] top-[72%] h-[1px] w-[84%] rotate-6deg bg-black/30" />
                        </div>

                        <h2
                            className="relative z-10 text-center text-2xl xs:text-3xl sm:text-4xl font-black italic tracking-[6px] sm:tracking-[8px] text-gray-800 select-none"
                            style={{
                                filter: "blur(0.4px)",
                                textShadow: "2px 2px 2px rgba(0,0,0,0.35)",
                            }}
                        >
                            {code.split("").map((char, index) => (
                                <span
                                    key={index}
                                    className="inline-block"
                                    style={{
                                        transform: `
                        rotate(${index % 2 === 0 ? -8 : 7}deg)
                        translateY(${index % 2 === 0 ? -3 : 3}px)
                    `,
                                    }}
                                >
                                    {char}
                                </span>
                            ))}
                        </h2>
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={onRefresh}
                            className="flex items-center gap-1 text-xs text-purple-600 hover:text-purple-800 cursor-pointer transition-colors"
                        >
                            <RefreshCw size={12} />
                            Refresh CAPTCHA
                        </button>
                    </div>

                    <h3 className="text-sm sm:text-md mt-2 px-3 sm:px-4">Select the matching code</h3>

                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-3 px-3 sm:px-4">
                        {options.map((option) => {
                            const isSelected = selected === option;
                            const isLocked = selected !== null && !isSelected;

                            return (
                                <motion.div
                                    key={option}
                                    onClick={() => handleClick(option)}
                                    whileHover={!selected ? { scale: 1.04, y: -2 } : {}}
                                    whileTap={!selected ? { scale: 0.95 } : {}}
                                    animate={isSelected ? { scale: [1, 1.06, 1] } : { scale: 1 }}
                                    transition={{ duration: 0.35, ease: "easeOut" }}
                                    className={`
                                     relative select-none rounded-xl border-2 py-3 sm:py-4 text-center text-xs xs:text-sm sm:text-base
                                     font-semibold break-all transition-colors duration-200
                                        ${isLocked ? "opacity-40 cursor-default" : "cursor-pointer"}   
                                         ${isSelected
                                            ? "border-purple-500 bg-purple-50 text-purple-700 shadow-[0_0_18px_rgba(147,51,234,0.45)]"
                                            : "border-gray-200 bg-gray-100 hover:border-purple-300 hover:bg-purple-50/60 hover:shadow-md"}`}>
                                    {option}

                                    <AnimatePresence>
                                        {isSelected && (
                                            <motion.span
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0, opacity: 0 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                                                className="absolute -right-2 -top-2 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md">
                                                <Check size={12} strokeWidth={3} className="sm:hidden" />
                                                <Check size={14} strokeWidth={3} className="hidden sm:block" />
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="px-3 sm:px-4">
                        <div
                            className={`
                mt-4 flex w-full items-center justify-center gap-2 rounded-2xl py-2.5 sm:py-3 font-bold text-base sm:text-lg text-white
                bg-linear-90 from-blue-600 via-purple-500 to-purple-600
                transition-all duration-300
                ${selected  ? "shadow-lg shadow-purple-500/50 scale-[1.02]"
                                    : "opacity-90 hover:opacity-100"
                                }`}
                        >
                            <Gem size={16} className={`sm:hidden ${selected ? "animate-pulse" : ""}`} />
                            <Gem size={18} className={`hidden sm:block ${selected ? "animate-pulse" : ""}`} />
                            {selected ? "Verifying..." : "Verify & Claim Gems"}
                        </div>
                    </div>

                    <h4 className="text-[11px] sm:text-xs mt-3 pb-1 px-3 sm:px-4 text-center text-gray-500">
                        🔒︎ Your verification is secure and encrypted
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default Captcha;