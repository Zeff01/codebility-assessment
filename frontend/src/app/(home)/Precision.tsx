import { WalletMinimal } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Shield } from "lucide-react";

const Precision = () => {
  return (
    <div className="bg-gray-100">
      <div className="px-4 max-w-7xl mx-auto py-[clamp(1rem,8vw,5rem)]">
        <div className="flex flex-col ">
          <div>
            <h1 className="text-[clamp(1.25rem,2vw,2.2rem)] font-semibold">
              Precision Engineering
            </h1>
            <p className="mt-2 text-[clamp(1rem,2vw,1.05rem)] max-w-[68ch]">
              Wealth management reimagined as high-end architecture. Every
              feature built for clarity and speed.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-6 grid-rows-2 gap-6 mt-20">
          <div className="col-span-4 bg-white flex flex-col p-7 rounded-2xl">
            <div className="p-3 bg-[#59fdbd] rounded-xl w-fit mb-7">
              <WalletMinimal />
            </div>
            <h2 className="text-2xl text-[#031635] font-semibold mb-4">
              Unified Treasury
            </h2>
            <p className="text-[clamp(0.7rem,2vw,1rem)] max-w-[70ch] mb-5">
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
          <div className="relative col-span-2 bg-[#031635] flex flex-col p-7 rounded-2xl">
            <div className="p-3 bg-gray-200/30 rounded-xl w-fit mb-7 text-[#59fdbd]">
              <ShieldCheck />
            </div>
            <h2 className="text-2xl text-white font-semibold mb-4">
              Vault Security
            </h2>
            <p className="text-[clamp(0.7rem,2vw,1rem)] text-white mb-5 z-40">
              Military-grade encryption with multi-signature verification for
              every high-value movement.
            </p>
            <Shield
              className="absolute bottom-0 right-0 text-gray-200/3"
              size={100}
            />
          </div>
          <div className="col-span-2 bg-amber-600">s</div>
          <div className="col-span-4 bg-red-400">s</div>
        </div>
      </div>
    </div>
  );
};

export default Precision;
