import React from "react";
import { Link } from "react-router-dom";

import { getSiteInfo, getProfileInfo } from "../data/data.service";

export default () => {
  const { logoImage: logoUrl, title } = getSiteInfo();
  const { firstName } = getProfileInfo();

  return (
    <header className="main-header">
      <div className="row">
        <div className="col-xs-2">
          <Link to="/">
            <img
              className="main-logo"
              src={logoUrl}
              alt={title}
              title={title}
            />
          </Link>
        </div>
        <div className="col-xs-8">
          <h1>{title}</h1>
        </div>
        <div className="col-xs-2">
          <Link to="profile" className="welcome-trigger">Welcome {firstName}</Link>
        </div>
      </div>
    </header>
  );
};
