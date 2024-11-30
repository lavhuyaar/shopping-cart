import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { Product } from "./types/types";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const NUMBER_OF_PRODUCTS: number = 12;

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products?limit=${NUMBER_OF_PRODUCTS}`
      );
      const data: Product[] = await response.json();
      setProducts(data);
    };

    getProducts();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Outlet context={products} />
      </main>
      <Footer />
    </>
  );
}

export default App;
