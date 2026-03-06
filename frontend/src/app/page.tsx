import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly. Love you
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

export default function Home() {
  return (
    <main className="font-poppins py-14">
      <section
        className="bg-[url('/res/bg-money.jpg')] bg-center bg-cover bg-no-repeat p-[8%] rounded-4xl w-[80%] mx-auto h-120
       xl:h-130"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/res/bg-money.jpg')",
        }}
      >
        <h1
          className="font-poppins text-xl font-bold text-shadow-lg pb-[7%]
        lg:pb-5"
        >
          SMART MONEY MANAGEMENT
        </h1>
        <div className="flex ">
          <p
            className="text-4xl font-extrabold text-shadow-lg 
          lg:text-5xl xl:text-6xl "
          >
            Track, save, and grow your money easily.
          </p>
        </div>
        <button
          className="w-[100%] text-shadow-sm text-xl rounded-3xl mt-25 py-5 px-5 bg-[#BE9163] shadow-2xl font-bold 
        hover:bg-amber-100 hover:scale-105 hover:text-black transition duration-200 cursor-pointer md:mt-40
        lg:mt-30 lg:w-[30%] xl:mt-20 xl:w-[25%]"
        >
          GET STARTED
        </button>
      </section>

      <section className="flex gap-2 flex-col lg:flex-row justify-between w-[80%] mx-auto ">
        <div
          className="inset-0 p-5 flex flex-col justify-center w-[100%] h-50 rounded-xl bg-center bg-cover bg-no-repeat mt-5
              lg:flex-1 lg:h-60 hover:scale-102 transition"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/res/track.jpg')",
          }}
        >
          <h3 className="text-2xl drop-shadow-lg font-bold lg:text-3xl">Track Expenses</h3>
          <p className="text-md drop-shadow-md lg:text-lg">
            Monitor where your money goes.
          </p>
        </div>

        <div
          className="inset-0 p-5 flex flex-col justify-center w-[100%] h-50 rounded-xl bg-center bg-cover bg-no-repeat mt-5
            lg:flex-1 lg:h-60  hover:scale-102 transition"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/res/save.jpg')",
          }}
        >
          <h3 className="text-2xl drop-shadow-lg font-bold lg:text-3xl">Save Money</h3>
          <p className="text-md text-shadow-lg lg:text-lg">Build healthy saving habits.</p>
        </div>

        <div
          className="inset-0 p-5 flex flex-col justify-center w-[100%] h-50 rounded-xl bg-center bg-cover bg-no-repeat mt-5
            lg:flex-1 lg:h-60 hover:scale-102 transition "
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/res/insights.jpg')",
          }}
        >
          <h3 className="text-2xl drop-shadow-lg font-bold lg:text-3xl">Insights</h3>
          <p className="text-md text-shadow-lg lg:text-lg">Understand your financial behavior.</p>
        </div>
      </section>
    </main>
  );
}
