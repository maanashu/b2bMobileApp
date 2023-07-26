import React, { Fragment } from "react";
import propTypes, { any } from "prop-types";

export function Visibility({ visible, children }) {
  return visible && children ? children : <Fragment />;
}

Visibility.defaultProps = {
  visible: true,
};

Visibility.propTypes = {
  visible: propTypes.bool,
};
