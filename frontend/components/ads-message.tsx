export default function AdsMessage() {
  return (
    <div className=" w-full text-center py-3 md:py-6 px-2 md:px-28">
      <h1 className=" text-red-500 text-[9vw] md:text-[5vw] md:font-bold font-extrabold">
        Cheers to Great Taste!
      </h1>
      <p className=" text-[5vw] md:text-[2vw] font-semibold">
        Discover top-shelf spirits, fine wines, and cold brews at{" "}
        <span id="logo">
          <span className=" text-black">Tipsy</span>
          <span className=" text-red-500">Drinks</span>
        </span>{" "}
        — your neighborhood destination for quality and variety. Whether you're
        planning a party or just unwinding after a long day, we’ve got the
        perfect pour waiting for you.
      </p>
    </div>
  );
}
