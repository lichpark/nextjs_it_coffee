import Card from "./Card";

const ItemList = () => {
  const itemArr = ["에스프레소"];
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "1%",
      }}
    >
      <Card
        altText="에스"
        itemName="에스 프레소"
        img="	https://composecoffee.com/files/thumbnails/208/384x530.crop.jpg?t=1722850777"
      />
    </section>
  );
};

export default ItemList;
