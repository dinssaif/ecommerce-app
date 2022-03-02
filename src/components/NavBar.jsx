import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { SiBrandfolder } from "react-icons/si";
import { useSelector } from "react-redux";
import Button from "./Button";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { setUserData } from "../store/userDataSlice";
import ProfileDropDown from "./ProfileDropDown";

function NavBar() {
  const dispatch = useDispatch();

  // Google response handler

  const responseGoogle = (response) => {
    localStorage.setItem("ECOMMERCE", JSON.stringify(response.profileObj));
    dispatch(setUserData(response.profileObj));
  };

  // Store login data to local

  useEffect(() => {
    const x = localStorage.getItem("ECOMMERCE");
    if (x) {
      console.log(JSON.parse(x));
      dispatch(setUserData(JSON.parse(x)));
    }
  }, [dispatch]);

  const userData = useSelector((state) => state.userData);

  const navigate = useNavigate();
  const [input, setInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  //Geting input handler

  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
  };

  //Search bar open/close handler

  const serachHandler = () => {
    setInput((state) => !state);
  };

  //Search redirecter onclick after validation

  const searchInputHandler = () => {
    inputValue !== "" && navigate(`/search/${inputValue.split(" ").join("-")}`);
    inputValue !== "" && setInput((state) => !state);
    setInputValue("");
  };

  const cartData = useSelector((state) => state.cart.data);

  //Navlink classes handler

  const navLinkClassHandler = (active) =>
    `border-b-2 ${
      active.isActive
        ? "border-blue-500 text-blue-700 opacity-100"
        : "border-transparent"
    } hover:text-blue-500 transition-colors duration-200 h-[70px] flex justify-center items-center text-black opacity-80	 transform hover:opacity-100  hover:border-blue-500 mx-1.5 sm:mx-6`;

  return (
    <nav className=" font-medium  bg-white w-screen shadow border-b border-gray-200 fixed bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80 ">
      <div className="container flex items-center justify-between px-6 mx-auto text-black  capitalize">
        <div className="flex items-center gap-4 md:gap-0">
          <div className="h-[70px] flex justify-center items-center">
            <NavLink to="/" className={navLinkClassHandler}>
              <SiBrandfolder />
            </NavLink>
          </div>

          <NavLink
            to="/category/women's-clothing"
            className={navLinkClassHandler}
          >
            Women
          </NavLink>

          <NavLink
            to="/category/men's-clothing"
            className={navLinkClassHandler}
          >
            Men
          </NavLink>

          <NavLink to="/blog" className={navLinkClassHandler}>
            blog
          </NavLink>
        </div>

        <div className=" text-sm gap-4 text-black relative flex">
          {userData.status === "SUCCESS" ? (
            <button className="hover:text-blue-600">
              <ProfileDropDown
                name={userData.data.name}
                image={userData.data.imageUrl}
                email={userData.data.email}
              />
            </button>
          ) : (
            <GoogleLogin
              clientId={process.env.REACT_APP_ECOMMERCE_GOOGLE_CLIENT_ID}
              buttonText="Login"
              onSuccess={responseGoogle}
              // onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              render={(renderProps) => (
                <button
                  className="hover:text-blue-600"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Login with Google
                </button>
              )}
            />
          )}
          <span className="h-18 w-px bg-gray-200" aria-hidden="true"></span>

          {input && (
            <div className="absolute right-0 md:right-4 top-[80px] border-2 w-72 bg-white p-2">
              <div className="flex  h-12 w-full  ">
                <input
                  onKeyPress={(event) => {
                    if (event.key === "Enter") {
                      searchInputHandler();
                    }
                  }}
                  onChange={inputValueHandler}
                  className=" border-2 w-3/4 p-2"
                />
                <Button
                  onClick={searchInputHandler}
                  className="py-1 px-1 rounded-none w-1/4"
                >
                  <BiSearchAlt2 className="w-5 h-5 cursor-pointer" />
                </Button>
              </div>
            </div>
          )}
          <button onClick={serachHandler}>
            <BiSearchAlt2 className="w-6 h-6 cursor-pointer" />
          </button>
          <NavLink to="/cart" className={navLinkClassHandler}>
            <div className="relative">
              <BsCart2 className="w-5 h-5" />
              {cartData.length > 0 && (
                <div className=" absolute w-3 h-3 top-0 left-4 border-transparent rounded-full bg-blue-500 text-1x5 flex justify-center items-center text-white">
                  {cartData.length}
                </div>
              )}
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
