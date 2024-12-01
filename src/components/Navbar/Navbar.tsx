import { Link, NavLink } from "react-router-dom";
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar w-full px-10 py-5 flex justify-between text-2xl align-center bg-[#BB86F6] text-[#242424] font-bold z-10">
      <Link to="/">
        <div className="logo text-4xl ">lavCART</div>
      </Link>
      <div className="flex gap-12">
        <NavLink to="/shop" className={({isActive}) => (isActive ? 'text-white' : '')} >
          <FaShoppingBag style={{ width: "40px", height: "40px" }} />
        </NavLink>
        <NavLink to="/cart" className={({isActive}) => (isActive ? 'text-white' : '')}>
          <FaShoppingCart style={{ width: "40px", height: "40px" }} />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
