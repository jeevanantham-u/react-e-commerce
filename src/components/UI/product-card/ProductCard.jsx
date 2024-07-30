import "../../../styles/product-card.css"

const ProductCard = (props) => {
  const {image01, price, title}= props.item
  console.log(props);
  return (
    <div className="product__card d-flex flex-column justify-content-between">
        <div className="product__content">
            <img src={image01}/>
            <h5>{title}</h5>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-between">
            <span className="product__price">₹{price}</span>
            <button className="addTOCART__btn">Add to cart</button>
        </div>
    </div>
  )
}

export default ProductCard;