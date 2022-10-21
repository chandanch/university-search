/**
 * @author chandan
 */

import React from "react";

const UniversityList = ({ universities }) => {
  //   console.log(universities);
  const renderUniversityDetails = () => {
    const universityListItems = universities.map((university) => {
      return (
        <div className="item" key={university.name}>
          <div className="content">
            <h5 className="header">{university.name}</h5>
            <div className="description">{university.country}</div>
          </div>
        </div>
      );
    });
    return universityListItems;
  };

  return (
    <div>
      <h3>University Details</h3>
      <p>
        <b style={{ color: "green", fontSize: "16px" }}>
          {universities.length}
        </b>{" "}
        <i>Universities Found!</i>
      </p>
      <hr></hr>

      <div className="ui relaxed divided list">
        {universities.length > 0 ? (
          renderUniversityDetails()
        ) : (
          <h4>No Universities Found</h4>
        )}
      </div>
    </div>
  );
};

export default UniversityList;
