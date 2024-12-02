const PromoCard = (props) => {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        maxWidth: "300px",
        border: "2px solid #afccf1",
        borderRadius: "10px",
      }}
    >
      <div style={{ width: "100%" }}>
        <img src={props.src} style={{ width: "100%", borderRadius: "10px" }} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ color: "#7fb1ee", fontSize: "0.8em", margin: "4% 0%" }}>
          {props.date}
        </p>
        <p style={{ fontSize: "1em", margin: "4% 0%" }}>{props.text}</p>
      </div>
    </article>
  );
};

export default PromoCard;
