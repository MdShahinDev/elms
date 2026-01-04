
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<{h: number, m: number, s: number}>({h: 0, m: 0, s: 0});

  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          h: Math.floor((difference / (1000 * 60 * 60)) % 24),
          m: Math.floor((difference / 1000 / 60) % 60),
          s: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTime, 1000);
    calculateTime();

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-2 text-xs font-bold text-[#E91040]">
      <span className="bg-[#E91040]/10 px-2 py-1 rounded">{timeLeft.h}h</span>
      <span className="bg-[#E91040]/10 px-2 py-1 rounded">{timeLeft.m}m</span>
      <span className="bg-[#E91040]/10 px-2 py-1 rounded">{timeLeft.s}s</span>
    </div>
  );
};

export default Countdown;
