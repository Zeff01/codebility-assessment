import Link from "next/link";

import {
    type LucideIcon,
    HandCoins as HandCoinsIcon,
    Instagram as InstagramIcon,
    Twitter as TwitterIcon,
    Facebook as FacebookIcon,
    Youtube as YoutubeIcon,
    Linkedin as LinkedinIcon,
} from "lucide-react";

interface SocialMediaLink {
    url: string;
    icon: LucideIcon;
}

export default function Footer() {
    const paymentMethods: Record<string, string> = {
        visa: "https://www.moola.com/assets/media/icons/visa.svg",
        mastercard: "https://www.moola.com/assets/media/icons/mastercard.svg",
        discover: "https://www.moola.com/assets/media/icons/discover.svg",
    };

    const socialMediaLinks: Record<string, SocialMediaLink> = {
        instagram: {
            url: "",
            icon: InstagramIcon,
        },
        twitter: {
            url: "",
            icon: TwitterIcon,
        },
        facebook: {
            url: "",
            icon: FacebookIcon,
        },
        youtube: {
            url: "",
            icon: YoutubeIcon,
        },
        linkedin: {
            url: "",
            icon: LinkedinIcon,
        },
    };

    return (
        <footer className="text-white mt-20">
            <section className="bg-[#5713bd] font-semibold px-8 xl:px-33 py-5 flex flex-col gap-5 md:flex-row md:justify-between md:items-center">
                <div className="flex gap-5 items-center justify-center">
                    <span className="text-[0.6rem] md:text-xs text-center">
                        Accepted Payment Methods
                    </span>
                    <ul className="flex items-center gap-5">
                        {Object.entries(paymentMethods).map(
                            ([key, value], index) => (
                                <div key={index}>
                                    <img src={value} alt={key} />
                                </div>
                            )
                        )}
                    </ul>
                </div>
                <div className="flex items-end gap-3 justify-center md:items-center">
                    <HandCoinsIcon className="self-end" />
                    <span className="text-[0.6rem]">Payments Powered by</span>
                    <img
                        src="https://www.moola.com/assets/media/icons/moneris.svg"
                        alt="moneris"
                        className="-mt-4"
                    />
                </div>
            </section>

            <section className="bg-[#750dea] flex flex-col">
                <ul className=" flex flex-col gap-15 justify-center items-center underline py-20 font-roboto text-sm font-semibold tracking-wide xl:flex-row xl:justify-between xl:px-33">
                    <li>
                        <img
                            src="https://content.moola.com/wp-content/uploads/2019/10/Logo_Desktop_white.svg"
                            alt="moola-logo-white"
                        />
                    </li>
                    <li>
                        <Link href={""}>
                            <span>Privacy Policy</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={""}>
                            <span>Terms & Conditions</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={""}>
                            <span>Help Center</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={""}>
                            <span>Contact Us</span>
                        </Link>
                    </li>
                </ul>

                <ul className="flex items-center justify-around xl:justify-center xl:gap-5">
                    {Object.entries(socialMediaLinks).map(
                        ([key, { url, icon: Icon }]) => (
                            <li key={key}>
                                <Link href={url} target="_blank">
                                    <Icon />
                                </Link>
                            </li>
                        )
                    )}
                </ul>

                <p className="font-roboto font-semibold self-center max-w-xs text-[0.6rem] text-center py-10 md:text-xs md:max-w-xl xl:text-sm xl:max-w-3xl">
                    Designated trademarks and brands are the property of their
                    respective owners. Moola Inc. and its products are not
                    affiliated or endorsed by such owners. Use of this
                    (website/app) constitutes acceptance of Moola Inc. Privacy
                    Policy and Terms of Use. Copyright © 2025 Moola Inc. All
                    rights reserved.
                </p>
            </section>

            <section className="bg-[#8942f4] font-roboto flex justify-center items-center py-4">
                <span className="font-semibold text-xs md:text-sm">
                    Copyright © 2025 Moola Inc. All rights reserved.
                </span>
            </section>
            <section className="bg-white flex py-5 items-center justify-center gap-2 xl:hidden">
                <img
                    src="https://www.moola.com/assets/media/icons/app-store.svg"
                    alt="ios-download-url"
                    className="w-40"
                />
                <img
                    src="https://www.moola.com/assets/media/icons/play-store.svg"
                    alt="android-download-url"
                    className="w-40"
                />
            </section>
        </footer>
    );
}
