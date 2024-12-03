//Product object in products array
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

//Cart product object in cartProducts array
export interface CartProduct {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

//Types of all props passed in the Outlet
export type OutletContextType = {
  products: Product[];
  cartProducts: CartProduct[];
  setCartProducts: (cartProducts: CartProduct[]) => void;
  handleAddToCart: (product: CartProduct) => void;
  handleRemoveFromCart: (index: number) => void;
  handleIncrementQuantity: (
    quantity: number,
    setQuantity: (number: number) => void
  ) => void;
  handleDecrementQuantity: (
    quantity: number,
    setQuantity: (number: number) => void
  ) => void;
  handleCheckout: () => void;
};
