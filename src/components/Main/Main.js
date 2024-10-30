import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import RandomSquare from "../RandomSquare/RandomSquare";
import css from "./Main.module.css";

const Main = () => {
  return (
    <>
      <main className={css.main}>
        <div className={css.mainContainer}>
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
        <RandomSquare />
      </main>
    </>
  );
};

export default Main;
