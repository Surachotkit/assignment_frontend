import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../page/Home";
import EditProduct from "../page/EditProduct";
import Detail from "../page/Detail";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
 
        <Home />
  
    ),
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/editproduct",
    element: <EditProduct />,
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
