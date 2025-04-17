import Image from "next/image";

const testimonials = [
  {
    feedback:
      "This is a great app that saves money. Saved over 200 dollars so far!",
    img: "https://www.moola.com/assets/media/icons/apple-store-icon.png",
  },
  {
    feedback:
      "Great way to save on the stuff you buy anyway. I always check Moola first when shopping online or in-store. It also helped me organize all my rewards cards in one place which stream-lined my wallet.",
    img: "https://www.moola.com/assets/media/icons/google-store-icon.png",
  },
  {
    feedback:
      "It's very easy to use, has more than 200 brands, and also lots of discounts and bonuses. Once you've paid you can receive the gift cards within 1 minute.",
    img: "https://www.moola.com/assets/media/icons/google-play-store-icon.png",
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-[1216px] w-full mx-auto my-8 min-[1200px]:my-20">
      <h2 className="text-[#4c0d94] text-center text-[28px] font-semibold mb-4">
        What Do Customers Think About Moola
      </h2>
      <div className="flex flex-col min-[1200px]:flex-row">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col w-[80%] min-[1200px]:justify-center min-[1200px]:w-[348px] mx-auto rounded-3xl py-6 px-8 mb-4 shadow-[0_4px_10px_rgba(0,0,0,0.25)]"
          >
            <p className="text-xs font-medium text-neutral-900/70 text-center mb-4 mx-auto">
              {testimonial.feedback}
            </p>
            <Image
              src="https://www.moola.com/assets/media/images/stars-5.png"
              alt="ratings"
              height={24}
              width={120}
              className="mb-4 self-center w-auto h-auto"
            />
            <Image
              src={testimonial.img}
              alt="brand"
              width={120}
              height={27}
              className="self-center mb-4  w-auto h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
