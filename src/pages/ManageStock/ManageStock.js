import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const ManageStock = () => {
  const { id } = useParams();
  const [manageStockItem, setManageStockItem] = useState({});
  const quantityRef = useRef();
  const { name, images, price, description, quantity, supplier } =
    manageStockItem;

  useEffect(() => {
    fetch(`https://rocky-island-00246.herokuapp.com/manage/${id}`)
      .then((res) => res.json())
      .then((data) => setManageStockItem(data));
  }, [id, quantity]);

  let lowStock;
  let stockOut;
  if (quantity <= 5 || quantity === 0) {
    lowStock = `${quantity}`;
    stockOut = " Stock Out";
  }

  let handleQuantityUpdate = (newQuantity) => {
    const url = `https://rocky-island-00246.herokuapp.com/manage/${id}`;
    axios
      .put(url, { quantity: newQuantity })
      .then((response) => {
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
    quantityRef.current.value = "";
  };
  let decrementalQuantity = quantity;

  const handleDelivered = (e) => {
    e.preventDefault();
    if (parseInt(quantity) > 0) {
      handleQuantityUpdate(decrementalQuantity - 1);
    } else {
      toast.warning("Stock Out");
    }
  };

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
            <span className="text-muted">{description}</span>
            <br />
            <span className="fw-bold">Price: {price}</span>
            <br />
            <span className="fw-bold">
              Stock:
              <strong className={` me-1 ${quantity ? "text-success" : "text-danger"}`}>
                {quantity ? (
                  lowStock ? (
                    <span className="text-warning"> {lowStock} catun stock Low</span>
                  ) : (
                    " " + quantity + " catun"
                  )
                ) : (
                  <span className="text-danger">{stockOut}</span>
                )}
              </strong>
            </span>
            <br />
            <span className="fw-bold">Supplier: {supplier}</span>
            <br />
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
