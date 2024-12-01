import Cart from "../components/Cart/Cart";
import Home from "../components/Home/Home";
import Shop from "../components/Shop/Shop";
import App from "../App";
import ProductPage from "../components/ProductPage/ProductPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/shop",
        element: <Shop />,
      },
      { path: '/shop/products/:id',
        element: <ProductPage />}
    ],
  },
];

export default routes;
