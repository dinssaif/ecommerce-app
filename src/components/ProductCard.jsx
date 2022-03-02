import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <Link to={props.link}>
      <div className=" p-4  rounded-md border hover:shadow-md border-gray-200">
        <div className="flex flex-col w-full max-w-lg mx-auto">
          <img
            className="object-cover w-full rounded-md h-44 xl:h-44"
            src={props.image}
            alt={"Product"}
          />
          <h4 className="mt-2 font-medium text-sm text-gray-700">
            {props.title}
          </h4>
          <span className="flex justify-between gap-3">
            <p className="text-blue-500">{`$${props.price}`}</p>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
