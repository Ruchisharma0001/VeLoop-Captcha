import { useState, useEffect } from "react";

function useCoin() {
  const [coin, setCoin] = useState(() => {
    const saved = localStorage.getItem("veloop_coin");
    return saved ? parseFloat(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem("veloop_coin", coin);
  }, [coin]);

  const addCorrectReward = () => setCoin((prev) => prev + 1);
  const addWrongReward = () => setCoin((prev) => prev + 0.5);
  const addWelcomeBonus = () => setCoin((prev) => prev + 15);

  return { coin, addCorrectReward, addWrongReward, addWelcomeBonus };
}

export default useCoin;