type RatingProvider = "apple_store" | "google" | "google_play";

export interface TestimonialCardProps {
    content: string;
    rating: number;
    ratedFrom: RatingProvider;
}

const ratingsImage: Record<number, ImageDataProps> = {
    // NOTE: For now, we're only going to consider 4 and 5 star ratings :)
    4: {
        url: "https://www.moola.com/assets/media/images/stars-4.png",
        alt: "4-star-rating-img",
    },
    5: {
        url: "https://www.moola.com/assets/media/images/stars-5.png",
        alt: "5-star-rating-img",
    },
};

const ratingImageProvider: Record<RatingProvider, ImageDataProps> = {
    apple_store: {
        url: "https://www.moola.com/assets/media/icons/apple-store-icon.png",
        alt: "apple-store-img",
    },
    google: {
        url: "https://www.moola.com/assets/media/icons/google-store-icon.png",
        alt: "google-img",
    },
    google_play: {
        url: "https://www.moola.com/assets/media/icons/google-play-store-icon.png",
        alt: "google-play",
    },
};

const TestimonialCard = ({
    content,
    rating,
    ratedFrom,
}: TestimonialCardProps) => {
    return (
        <article className="shadow-md border border-muted rounded-2xl px-12 py-10 flex flex-col justify-center items-center gap-5">
            <p className="text-xs font-semibold md:text-sm text-[#6d6d6f]">
                {content}
            </p>
            <img
                src={ratingsImage[rating].url}
                alt={ratingsImage[rating].alt}
            />
            <img
                src={ratingImageProvider[ratedFrom].url}
                alt={ratingImageProvider[ratedFrom].alt}
            />
        </article>
    );
};

export default TestimonialCard;
