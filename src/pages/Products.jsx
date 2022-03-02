import React from "react";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";

function Products() {
  const productData = useSelector((state) => state.productData.data);

  const cards = productData.map((data) => (
    <li key={data.id}>
      <ProductCard
        link={`product/${data.id}`}
        key={data.id}
        title={data.title.split(" ").splice(0, 3).join(" ")}
        image={data.image}
        price={data.price.toFixed(2)}
      />
    </li>
  ));
  return (
    <div className="bg-white">
      <div className="container px-6 pb-8 mx-auto">
        {productData.length === 0 ? (
          <Loader />
        ) : (
          <div className="lg:flex lg:-mx-2  mt-8 gap-2">
            <ul className=" grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {cards}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
