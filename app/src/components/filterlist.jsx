import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';

const FilterList = () => {
  const { state, dispatch } = useContext(MyContext);

  const removeFilter = (filter) => {
    // Dispatch action to remove filter
    dispatch({ type: 'REMOVE_FILTER', payload: filter });
  };

  return (
    <div className="filter-list">
      {state.filters.map((filter, index) => (
        <div key={index} className="filter-item">
          {filter}
          <button onClick={() => removeFilter(filter)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default FilterList;
