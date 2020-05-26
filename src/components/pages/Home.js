import React, { Fragment } from "react";
import Search from "../results/Search";
import Results from "../results/Results";

const Home = () => {
  return (
    <Fragment>
      <h6 className="text-center pt-3">Enter a location on the field below and select from the options or press Enter on your keyboard.</h6>
      <br />
      <div className="text-center">
        <Search />
      </div>
      <br />
      <div className="container">
        <Results />
      </div>
    </Fragment>
  );
};

export default Home;
