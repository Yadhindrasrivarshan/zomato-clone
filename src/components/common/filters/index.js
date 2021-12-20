import React from "react";
import "./filter.css";
import FilterItem from "./filterItem";
const Filter = ({ filterList }) => {
  return (
    <div className="filters">
      {filterList?.map((filter) => (
        <FilterItem key={filter.id} filter={filter} />
      ))}
    </div>
  );
};

export default Filter;
