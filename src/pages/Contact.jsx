import { Container, Form, Row, Col, Button } from "react-bootstrap"
import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/UI/common-section/CommonSection";

const Contact = () => {
    return (
        <Helmet title='Contact'>
        <CommonSection title="Contact" />
        <section>
        <Container >
                <Row>
                    <Col className="d-flex justify-content-center">
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        </section>
        </Helmet>
    )
}

function ContactForm() {
    return (
        <Form className="w-75">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="lg-3 mb-3" controlId="exampleForm.ControlTextarea1">
            <Button variant="success" id="button-addon1">
          Submit
        </Button>
            </Form.Group> 
        </Form>
    );
}

export default Contact