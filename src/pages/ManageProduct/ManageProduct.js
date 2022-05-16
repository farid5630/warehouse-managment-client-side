import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import useProducts from "../../Hooks/useProducts";
import Manage from "./Manage";

const ManageProduct = () => {
  const [products, setProducts] = useProducts();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    console.log(id);
    if (proceed) {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast('Delete Successfully')
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };
  
  return (
    <Container className="my-5">
      <ToastContainer />
      <h1 className="text-success text-center">
        WareHouse Product Management{" "}
      </h1>
      <table className="table table-bordered table-hover text-center">
        <thead>
          <tr>
            {/* <th scope="col">Id</th> */}
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Supplier</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Manage
              key={product._id}
              product={product}
              handleDelete={handleDelete}
            ></Manage>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-center">
        <Link to="/addProduct" className="btn btn-success">
          Add Product
        </Link>
      </div>
    </Container>
  );
};

export default ManageProduct;
