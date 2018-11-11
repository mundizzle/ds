import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.css";

const Button = ({ children }) => <button>{children}</button>;

Button.propTypes = {
  children: PropTypes.node
};

Button.defaultProps = {
  children: "Submit"
};

export default Button;
