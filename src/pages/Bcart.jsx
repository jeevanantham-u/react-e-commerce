import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "react-bootstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Link } from "react-router-dom";
import "../styles/Bcart.css"

const Cart = () => {
  const a = true;
  return (
    <Helmet title='Cart'>
      <CommonSection title='Your Cart' />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {a === 0 ? <h5 className="text-center cart-headings">Your cart is empty</h5>
                : <>
                  <h5 className="mb-5 cart-headings">Summary of your order</h5>
                  <table className="table table-borderless mb-5 align-middle">
                    <tbody>
                      <Tr />
                    </tbody>
                  </table>
                </>}

              <div className="mt-4">
                <h6 className="cart-headings">
                  Subtotal:
                  <span className="cart__subtotal">₹100</span>
                </h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="cart__page-btn">
                  <button className="addTOCart__btn me-4">
                    <Link to="/batteries">Continue Shopping</Link>
                  </button>
                  <button className="addTOCart__btn">
                    <Link to="/checkout">Proceed to checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

const Tr = () => {
  return (
    <tr>
      <td className="text-center">
        <img src="https://placehold.co/400" width="100px" />
      </td>
      <td className="text-center td-data">Coin Cell    u,mim</td>
      <td className="text-center td-data">₹100</td>
      <td className="text-center td-data">1px</td>
    </tr>
  );
}

export default Cart