"use client";

import Link from "next/link";

import PromoSlide, { type PromoSlideProps } from "@/components/promo-slide";
import ShopCard, { type ShopCardProps } from "@/components/shop-card";
import TestimonialCard, {
    type TestimonialCardProps,
} from "@/components/testimonial";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/accordion";

import { Tag as TagIcon, CircleHelp as CircleHelpIcon } from "lucide-react";

/* SwiperJS */
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/react";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

export default function Home() {
    const promos: PromoSlideProps[] = [
        {
            image: {
                url: "https://www.moola.com/assets/media/images/2024/slide4.png",
                alt: "slide-1",
            },
            tag: "GIFTING MADE EASIER",
            subHeading: "Buy A Gift Card,",
            heading: "Get Cash Back Rewards",
            redirect: "",
            variant: "primary",
        },

        {
            image: {
                url: "https://www.moola.com/assets/media/images/2025/spring.png",
                alt: "slide-2",
            },
            redirect: "",
            variant: "primary",
        },

        {
            image: {
                url: "https://www.moola.com/assets/media/images/static1.png",
                alt: "slide-3",
            },
            redirect: "",
            variant: "secondary",
            description: "Send gift cards instantly through text.",
            downloadable: {
                iosUrl: "https://www.moola.com/assets/media/icons/app-store.svg",
                androidUrl:
                    "https://www.moola.com/assets/media/icons/play-store.svg",
            },
        },

        {
            image: {
                url: "https://www.moola.com/assets/media/images/static4.png",
                alt: "slide-4",
            },
            redirect: "",
            variant: "secondary",
            description:
                "Invite a friend & get 1% Moola cash back on all their purchases.",
        },
    ];

    const shops: ShopCardProps[] = [
        {
            image: {
                url: "https://api.moola.com/assets/images/192168207_49_-1478502323.jpg",
                alt: "petsmart",
            },
            name: "Petsmart",
            promoIncrease: 6,
            redirect: "",
        },

        {
            image: {
                url: "https://api.moola.com/assets/images/192168207_49_-347948234.png",
                alt: "walmart-ca",
            },
            name: "Walmart Canada",
            promoIncrease: 1,
            redirect: "",
        },

        {
            image: {
                url: "https://api.moola.com/assets/images/192168207_56_-2024490794.png",
                alt: "starbucks",
            },
            name: "Starbucks",
            promoIncrease: 1,
            redirect: "",
        },

        {
            image: {
                url: "https://api.moola.com/assets/images/192168207_49_-174967065.jpg",
                alt: "doordash",
            },
            name: "Doordash",
            promoIncrease: 1.5,
            redirect: "",
        },

        {
            image: {
                url: "https://api.moola.com/assets/images/192168207_51_859781913.jpg",
                alt: "esso-and-mobil",
            },
            name: "Esso™ and Mobil™",
            promoIncrease: 1,
            redirect: "",
        },

        {
            image: {
                url: "https://api.moola.com/assets/images/7_781508128.png",
                alt: "wayfair",
            },
            name: "Wayfair",
            promoIncrease: 1,
            redirect: "",
        },

        {
            image: {
                url: "https://api.moola.com/assets/images/d65c70c5-c7aa-4161-9e5b-118ad8b71740.jpg",
                alt: "amazon-ca",
            },
            name: "Amazon.ca",
            promoIncrease: 1,
            redirect: "",
        },
    ];

    const testimonials: TestimonialCardProps[] = [
        {
            content:
                "This is a great app that saves money. Saved over 200 dollars so far!",
            rating: 5,
            ratedFrom: "apple_store",
        },
        {
            content:
                "Great way to save on the stuff you buy anyway. I always check Moola first when shopping online or in-store. It also helped me organize all my rewards cards in one place which stream-lined my wallet.  ",
            rating: 4,
            ratedFrom: "google",
        },

        {
            content:
                "It's very easy to use, has more than 200 brands, and also lots of discounts and bonuses. Once you've paid you can receive the gift cards within 1 minute. ",
            rating: 5,
            ratedFrom: "google_play",
        },
    ];

    const faqs = [
        {
            question: "What is Moola?",
            answer: "Moola is your one-stop shop for discounted gift cards from over 250 of your favourite Canadian brands. Whether you're gifting or saving for yourself, Moola helps you spend smarter and earn rewards.",
        },
        {
            question: "How does Moola Work?",
            answer: "Simply browse our catalog of digital gift cards, choose the brand and amount, and purchase at a discount. You’ll receive your card instantly and can use it in-store or online, depending on the brand.",
        },
        {
            question: "Do Moola gift cards expire?",
            answer: "Nope — gift cards purchased through Moola never expire unless stated otherwise by the retailer.",
        },
        {
            question: "Is there a mobile app?",
            answer: "Yes! Moola is available on both iOS and Android so you can browse, buy, store, and redeem gift cards on the go.",
        },
    ];

    return (
        <main className="flex flex-col px-3 lg:px-25">
            <section className="py-10 px-6 text-center xl:py-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 justify-center items-center">
                    <div className="space-y-6 flex flex-col">
                        <h1 className="text-3xl font-bold text-gray-800 leading-tight md:text-5xl md:w-2/3 self-center xl:text-6xl">
                            Gift Smarter. Save More with{" "}
                            <span className="text-[#750dea]">Moola</span>
                        </h1>
                        <p className="text-sm text-gray-600 xl:text-lg xl:max-w-4xl xl:self-center">
                            Discover unbeatable deals on the gift cards you
                            love. With Moola, it&apos;s easier than ever to save
                            money, earn rewards, and give the perfect gift — or
                            treat yourself! Shop over 250 top brands across
                            Canada, all in one place.
                        </p>
                        <div className="flex flex-col gap-4 justify-center items-center md:flex-row">
                            <button className="cursor-pointer bg-[#7514e3] text-white px-6 py-3 rounded-2xl shadow-md w-50">
                                Shop Gift Cards
                            </button>
                            <Link
                                href={"#start"}
                                className="cursor-pointer border border-[#7514e3] text-[#7514e3] px-6 py-3 rounded-2xl w-50"
                            >
                                <button className="cursor-pointer">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="start" className="flex flex-col gap-3 pb-4 py-1">
                <Swiper
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000, // 3 seconds
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    className="w-full rounded-xl"
                >
                    {promos
                        .filter((promo) => promo.variant === "primary")
                        .map((filtered, index) => (
                            <SwiperSlide key={index}>
                                <PromoSlide {...filtered} />
                            </SwiperSlide>
                        ))}
                </Swiper>

                <div className="w-full flex items-center gap-2">
                    {promos
                        .filter((promo) => promo.variant === "secondary")
                        .map((filtered, index) => (
                            <PromoSlide key={index} {...filtered} />
                        ))}
                </div>
            </section>

            <section className="mt-10 flex flex-col gap-8">
                <div className="text-center flex flex-col gap-5 items-center">
                    <h2 className="text-2xl font-semibold text-[#4c0d94] lg:text-3xl">
                        Send A Gift Card and <br /> Collect Rewards
                    </h2>
                    <p className="text-xs leading-wide lg:text-sm lg:max-w-3xl">
                        Moola provides unbeatable deals on the gift cards you
                        love. Buy for a friend or better yet, for yourself and
                        collect rewards. With Moola, giving the perfect gift and
                        saving money on the brands you love has never been
                        easier or more convenient. Shop over 250 brands across
                        Canada.
                    </p>
                </div>

                <div
                    className="grid gap-6 mb-24 
                grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4"
                >
                    {shops.map((shop, index) => (
                        <ShopCard {...shop} key={index} />
                    ))}
                </div>
            </section>

            <article className="rounded-2xl p-8 bg-[#fbe6ff] shadow-xl border border-neutral-300 flex flex-col gap-4">
                <div className="flex flex-col gap-6 justify-center items-center text-center px-2">
                    <h1 className="font-semibold text-2xl text-[#4c0d94] lg:text-3xl">
                        Virtual Gifting with a Personal Touch
                    </h1>
                    <p className="leading-wide text-sm lg:max-w-xl">
                        You can&apos;t always be there in person for special
                        celebrations, but you can always send your regards and
                        congratulations through email or text.{" "}
                        <i>It&apos;s the thought that counts!!</i> Through
                        Moola, you can send gifts from big and niche brands to
                        your loved ones instantly.
                    </p>

                    <img
                        src="https://www.moola.com/assets/media/gif/attachment.gif"
                        alt="video-1"
                        className="w-80 h-auto lg:hidden"
                    />
                </div>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start lg:mt-20">
                    <div className="w-full lg:w-1/3">
                        <h2 className="font-semibold text-xl text-[#4c0d94] lg:text-2xl">
                            Hassle-free long distance gift giving
                        </h2>
                        <p className="text-sm tracking-wide">
                            Say goodbye to the stress of finding the perfect
                            gift and having it arrive on-time. With Moola, you
                            can easily search, purchase and send digital gift
                            cards in less than 1 minute.
                        </p>
                    </div>

                    <div className="w-full lg:w-1/3 flex justify-center">
                        <img
                            src="https://www.moola.com/assets/media/gif/attachment.gif"
                            alt="video-1"
                            className="hidden lg:block w-full h-auto max-w-sm"
                        />
                    </div>

                    <div className="w-full lg:w-1/3">
                        <h2 className="font-semibold text-xl text-[#4c0d94] lg:text-2xl">
                            Monitor gift delivery as if you&apos;re there
                        </h2>
                        <p className="text-sm tracking-wide">
                            Stop questioning if a recipient has received your
                            gift. Track gift card delivery and open rates on the
                            Moola App.
                        </p>
                    </div>
                </div>
            </article>

            <section className="flex flex-col mt-20 gap-20">
                <div className="flex flex-col text-center gap-5">
                    <h1 className="font-semibold text-2xl text-[#4c0d94] lg:text-3xl">
                        Moola Saves Money On Gifts & Everyday Essentials
                    </h1>
                    <p className="text-xs grow lg:text-sm lg:max-w-3xl self-center">
                        Gift cards aren&apos;t just for gifting (although we do
                        that too!), they&apos;re a great way to find deals on
                        the brands you love. Through Moola, you can easily buy
                        gift cards to your favourite stores at a lower price.
                        Why not shop smarter, score deals, and savour the
                        savings!
                    </p>
                    <p className="text-sm font-semibold text-neutral-600 lg:text-lg">
                        For every $1 spent, you get Moola cash back for future
                        purchases.
                    </p>
                </div>

                <div className="px-8 grid gap-8 grid-cols-1 xl:grid-cols-3 xl:auto-rows-max">
                    <article className="bg-muted rounded-2xl px-9 py-13 flex flex-col gap-5">
                        <div className="flex items-center gap-2 text-[#4c0d94]">
                            <TagIcon />
                            <h3 className="font-semibold text-lg lg:text-2xl">
                                Deals Each Week
                            </h3>
                        </div>
                        <p className="text-xs leading-wider lg:text-sm grow">
                            Each week, we feature new deals in the Moola
                            Marketplace where you can save up to 15% on popular
                            brands. Check out this week&apos;s feature deal.
                        </p>
                        <button className="cursor-pointer bg-[#4c0d94] text-white text-sm tracking-wide rounded-full py-5 md:self-start md:w-50">
                            <span>SHOP DEALS</span>
                        </button>
                    </article>

                    <article className="bg-muted rounded-2xl px-9 py-13 flex flex-col gap-5">
                        <div className="flex items-center gap-1 text-[#4c0d94]">
                            <TagIcon />
                            <h3 className="font-semibold text-lg lg:text-2xl">
                                Everyday Essentials
                            </h3>
                        </div>
                        <p className="text-xs leading-wider grow lg:text-sm">
                            Moola has deals on all your everyday essentials such
                            as grocery, fuel, pharmacy, food delivery, and more.
                            It all adds up to great savings!
                        </p>
                        <button className="cursor-pointer bg-[#4c0d94] text-white text-sm tracking-wide rounded-full py-5 md:self-start md:w-50">
                            <span>SHOP ESSENTIALS</span>
                        </button>
                    </article>

                    <article className="bg-muted rounded-2xl px-9 py-13 flex flex-col gap-5">
                        <div className="flex items-center gap-1 text-[#4c0d94]">
                            <TagIcon />
                            <h3 className="font-semibold text-lg lg:text-2xl">
                                Download App
                            </h3>
                        </div>
                        <p className="text-xs leading-wider lg:text-sm grow">
                            Download the Moola App and start collecting cash
                            back and bonus gift vouchers.
                        </p>

                        <button className="cursor-pointer bg-[#4c0d94] text-white text-sm tracking-wide rounded-full py-5 md:self-start md:w-50">
                            <span>SHOP ESSENTIALS</span>
                        </button>
                    </article>
                </div>

                <div className="flex flex-col text-center gap-5">
                    <h1 className="font-semibold text-2xl text-[#4c0d94] tracking-wide lg:text-3xl">
                        What Do Customers Think About Moola
                    </h1>
                    <div className="px-8 grid gap-8 grid-cols-1 xl:grid-cols-3 xl:auto-rows-max">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard {...testimonial} key={index} />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col text-center gap-5">
                    <h1 className="font-semibold text-2xl text-[#4c0d94] tracking-wide lg:text-3xl">
                        Frequently Asked Questions (FAQ)
                    </h1>
                    <Accordion type="multiple" className="px-8">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`${index}`}>
                                <AccordionTrigger className="text-[#5713bd] cursor-pointer">
                                    <span className="text-lg flex flex-row gap-1 items-center">
                                        <CircleHelpIcon />
                                        {faq.question}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <span>{faq.answer}</span>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </main>
    );
}
