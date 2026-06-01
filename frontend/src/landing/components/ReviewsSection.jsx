import { Star } from "lucide-react";
import review1 from "../../assets/review-1.jpg";
import review2 from "../../assets/review-2.jpg";
import review3 from "../../assets/review-3.jpg";
import review4 from "../../assets/review-4.jpg";
import review5 from "../../assets/review-5.jpg";
import { getThemeComponents } from "../../components/ThemeComponents.jsx";

const reviews = [
  {
    name: "Customer 1",
    detail: "Ordered for family dinner",
    image: review1,
  },
  {
    name: "Customer 2",
    detail: "Repeat customer",
    image: review2,
  },
  {
    name: "Customer 3",
    detail: "Team snack order",
    image: review3,
  },
  {
    name: "Customer 4",
    detail: "Birthday spread",
    image: review4,
  },
  {
    name: "Customer 5",
    detail: "Weekend order",
    image: review5,
  },
];

function ReviewsSection() {
  const ui = getThemeComponents("dailySushi");

  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${ui.sections.cream}`} id="reviews">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="max-w-3xl" data-reveal>
          <p className={`text-xs font-black uppercase tracking-[0.24em] ${ui.text.accent}`}>Customer Reviews</p>
          <h2 className={`mt-3 font-serif text-4xl font-black leading-tight tracking-normal sm:text-5xl ${ui.text.primary}`}>Real messages from happy customers</h2>
          <p className={`mt-4 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${ui.text.primary}`}>
            We deliver happiness to your doorstep, and our customers can't help but share their joy. Read what they have to say about their experience with Daily Sushi.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-10 md:grid-cols-2 xl:grid-cols-5">
          {reviews.map((review) => (
            <article className={`group flex min-w-0 flex-col overflow-hidden rounded-lg border transition duration-300 hover:-translate-y-2 ${ui.cards.reviewShell}`} data-reveal key={review.name}>
              <div className="aspect-[4/3] overflow-hidden bg-white">
                <img alt={`Review from ${review.name}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={review.image} />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className={`flex flex-wrap items-center gap-1 ${ui.text.gold}`}>
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star fill="currentColor" key={starIndex} size={16} />
                  ))}
                  <span className={`ml-2 text-xs font-black ${ui.text.primary}`}>5.0</span>
                </div>
                <div className={`mt-5 border-t pt-4 ${ui.cards.reviewDivider}`}>
                  <div className="min-w-0">
                    <p className={`truncate font-black ${ui.text.primary}`}>{review.name}</p>
                    <p className={`truncate text-xs font-bold ${ui.text.muted}`}>{review.detail}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
