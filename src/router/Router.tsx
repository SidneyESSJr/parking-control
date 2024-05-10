import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import RootLayout from "../pages/layout/RootLayout";
import CadastroPage from "../pages/cadastro/CadastroPage";
import ListaDeVagasPage from "../pages/lista-de-vagas/ListaDeVagasPage";

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
        path: "/cadastro",
        element: <CadastroPage />,
      },
      {
        path: "/lista-de-vagas",
        element: <ListaDeVagasPage />,
      },
    ],
  },
]);

export default router;
