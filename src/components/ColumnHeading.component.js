import React from "react";
import { string, bool } from "prop-types";

function ColumnHeading({ label, isUsedForSorting, isSortAscending }) {
  return (
    <span className="column-heading">
      {label}{" "}
      <span className="arrow-container">
        {isUsedForSorting && (isSortAscending === true ? "▲" : "▼")}
      </span>
    </span>
  );
}

ColumnHeading.propTypes = {
  label: string.isRequired,
  isUsedForSorting: bool,
  isSortAscending: bool
};

ColumnHeading.defaultProps = {
  isUsedForSorting: false,
  isSortAscending: false
};

export default ColumnHeading;
