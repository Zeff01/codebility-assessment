import './EyeCandy.css'

function EyeCandy(params) 
{
    return(  
    <>
        <div id="eyecandy-container">
            <div className='eyecandy-banner' id='banner1'>
                <h1>Send anywhere, anytime.</h1>
                <div className='banner-bottom'>
                    <p>On your mobile app, SMS, or even in your PC.</p>
                    <div id='eyecandy-btn-container'>
                        <button type='submit' className='eyecandy-dlbtn'>Download App</button>
                        <button type='submit' className='eyecandy-dlbtn'>Download PC</button>
                    </div>
                    
                </div>
            </div>
            <div className='eyecandy-banner' id="banner2">
                <h1>Up to 17% rebate on purchases with our giftcards.</h1>
            </div>
        </div>
    </>
    )
}

export default EyeCandy;