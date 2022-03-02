import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import CartItemCard from "../components/CartItemCard";

function Cart() {
  const cartData = useSelector((state) => state.cart.data);

  //Total price calculator
  let totalPrice = 0;
  for (const x of cartData) {
    console.log(x);
    totalPrice = totalPrice + +x.price * x.qty;
  }

  //Displaying cart items
  const cartList = cartData.map((ele) => (
    <CartItemCard
      key={ele.id}
      title={ele.title}
      image={ele.image}
      qty={ele.qty}
      price={ele.price}
      id={ele.id}
      category={ele.category}
    />
  ));
  return (
    <div className="flex justify-center">
      <div className="flex h-full flex-col bg-white w-screen px-6">
        <div className="flex-1 py-6 px-4 sm:px-6">
          <div className="flex items-start justify-between">
            <h2
              className="text-lg font-medium text-gray-900"
              id="slide-over-title"
            >
              Shopping cart
            </h2>
            <p>Total items {cartList.length}</p>
          </div>

          <div className="mt-8">
            <div role="list" className="-my-6 divide-y divide-gray-200">
              {cartList.length === 0 ? (
                <div className=" h-64 flex justify-center items-center font-bold">
                  Cart is empty
                </div>
              ) : (
                <div className="min-h-5">{cartList}</div>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <Link to="/checkout">
              <Button className="w-full">Checkout</Button>
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or{" "}
              <Link
                to="/"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Continue Shopping<span aria-hidden="true"> &rarr;</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
