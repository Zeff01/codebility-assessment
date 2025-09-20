import React from "react";

const About = () => {
  return (
    <section id="about" className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <div>
            <h2 className="text-balance text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Your everyday companion, simplified
            </h2>
            <div className="mt-8 space-y-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              <p>
                Experience the perfect blend of simplicity and power. Our mobile
                app is designed to streamline your daily tasks with an intuitive
                interface that feels natural from the first tap.
              </p>
              <p>
                What makes us different? We focus on the essentials. No clutter,
                no complexity—just the features you need, when you need them.
                Built with care for users who value both functionality and
                beautiful design.
              </p>
            </div>
            <div className="mt-10 flex flex-row gap-4">
              <button className="flex gap-2 items-center p-4 bg-primary text-white rounded-lg cursor-pointer hover:bg-primary/90 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Get it on Google Play
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-[500px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone screen content placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <div className="w-16 h-16 bg-primary rounded-2xl mx-auto flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900">
                        App Preview
                      </h3>
                      <p className="text-sm text-gray-600">
                        Beautiful interface designed for simplicity
                      </p>
                    </div>
                  </div>
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
