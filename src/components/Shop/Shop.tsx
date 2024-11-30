import { useOutletContext } from "react-router-dom";

interface Product {
  title: string;
  id: number;
}

function Shop() {
  const products = useOutletContext<Product[]>();
  return (
    <>
      {products.map((product, index) => (
        <div key={index}>{product.title}</div>
      ))}
    </>
  );
}

export default Shop;
