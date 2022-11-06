import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { Header } from "../components";

export const Layout = () => {
  return (
    <>
      <Header />
      <main id="main" className="main">
        <Outlet />
      </main>
      <Toaster />
    </>
  );
};
