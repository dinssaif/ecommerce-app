import React from "react";

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={` py-3 px-6 flex items-center justify-center rounded-md border border-transparent bg-blue-600 min-pa text-base font-medium text-white shadow-sm hover:bg-blue-800 ${props.className}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
