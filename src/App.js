import "./styles/index.scss";

import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { Layout, Home, Details, Profile, NotFound } from "./views";

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="details/:featureId" element={<Details />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </HashRouter>
);

export default App;
