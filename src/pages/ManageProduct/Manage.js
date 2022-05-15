import React from "react";
import { Container } from "react-bootstrap";

const Manage = ({ product }) => {
  const { name, images, price, description, quantity, supplier } = product;
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{images}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td className="text-danger">Delete</td>
      </tr>
    </>
  );
};

export default Manage;
