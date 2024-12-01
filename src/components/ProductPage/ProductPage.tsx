import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { Product } from "../../types/types";

function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const products = useOutletContext<Product[]>();
  const product = products.find((p) => p.id === Number(id));


  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <>
      <div>{product.title}</div>
      lol product page
    </>
  );
}

export default ProductPage;
