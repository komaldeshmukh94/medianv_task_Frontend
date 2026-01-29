import React from "react";

const TimerDisplay = ({ time }) => {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  return (
    <h1>
      {String(minutes).padStart(2, "0")}:
      {String(seconds).padStart(2, "0")}:
      {String(milliseconds).padStart(2, "0")}
    </h1>
  );
};

export default React.memo(TimerDisplay);
