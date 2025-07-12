import Header from "@/features/dashboard/components/header";
import SearchPage from "@/features/dashboard/components/search-page";
import AdsCards from "@/features/dashboard/components/ads-cards";
import Footer from "@/features/dashboard/components/footer";
import PartnersCard, {
  PartnersCardProps,
} from "@/features/dashboard/components/partners-card";
import AppDescCard from "@/features/dashboard/components/app-desc-card";
import InfoCard, {
  InfoCardProps,
} from "@/features/dashboard/components/info-card";
import ReviewCard, {
  ReviewCardProps,
} from "@/features/dashboard/components/review-card";

/**
 * Dashboard component
 *
 * A responsive reusable dashboard component that can be used to create a dashboard.
 *
 * @param infoCards - info cards of the dashboard
 * @param reviewCards - review cards of the dashboard
 * @param partners - partners of the dashboard
 * @returns Dashboard component
 *
 * @example
 * <Dashboard />
 */

function Dashboard() {
  const infoCards: InfoCardProps[] = [
    {
      title: "Deals Each Week",
      description:
        "Each week, we feature new deals in the Moola Marketplace where you can save up to 15% on popular brands. Check out this week's feature deal.",
      buttonText: "Shop Deals",
    },
    {
      title: "Everyday Essentials",
      description:
        "Moola has deals on all your everyday essentials such as grocery, fuel, pharmacy, food delivery, and more. It all adds up to great savings!",
      buttonText: "Shop Essentials",
    },
    {
      title: "Download App",
      description:
        "Download the Moola App and start collecting cash back and bonus gift vouchers.",
      buttonText: "Download App",
    },
  ];

  const reviewCards: ReviewCardProps[] = [
    {
      review:
        "This is a great app that saves money. Saved over 200 dollars so far!",
      rating: 5,
      platform: "https://www.moola.com/assets/media/icons/apple-store-icon.png",
    },
    {
      review:
        "Great way to save on the stuff you buy anyway. I always check Moola first when shopping online or in-store. It also helped me organize all my rewards cards in one place which stream-lined my wallet.",
      rating: 4,
      platform:
        "https://www.moola.com/assets/media/icons/google-store-icon.png",
    },
    {
      review:
        "It's very easy to use, has more than 200 brands, and also lots of discounts and bonuses. Once you've paid you can receive the gift cards within 1 minute.",
      rating: 5,
      platform:
        "https://www.moola.com/assets/media/icons/google-play-store-icon.png",
    },
  ];

  const partners: PartnersCardProps[] = [
    {
      image:
        "https://api.moola.com/assets/images/d65c70c5-c7aa-4161-9e5b-118ad8b71740.jpg",
      title: "Amazon.ca",
    },
    {
      image: "https://api.moola.com/assets/images/192168207_49_-174967065.jpg",
      title: "DoorDash",
      cashback: true,
      cashbackText: "1.5% More",
    },
    {
      image: "https://api.moola.com/assets/images/192168207_51_859781913.jpg",
      title: "Esso™ and Mobil...",
      cashback: true,
      cashbackText: "1% More",
    },
    {
      image: "https://api.moola.com/assets/images/192168207_49_-347948234.png",
      title: "Walmart Canada",
      cashback: true,
      cashbackText: "1% More",
    },
    {
      image: "https://api.moola.com/assets/images/192168207_49_-1478502323.jpg",
      title: "Petsmart",
      cashback: true,
      cashbackText: "6% More",
    },
    {
      image: "https://api.moola.com/assets/images/192168207_56_-2024490794.png",
      title: "Starbucks",
    },
  ];
  return (
    <main className='w-full flex flex-col gap-2'>
      {/* Header and Search */}
      <section>
        <Header />
        <div className='w-full bg-[#7514e3] '>
          <div className='2xl:max-w-7xl mx-auto px-4'>
            <SearchPage />
          </div>
        </div>
      </section>

      {/* Main content area */}
      <section className='w-full 2xl:max-w-7xl mx-auto px-4'>
        <AdsCards />
        <div className='text-center py-8 flex flex-col gap-4 items-center justify-center'>
          <h2 className='text-xl sm:text-2xl md:text-3xl font-bold max-w-96 leading-tight text-[#4c0394] mb-4'>
            Send A Gift Card and Collect Rewards
          </h2>
          <p className='text-xs sm:text-sm max-w-2xl mx-auto'>
            Moola provides unbeatable deals on the gift cards you love. Buy for
            a friend or better yet, for yourself and collect rewards. With
            Moola, giving the perfect gift and saving money on the brands you
            love has never been easier or more convenient. Shop over 250 brands
            across Canada.
          </p>
        </div>
        <div
          id='partners-card'
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 py-8'>
          {partners.map((partner) => (
            <PartnersCard key={partner.title} {...partner} />
          ))}
        </div>
        <div id='description-card'>
          <AppDescCard />
        </div>
        <div className='text-center py-8 flex flex-col gap-4 items-center justify-center'>
          <h2 className='text-xl sm:text-2xl md:text-3xl font-bold max-w-[34rem] leading-tight text-[#4c0394] mb-4'>
            Moola Saves Money On Gifts & Everyday Essentials
          </h2>
          <p className='text-xs sm:text-sm max-w-2xl mx-auto'>
            Gift cards aren&apos;t just for gifting (although we do that too!),
            they&apos;re a great way to find deals on the brands you love.
            Through Moola, you can easily buy gift cards to your favourite
            stores at a lower price. Why not shop smarter, score deals, and
            savour the savings!
          </p>
          <p className='text-xs sm:text-sm max-w-2xl mx-auto'>
            For every $1 spent, you get Moola cash back for future purchases.
          </p>
        </div>
        <div
          id='info-cards'
          className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 py-8'>
          {infoCards.map((infoCard) => (
            <InfoCard key={infoCard.title} {...infoCard} />
          ))}
        </div>
        <div
          id='review-cards'
          className='grid grid-cols-1 md:grid-cols-3 gap-4 py-8'>
          {reviewCards.map((reviewCard, index) => (
            <ReviewCard key={index} {...reviewCard} />
          ))}
        </div>
      </section>
      <section id='footer' className='w-full'>
        <Footer />
      </section>
    </main>
  );
}

export default Dashboard;
