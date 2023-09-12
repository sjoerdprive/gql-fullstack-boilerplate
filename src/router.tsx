import { createBrowserRouter } from "react-router-dom";
import { App } from "./app";
import { routes } from "./constants/routes";

export const router = createBrowserRouter([
  {
    path: routes.root.path,
    element: <App />,
  },
]);
