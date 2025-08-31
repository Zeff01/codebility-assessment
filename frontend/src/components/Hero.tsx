import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-moola-bg via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-moola-text leading-tight mb-6 drop-shadow-sm">
              Smart Banking for Modern Life
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Moola helps you manage your money, track expenses, and reach your
              financial goals with ease. Experience seamless banking, exclusive
              rewards, and total control—all in one place.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-moola-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center shadow-lg">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-moola-accent text-moola-accent px-8 py-4 rounded-lg font-medium hover:bg-moola-accent hover:text-white transition-colors">
                Learn More
              </button>
            </div>
            <div className="mt-6 flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                Trusted by 50,000+ users
              </span>
              <span className="flex -space-x-2">
                <Image
                  src="/user1.jpg"
                  alt="User 1"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/user2.jpg"
                  alt="User 2"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/user3.jpg"
                  alt="User 3"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                />
              </span>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-blue-100 rounded-2xl p-8 w-full max-w-md h-80 flex items-center justify-center shadow-xl relative overflow-hidden">
              <Image
                src="/dashboard-preview.png"
                alt="App Dashboard Preview"
                width={320}
                height={220}
                className="object-contain rounded-xl"
                priority
              />
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-moola-text text-base bg-white bg-opacity-80 px-4 py-1 rounded-full shadow">
                App Dashboard Preview
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
