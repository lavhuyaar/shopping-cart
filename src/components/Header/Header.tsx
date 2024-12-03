import { Link, NavLink } from "react-router-dom";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";

//Header
function Header() {
  return (
    <header>
      {/* Navbar */}
      <nav className="navbar w-full p-3 sm:px-10 sm:py-5 flex justify-between text-2xl align-center bg-[#BB86F6] text-[#242424] font-bold z-10">
        {/* Logo, redirects to Home page */}
        <Link to="/">
          <div className="logo text-3xl sm:text-4xl ">lavCART</div>
        </Link>
        <div className="flex gap-5 sm:gap-12 items-center">
          {/* Shop button; opens Shop page */}
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? "text-white" : "")}
          >
            <FaShoppingBag
              className="shop-icon"
              style={{ width: "40px", height: "40px" }}
            />
          </NavLink>

          {/* Cart button; opens Cart page */}
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? "text-white" : "")}
          >
            <FaShoppingCart
              className="cart-icon"
              style={{ width: "40px", height: "40px" }}
            />
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
