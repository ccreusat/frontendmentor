import { Outlet } from "react-router-dom";
import { Menu } from "../../components/Menu";
import { Search } from "../../components/Search";

export default function MainLayout() {
  return (
    <div className="app">
      <Menu />
      <main className="main">
        <Search />
        <Outlet />
      </main>
    </div>
  );
}
