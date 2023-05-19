import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";
import { routes } from "./routes";

const Router = createBrowserRouter([
  {
    path: routes.HOME,
    element: <Home />
  },
  {
    path: routes.CART,
    element: <Cart />
  }
]);

export {
  Router
};