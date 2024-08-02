import React from "react";
import Products from "../Products/Products";
import { data } from "autoprefixer";
import Img1 from "../../assets/shirt/men1.jpeg";
import Img2 from "../../assets/shirt/men2.jpeg";
import Img3 from "../../assets/shirt/men3.jpeg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual boy",
    description: "ini barangnya swangattt bagus",
  },
  {
    id: 2,
    img: Img2,
    title: "Star Boy",
    description: "ini barangnya swangattt mengstarboykan",
  },
  {
    id: 3,
    img: Img3,
    title: "Band Boy",
    description: "ini barangnya swangattt mengebandkan",
  },
];
const TopProducts = () => {
  return (
    <div>
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-28 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products For You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, odit!
          </p>
        </div>
        {/* Body Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5   place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md "
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* Star Rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 
                text-white py-1 px-4 rounded-full mt-4 
                group-hover:bg-white group-hover:text-primary"
                  // onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
