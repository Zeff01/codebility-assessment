import amazon from "../assets/amazon.jpg";
import walmart from "../assets/walmart.png";
import petsmart from "../assets/petsmart.jpg";
import mobil from "../assets/mobil.jpg";
import doordash from "../assets/doordash.jpg";
import starbucks from "../assets/starbucks.png";

const GiftCards = () => {

    const cards = [
        { id: 1, image: amazon, name: "Amazon", description: "Buy Now And Get", discount: "5% More" },
        { id: 2, image: walmart, name: "Wallmart", description: "Buy Now And Get", discount: "1% More" },
        { id: 3, image: petsmart, name: "Petsmart", description: "Buy Now And Get", discount: "6% More" },
        { id: 4, image: mobil, name: "Esso and Mobil", description: "Buy Now And Get", discount: "1% More" },
        { id: 5, image: doordash, name: "Doordash", description: "Buy Now And Get", discount: "1.5% More" },
        { id: 6, image: starbucks, name: "Starbucks", description: "Buy Now And Get", discount: "5% More" },


    ]

    return (
        <div className="my-20 px-10">
            <h1 className="mx-auto my-10 text-center text-5xl font-semibold text-purple-800 w-full max-w-xl">Send A Gift Card and
                Collect Rewards</h1>
            <p className="mx-auto text-center text-gray-800 text-xs w-full max-w-xl">Moola provides unbeatable deals on the gift cards you love. Buy for a friend or better yet, for yourself and collect rewards. With Moola, giving the perfect gift and saving money on the brands you love has never been easier or more convenient. Shop over 250 brands across Canada.</p>

            <div className="cards px-4 mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 overflow-hidden w-full max-w-6xl">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="rounded-md border border-gray-200 shadow-xl hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
                    >
                        <div className="px-10 py-5 rounded-t-md flex items-center justify-center bg-gray-200">
                            <img src={card.image} alt={card.name} className="w-[100px] object-cover rounded-2xl" />
                        </div>
                        <div className="p-3">
                            <h2 className="text-gray-700">{card.name}</h2>
                            <p className="text-gray-700">{card.description}</p>
                            <p className="bg-green-600 text-white rounded-r-full">{card.discount}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GiftCards