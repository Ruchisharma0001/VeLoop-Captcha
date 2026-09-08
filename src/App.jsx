import { useState, useEffect } from "react";
import Captcha from "./components/Captcha";
import { generateChallenge } from "./components/CaptchaLogic.js";
import useCoin from "./components/hooks/useCoin.jsx";
import GemCount from "./components/GemsCount.jsx";
import WelcomeBonus from "./components/WelcomeBonus.jsx";

function App() {

  const [challenge, setChallenge] = useState(generateChallenge());
  const { coin, addCorrectReward, addWrongReward, addWelcomeBonus } = useCoin();
  const [showWelcome, setShowWelcome] = useState(false);

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
    isCorrect ? addCorrectReward() : addWrongReward();
    alert(isCorrect ? "Correct! +1 Gem" : "Wrong! +0.5 Gems");
    setChallenge(generateChallenge());
  };

  const handleNext = () => {
    setChallenge(generateChallenge());
  };


  return (
    <div className="md:min-h-screen bg-linear-90 from-[#1c0f2c] via-[#380e62] to-[#1f0d30] text-white flex flex-col items-center ">
      <div>
        {showWelcome && <WelcomeBonus onClaim={handleClaimWelcome} />}

        <Captcha
          code={challenge.code}
          options={challenge.options}
          coin={coin}
          onSelect={handleSelect}
          onNext={handleNext}
        />

        <GemCount/>

      </div>
    </div>
  );
}
export default App;