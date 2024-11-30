import App from "../App";
import Cart from "../components/Cart/Cart";
import Shop from "../components/Shop/Shop";

const routes = [
  {
    path: "/",
    element: <App />
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
];

export default routes;
