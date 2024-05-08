import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/layout/home/HomePage";
import RootLayout from "../pages/layout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
