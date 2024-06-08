import React from "react";
import styles from "./Filter.module.scss";

const Filter = ({ filter, onFilterChange }) => (
  <div className={styles.filter}>
    <label htmlFor="filter">Find contact</label>
    <input
      type="text"
      id="filter"
      value={filter}
      onChange={onFilterChange}
      name="filter"
    />
  </div>
);

export default Filter;
