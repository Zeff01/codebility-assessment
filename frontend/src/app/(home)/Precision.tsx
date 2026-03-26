import { WalletMinimal } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Shield } from "lucide-react";
import { ChartNoAxesCombined } from "lucide-react";
import { ClockPlus } from "lucide-react";

const Precision = () => {
  return (
    <div className="bg-gray-100">
      <div className="px-4 max-w-7xl mx-auto py-[clamp(1rem,8vw,5rem)]">
        <div className="flex flex-col ">
          <div>
            <h1 className="text-[clamp(1.5rem,2vw,2.2rem)] font-semibold">
              Precision Engineering
            </h1>
            <p className="mt-2 text-[clamp(1rem,2vw,1.05rem)] max-w-[68ch]">
              Wealth management reimagined as high-end architecture. Every
              feature built for clarity and speed.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-5 xl:grid-cols-6 grid-rows-2 gap-6 mt-5 xl:mt-15">
          <div className="md:col-span-3 xl:col-span-4 bg-white flex flex-col p-7 rounded-2xl">
            <div className="p-3 bg-[#59fdbd] rounded-xl w-fit mb-7">
              <WalletMinimal />
            </div>
            <h2 className="text-2xl text-[#031635] font-semibold mb-4">
              Unified Treasury
            </h2>
            <p className="text-[clamp(0.9rem,2vw,1rem)] max-w-[70ch] mb-5">
              Connect every account, from traditional banks to digital assets,
              in one cohesive high-fidelity ledger.
            </p>
            <div className="flex gap-3">
              <p className="text-xs bg-slate-300 px-3 py-1 rounded-2xl font-semibold">
                REAL-TIME
              </p>
              <p className="text-xs bg-slate-300 px-3 py-1 rounded-2xl font-semibold">
                GLOBAL SYNC
              </p>
            </div>
          </div>
          <div className="relative md:col-span-2 xl:col-span-2 bg-[#031635] flex flex-col p-7 rounded-2xl">
            <div className="p-3 bg-gray-200/30 rounded-xl w-fit mb-7 text-[#59fdbd]">
              <ShieldCheck />
            </div>
            <h2 className="text-2xl text-white font-semibold mb-4">
              Vault Security
            </h2>
            <p className="text-[clamp(0.9rem,2vw,1rem)] text-white mb-5 z-40">
              Military-grade encryption with multi-signature verification for
              every high-value movement.
            </p>
            <Shield
              className="absolute bottom-0 right-0 text-gray-200/3"
              size={100}
            />
          </div>
          <div className="col-span-2 bg-white flex flex-col p-7 rounded-2xl">
            <div className="p-3 bg-gray-300/50 rounded-xl w-fit mb-7">
              <ChartNoAxesCombined />
            </div>
            <h2 className="text-2xl text-[#031635] font-semibold mb-4">
              Editorial Insights
            </h2>
            <p className="text-[clamp(0.9rem,2vw,1rem)] max-w-[70ch] mb-5">
              Data visualized through a luxury editorial lens, removing noise
              and highlighting opportunity
            </p>
          </div>
          <div className="md:col-span-3 xl:col-span-4 bg-white flex flex-col p-7 rounded-2xl">
            <div className="flex flex-col xl:flex-row">
              <div>
                <div className="p-3 bg-[#59fdbd]/50 rounded-xl w-fit mb-7">
                  <ClockPlus />
                </div>
                <h2 className="text-2xl text-[#031635] font-semibold mb-4">
                  Instant Settlement
                </h2>
                <p className="text-[clamp(0.9rem,2vw,1rem)] max-w-[70ch] mb-5">
                  Experience the fluidity of modern capital. Send and receive
                  funds across borders in seconds, not days.
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex items-center px-[clamp(0.5rem,3vw,1rem)] py-6 bg-gray-200 rounded-2xl flex-col">
                  <div className="flex items-center justify-between whitespace-nowrap w-full gap-3">
                    <div className="flex gap-3 items-center">
                      <span className="text-xs text-white font-semibold bg-[#031635] rounded-3xl py-3 px-3">
                        LN
                      </span>
                      <p className=" gap-2">London Hub</p>
                    </div>
                    <span className="text-[#00a776] font-semibold px-2 py-1 rounded text-sm w-fit">
                      $8.1k
                    </span>
                  </div>
                  <div className="w-full border-t border-gray-300 my-2"></div>
                  <div className="flex items-center justify-between whitespace-nowrap w-full gap-3">
                    <div className="flex gap-3 items-center">
                      <span className="text-xs text-[#031635] font-semibold bg-[#59fdbd]/100 rounded-3xl py-3 px-3">
                        SG
                      </span>
                      <p className=" gap-2">Singapore</p>
                    </div>

                    <span className="text-[#00a776] font-semibold px-2 py-1 rounded text-sm w-fit">
                      $8.1k
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Precision;
