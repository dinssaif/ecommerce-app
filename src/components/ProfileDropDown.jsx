import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { setLogout } from "../store/userDataSlice";

function ProfileDropDown(props) {
  const dispatch = useDispatch();

  //Signout handler

  const signOutHandler = () => {
    dispatch(setLogout());
    localStorage.removeItem("ECOMMERCE");
  };
  const [openMenu, setOpenMenu] = useState(false);

  //Menu open/close handler
  const openMenuHangler = () => {
    setOpenMenu((state) => !state);
  };
  return (
    <div>
      <div onClick={openMenuHangler} className="relative inline-block ">
        {/* <!-- Dropdown toggle button --> */}
        <button className="relative  flex items-center">
          <span className="mx-1">{props.name}</span>
          <RiArrowDropDownLine className="w-6 h-6" />
        </button>
        {/* <!-- Dropdown menu --> */}
        {openMenu && (
          <div className=" absolute right-0 top-12 w-56 flex flex-col items-start py-2 mt-2 overflow-hidden bg-white rounded-md shadow-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-90 border ">
            <button
              href="/"
              className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform  hover:bg-gray-100  "
            >
              <img
                className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                src={props.image}
                alt="profile-pic"
              />
              <div className="mx-1 flex flex-col items-start">
                <h1 className="text-sm font-semibold text-gray-700 ">
                  {props.name}
                </h1>
                <p className="text-sm text-gray-500 ">{props.email}</p>
              </div>
            </button>

            <hr className="border-gray-200  " />

            <button
              href="/"
              className="flex justify-start w-full px-4 py-3 text-sm text-gray-800 capitalize transition-colors duration-200 transform  hover:bg-gray-200  "
            >
              view profile
            </button>

            <button
              href="/"
              className=" flex justify-start w-full  px-4 py-3 text-sm text-gray-800 capitalize transition-colors duration-200 transform  hover:bg-gray-100  "
            >
              Settings
            </button>

            <button
              href="/"
              className="flex justify-start w-full  px-4 py-3 text-sm text-gray-800 capitalize transition-colors duration-200 transform  hover:bg-gray-100  "
            >
              Help
            </button>
            <button
              onClick={signOutHandler}
              className="flex justify-start w-full  px-4 py-3 text-sm text-gray-800 capitalize transition-colors duration-200 transform  hover:bg-gray-100  "
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileDropDown;
