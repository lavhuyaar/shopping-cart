export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export type OutletContextType = {
  products: Product[];
  cartProducts: CartProduct[];
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
};

export interface CartProduct {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}
