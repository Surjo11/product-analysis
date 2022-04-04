import React from "react";
import { useNavigate } from "react-router-dom";

const ReviewButton = () => {
  let navigate = useNavigate();
  return (
    <div className="w-full flex justify-center mt-7">
      <button
        onClick={() => {
          navigate("/reviews");
        }}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-72"
      >
        Go to Review Page
      </button>
    </div>
  );
};

export default ReviewButton;
