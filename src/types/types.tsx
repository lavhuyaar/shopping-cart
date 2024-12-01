export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
  }

  export type OutletContextType = {
    products: Product[],
    cartProducts: Product[],
    handleAddToCart: (product: Product) => void,
    handleRemoveFromCart: (index: number) => void
  }