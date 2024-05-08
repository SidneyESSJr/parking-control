import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/layout/RootLayout";
import Home from "../components/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
    ],
  },
]);

export default router;
