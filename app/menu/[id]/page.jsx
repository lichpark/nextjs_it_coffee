import Card from "@/app/components/Card";

const Page = async ({ params }) => {
  const data = await fetch("https://api.sampleapis.com/coffee/hot").then(
    (response) => response.json()
  );

  const { id } = params;
  return (
    <div style={{ width: "100px", height: "100px", margin: "10% auto" }}>
      <Card
        img={data[id].image}
        itemName={data[id].title}
        altText={data[id].title}
      />
    </div>
  );
};

export default Page;
