import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar w-full px-10 py-5 flex justify-between text-2xl fixed top-0 align-center bg-gray-700">
      <Link to="/">
        <div className="logo text-4xl">lavCART</div>
      </Link>
      <div className="flex gap-12">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;
