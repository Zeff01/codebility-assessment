"use client";

import Link from "next/link";

type PromoSlideVariant = "primary" | "secondary";

export interface PromoSlideProps {
    image: ImageDataProps;
    tag?: string;
    heading?: string;
    subHeading?: string;
    redirect: string;
    variant: PromoSlideVariant;
    description?: string;
    downloadable?: {
        iosUrl: string;
        androidUrl: string;
    };
}

const PromoSlide = ({
    image,
    tag,
    heading,
    subHeading,
    redirect,
    variant,
    description,
    downloadable,
}: PromoSlideProps) => {
    return (
        <Link href={redirect} className="relative w-full overflow-hidden">
            <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover z-0 rounded-xl"
            />
            {variant === "primary" ? (
                <div className="absolute text-white flex flex-col gap-1 text-xs top-5 left-6 min-[375px]:top-8 min-[375px]:left-7 min-[425px]:top-9 min-[425px]:text-lg min-[425px]:left-8 sm:text-[2.2rem] sm:top-17 sm:left-14 lg:text-[3rem] lg:top-17 lg:left-16 xl:text-[3.5rem] xl:top-34 xl:left-25">
                    <span className="text-xs sm:text-xl xl:text-2xl">
                        {tag}
                    </span>
                    <span className="font-semibold leading-tight">
                        {subHeading}
                        <br />
                        {heading}
                    </span>
                </div>
            ) : (
                <div className="absolute text-white flex flex-col z-50 top-3 left-4 text-[0.5rem] w-18 leading-tight font-semibold md:text-xl md:w-50 xl:text-3xl xl:w-70 2xl:w-120 2xl:text-4xl xl:p-3">
                    <span>{description}</span>
                    <section className="flex mt-1 gap-1 lg:mt-5 xl:mt-10 2xl:gap-4">
                        {downloadable?.iosUrl && (
                            <img
                                src={downloadable.iosUrl}
                                alt="ios-download-link"
                                className="w-8 h-auto md:w-30 xl:w-45 2xl:w-55"
                            />
                        )}
                        {downloadable?.androidUrl && (
                            <img
                                src={downloadable.androidUrl}
                                alt="android-download-link"
                                className="w-8 h-auto md:w-30 xl:w-45 2xl:w-55"
                            />
                        )}
                    </section>
                </div>
            )}
        </Link>
    );
};

export default PromoSlide;
