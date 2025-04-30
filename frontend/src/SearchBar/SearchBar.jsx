import './SearchBar.css'

function SearchBar(params) {
    return(
        <>
            <div className='searchbar-container'>
                <div id='searchbar-banner-container'>
                    <h1>Get freebies, discounts and more!</h1>
                    <h2>Search over 900 gift card brands.</h2>
                </div>
                <div id='searchbar-search-container'>
                    <input type="text" id='brand-txtfield' placeholder='Enter a giftcard brand...'/>
                    <button type='submit' id='search'>Search</button>
                </div>
            </div>
        </>
    )
}

export default SearchBar