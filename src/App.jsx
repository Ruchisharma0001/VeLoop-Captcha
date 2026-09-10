import { useState, useEffect } from "react";
import Captcha from "./components/Captcha";
import { generateChallenge } from "./components/CaptchaLogic.js";
import useCoin from "./components/hooks/useCoin.jsx";
import WelcomeBonus from "./components/WelcomeBonus.jsx";
import Navbar from "./components/Navbar.jsx";
import Checking from "./components/Checking.jsx";
import Result from "./components/Result.jsx";
import Bottom from "./components/Bottom.jsx";

function App() {
  const [challenge, setChallenge] = useState(generateChallenge());
  const { coin, addCorrectReward, addWrongReward, addWelcomeBonus } = useCoin();
  const [showWelcome, setShowWelcome] = useState(false);

 
  const [phase, setPhase] = useState("captcha");
  const [lastResult, setLastResult] = useState(null);

  useEffect(() => {
    const hasClaimedWelcome = localStorage.getItem("welcome_bonus_claimed");
    if (!hasClaimedWelcome) {
      setShowWelcome(true);
    }
  }, []);

  const handleClaimWelcome = () => {
    addWelcomeBonus();
    localStorage.setItem("welcome_bonus_claimed", "true");
    setShowWelcome(false);
  };


  const handleSelect = (option) => {
    const isCorrect = option === challenge.code;
    setLastResult({ correct: isCorrect, reward: isCorrect ? 1 : 0.5 });
    setPhase("checking");
  };


  useEffect(() => {
    if (phase === "checking") {
      const timer = setTimeout(() => setPhase("result"), 1300);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  const handleClaimReward = () => {
    if (lastResult?.correct) {
      addCorrectReward();
    } else {
      addWrongReward();
    }
    setLastResult(null);
    setChallenge(generateChallenge());
    setPhase("captcha");
  };

  const handleSkipReward = () => {
    setLastResult(null);
    setChallenge(generateChallenge());
    setPhase("captcha");
  };

  const handleRefresh = () => {
    setChallenge(generateChallenge());
  };

  return (
    <div className="md:min-h-screen bg-linear-90 from-[#1c0f2c] via-[#380e62] to-[#1f0d30] text-white flex flex-col items-center ">
      <Navbar coin={coin} />

      <div className="w-full">
        {showWelcome && <WelcomeBonus onClaim={handleClaimWelcome} />}

        {phase === "captcha" && (
          <Captcha
            code={challenge.code}
            options={challenge.options}
            coin={coin}
            onSelect={handleSelect}
            onRefresh={handleRefresh}/>
        )}

        {phase === "checking" && <Checking />}

        {phase === "result" && lastResult && (
          <Result
            correct={lastResult.correct}
            reward={lastResult.reward}
            onClaim={handleClaimReward}
            onNoThanks={handleSkipReward}/>
        )}

        <Bottom />
      </div>
    </div>
  );
}
export default App;