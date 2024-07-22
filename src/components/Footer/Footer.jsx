import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../assets/images/AatralLogo_New.png';

import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
          <div className='footer__logo'>
            <img src={logo} alt="Logo" />
          </div>
            <i class="ri-facebook-circle-fill">u</i>
            <i class="ri-linkedin-fill"></i>
          </Col>
          <Col>
            <p>
              Do you believe in sustainable future too?
              Get in touch with us via <Link to={"contact@aatral-esp.com"}
              >contact@aatral-esp.com</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>

  )
}

export default Footer;