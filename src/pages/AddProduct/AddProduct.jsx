import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./AddProduct.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  // FIRST APPROACH
  //   const [productImage, setProductImage] = useState("");
  //   const [productName, setProductName] = useState("");
  //   const [productDescription, setProductDescription] = useState("");
  //   const [productMaterial, setProductMaterial] = useState("");

  //   const addProduct = async (e) => {
  //     e.preventDefault();
  //     await axios.post("https://652fbacd6c756603295d8ece.mockapi.io/products", {
  //       productImage: productImage,
  //       productName: productName,
  //       productMaterial: productMaterial,
  //       productDescription: productDescription,
  //     });

  //SECOND APPROACH
  //   const addProduct = async (e) => {
  //     e.preventDefault();
  //     const formData = new FormData(e.currentTarget);
  //     const data = Object.fromEntries(formData);
  //     await axios.post(
  //       "https://652fbacd6c756603295d8ece.mockapi.io/products",
  //       data
  //     );
  //   };

  //THIRD APPROACH
  const [data, setData] = useState({
    productName: "",
    productDescription: "",
    productImage: "",
    productMaterial: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const addProduct = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://652fbacd6c756603295d8ece.mockapi.io/products",
      data
    );
    if (response.status == 201) {
      navigate("/");
    } else {
      alert("Something went wrong.Try Again");
    }
  };

  return (
    <>
      <Navbar />

      <div id="product-form">
        <h2>Product Information</h2>
        <form onSubmit={addProduct}>
          {/* 1st */}
          {/* <label htmlFor="productImage">Product Image:</label>
          <input
            type="text"
            id="productImage"
            name="productImage"
            accept="image/*"
            onChange={(e) => setProductImage(e.target.value)}
          />

          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            onChange={(e) => setProductName(e.target.value)}
          />

          <label htmlFor="productDescription">Product Description:</label>
          <textarea
            id="productDescription"
            name="productDescription"
            rows="4"
            onChange={(e) => setProductDescription(e.target.value)}
          ></textarea>

          <label htmlFor="productMaterial">Product Material:</label>
          <input
            type="text"
            id="productMaterial"
            name="productMaterial"
            onChange={(e) => setProductMaterial(e.target.value)}
          />

          <button type="submit">Submit</button> */}

          {/* 2nd */}
          {/* <label htmlFor="productImage">Product Image:</label>
          <input
            type="text"
            id="productImage"
            name="productImage"
            accept="image/*"
          />

          <label htmlFor="productName">Product Name:</label>
          <input type="text" id="productName" name="productName" />

          <label htmlFor="productDescription">Product Description:</label>
          <textarea
            id="productDescription"
            name="productDescription"
            rows="4"
          ></textarea>

          <label htmlFor="productMaterial">Product Material:</label>
          <input type="text" id="productMaterial" name="productMaterial" />

          <button type="submit">Submit</button> */}

          {/* 3rd */}
          <label htmlFor="productImage">Product Image:</label>
          <input
            type="text"
            id="productImage"
            name="productImage"
            accept="image/*"
            onChange={handleChange}
          />

          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            onChange={handleChange}
          />

          <label htmlFor="productDescription">Product Description:</label>
          <textarea
            id="productDescription"
            name="productDescription"
            rows="4"
            onChange={handleChange}
          ></textarea>

          <label htmlFor="productMaterial">Product Material:</label>
          <input
            type="text"
            id="productMaterial"
            name="productMaterial"
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
