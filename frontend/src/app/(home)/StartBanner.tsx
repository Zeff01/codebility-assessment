const StartBanner = () => {
  return (
    <div>
      <div className="px-4 max-w-7xl mx-auto py-[clamp(1rem,8vw,30rem)]">
        <div className="flex flex-col items-center bg-[#59fdbd] py-[clamp(1.5rem,5vw,3.75rem)] rounded-3xl gap-10 px-5">
          <h1 className="text-[clamp(1.25rem,6vw,3rem)] font-bold text-center">
            Start Your Legacy Today.
          </h1>
          <p className="max-w-[50ch] text-center">
            Join over 10,000 high-net-worth individuals and firms managing their
            future with Moola.
          </p>
          <button className="py-4 px-7 bg-[#031635] rounded-2xl text-white text-[clamp(0.875rem,3vw,1rem)] transition-all duration-300 ease-in-out hover:bg-[#062452] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0">
            Create Professional Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartBanner;
