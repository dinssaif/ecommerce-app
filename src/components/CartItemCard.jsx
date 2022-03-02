import React from "react";
import { useDispatch } from "react-redux";
import { removeCart } from "../store/cartSlice";

function CartItemCard(props) {
  const dispatch = useDispatch();

  // Remover item from cart function

  const removeItemHandler = () => {
    dispatch(removeCart(props.id));
  };

  return (
    <li className="flex py-2">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={props.image}
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <h1 href="/"> {props.title} </h1>
            </h3>
            <p className="ml-4">${props.price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{props.category}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {props.qty}</p>

          <div onClick={removeItemHandler} className="flex">
            <button
              type="button"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItemCard;
