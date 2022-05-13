import React from "react";
import { Col } from "react-bootstrap";

const Product = ({ product }) => {
  const { name, images, price, description, quantity, supplier } = product;
  let lowStock;
  let stockOut;
  if (quantity <= 5 || quantity === 0) {
    lowStock = `${quantity} Low`;
    stockOut = " Stock Out";
  }
  return (
    <Col md={12} lg={12}>
      <div className="mx-auto card mb-3">
        <div className="row g-0">
          <div className="col-sm-4 col-lg-3">
            <img
              className="img-fluid px-2"
              src={images}
              alt=""
              style={{ height: "250px", objectFit: "cover" }}
            />
          </div>
          <div className="col-sm-8 col-lg-9">
            <div className="card-body">
              <h3 className="card-title">
                <strong>{name}</strong>
              </h3>
              <p className="card-text text-start">
                {description.length >= 200
                  ? description.slice(0, 200) + "....."
                  : description}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="text-start">
                  <p className="text-muted mb-0">
                    Price: ৳ <strong>{price}</strong>
                  </p>
                  <p className="text-muted mb-0">
                    Stock:
                    <strong className= {` me-1${quantity ? " " : "text-danger"}`}>
                      {quantity ? (
                        lowStock ? (
                          <span className="text-warning">{lowStock}</span>
                        ) : (
                          " " + quantity
                        )
                      ) : (
                        stockOut
                      )}
                    </strong>
                    catun
                  </p>
                  <p className="text-muted mb-0">
                    Supplier:
                    <strong>
                      <em> {supplier}</em>
                    </strong>
                  </p>
                </div>
                <div>
                  <button
                    //   onClick={() => navigateToManageStock(_id)}
                    className="btn btn-warning"
                  >
                    Manage Stock
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Product;
