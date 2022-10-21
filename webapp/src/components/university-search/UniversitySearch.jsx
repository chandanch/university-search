/**
 * @author chandan
 */

import React, { useState } from "react";
import { loadingText, sortOptions } from "../../constants/app.constants";
import { fetchUniversities } from "../../services/university.service";
import UniversityList from "../university-list/UniversityList";
import Loader from "../common/Loader";

import "./UniversitySearch.css";

const UniversitySearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [universities, setUniversityList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * @desc search universities - obtain universities via API
   */
  const searchUniversities = async () => {
    try {
      setIsLoading(true);
      setUniversityList([]);
      const universities = await fetchUniversities(searchTerm, sortOrder);
      setUniversityList(universities);
      setIsLoading(false);
    } catch (error) {
      alert(`Error Occured, try again later..`);
      setIsLoading(false);
    }
  };

  /**
   * @desc reset search form
   */
  const resetSearch = () => {
    setSearchTerm("");
    setSortOrder("");
  };

  const updateSortOrder = (event) => {
    setSortOrder(event.target.value);
  };

  /**
   * @desc helper function to render sort option or option elements
   * @returns Sort Options
   */
  const renderSortOptions = () => {
    const sortOptionElements = sortOptions.map((option) => {
      return (
        <option value={option.value} key={Math.random()}>
          {option.label}
        </option>
      );
    });
    return sortOptionElements;
  };

  return (
    <div className="search-container">
      <div className="ui right icon input search-input">
        <input
          type="text"
          placeholder="Search Universities..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <i className="search icon"></i>
      </div>
      <select
        className="ui simple dropdown"
        onChange={updateSortOrder}
        value={sortOrder}
      >
        {renderSortOptions()}
      </select>
      <br />
      <button
        className="ui primary button search-btn"
        onClick={searchUniversities}
        disabled={!searchTerm}
      >
        Search
      </button>
      <button className="ui primary button reset-btn" onClick={resetSearch}>
        Reset Search
      </button>
      <br />
      <br />
      {isLoading ? <Loader loadingText={loadingText} /> : ""}
      {universities.length > 0 ? (
        <UniversityList universities={universities} />
      ) : (
        ""
      )}
    </div>
  );
};

export default UniversitySearch;
