import React, { useEffect } from "react";
import Meta from "../components/Meta";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector} from 'react-redux'
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import { listProducts } from "../actions/productActions";
import { useParams } from "react-router-dom";
import ProductCarousel from "../components/ProductCarousel";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const keyword = useParams().keyword

  const pageNumber = useParams().pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const { loading, error, products, page, pages} = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber]);



  return (
    <>
      <Meta />
      {!keyword ? <ProductCarousel /> : <Link to='/'>Go Back</Link>}
      <h1 className='mx-0 px-0'>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product}></Product>
            </Col>
          ))}
        </Row>
        <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
        </>
      )}
    </>
  )
};

export default HomeScreen;
