import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/header"
import Card from "./components/card"
import Footer from "./components/footer"
import arr from "./util/arr"
import { useState } from 'react';


// function Sort() {
//     let [A,setA] = useState(arr);         I cannot write the hook inside nomal function ,it always written inside a react components.

//     arr.sort((a, b) => {
//         return a.currentPrice - b.currentPrice;
//     });
//     setA();
//     // console.log(arr);
// }

function App(){

    let [A,setA] = useState(arr);  //here i use it rightly because it is inside a react component and i can use it anywhere in this component and also in any function which is inside this component.
    
    function Sort() {
        A.sort((a, b) => {
            return a.currentPrice - b.currentPrice;
        });
    setA([...A]);  //here i use spread operator because when we sort the array it will change the reference of the array and react will not re-render the component because it thinks that the array is same but when we use spread operator it will create a new array with the same elements and it will change the reference of the array and react will re-render the component.
    // console.log(A);
     }

     
 
     // function to add filter by price 1000
     let [B,setB] = useState(arr);
     function filterby1000() {
        let filteredArr = A.filter(item => item.currentPrice <= 1000);
        setB([...filteredArr]);
    }

    //sort on basis of discount.
    function sortDiscount() {
        A.sort((a,b) =>{
            return a.discount - b.discount;
        });
        setA([...A]);
    }

    return(
        <div>

        <Header/>
        <button className="onee" onClick={Sort}>Sort</button>
        <button className="onee" onClick={filterby1000}>Filter by price less than 1000</button>
        <button className="onee" onClick={sortDiscount}>Sort by discount</button>
        <div className="card-container">
        {B.map((items,index)=>{
            return <Card key={index} cloth={items.cloth} brand={items.brand} title={items.title} currentPrice={items.currentPrice} originalPrice={items.originalPrice} discount={items.discount} image={items.image}/>
        })};
        </div>

        <Footer/>

        </div>

    )
};
const myntra = ReactDOM.createRoot(document.getElementById('root'));
myntra.render(<App/>)