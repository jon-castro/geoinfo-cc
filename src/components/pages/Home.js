import React, { Fragment } from "react";
import Search from "../results/Search";
import Results from "../results/Results";

const Home = () => {

  return (
    <Fragment>
      <h1 className="text-center">Home page.</h1>
      <br />
      <Search />
      <br />
      <div className="container">
        <Results />
      </div>
    </Fragment>
  );
};

export default Home;
