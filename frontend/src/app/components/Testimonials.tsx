import Container from "./ui/Container";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Food Enthusiast",
    image: "/img/people/sarah-johnson.jpeg",
    content:
      "BiteRush has revolutionized my lunch breaks! The food is always fresh, delivery is lightning fast, and the app is super easy to use.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Professional",
    image: "/img/people/michael-chen.jpeg",
    content:
      "As someone who orders lunch daily, I can confidently say BiteRush offers the best service. Their customer support is exceptional!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Student",
    image: "/img/people/emily-rodriguez.jpeg",
    content:
      "The variety of options and student discounts make BiteRush my go-to food delivery app. Never had a bad experience!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied
            customers about their BiteRush experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 flex-grow">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
