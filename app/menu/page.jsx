import Link from "next/link";
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
          <Link href={`/menu/${i}`} key={i}>
            <Card img={v.image} itemName={v.title} altText={v.title} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Page;
