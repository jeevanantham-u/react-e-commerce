import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../components/UI/product-card/ProductCard'
import ReactPaginate from 'react-paginate'
import { useState } from 'react';
import products from '../assets/Fake-product-images/products';
import "../styles/paginate.css"

const Batteries = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const searchedProduct = products;

  const productPerPage = 4;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title='All-Batteries'>
      <Container>
        <Row>
          {displayPage.map((item) => (
              <Col
                lg="3"
                md="4"
                sm="6"
                xs="6"
                key={item.id}
                className="mb-4 mt-4"
              >
                <ProductCard item={item}/>
              </Col>
          ))}
          <div>
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel={"Prev"}
              nextLabel={"Next"}
              containerClassName="paginationBttns"
            />
          </div>
        </Row>
      </Container>
    </Helmet>
  )
}

export default Batteries