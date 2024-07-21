import { Row, Col, Container, Button } from "react-bootstrap";
import Helmet from "../components/Helmet/Helmet"
import heroImage from "../assets/images/undraw_electricity_k2ft (2).svg"

import '../styles/hero-section.css'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Helmet title="Home">
                <Container>
                    <Row>
                        <Col lg="6" md="12">
                            <div className="hero__content">
                            <h1 className="mb-4 hero__title">Pioneering Sustainable <span>Sodium-ion Battery</span> Technology</h1>
                                <h4 className="mb-3">One Technology with Multiple Impacts</h4>
                                <button className="order__btn d-flex align-items-center justify-content-between ">
                                    <Link to="/cart">
                                        Products <i className="ri-arrow-right-s-line"></i>
                                    </Link>
                                </button>
                    </div>
                        </Col>
                        <Col lg="6" md="12" >
                            <div className="hero__img-container">
                                <img className="hero__img" src={heroImage} alt="hero-img"></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Helmet>
        </>
    )
}

export default Home;