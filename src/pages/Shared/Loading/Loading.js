import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <Spinner animation="grow" variant="primary" />
    </div>
  );
};

export default Loading;
