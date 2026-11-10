import { useEffect, useState } from "react";
import type { CampaignMetrics, TimeLeft } from "../types";

export function useCampaignSimulation() {
  const [metrics, setMetrics] = useState<CampaignMetrics>({
    totalClaimed: 10000,
    todayRevenue: 8420,
    roas: "597%",
  });

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 86,
    hours: 14,
    minutes: 27,
    seconds: 39,
  });

  const [isClaimed, setIsClaimed] = useState(false);
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleClaimGift = () => {
    if (!isClaimed) {
      setIsClaimed(true);
      setMetrics((prev) => ({
        ...prev,
        totalClaimed: prev.totalClaimed + 1,
        todayRevenue: prev.todayRevenue + 15,
      }));
      setToastMessage(
        "Success! Hello Nori Gift Card link sent to your device.",
      );
      setTimeout(() => setToastMessage(null), 4500);
    }
  };

  return {
    metrics,
    timeLeft,
    isClaimed,
    userPhone,
    setUserPhone,
    userEmail,
    setUserEmail,
    handleClaimGift,
    toastMessage,
  };
}
