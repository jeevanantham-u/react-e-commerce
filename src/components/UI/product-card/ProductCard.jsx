import "../../../styles/product-card.css"
const ProductCard = () => {
  return (
    <div className="product__card d-flex flex-column justify-content-between">
        <div className="product__content">
            <img src="https://placehold.jp/150x150.png"/>
            <h5>data title</h5>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-between">
            <span className="product__price">₹100</span>
            <button className="addTOCART__btn">Add to cart</button>
        </div>
    </div>
  )
}

export default ProductCard