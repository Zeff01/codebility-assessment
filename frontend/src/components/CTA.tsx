const CTA = () => {
  return (
    <section className="py-20 bg-violet-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to take control of your finances?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied users who are already managing their money
          with Moola.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-white text-moola-text px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Get Started
          </button>
          <button className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
