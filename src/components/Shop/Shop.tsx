import { useOutletContext, Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { OutletContextType } from "../../types/types";
import { FaArrowLeft } from "react-icons/fa";

//Shop Page
function Shop() {
  const { products } = useOutletContext<OutletContextType>();
  return (
    <main className="bg-[#1F1B24] text-white">
      {/* Back button; navigates back to the Home page */}
      <button type="button" className="w-[60px]">
        <Link to="/">
          <FaArrowLeft
            style={{
              width: "40px",
              height: "40px",
              position: "relative",
              left: "20px",
              top: "20px",
              marginBottom: "10px",
            }}
          />
        </Link>
      </button>

      {/* Grid of product cards */}
      <div
        className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-7 p-[0.5rem] sm:p-7  my-[30px]"
        key="products-container"
      >
        {products.map((product) => (
          <ProductCard key={product?.title} product={product} />
        ))}
      </div>
    </main>
  );
}

export default Shop;
