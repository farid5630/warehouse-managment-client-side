import React from "react";
import { Container } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    
    const onSubmit = (data, e) => {
        // console.log(data);
        const url = `https://rocky-island-00246.herokuapp.com/product`;
         fetch(url, {
           method: "POST",
           headers: {
             "content-type": "application/json",
           },
           body: JSON.stringify(data),
         })
           .then((res) => res.json())
           .then((result) => {
             if (result.insertedId) {
               toast('Product added successfully')
               e.target.reset();
             }
           });
        
    }
    

  return (
    <Container>
      <ToastContainer />
      <h1 className="text-center text-success mt-4 mb-2">Product Add Form</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column w-50 mx-auto"
      >
        <input
          className="mb-2 py-1 ps-2"
          value={user?.email}
          {...register("email")}
        />
        <input
          className="mb-2 py-1 ps-2"
          {...register("name")}
          placeholder="Product Name"
        />
        <textarea
          className="mb-2 py-1 ps-2"
          {...register("description")}
          placeholder="Simple Description"
        />
        <input
          className="mb-2 py-1 ps-2"
          type="number"
          {...register("quantity")}
          placeholder="Stock Quantity"
        />
        <input
          className="mb-2 py-1 ps-2"
          type="text"
          {...register("supplier")}
          placeholder="Supplier"
        />
        <input
          className="mb-2 py-1 ps-2"
          type="number"
          {...register("price")}
          placeholder="Price"
        />
        <input
          className="mb-2 py-1 ps-2"
          type="text"
          {...register("images")}
          placeholder="Image Url"
        />
        <input className="mb-2 py-1 ps-2" type="submit" />
      </form>
    </Container>
  );
};

export default AddProduct;
