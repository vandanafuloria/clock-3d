export default function Clock({ getFullTime }) {
  const { hour, min, sec, ms } = getFullTime();

  return (
    <div
      className="clock-box"
      style={{
        border: "1rem gray solid",
        borderRadius: 10,
        backgroundColor: "palegoldenrod",
        fontSize: "5rem",
        maxWidth: 1000,
        margin: " 5rem auto",
        fontFamily: "monospace",
        padding: "2rem 10px",
        textShadow: "2px 2px 10px gray",
      }}
    >
      <span>{hour} : </span>
      <span>{min} : </span>
      <span>{sec} : </span>
      <span>{ms}</span>
    </div>
  );
}
