import React, { Fragment } from "react";

import Results from "../results/Results";

const Home = () => (
  <Fragment>
    <h1 className="text-center">Home page.</h1>
    <br />
    <div className="container">
      <Results />
    </div>
  </Fragment>
);

export default Home;
