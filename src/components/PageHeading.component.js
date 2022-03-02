import React from "react";
import { string } from "prop-types";

function PageHeading({ text }) {
  return <h1 className="page-heading">{text}</h1>;
}

PageHeading.propTypes = {
  text: string.isRequired
};

export default PageHeading;
