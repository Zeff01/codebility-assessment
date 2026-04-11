import Image from "next/image";

const brands = [
  {
    name: "AWS",
    logo: "/images/aws_light.svg",
    width: 304,
    height: 182,
    logoClass: "h-5 w-auto sm:h-6",
    surfaceClass: "border-slate-200 bg-white",
  },
  {
    name: "Apple",
    logo: "/images/apple.svg",
    width: 209,
    height: 256,
    logoClass: "h-8 w-auto sm:h-9",
    surfaceClass: "border-slate-200 bg-white",
  },
  {
    name: "Instagram",
    logo: "/images/instagram-wordmark.svg",
    width: 792,
    height: 225,
    logoClass: "h-7 w-auto sm:h-8",
    surfaceClass: "border-slate-200 bg-white",
  },
  {
    name: "Netflix",
    logo: "/images/netflix-wordmark.svg",
    width: 1024,
    height: 277,
    logoClass: "h-6 w-auto sm:h-7",
    surfaceClass: "border-slate-200 bg-white",
  },
  {
    name: "Spotify",
    logo: "/images/spotify_wordmark.svg",
    width: 559,
    height: 168,
    logoClass: "h-7 w-auto sm:h-8",
    surfaceClass: "border-slate-200 bg-white",
  },
];

export default function FeaturedBrandsSection() {
  return (
    <section className="border-y border-slate-200/70 py-10 sm:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className={`flex h-20 items-center justify-center rounded-2xl border px-4 shadow-[0_6px_20px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-0.5 ${brand.surfaceClass}`}
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={brand.width}
                height={brand.height}
                className={`${brand.logoClass} max-w-full`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
