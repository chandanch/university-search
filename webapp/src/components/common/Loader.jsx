import React from "react";

// Loader component to show loading
const Loader = ({ loadingText }) => {
  return (
    <div>
      <div className="ui active centered inline loader">
        <div className="ui text loader">{loadingText}</div>
      </div>
    </div>
    // <p>Loading....</p>
  );
};

export default Loader;
