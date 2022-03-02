import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Loader from "../components/Loader";
import Button from "../components/Button";
import { setCart } from "../store/cartSlice";

function ProductPage() {
  const dispatch = useDispatch();
  const [item, setItem] = useState(1);

  const incrementItemHandler = () =>
    setItem((state) => (state < 5 ? +state + 1 : state));

  const dencrementItemHandler = () =>
    setItem((state) => (state > 1 ? state - 1 : state));

  const { productid } = useParams();

  const productData = useSelector((state) => state.productData.data);

  const pageData =
    productData.length === 0
      ? []
      : productData.find((element) => +element.id === +productid);

  const addToCartHangler = () => {
    dispatch(
      setCart({
        id: pageData.id,
        title: pageData.title,
        qty: item,
        price: pageData.price.toFixed(2),
        image: pageData.image,
        category: pageData.category,
      })
    );
  };

  return (
    <>
      {productData.length === 0 ? (
        <Loader />
      ) : (
        <div className="w-full flex justify-center">
          <div className="w-full md:w-2/3 md:flex items-center my-8">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <img src={pageData.image} className=" h-64 md:h-96" alt="" />
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                <h1 className="font-bold uppercase text-2xl">
                  {pageData.title}
                </h1>
                <Link
                  to={`/category/${pageData.category.split(" ").join("-")}`}
                  className="font-bold uppercase text-lg text-blue-600 hover:text-blue-500 hover:underline"
                >
                  {pageData.category}
                </Link>
                <p className="text-sm">{pageData.description}</p>
              </div>
              <div>
                <div className="inline-block align-bottom mr-5">
                  <span className="font-bold text-2xl leading-none align-baseline">
                    ${pageData.price && pageData.price.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between mt-4">
                  <div className="flex items-center gap-4 bg-gray-200 h-16 w-32 justify-center border-transparent rounded-md">
                    <Button
                      className=" px-1 py-1 rounded-sm"
                      onClick={dencrementItemHandler}
                    >
                      <AiOutlineMinus />
                    </Button>
                    <p className=" text-lg font-bold">{item}</p>
                    <Button
                      className=" px-1 py-1 rounded-sm"
                      onClick={incrementItemHandler}
                    >
                      <AiOutlinePlus />
                    </Button>
                  </div>
                  <Button onClick={addToCartHangler}>Add to cart</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductPage;
