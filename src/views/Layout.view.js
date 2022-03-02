import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../components";

export default () => (
  <>
    <Header></Header>
    <main className="main-content-wrapper">
      <Outlet />
    </main>
  </>
);
