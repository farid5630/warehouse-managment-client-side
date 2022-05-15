import React , { useState, useEffect} from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ManageStock = () => {
    const {id } = useParams();
    const [manage, setManage] = useState({});
   
    const { name, images, price, description, quantity, supplier } = manage;

    useEffect(() => {
        fetch(`http://localhost:5000/manage/${id}`)
        .then(res => res.json())
        .then(data => setManage(data))
    }, [id])
     
    const increseStockQuantity = () => {

    }

    const handleDelivered = () => {
        
    }
    
    return (
        <Container className="mx-auto my-4 ">
            <h3>{name}</h3>
            <div className="input-group mb-3 w-25 mx-auto">
  <input type="number" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn btn-outline-success" type="button" id="button-addon2" onClick={increseStockQuantity}>Increse Stock</button>
</div>

        <Card className="w-50 mx-auto shadow">
          <Card.Img variant="top"  src={images} className="" />
          <Card.Body className='text-center'>
            {/* <Card.Title>Card Title</Card.Title> */}
            <Card.Text>
                        <p>{description}</p>
                        <p className="fw-bold">Price: {price}</p>
                        <p className="fw-bold">Quantity: {quantity} catun</p>
                        <p className="fw-bold">Supplier: {supplier}</p>
                        
            </Card.Text>
        <Button variant="primary" className={`${quantity === 0  && "disabled"}`} onClick={handleDelivered}>Delivered</Button>
          </Card.Body>
        </Card>
        <div className='d-flex justify-content-center'>
          <Link to="/manageProduct" className='btn btn-success mt-4 '>Manage Product</Link>
        </div>
            
      </Container>
    );
};

export default ManageStock;