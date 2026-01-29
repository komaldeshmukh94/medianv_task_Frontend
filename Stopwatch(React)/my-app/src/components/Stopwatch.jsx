import { useEffect, useState } from "react";
import TimerDisplay from "./TimerDisplay";
import Laps from "./Laps";
import Controls from "./Controls";

const Stopwatch = () => {
  const [time, setTime] = useState(0);        // useState
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  // useEffect for side effects
  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    }

    // cleanup function
    return () => clearInterval(intervalId);
  }, [isRunning]); // proper dependency

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const addLap = () => {
    setLaps(prev => [...prev, time]);
  };

  return (
    <div className="stopwatch">
      <TimerDisplay time={time} />
      <Controls
        isRunning={isRunning}
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
        addLap={addLap}
      />
      <Laps laps={laps} />
    </div>
  );
};

export default Stopwatch;
