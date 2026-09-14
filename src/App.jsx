import { useState, useEffect } from "react";
import Captcha from "./components/Captcha";
import { generateChallenge } from "./components/CaptchaLogic.js";
import useCoin from "./components/hooks/useCoin.jsx";
import WelcomeBonus from "./components/WelcomeBonus.jsx";
import Checking from "./components/Checking.jsx";
import Success from "./components/Success.jsx";
import Incorrect from "./components/Incorrect.jsx";

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
    addCorrectReward();
    setLastResult(null);
    setChallenge(generateChallenge());
    setPhase("captcha");
  };

  const handleMaybeLater = () => {
    setLastResult(null);
    setChallenge(generateChallenge());
    setPhase("captcha");
  };

  const handleTryAgain = () => {
    setLastResult(null);
    setPhase("captcha");
  };

  const handleGetNewCode = () => {
    setLastResult(null);
    setChallenge(generateChallenge());
    setPhase("captcha");
  };

  const handleBack = () => {
    if (phase === "checking" || phase === "result") {
      setLastResult(null);
      setPhase("captcha");
    }
  };

  const handleRefresh = () => {
    setChallenge(generateChallenge());
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#0a0e27] via-[#0d1229] to-[#0a0e27] text-white flex flex-col items-center">
      {showWelcome && <WelcomeBonus onClaim={handleClaimWelcome} />}

      {phase === "captcha" && (
        <Captcha
          key={lastResult ? "retry" : "fresh"}
          code={challenge.code}
          options={challenge.options}
          coin={coin}
          onSelect={handleSelect}
          onRefresh={handleRefresh}
          onBack={handleBack}
        />
      )}

      {phase === "checking" && <Checking coin={coin} onBack={handleBack} />}

      {phase === "result" && lastResult?.correct && (
        <Success
          coin={coin}
          prevBalance={coin}
          newBalance={coin + lastResult.reward}
          onAddToBalance={handleClaimReward}
          onMaybeLater={handleMaybeLater}
          onBack={handleBack}
        />
      )}

      {phase === "result" && lastResult && !lastResult.correct && (
        <Incorrect
          coin={coin}
          onTryAgain={handleTryAgain}
          onGetNewCode={handleGetNewCode}
          onBack={handleBack}
        />
      )}
    </div>
  );
}

export default App;