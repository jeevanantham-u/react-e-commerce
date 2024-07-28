import { Container } from "react-bootstrap";
import '../../../styles/common-section.css';

const CommonSection = (props) => {
  return (
    <section className="common__section">
        <Container>
            <h2 className="text-white common__title">{props.title}</h2>
        </Container>
    </section>
  )
}

export default CommonSection;