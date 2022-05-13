import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    console.log(products);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <Container>
            <h1 className='my-4 text-primary'>In Stock</h1>
            <Row>
                {
                    products.slice(0, 6).map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
            }
            </Row>
        </Container>
    );
};

export default Products;