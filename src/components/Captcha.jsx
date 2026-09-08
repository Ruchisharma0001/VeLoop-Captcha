import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, RefreshCw, Check } from "lucide-react";
import GemImage from "./cosmic-gem.jpg";

function Captcha({ coin, code, options, onSelect, onNext }) {
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
        <div className="min-h-screen pt-20 md:pt-8 pb-10 overflow-x-hidden">
            <div className="fixed top-4 right-2 sm:top-6 sm:right-6 flex items-center gap-2 px-5 border-2 rounded-xl bg-white text-purple-900 font-bold">💎 {coin}</div>

            <div className="fixed top-4 left-2 sm:top-5 sm:left-10 border opacity-80 cursor-pointer rounded-2xl p-2 flex items-center gap-1.5 text-center text-green-300 font-semi-bold"><ShieldCheck size={15} />Secure Verification</div>

            <div className="text-center max-w-md mx-auto">
                <div className="flex justify-center">
                    <img style={{ WebkitMaskImage: "radial-gradient(circle, black 10%, transparent 40%)", mixBlendMode: "lighten",  width: "150px",height: "auto",       maxWidth: "100%"}} src={GemImage} alt="Images" />
                </div>

                <h1 className="text-4xl font-bold mb-1 text-center bg-linear-to-r from-blue-400 via-purple-400 to-purple-500 bg-clip-text text-transparent">Verify to earn Gems</h1>

                <h2 className="text-xs sm:text-sm md:mt-2 mt-4">Complete verification to claim your rewards</h2>

                <div className="border rounded-2xl bg-white text-black pt-3 pl-1 md:ml-2 md:mt-4 mt-8 md:w-85 md:h-auto h-105">
                    <h2 className="font-bold text-lg">CAPTCHA Verification</h2>

                    <div style={{
                        backgroundImage: `
            repeating-linear-gradient(190deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 12px),
            repeating-linear-gradient(180deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 12px),
            radial-gradient(circle, rgba(0,0,0,0.2) 1px, transparent 10px)
              `,
                        backgroundSize: "auto, auto, 5px 5px",
                    }}
                        className="bg-gray-300 border py-3 mx-3 flex justify-center ml-3 mb-2 mt-4 relative overflow-hidden">

                        <h2 className="text-3xl sm:text-4xl font-bold tracking-[6px] text-gray-800 italic select-none text-center [text-shadow:2px_2px_2px_rgba(0,0,0,1.0)]" style={{ filter: "blur(0.5px)" }}>
                            {code}</h2>
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={onNext}
                            className="flex items-center gap-1 text-xs text-purple-600 hover:text-purple-800 cursor-pointer"
                        >
                            <RefreshCw size={12} />
                            Refresh CAPTCHA
                        </button>
                    </div>

                    <h3 className="text-md mt-2">Select the matching code</h3>

                    <div className="grid grid-cols-2 gap-1 mt-3">
                        {options.map((option) => (
                            <div className=" border rounded-lg border-white bg-gray-200 hover:bg-gray-300 active:translate-0 active:scale-90 text-center ml-2 mr-2 py-4 cursor-pointer text-sm sm:text-base break-all" key={option} onClick={() => handleClick(option)}>{option}</div>
                        ))}
                        {/* <Check /> */}
                    </div>

                   <button className="border md:mt-10 md:px-20 md:py-2 mt-2 md:w-75 w-70 rounded-xl cursor-pointer font-bold text-lg bg-linear-90 from-blue-600 via-purple-500 to-purple-600"
                        onClick={onNext}>Next Challenge</button>

                    <h4 className="text-xs sm:text-sm mt-1 pb-4">🔒︎ Your verification is secure and encrypted</h4>
                </div>
            </div>
        </div >
    );
}

export default Captcha;