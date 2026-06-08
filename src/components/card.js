function Card(props){
    return(
        <div className="card">
            <img src={props.image} alt=""/>
            <div className="card-body">
                <h3 className="card-brand">{props.cloth}</h3>
                <p className="card-title">{props.title}</p>
                <p className="card-price">
                    <span className="price-current">Rs. {props.currentPrice}</span>
                    <span className="price-original">Rs. {props.originalPrice}</span>
                    <span className="price-discount">({props.discount}% OFF)</span>
                </p>
            </div>
        </div>
    )
}

export default Card;