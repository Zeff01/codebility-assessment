import React from "react";

const Reviews = () => {
  const reviews = [
    {
      avatar: "/apple.png",
      rating: 5,
      text: "This is a great app that saves money. Saved over 200 dollars so far!",
    },
    {
      avatar: "/google.png",
      rating: 4,
      text: "Great way to save on the stuff you buy anyway. I always check Moola first when shopping online or in-store. It also helped me organize all my rewards cards in one place which stream-lined my wallet.",
    },
    {
      avatar: "/gplay.png",
      rating: 5,
      text: "It's very easy to use, has more than 200 brands, and also lots of discounts and bonuses. Once you've paid you can receive the gift cards within 1 minute.",
    },
  ];
  return (
    <div className="py-12 px-4 md:px-0 bg-white space-y-4">
      <h1 className="text-3xl md:text-4xl font-semibold text-center text-purple-700">
        What Do Customers Think About Moola
      </h1>
      <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
        Don't just take our word for it. See what our satisfied customers have to say about their experience with Moola.
      </p>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="bg-purple-50 rounded-2xl shadow-md p-6 flex flex-col items-center text-center h-full"
          >
            <img
              src={review.avatar}
              className="w-20 h-20 mb-4 object-contain bg-white rounded-lg border-4 border-purple-200"
            />
            <div className="flex items-center justify-center mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < review.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
              ))}
            </div>
            <p className="text-xs text-gray-700">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
