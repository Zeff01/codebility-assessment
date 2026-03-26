import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="border-t border-t-gray-100">
        <div className="px-4 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center py-[clamp(2rem,5vw,3.75rem)]">
            <p className="text-2xl text-[#1a2b4b] font-semibold">Moola</p>
            <ul className="flex flex-wrap lg:flex-row gap-6 text-[10px] sm:text-xs my-10 font-medium tracking-wider text-slate-500">
              <li>
                <Link
                  href=""
                  className="hover:text-[#031635] transition-colors duration-200 border-b border-transparent hover:border-[#031635] pb-0.5"
                >
                  PRIVACY POLICY
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-[#031635] transition-colors duration-200 border-b border-transparent hover:border-[#031635] pb-0.5"
                >
                  TERMS OF SERVICE
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-[#031635] transition-colors duration-200 border-b border-transparent hover:border-[#031635] pb-0.5"
                >
                  COOKIE SETTINGS
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-[#031635] transition-colors duration-200 border-b border-transparent hover:border-[#031635] pb-0.5"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
            <p className="text-xs text-gray-400 text-center">
              {year} MOOLA FINANCIAL EXCELLENCE ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-t-gray-100">
        <div className="px-4 max-w-7xl mx-auto">
          <div className="flex justify-center py-[clamp(3rem,5vw,5rem)]">
            <p className="inline-block max-w-[90ch] text-center text-sm text-gray-300">
              MOOLA FINANCIAL EXCELLENCE IS A DIGITAL-FIRST TREASURY MANAGEMENT
              PLATFORM FINANCIAL SERVICES ARE PROVIDED BY OUR REGULATED BANKING
              PARTNERS IN THEIR RESPECTIVE JURISDICTIONS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
