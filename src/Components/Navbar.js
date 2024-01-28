import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className="bg-gray-500 flex items-center justify-between px-4 py-2">
        <div className="text-lime-400 font-bold text-xl  hover:cursor-pointer">
          <img
            className="w-10"
            src="https://www.freepnglogos.com/uploads/logo-home-png/pros-cons-investing-rental-property-piktochart-14.png"
            alt="No"
          />
        </div>

        <div className="hidden md:flex">
          <ul className="flex gap-5">
            <li className=" hover:cursor-pointer hover:text-[rgb(0,255,0)]">
              <NavLink
                to="home"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-[rgb(0,255,0)] font-bold" : "text-black"
                  } border-b lg:hover:bg-transparent lg:border-0 hover:text-[rgb(0,255,0)] lg:p-0`
                }
              >
                Home
              </NavLink>
            </li>
            <li className=" hover:cursor-pointer hover:text-[rgb(0,255,0)]">
              <NavLink
                to="about"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-[rgb(0,255,0)] font-bold" : "text-black"
                  } border-b  lg:hover:bg-transparent lg:border-0 hover:text-[rgb(0,255,0)] lg:p-0`
                }
              >
                About
              </NavLink>
            </li>
            <li className=" hover:cursor-pointer hover:text-[rgb(0,255,0)]">
              <NavLink
                to="service"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-[rgb(0,255,0)] font-bold" : "text-black"
                  } border-b  lg:hover:bg-transparent lg:border-0 hover:text-[rgb(0,255,0)] lg:p-0`
                }
              >
                Service
              </NavLink>
            </li>

            <li className=" hover:cursor-pointer hover:text-[rgb(0,255,0)]">
              <NavLink
                to="login"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-[rgb(0,255,0)] font-bold" : "text-black"
                  } border-b  lg:hover:bg-transparent lg:border-0 hover:text-[rgb(0,255,0)] lg:p-0`
                }
              >
                Login
              </NavLink>
            </li>
            <li className=" hover:cursor-pointer hover:text-[rgb(0,255,0)]">
              <NavLink
                to="signup"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-[rgb(0,255,0)] font-bold" : "text-black"
                  } border-b  lg:hover:bg-transparent lg:border-0 hover:text-[rgb(0,255,0)] lg:p-0`
                }
              >
                Signup
              </NavLink>
            </li>
          </ul>
        </div>
        {toggle ? (
          <IoMenu
            onClick={() => setToggle(!toggle)}
            className="md:hidden text-2xl block"
          />
        ) : (
          <IoCloseSharp
            onClick={() => setToggle(!toggle)}
            className="md:hidden text-2xl block"
          />
        )}
        <div
          className={`md:hidden flex fixed bg-black text-white top-[56px] 
                        ${
                          !toggle ? "left-[0]" : "left-[-100%]"
                        } w-full gap-7 h-screen`}
        >
          <ul className="gap-15">
            <li className="p-2 px-5 hover:cursor-pointer hover:text-[rgb(0,255,0)]">
              <Link to="home" onClick={() => setToggle(!toggle)}>
                Home
              </Link>
            </li>
            <li className="p-2 px-5 hover:cursor-pointer hover:text-[rgb(0,255,0)]">
              <Link to="about" onClick={() => setToggle(!toggle)}>
                About
              </Link>
            </li>
            <li className="p-2 px-5 hover:cursor-pointer hover:text-[rgb(0,255,0)]">
              <Link to="service" onClick={() => setToggle(!toggle)}>
                Service
              </Link>
            </li>
            <li className="p-2 px-5 hover:cursor-pointer hover:text-[rgb(0,255,0)]">
              <Link to="login" onClick={() => setToggle(!toggle)}>
                Login
              </Link>
            </li>
            <li className="p-2 px-5 hover:cursor-pointer hover:text-[rgb(0,255,0)]">
              <Link to="signup" onClick={() => setToggle(!toggle)}>
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navbar;
