import { useOutletContext, Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { OutletContextType } from "../../types/types";
import { FaArrowLeft } from "react-icons/fa";

function Shop() {
  const { products } = useOutletContext<OutletContextType>();
  return (
    <main className="bg-[#1F1B24] text-white">
      <Link to="/">
        <FaArrowLeft style={{width: '40px', height: '40px',position: 'relative', left: '40px', top: '20px', marginBottom: '10px'}}/>
      </Link>
      <div
        className="products-container grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-7 p-7  pb-4"
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
