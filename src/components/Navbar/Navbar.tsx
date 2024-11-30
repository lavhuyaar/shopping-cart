import { Link } from "react-router-dom"


function Navbar() {
  return (
    <nav className="navbar">
      <Link to='/'>Home</Link>
      <Link to='/shop'>Shop</Link>
      <Link to='/cart'>Cart</Link>
    </nav>
  )
}

export default Navbar