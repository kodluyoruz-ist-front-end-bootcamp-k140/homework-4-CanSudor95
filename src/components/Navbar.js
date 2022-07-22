import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="products">Products</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
      <NavLink to="login">Login</NavLink>
    </div>
  );
}

export default Navbar;
