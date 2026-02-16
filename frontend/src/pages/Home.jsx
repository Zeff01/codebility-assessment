import GiftCard from '../components/Card/GiftCard'
import Hero from '../components/Splide/Hero'
import MacImge from '../assets/images/mac-os.png'

const Home = () => {
    return (
        <>
            <section className="hero">
                <Hero />
            </section>
            <section className='my-3 my-lg-5'>
                <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-md-10">
                        <h2 className='text-primary text-center fw-bold'>Send A Gift Card and <br />Collect Rewards</h2>
                        <p className='text-center'>Moola provides unbeatable deals on the gift cards you love. Buy for a friend or better yet, for yourself and collect rewards. With Moola, giving the perfect gift and saving money on the brands you love has never been easier or more convenient. Shop over 250 brands across Canada.</p>
                    </div>
                </div>
                <GiftCard />
            </section>

        </>
    )
}

export default Home
