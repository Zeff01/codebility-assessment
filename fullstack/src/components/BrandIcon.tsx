import Brand  from "@/config/brand";

export default function BrandIcon() {
    return (
        <div className="flex lg:flex-1">
            <span className="sr-only">
                { Brand.brandname }
            </span>
            <img
                alt=""
                src={ Brand.brandicon }
                className="h-8 w-auto"
            />
            <h1 className="ml-3 lg:ml-5 text-xl lg:text-2xl font-bold text-white">
                { Brand.brandname }
            </h1>
        </div>
    )
}