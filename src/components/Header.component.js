import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getSiteInfo, getProfileInfo } from "../services/data.service";

export default function Header() {
  const [logoUrl, setLogoUrl] = useState();
  const [title, setTitle] = useState();
  const [firstName, setFirstName] = useState();

  useEffect(async () => {
    const { logoImage, title } = await getSiteInfo();
    const { firstName } = await getProfileInfo();

    setLogoUrl(logoImage);
    setFirstName(firstName);
    setTitle(title);
  }, []);

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
          <Link to="profile" className="welcome-trigger">
            Welcome {firstName}
          </Link>
        </div>
      </div>
    </header>
  );
}
