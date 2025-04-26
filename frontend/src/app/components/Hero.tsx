import Container from "./ui/Container";
import Button from "./ui/Button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-teal-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-orange-200/30 blur-3xl"></div>
        <div className="absolute -left-32 top-64 w-96 h-96 rounded-full bg-teal-200/20 blur-3xl"></div>
      </div>

      <Container className="relative">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6 ">
              Delicious Food,
              <span className="block text-orange-500">Delivered Fast</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience the perfect blend of taste and convenience. Fresh
              ingredients, amazing flavors, right at your doorstep in minutes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button variant="primary" size="lg" className="group">
                Order Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View Menu
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 mx-auto rounded-full bg-gradient-to-br from-orange-100 to-orange-50 shadow-xl overflow-hidden">
                <img
                  src="/img/burger-with-lettuce-and-cheese.jpg"
                  alt="Delicious burger"
                  className="w-full h-full object-cover mix-blend-multiply"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 md:-left-12 w-32 h-32 md:w-40 md:h-40 bg-white rounded-3xl shadow-xl p-3 transform rotate-6 animate-float">
                <img
                  src="/img/french-fries.jpeg"
                  alt="French fries"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              <div className="absolute -top-4 -right-4 md:-right-8 w-24 h-24 md:w-32 md:h-32 bg-white rounded-3xl shadow-xl p-2 transform -rotate-6 animate-float-delayed">
                <img
                  src="/img/pizza.jpeg"
                  alt="Pizza"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
