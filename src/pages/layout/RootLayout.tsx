import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";

export default function RootLayout() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}
