export default function Clock({ getFullTime }) {
  const { hour, min, sec, ms } = getFullTime();

  return (
    <div
      className="clock-box"
      style={{
        border: "1rem gray solid",
        borderRadius: 10,
        backgroundColor: "black",
        color: "white",
        fontSize: "6rem",
        maxWidth: 1000,
        margin: " 10rem auto",
        fontFamily: "monospace",
        padding: "2rem 10px",
        textShadow: "2px 2px 10px white",
      }}
    >
      <span>{hour} : </span>
      <span style={{ fontSize: "5rem" }}>{min} : </span>
      <span style={{ fontSize: "4rem" }}>{sec} : </span>
      <span style={{ fontSize: "3rem" }}>{ms}</span>
    </div>
  );
}
