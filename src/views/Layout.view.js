import React from "react";
import { Outlet } from "react-router-dom";

import { Header, FeatureList } from "../components";

export default () => (
  <>
    <Header></Header>
    <main className="main-content-wrapper">
      <Outlet />
    </main>
  </>
);
