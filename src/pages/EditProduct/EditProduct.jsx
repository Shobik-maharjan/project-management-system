import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./EditProduct.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const handleProduct = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
    console.log(product);
  };

  //edit product
  const editProduct = async (e) => {
    e.preventDefault();
    const response = await axios.put(
      "https://652fbacd6c756603295d8ece.mockapi.io/products/" + id,
      product
    );
    if (response.status == 200) {
      navigate("/singleProduct/" + id);
    } else {
      alert("something went wrong");
    }
  };

  //fetch product of id
  const fetchProduct = async () => {
    const response = await axios.get(
      "https://652fbacd6c756603295d8ece.mockapi.io/products/" + id
    );
    setProduct(response.data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      <Navbar />

      <div id="product-form">
        <h2>Product Information</h2>
        <form onSubmit={editProduct}>
          <label htmlFor="productImage">Product Image:</label>
          <input
            type="text"
            value={product.productImage}
            id="productImage"
            name="productImage"
            onChange={handleProduct}
          />

          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            value={product.productName}
            id="productName"
            name="productName"
            onChange={handleProduct}
          />

          <label htmlFor="productDescription">Product Description:</label>
          <textarea
            id="productDescription"
            value={product.productDescription}
            name="productDescription"
            rows="4"
            onChange={handleProduct}
          ></textarea>

          <label htmlFor="productMaterial">Product Material:</label>
          <input
            type="text"
            value={product.productMaterial}
            id="productMaterial"
            name="productMaterial"
            onChange={handleProduct}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default EditProduct;
