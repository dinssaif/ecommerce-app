import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";

function CategoryPage() {
  const { category } = useParams();
  const productData = useSelector((state) => state.productData.data);

  //Find catagory match data
  const findCards = (input) => {
    const z = productData.filter((el) => el.category.toLowerCase() === input);
    return z;
  };
  const cards =
    findCards(category.toLowerCase().split("-").join(" ")).length === 0 ? (
      <p className="">No product found</p>
    ) : (
      findCards(category.toLowerCase().split("-").join(" ")).map((data) => (
        <li key={data.id}>
          <ProductCard
            link={{
              pathname: `/product/${data.id}`,
              state: { fromDashboard: true },
            }}
            key={data.id}
            title={data.title.split(" ").splice(0, 3).join(" ")}
            image={data.image}
            price={data.price.toFixed(2)}
          />
        </li>
      ))
    );
  return (
    <div className="bg-white">
      <div className="container px-6 pb-8 mx-auto">
        {productData.length === 0 ? (
          <Loader />
        ) : (
          <div className="lg:flex lg:-mx-2  mt-8 gap-2">
            <ul className="  grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {cards}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
