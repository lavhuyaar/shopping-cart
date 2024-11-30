import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const NUMBER_OF_PRODUCTS: number = 12;

  interface Product {
    id: number;
    title: string;
    price: string;
    description: string;
    image: string;
  }

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
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
