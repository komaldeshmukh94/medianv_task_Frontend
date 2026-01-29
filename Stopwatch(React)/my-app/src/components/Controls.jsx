const Controls = ({
  isRunning,
  startTimer,
  stopTimer,
  resetTimer,
  addLap
}) => {
  return (
    <div className="controls">
      {!isRunning ? (
        <button onClick={startTimer}>Start</button>
      ) : (
        <button onClick={stopTimer}>Stop</button>
      )}
      <button onClick={resetTimer}>Reset</button>
      <button onClick={addLap} disabled={!isRunning}>
        Lap
      </button>
    </div>
  );
};

export default Controls;
