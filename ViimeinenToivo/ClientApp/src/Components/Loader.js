import React, { Component } from "react";
import loaderSrc from "./loader.gif";

const Loader = props => (
  <div>
    <img style={{ width: 75 }} alt="loading" src={loaderSrc} />
  </div>
);
export default Loader;