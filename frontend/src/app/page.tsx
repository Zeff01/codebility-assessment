export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-[family-name:var(--font-geist-sans)]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-fuchsia-500 text-white text-lg font-bold">
              m
            </div>
            <span className="text-base font-semibold tracking-tight sm:text-lg">
              moola
            </span>
          </div>
          <nav className="hidden items-center gap-6 text-xs font-bold text-slate-700 sm:flex sm:text-sm">
            <button className="hover:text-fuchsia-600">Shop</button>
            <button className="hover:text-fuchsia-600">
              Winter Holiday Sale
            </button>
            <button className="hover:text-fuchsia-600">How it Works</button>
            <button className="hover:text-fuchsia-600">Refer &amp; Earn</button>
            <button className="hover:text-fuchsia-600">
              Merchant Solutions
            </button>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-fuchsia-500 px-4 py-1.5 text-xs font-semibold text-fuchsia-600 hover:bg-fuchsia-50 sm:inline-flex sm:text-sm">
              CAD
            </button>
            <button className="rounded-full bg-fuchsia-600 px-4 py-1.5 text-xs font-semibold text-white shadow-md shadow-fuchsia-400/40 hover:bg-fuchsia-500 sm:px-5 sm:text-sm">
              Download now
            </button>
          </div>
        </div>
      </header>

      <div className="bg-fuchsia-700">
        <div className="mx-auto max-w-6xl px-4 pb-4 pt-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto flex items-center rounded-full bg-white px-4 py-2 shadow-md sm:px-6 sm:py-3">
            <span className="mr-3 hidden text-sm text-slate-500 sm:inline">
              Search over 250 gift card brands
            </span>
            <span className="text-sm text-slate-500 sm:hidden">
              Search gift card brands
            </span>
            <div className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-fuchsia-600 text-white text-xs font-semibold">
              Go
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-10 lg:px-8">
        <section className="grid gap-6 sm:gap-8 lg:grid-cols-[2fr,1.4fr]">
          <div className="rounded-3xl bg-gradient-to-br from-fuchsia-600 via-fuchsia-500 to-purple-500 px-6 py-8 text-white shadow-xl sm:px-10 sm:py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-100 sm:text-[0.7rem]">
              GIFTING MADE EASIER
            </p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
              Buy a gift card,
              <span className="block">get cash back rewards.</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm text-fuchsia-50 sm:text-base">
              Discover hundreds of top brands, send digital gift cards in
              seconds, and earn instant rewards on everyday spending.
            </p>
            <button className="mt-6 inline-flex rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-400/40 hover:from-pink-400 hover:to-fuchsia-400">
              Shop weekly deals
            </button>
          </div>
        </section>

        <section className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2">
          <div className="rounded-3xl bg-orange-100 px-6 py-6 shadow-md sm:px-8 sm:py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-700">
              SEND GIFT CARDS INSTANTLY
            </p>
            <h2 className="mt-3 text-lg font-bold text-slate-900 sm:text-xl">
              Send gift cards through text.
            </h2>
            <p className="mt-3 text-sm text-slate-700 sm:text-base">
              Choose a brand, add a personal note, and deliver a digital gift
              card by text in just a few taps.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-xs font-semibold text-white">
              <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1">
                App Store
              </span>
              <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1">
                Google Play
              </span>
            </div>
          </div>

          <div className="rounded-3xl bg-indigo-100 px-6 py-6 shadow-md sm:px-8 sm:py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">
              EARN MORE TOGETHER
            </p>
            <h2 className="mt-3 text-lg font-bold text-slate-900 sm:text-xl">
              Invite a friend &amp; earn.
            </h2>
            <p className="mt-3 text-sm text-slate-700 sm:text-base">
              Share your link and get a bonus when friends buy their first gift
              card using Moola.
            </p>
            <div className="mt-5 inline-flex rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
              Copy invite link
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mt-2 bg-slate-50 py-10 sm:mt-16 sm:py-12">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                How Moola works
              </h2>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                In just a few taps you can buy a discounted gift card, add it to
                your wallet, and start earning rewards on everyday spending.
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-3">
              {/* Step 1 */}
              <div className="flex flex-col items-start gap-3 rounded-2xl bg-white px-5 py-6 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-fuchsia-100 text-sm font-bold text-fuchsia-700">
                  1
                </div>
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                  Browse brands &amp; deals
                </h3>
                <p className="text-xs text-slate-600 sm:text-sm">
                  Search over 250 brands and pick the gift card or offer that
                  matches where you&apos;re shopping next.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-start gap-3 rounded-2xl bg-white px-5 py-6 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-fuchsia-100 text-sm font-bold text-fuchsia-700">
                  2
                </div>
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                  Pay securely in the app
                </h3>
                <p className="text-xs text-slate-600 sm:text-sm">
                  Checkout using your preferred payment method and instantly
                  receive a digital card in your Moola wallet.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-start gap-3 rounded-2xl bg-white px-5 py-6 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-fuchsia-100 text-sm font-bold text-fuchsia-700">
                  3
                </div>
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                  Redeem &amp; earn rewards
                </h3>
                <p className="text-xs text-slate-600 sm:text-sm">
                  Use your card in‑store or online, stack with store offers and
                  loyalty points, and watch your rewards add up.
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button className="rounded-full bg-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-fuchsia-400/40 hover:bg-fuchsia-500">
                Get started with Moola
              </button>
            </div>
          </div>
        </section>

        <section className="pt-10 sm:pt-12">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-purple-700 sm:text-3xl">
              Send a gift card and collect rewards
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Moola offers unbeatable deals on the gift cards you love. Buy for
              a friend or treat yourself and collect rewards on every purchase,
              with over 250 brands across Canada.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm">
              <div className="flex h-20 items-center justify-center rounded-xl bg-blue-600 text-sm font-semibold text-white">
                Walmart
              </div>
              <div className="mt-4 text-xs font-semibold text-slate-800">
                Walmart Canada
              </div>
              <div className="mt-1 text-[0.7rem] text-slate-500">
                Buy now and get
              </div>
              <div className="mt-2 h-6 w-full overflow-hidden rounded-full bg-slate-200">
                <div className="flex h-full w-2/3 items-center justify-center rounded-full bg-green-500 text-[0.65rem] font-semibold text-white">
                  1% More
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm">
              <div className="flex h-20 items-center justify-center rounded-xl bg-sky-500 text-sm font-semibold text-white">
                Esso &amp; Mobil
              </div>
              <div className="mt-4 text-xs font-semibold text-slate-800">
                Esso  and Mobil
              </div>
              <div className="mt-1 text-[0.7rem] text-slate-500">
                Buy now and get
              </div>
              <div className="mt-2 h-6 w-full overflow-hidden rounded-full bg-slate-200">
                <div className="flex h-full w-2/3 items-center justify-center rounded-full bg-green-500 text-[0.65rem] font-semibold text-white">
                  1% More
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm">
              <div className="flex h-20 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white">
                Amazon
              </div>
              <div className="mt-4 text-xs font-semibold text-slate-800">
                Amazon.ca
              </div>
              <div className="mt-1 text-[0.7rem] text-slate-500">
                Buy now and get
              </div>
              <div className="mt-2 h-6 w-full overflow-hidden rounded-full bg-slate-200">
                <div className="flex h-full w-2/3 items-center justify-center rounded-full bg-green-500 text-[0.65rem] font-semibold text-white">
                  1% More
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm">
              <div className="flex h-20 items-center justify-center rounded-xl bg-rose-500 text-sm font-semibold text-white">
                Petsmart
              </div>
              <div className="mt-4 text-xs font-semibold text-slate-800">
                Petsmart
              </div>
              <div className="mt-1 text-[0.7rem] text-slate-500">
                Buy now and get
              </div>
              <div className="mt-2 h-6 w-full overflow-hidden rounded-full bg-slate-200">
                <div className="flex h-full w-3/4 items-center justify-center rounded-full bg-green-500 text-[0.65rem] font-semibold text-white">
                  6% More
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm">
              <div className="flex h-20 items-center justify-center rounded-xl bg-red-500 text-sm font-semibold text-white">
                DoorDash
              </div>
              <div className="mt-4 text-xs font-semibold text-slate-800">
                DoorDash
              </div>
              <div className="mt-1 text-[0.7rem] text-slate-500">
                Buy now and get
              </div>
              <div className="mt-2 h-6 w-full overflow-hidden rounded-full bg-slate-200">
                <div className="flex h-full w-3/4 items-center justify-center rounded-full bg-green-500 text-[0.65rem] font-semibold text-white">
                  1.5% More
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm sm:col-span-2 md:col-span-1">
              <div className="flex h-20 items-center justify-center rounded-xl bg-emerald-700 text-sm font-semibold text-white">
                Starbucks
              </div>
              <div className="mt-4 text-xs font-semibold text-slate-800">
                Starbucks
              </div>
              <div className="mt-1 text-[0.7rem] text-slate-500">
                Buy now and get
              </div>
              <div className="mt-2 h-6 w-full overflow-hidden rounded-full bg-slate-200">
                <div className="flex h-full w-2/3 items-center justify-center rounded-full bg-green-500 text-[0.65rem] font-semibold text-white">
                  1% More
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14 border-t border-slate-200 pt-10 sm:mt-16 sm:pt-12">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-purple-700 sm:text-3xl">
              What do customers think about Moola
            </h2>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-6 sm:mt-10 sm:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-3xl bg-white px-6 py-7 shadow-md shadow-slate-200">
              <p className="text-sm text-slate-700">
                This is a great app that saves money. Saved over 200 dollars so
                far!
              </p>
              <div className="mt-4 flex flex-col items-start gap-2">
                <div className="flex text-yellow-400">
                  <span>★★★★★</span>
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-900">
                  Apple Store
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl bg-white px-6 py-7 shadow-md shadow-slate-200">
              <p className="text-sm text-slate-700">
                Great way to save on the stuff you buy anyway. I always check
                Moola first and it helped me organize my rewards cards in one
                place.
              </p>
              <div className="mt-4 flex flex-col items-start gap-2">
                <div className="flex text-yellow-400">
                  <span>★★★★★</span>
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-900">
                  Google
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl bg-white px-6 py-7 shadow-md shadow-slate-200">
              <p className="text-sm text-slate-700">
                Very easy to use with lots of brands and discounts. Gift cards
                arrive within a minute.
              </p>
              <div className="mt-4 flex flex-col items-start gap-2">
                <div className="flex text-yellow-400">
                  <span>★★★★★</span>
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-900">
                  Google Play
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-10 bg-fuchsia-800 text-fuchsia-50">
        {/* Top stripe: payment methods + provider */}
        <div className="border-b border-fuchsia-700 bg-fuchsia-900/60">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-4 py-4 text-xs sm:flex-row sm:items-center sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-semibold tracking-wide">
                Accepted payment methods
              </span>
              <div className="flex items-center gap-2 text-[0.7rem] font-semibold">
                {/* Visa */}
                <div className="flex h-7 items-center rounded-md bg-white px-3 text-slate-900">
                  <span className="text-[0.7rem] font-extrabold tracking-[0.15em]">
                    VISA
                  </span>
                </div>

                {/* Mastercard (SVG circles – keep as is) */}
                <div className="flex h-7 items-center rounded-md bg-white px-3">
                  <svg
                    viewBox="0 0 36 16"
                    className="h-4 w-auto"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="13" cy="8" r="5" fill="#EB001B" />
                    <circle cx="19" cy="8" r="5" fill="#F79E1B" />
                  </svg>
                </div>

                {/* Amex */}
                <div className="flex h-7 items-center rounded-md bg-white px-3 text-slate-900">
                  <span className="text-[0.7rem] font-extrabold tracking-[0.12rem]">
                    AMEX
                  </span>
                </div>
              </div>
            </div>
            <div className="text-xs text-fuchsia-100">
              Payments powered by <span className="font-semibold">Moneris</span>
            </div>
          </div>
        </div>

        {/* Middle: logo + links + social */}
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-fuchsia-500 text-white text-lg font-bold">
                m
              </div>
              <span className="text-base font-semibold tracking-tight">
                moola
              </span>
            </div>

            <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              <button className="hover:underline">Privacy Policy</button>
              <button className="hover:underline">
                Terms &amp; Conditions
              </button>
              <button className="hover:underline">Help Center</button>
              <button className="hover:underline">Contact Us</button>
            </nav>
          </div>

          <div className="mt-6 flex flex-col items-center gap-4 text-center text-[0.7rem] text-fuchsia-100">
            <div className="flex items-center gap-4 text-base">
              {/* Instagram */}
              <button
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-white"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="17" cy="7" r="1.3" fill="currentColor" />
                </svg>
              </button>

              {/* Twitter / X-style bird */}
              <button
                aria-label="Twitter"
                className="flex h-8 w-8 items-center justify-center"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.95 7.04a5.2 5.2 0 0 1-2.02.8 2.7 2.7 0 0 0 1.15-1.5 5.25 5.25 0 0 1-2.12.9 2.6 2.6 0 0 0-4.5 1.8c0 .2.02.4.07.6A7.4 7.4 0 0 1 5.1 6.17a2.64 2.64 0 0 0-.36 1.3 2.6 2.6 0 0 0 1.16 2.16 2.6 2.6 0 0 1-1.18-.33v.03c0 1.26.92 2.32 2.14 2.56a2.7 2.7 0 0 1-1.17.04 2.62 2.62 0 0 0 2.44 1.84A5.24 5.24 0 0 1 4.8 16a7.4 7.4 0 0 0 4.1 1.23c4.93 0 7.63-4.2 7.63-7.84v-.36a5.7 5.7 0 0 0 1.42-1.99Z" />
                </svg>
              </button>

              {/* Facebook */}
              <button
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.1c0-.8.2-1.3 1.3-1.3h1.4V5.2C15.9 5.1 15 5 14 5c-2.1 0-3.6 1.3-3.6 3.7v2.1H8v2.8h2.4v7h3.1Z" />
                </svg>
              </button>

              {/* YouTube */}
              <button
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 8.2s-.2-1.5-.8-2.1c-.8-.8-1.6-.8-2-0.8C15.3 5 12 5 12 5h0s-3.3 0-6.2.3c-.5.1-1.3.1-2 .9C3.2 6.7 3 8.2 3 8.2S2.8 9.9 2.8 11.7v1.6C2.8 15 3 16.7 3 16.7s.2 1.5.8 2.1c.8.8 1.8.8 2.2.9 1.6.2 6 .3 6 .3s3.3 0 6.2-.3c.5-.1 1.3-.1 2-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.5v-1.6c0-1.8-.2-3.5-.2-3.5ZM10.5 14.8V8.9l4.3 3-4.3 2.9Z" />
                </svg>
              </button>

              {/* LinkedIn */}
              <button
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.2 4.3a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM4 9h2.6v11H4V9Zm5 0h2.5v1.5h.1c.4-.7 1.4-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.8V20H16V14.4c0-1.3 0-3-1.9-3-1.9 0-2.1 1.4-2.1 2.9V20H9V9Z" />
                </svg>
              </button>
            </div>
            <p className="max-w-3xl">
              Designated trademarks and brands are the property of their
              respective owners. Moola Inc. and its products are not affiliated
              or endorsed by such owners. Use of this app constitutes acceptance
              of Moola Inc. Privacy Policy and Terms of Use.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="bg-fuchsia-900/80 py-3 text-center text-[0.7rem] text-fuchsia-100">
          Copyright © 2025 Moola Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
