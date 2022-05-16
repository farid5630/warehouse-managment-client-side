import React from "react";

const Manage = ({ product, handleDelete }) => {
  const { _id, name, images, price, quantity, supplier } = product;
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{images}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{supplier}</td>
        <td className="text-danger" onClick={() => handleDelete(_id)}>
          Delete
        </td>
      </tr>
    </>
  );
};

export default Manage;
