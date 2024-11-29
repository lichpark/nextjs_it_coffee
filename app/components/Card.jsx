const Card = (props) => {
  return (
    <article
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img src={props.img} alt={props.altText} style={{ width: "100%" }} />
      <span style={{ fontSize: "14px" }}>{props.itemName}</span>
    </article>
  );
};

export default Card;
