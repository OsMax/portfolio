import { Suspense } from "react";
import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import RandomSquare from "../RandomSquare/RandomSquare";
import css from "./Main.module.css";
import Matrix from "../Matrix/Matrix";

const Main = () => {
  const containerRef = useRef(null);
  // console.log(containerRef);

  return (
    <>
      <main className={css.main}>
        <div className={css.mainContainer} ref={containerRef}>
          <div className={css.matrixContainer}>
            <Suspense>
              <Outlet />
            </Suspense>
            <Matrix containerRef={containerRef} />
          </div>
        </div>
        <RandomSquare />
      </main>
    </>
  );
};

export default Main;
