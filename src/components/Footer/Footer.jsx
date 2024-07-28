import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../assets/images/AatralLogo_New.png';

import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="6" md="12">
          <div className='footer__logo'>
            <img src={logo} alt="Logo" />
          </div>
          <span className="footer__icons">
            <i class="ri-facebook-circle-fill"></i>
            <i class="ri-linkedin-fill"></i>
          </span>
            
          </Col>
          <Col lg="6" md="12" >
            <p className="footer__content">
              Do you believe in sustainable future too?
              Get in touch with us via <Link to={"contact@aatral-esp.com"}
              >contact@aatral-esp.com</Link>
            </p>
          </Col>
        </Row>
      </Container>
      <p className="text-center p-3 fw-bolder">Copyright@AatralESP-2024</p>
    </footer>

  )
}

export default Footer;