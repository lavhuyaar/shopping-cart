/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { Product, CartProduct } from "./types/types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState<Product[]>([]); //Products
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]); //Products in cart
  const NUMBER_OF_PRODUCTS: number = 20; //Products quantity (total)

  //Gets cartProducts from local storage if available
  useEffect(() => {
    const localCartProducts = localStorage.getItem("cartProducts"); //Gets cartProducts array (as string) from local storage
    if (localCartProducts) { 
      const parsedLocalCartProducts = JSON.parse(localCartProducts); //Parse it to array

      if (parsedLocalCartProducts.length > 0) { //If the array is not empty
        setCartProducts(parsedLocalCartProducts); //Sets the cartProducts state to local storage array
        //This helps in persisting the cart products in local storage
      }
    }
  }, []);

  // Adds cartStorage to local storage whenever changed
  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  //Sets products
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

  //Toastify snackbars
  const notifyAddedToCart = () => toast("Product added to the cart!");
  const notifyRemovedFromCart = () => toast("Product removed from the cart.");
  const notifyCheckout = () => toast("Products ordered!!");

  //Adds Product(s) to Cart
  const handleAddToCart = (product: CartProduct): void => {
    //Accepts an object (product) of CartProduct type
    if (cartProducts.some((p) => p.id === product.id)) {
      //If Cart already has the product
      const productInCart: CartProduct | any = cartProducts.find(
        (p) => p.id === product.id //Copy of already existing product
      );

      const indexOfProductInCard = cartProducts.indexOf(productInCart); //Gets index of product from Cart array
      productInCart.quantity += product.quantity; //Updates the quantity
      const updatedCartProducts = [...cartProducts];
      updatedCartProducts.splice(indexOfProductInCard, 1); //Removes the existing product

      setCartProducts([...updatedCartProducts, productInCart]); //And pushes the copy product with updated quantity
    } else {
      //Else if product was not already in Cart
      const updatedCartProducts = [...cartProducts, product];
      setCartProducts(updatedCartProducts); //Product gets added to Cart
    }
    notifyAddedToCart(); //Notifies that product is added to Cart
  };

  //Removes product(s) from Cart
  const handleRemoveFromCart = (index: number): void => {
    //Takes index of product in Cart
    const updatedCartProducts = [...cartProducts];
    updatedCartProducts.splice(index, 1); //Removes the product
    setCartProducts(updatedCartProducts);
    notifyRemovedFromCart(); //Notifies that product has been removed from Cart
  };

  //Increments the quantity of product to be added in the Cart
  const handleIncrementQuantity = (
    quantity: number,
    setQuantity: (number: number) => void
  ) => {
    const updatedQuantity: number = quantity + 1; //+1
    setQuantity(updatedQuantity);
  };

  //Decrements the quantity of product to be added in the Cart (-1)
  const handleDecrementQuantity = (
    quantity: number,
    setQuantity: (number: number) => void
  ) => {
    if (quantity <= 1) {
      //If quantity is 1 or less than 1
      return; //No decrement
    } else {
      const updatedQuantity: number = quantity - 1; //Else -1
      setQuantity(updatedQuantity);
    }
  };

  //Notifies and clears the Cart when Checkout button is clicked
  const handleCheckout = () => {
    setCartProducts([]);
    notifyCheckout();
  };

  return (
    <>
      <Header />
      <Outlet
        context={{
          products,
          cartProducts,
          setCartProducts,
          handleAddToCart,
          handleRemoveFromCart,
          handleIncrementQuantity,
          handleDecrementQuantity,
          handleCheckout,
        }}
      />
      <ToastContainer autoClose={1500} draggable />
      <Footer />
    </>
  );
}

export default App;
