import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      {/* <a href="/addProduct">Add Product</a> */}
      <Link to="/addProduct">Add Product</Link>
    </div>
  );
};

export default Navbar;
