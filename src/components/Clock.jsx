// Init
import React, { useState, useEffect } from 'react';

import bg from '../assets/bg.svg';
import borderBold from '../assets/border-bold.svg';
import borderLight from '../assets/border-light.svg';
import dot from '../assets/dot.svg';
import hour from '../assets/hour.svg';
import minute from '../assets/minute.svg';
import second from '../assets/second.svg';

// Component
export default function Clock() {
  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(20);
  const [seconds, setSeconds] = useState(45);

  useEffect(() => {
    const interval = setInterval(() => {
      setHours(new Date().getHours());
      setMinutes(new Date().getMinutes());
      setSeconds(new Date().getSeconds());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container">
      <div>
        {hours}:{minutes}:{seconds}
      </div>
      <img src={bg} className="bg" />
      <div className="borderBold"></div>
      <img src={hour} className="hour" />
      <img src={minute} className="minute" />
      <img src={second} className="second" />
      <img src={dot} className="dot" />
    </div>
  );
}
