import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/layout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: "",
      },
    ],
  },
]);

export default router;
