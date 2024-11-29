import Card from "../components/Card";
import ItemList from "../components/ItemList";
import MenuCategory from "../components/MenuCategory";
const Page = async () => {
  const data = await fetch("https://api.sampleapis.com/coffee/hot").then(
    (response) => response.json()
  );

  return (
    <section>
      <MenuCategory />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1%",
        }}
      >
        {data.map((v, i) => (
          <Card key={i} img={v.image} itemName={v.title} altText={v.title} />
        ))}
      </div>
    </section>
  );
};

export default Page;
