import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Alice Johnson",
    text: "Amazing service! The team was super responsive and helpful.",
    rating: 5,
  },
  {
    name: "Rohan Singh",
    text: "Absolutely loved it. Highly recommend to everyone!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    text: "Top-notch experience, very professional and quick.",
    rating: 5,
  },
  {
    name: "Michael Lee",
    text: "Exceeded my expectations! Will use again.",
    rating: 5,
  },
  {
    name: "Sanya Kapoor",
    text: "Fantastic support and great results.",
    rating: 5,
  },
  {
    name: "David Brown",
    text: "Loved the workflow and the design. Very smooth!",
    rating: 5,
  },
];

const ReviewCard = ({ review }: { review: typeof reviews[number] }) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 min-w-[288px] flex flex-col justify-between border border-gray-100 break-words">
      <div className="flex items-center mb-3">
        {Array.from({ length: review.rating }).map((_, idx) => (
          <FaStar key={idx} className="text-yellow-400 mr-1" />
        ))}
      </div>
      <p className="text-gray-700 mb-4 break-words">{review.text}</p>
      <h4 className="text-gray-900 font-semibold">{review.name}</h4>
    </div>
  );
};

const Reviews = () => {
  const repeatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <div className="w-full py-32 overflow-hidden relative bg-black">
      {/* Heading and Description */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-7xl font-bold text-white mb-4 font-bricolage-grotesque">What Our Clients Say</h2>
        <p className="text-white text-2xl max-w-2xl mx-auto">
          Hear directly from our satisfied clients and see why they love working with us.
        </p>
      </div>

      {/* 3 Layers of Reviews */}
      <div className="relative w-full min-h-[500px]">
        {Array.from({ length: 3 }).map((_, layer) => (
          <motion.div
            key={layer}
            className="flex gap-10 absolute whitespace-nowrap"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 70 + layer * 10,
              ease: "linear",
            }}
            style={{ top: `${layer * 160}px` }}
          >
            {repeatedReviews.map((review, idx) => (
              <ReviewCard key={idx + layer * 10} review={review} />
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
