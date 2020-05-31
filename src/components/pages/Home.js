import React, { Fragment } from "react";
import Search from "../results/Search";

const Home = () => {
  return (
    <Fragment>
      <p className="text-center pt-3">Enter a location you want to know more about or start typing and select an option from the suggestions:</p>
      <br />
      <div className="text-center">
        <Search />
      </div>
      <br />
      <div className="container">
      </div>
    </Fragment>
  );
};

export default Home;
