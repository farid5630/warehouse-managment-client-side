import axios from 'axios';
import React , { useState, useEffect, useRef} from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const ManageStock = () => {
  const { id } = useParams();
  const [manageStockItem, setManageStockItem] = useState({});
  const quantityRef = useRef()
    const { name, images, price, description, quantity, supplier } = manageStockItem;

    useEffect(() => {
        fetch(`http://localhost:5000/manage/${id}`)
        .then(res => res.json())
        .then(data => setManageStockItem(data))
    }, [id, quantity])  
 
    // useEffect(() => {
    //   const url = https://pacific-garden-84350.herokuapp.com/stock-item/${stockId.id};
    //   fetch(url)
    //     .then((res) => res.json())
    //     .then((data) => setManageStockItem(data));
    // }, [stockId.id, quantity]);  

  //     let lowStock;
  //     let stockOut;
  //     if (quantity <= 5 || quantity === 0) {
  //       lowStock =  ${quantity} Low;
  //       stockOut = " Stock Out";
  // }
  

  let handleQuantityUpdate = (newQuantity) => {
    const url = `http://localhost:5000/manage/${id}`;
    axios.put(url, { quantity: newQuantity})
      .then((response) => {
        console.log(response);
        setManageStockItem(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const increseStockQuantity = (e) => {
    e.preventDefault();
    const quantityInput = parseInt(quantityRef.current.value);
    const newQuantity = quantityInput + parseInt(quantity);
    handleQuantityUpdate(newQuantity);
    quantityRef.current.value = '';
  };
let decrementalQuantity = quantity;
  
  const handleDelivered = (e) => {
    e.preventDefault();
    if (parseInt(quantity) > 0) {
      handleQuantityUpdate(decrementalQuantity - 1);
    } else {
      toast.warning('Stock Out')
    }
  };
  
  
  
     
    // const increseStockQuantity = () => {

    // }

    // const handleDelivered = () => {
        
    // }
    
    return (
      <Container className="mx-auto my-4 ">
        <ToastContainer />
        <h3>{name}</h3>
        <div className="input-group mb-3 w-25 mx-auto">
          <input
            ref={quantityRef}
            type="number"
            className="form-control"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-success"
            type="button"
            id="button-addon2"
            onClick={increseStockQuantity}
          >
            Increse Stock
          </button>
        </div>

        <Card className="w-50 mx-auto shadow">
          <Card.Img variant="top" src={images} className="" />
          <Card.Body className="text-center">
            
            <Card.Text>
              <span className='text-muted'>{description}</span><br />
              <span className="fw-bold">Price: {price}</span><br />
              <span className="fw-bold">Quantity: {quantity} catun</span><br />
              <span className="fw-bold">Supplier: {supplier}</span><br />
            </Card.Text>
            <Button
              variant="primary"
              className={`${quantity === 0 && "disabled"}`}
              onClick={handleDelivered}
            >
              Delivered
            </Button>
          </Card.Body>
        </Card>
        <div className="d-flex justify-content-center">
          <Link to="/manageProduct" className="btn btn-success mt-4 ">
            Manage Product
          </Link>
        </div>
      </Container>
    );
};

export default ManageStock;