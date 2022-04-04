import React from "react";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";
import ReviewButton from "../ReviewButton/ReviewButton";
import Shop from "../Shop/Shop";

const Home = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div>
      <Shop></Shop>
      <h1 className="text-center text-xl font-semibold lg:text-5xl font-semibold">
        Our Customer Reviews
      </h1>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20 mt-10">
        {reviews.slice(0, 3).map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
      <ReviewButton></ReviewButton>
    </div>
  );
};

export default Home;
