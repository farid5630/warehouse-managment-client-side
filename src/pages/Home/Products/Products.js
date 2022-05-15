import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../../Hooks/useProducts';
import Product from '../Product';

const Products = () => {
    const [products] = useProducts();
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:5000/products")
    //       .then((res) => res.json())
    //       .then((data) => setProducts(data));
    // }, [])
    return (
        <Container id="stock">
            <h1 className='mt-5 mb-2 text-primary text-center'>In Stock</h1>
            <Row>
                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
            }
            </Row>
        </Container>
    );
};

export default Products;