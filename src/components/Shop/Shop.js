import React from "react";
import "./Shop.css";
import image from "./asus-rog-strix.jpg";
const Shop = () => {
  return (
    <div className="container mx-auto shop-container">
      <div className="right-banner">
        <h1 className="text-2xl mt-3 lg:text-5xl lg:mb-3 font-bold">
          Get Your Laptop For Cheap
        </h1>
        <h3 className="text-xl lg:text-4xl font-semibold text-center mb-5">
          Great Prices On Laptops
        </h3>
        <p className=" text-xl w-3/4 mx-auto mb-8 ">
          Welcome to our laptop heaven.Choose your laptop from here with a very
          cheap price.We have multiple brand Laptops with top notch warranty
          service.
        </p>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            class="w-5 h-5 mr-2 -ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
          </svg>
          Buy now
        </button>
      </div>
      <div className="left-banner">
        <img src={image} />
      </div>
    </div>
  );
};

export default Shop;
