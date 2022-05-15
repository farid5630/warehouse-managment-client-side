import React from "react";
import { Container } from "react-bootstrap";
import useProducts from "../../Hooks/useProducts";
import Manage from "./Manage";

const ManageProduct = () => {
  const [products] = useProducts();
  return (
    <Container className="my-5">
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
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Manage key={product._id} product={product}></Manage>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default ManageProduct;
