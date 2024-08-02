import React from "react";
import Logo from "../../assets/Logo1.png";
import { FiSearch } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 1,
    name: "Best Sell",
    link: "/#",
  },
  {
    id: 1,
    name: "Top Rated",
    link: "/#",
  },
];

const navbar = () => {
  return (
    <div className="shadow-md bg-slate-400 dark:bg-black dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/50 py-1">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-4xl flex gap-1">
              <img src={Logo} alt="Logo" className="w-10" />
              Parshop
            </a>
          </div>
          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-500 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400 dark:bordergray-500 dark:bg-gray-800 "
              />
              <FiSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* order button */} 
            <button
              onClick={() => alert("ordering is not alvailable")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* Dark Mode Swtich */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* Lower Navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-sky-700 duration-300"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* simple dropdown */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaAngleDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
