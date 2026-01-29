const Laps = ({ laps }) => {
  return (
    <ul className="laps">
      {laps.map((lap, index) => (
        <li key={index}>
          Lap {index + 1}: {lap} ms
        </li>
      ))}
    </ul>
  );
};

export default Laps;
