import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="bg-[#031635]">
      <div className="px-4 max-w-7xl mx-auto py-[clamp(1rem,8vw,30rem)]">
        <div className="flex flex-col items-center gap-[clamp(1rem,2vw,2.5rem)]">
          <div className="w-[clamp(2rem,10vw,3rem)]">
            <Image
              className="w-full h-auto"
              src={"/images/quote-svgrepo-com.svg"}
              alt=""
              width={70}
              height={70}
            />
          </div>

          <p className="mx-auto text-[clamp(1rem,4vw,1.875rem)] text-white italic max-w-[46ch] text-center">
            "Moola has transformed our treasury operations. The interface is not
            just beautiful-it provides a level of clarity that traditional
            banking platforms simply cannot match."
          </p>
          <div className="flex items-center gap-3 mt-5">
            <div className="rounded-[200px] overflow-hidden border-2 border-[#59fdbd]">
              <Image
                className="w-full h-auto"
                src={"/images/Julian_Reveal.jpg"}
                alt=""
                width={60}
                height={60}
              />
            </div>
            <div>
              <p className="text-white font-semibold">Julian Sterling</p>
              <p className="text-gray-400">Managing Partner, Sterling & Co.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
