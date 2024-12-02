import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { OutletContextType } from "../../types/types";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const {products, handleAddToCart} = useOutletContext<OutletContextType>();
  const product = products.find((p) => p.id === Number(id));


  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <>
      <main className="bg-[#1F1B24] min-h-[90vh] text-white" >

      <Link to="/shop">
        <FaArrowLeft style={{width: '40px', height: '40px',position: 'relative', left: '40px', top: '20px', marginBottom: '10px'}}/>
      </Link>

        <div className="w-full flex items-center mt-16 p-8 justify-center gap-8">
        <div className="flex justify-center items-center w-[500px] bg-white rounded-xl object-cover">
          <img src={product.image} alt={product.title}  style={{
                objectPosition: "center",
                objectFit: "contain",
                height: "90%",
                width: "90%",
                padding: '10px'
              }} />
        </div>
        <section className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold">{product.title}</h1>
          <article>
              <p className="text-sm">{product.description}</p>
          </article>
              <div className="text-xl">Price: {product.price} $</div>
              <button
          type="button"
          className="p-2  bg-[#BB86F6] mt-2 text-2xl font-bold text-[#242424] rounded-xl hover:bg-[#a063e6] px-10 py-4 w-[300px]"
          onClick={() => handleAddToCart(product)}
        >
          Add to cart
        </button>
        </section>
        </div>
        
      </main>
    </>
  );
}

export default ProductPage;
