import './HowItWorks.css'
import smartfone from '../assets/smartfone.svg'

function HowItWorks(params) 
{
    return(
        <>
            <div id='howitworks-container'>
                <div id='howitworks-mainbox'>
                    <h1>Hop into the fun, even on the fly.</h1>
                    <p>With Usagift, you can send now send giftcards to your loved ones wherever you are, whenever you need, and get perks for buying!</p>
                    <div id='howitworks-container-col'>
                        <div className='howitworks-container-row'>
                            <h1>Make them feel special.</h1>
                            <p>Multiple delivery options so you can customize to make your giftcards feel personal. Need a bit of surprise? Let's deliver it with a stuffed rabbit toy on a hat, with a magic trick!</p>
                        </div>
                        <div className='howitworks-container-row' id='howitworks-img-container'>
                            <img src={smartfone} alt="Download Usagift" width={100} height={300}/>
                        </div>
                        <div className='howitworks-container-row'>
                            <h1>Check where your giftcard is going.</h1>
                            <p>Tired of lost giftcards? we can track it for you. Use the app or send us and SMS and we'll give you up-to-date details on where your giftcards are.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowItWorks