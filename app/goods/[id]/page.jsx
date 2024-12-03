const Page = async ({ params }) => {
  const { id } = await params;

  const goodsData = await fetch(
    `https://dummyjson.com/products/search?q=${id}`
  ).then((res) => res.json());
  console.log(goodsData);
  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        margin: "5% auto",
      }}
    >
      {/* 굿즈 안에 아이디! {id} */}

      <div>
        <article>
          <img
            // src={goodsData.products[id - 1].images[0]}
            src={goodsData.products[0].images[0]}
            style={{ width: "100%" }}
          />
        </article>
        <div>
          <span>
            {/* {goodsData.products[id - 1].title} */}
            {goodsData.products[0].title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;
