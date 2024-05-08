import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/layout/home/HomePage";
import RootLayout from "../pages/layout/RootLayout";
import CadastroPage from "../pages/cadastro/CadastroPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/cadastro',
        element: <CadastroPage/>
      }
    ],
  },
]);

export default router;
