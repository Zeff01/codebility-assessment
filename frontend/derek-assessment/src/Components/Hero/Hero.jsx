import creditCard from "../../assets/credit-card.png";
const Hero = () => {
    return (
        <>
            <section className="hero">
            <img src={creditCard} alt="" />
                <div className="hero-content">
                    <div className="hero-text">
                        <h2>Get exclusive discounts, cashback, and smart deals — all in one easy-to-use app.</h2>
                        <h1>Save Big on Everyday Essentials and Gifts</h1>
                    </div>
                    <div className="hero-button">
                        <button className="saverly-button">
                            Join Saverly Free
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;