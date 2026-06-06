import React from 'react'
import ReactDOM from 'react-dom/client'
import { FaSearch } from "react-icons/fa";


// Header
// Body
// Footer
// Card: Renders a product card showing image, name, discount, and a "Shop Now" button.
// Receives `props.cloth` and `props.discount` to populate content.
function Card(props) {
  return (
    <div
      style={{
        width: "250px",
        borderRadius: "15px",
        overflow: "hidden",
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        transition: "0.3s ease",
        cursor: "pointer",
      }}
    >
      <img
        src="https://m.media-amazon.com/images/I/41HQoquUJFL._SX679_.jpg" 
        height="150px"
        width="150px" style={{
          display: "block",
          margin: "20px auto",
          borderRadius: "10px",
        }}
      />

      <div
        style={{
          padding: "15px",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            margin: "0",
            color: "#333",
            fontSize: "20px",
          }}
        >
          {props.cloth}
        </h3>

        <p
          style={{
            color: "#ff3f6c",
            fontWeight: "bold",
            margin: "10px 0",
          }}
        >
          {props.discount}
        </p>

        <button
          style={{
            backgroundColor: "#ff3f6c",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "25px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}

// Header: Renders the top navigation including logo, nav links, search box and profile area.
function Header(){
  return(
     <header className="header">
      <div className="logo">
        <h2>MYNTRA</h2>
      </div>

      <nav className="nav-links">
        <a href="/">MEN</a>
        <a href="/">WOMEN</a>
        <a href="/">KIDS</a>
        <a href="/">HOME</a>
        <a href="/">BEAUTY</a>
        <a href="/">STUDIO</a>
      </nav>

      <div className="search-box">
         <FaSearch className="search-icon" />

          <input
             type="text"
              placeholder="Search for products, brands and more"
        />
       </div>

      <div className="profile-section">
        <div>👤 Profile</div>
        <div>❤️ Wishlist</div>
        <div>🛍️ Bag</div>
      </div>
    </header>

    )
}

// Footer: Renders site footer sections with informational and contact links.
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>ONLINE SHOPPING</h4>
        <p>Men</p>
        <p>Women</p>
        <p>Kids</p>
        <p>Home & Living</p>
        <p>Beauty</p>
      </div>

      <div className="footer-section">
        <h4>CUSTOMER POLICIES</h4>
        <p>Contact Us</p>
        <p>FAQ</p>
        <p>T&C</p>
        <p>Terms Of Use</p>
        <p>Track Orders</p>
      </div>

      <div className="footer-section">
        <h4>EXPERIENCE MYNTRA APP</h4>
        <p>Download on Android</p>
        <p>Download on iOS</p>
      </div>

      <div className="footer-section">
        <h4>KEEP IN TOUCH</h4>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
        <p>YouTube</p>
      </div>
    </footer>
  );
}

// export default Footer;

const arr = [
  { cloth: "T-Shirt", discount: "20-30%OFF"},
  { cloth: "Shirt", discount: "40-70%OFF" },
  { cloth: "Pants", discount: "20-50%OFF" },
  { cloth: "T-Shirt", discount: "20-30%OFF" },
  { cloth: "Shirt", discount: "40-70%OFF" },    
  { cloth: "Pants", discount: "20-50%OFF" },];


// App: Main application component — composes Header, a grid of Cards from `arr`, and Footer.
function App(){
    
  return(
        <>
{/* header */}
        <Header/>
        
{/* //Body */}
        <div style={{display:"flex",gap:"10px",flexWrap:"wrap",justifyContent:"center"}}>
           {/* <Card cloth="T-Shirt" discount="20-30%OFF"/>
           <Card cloth="Shirt" discount="40-70%OFF"/>
           <Card cloth="Pants" discount="20-50%OFF"/>
           <Card cloth="T-Shirt" discount="20-30%OFF"/>
           <Card cloth="Shirt" discount="40-70%OFF"/>
           <Card cloth="Pants" discount="20-50%OFF"/>
           <Card cloth="T-Shirt" discount="20-30%OFF"/>
           <Card cloth="Shirt" discount="40-70%OFF"/>
           <Card cloth="Pants" discount="20-50%OFF"/> */}

            {arr.map((items,index)=>{
                return <Card key={index} cloth={items.cloth} discount={items.discount}/>
            })}

        </div>

{/* Footer */}
        <Footer/>
        </>
    )
    
}


const element1 = ReactDOM.createRoot(document.getElementById('root'))
element1.render(<App/>)
