function Header(){
    return(
        <header className="header">
            <img src ="https://livewire.thewire.in/wp-content/uploads/2021/02/myntra.png" height="100px" width="100px"/>

            <div className="home">
                <button className="button">MEN</button>
                <button className="button">WOMEN</button>
                <button className="button">KID</button>
                <button className="button">HOME</button>
                <button className="button">BEAUTY</button>
                <button className="button">GENZ</button>
                <button className="button">STUDIO</button>
            </div>

            <div className="search">
                <input className="search-input" placeholder="Search for products,brands and more"></input>
            </div>

            <div className="profile">
                <button className="button">PROFILE</button>
                <button className="button">WHISLIST</button>
                <button className="button">BAG</button>
            </div>
        </header>
    )
}

export default Header;