import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { Product } from "./types/types";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const NUMBER_OF_PRODUCTS: number = 20;

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

  const notifyAddedToCart = () =>  toast('Product added to the cart!');
  const notifyRemovedFromCart = () =>  toast('Product removed to the cart.');

  const handleAddToCart = (product: Product): void => {
    setCartProducts((prevState) => [...prevState, product]);
    notifyAddedToCart()
  };

  const handleRemoveFromCart = (index: number): void => {
    const copyOfCartProducts = [...cartProducts];
    copyOfCartProducts.splice(index, 1);
    setCartProducts(copyOfCartProducts);
    console.log(copyOfCartProducts);
    notifyRemovedFromCart()
  }

  


  return (
    <>
      <Navbar />
      <Outlet context={{ products, cartProducts, handleAddToCart, handleRemoveFromCart }} />
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
