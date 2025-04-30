import './NavBar.css'

function NavBar(params) 
{
    return(
        <>
            <div className='navbar-container'>
                <div className='navbar-logo'>USAGIFT</div>
                <div className='navbar-navi'>
                    <a href="" className='navi-btn'>Shop</a>
                    <a href="" className='navi-btn'>Discounts and Promos</a>
                    <a href="" className='navi-btn'>How It Works</a>
                    <a href="" className='navi-btn'>Referrals</a>
                </div>
                <div className='navbar-dlbtn'>
                    <a href="" id='navbar-dlbtn'>GET USAGIFT</a>
                </div>
            </div>
        </>
    )
}

export default NavBar;