import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import css from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <Header />
      <main className={css.main}>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
