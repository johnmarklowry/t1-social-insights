import React, { useContext, useState } from 'react';
import { MyContext } from '../context/MyContext';

const FilterBar = () => {
  const { dispatch } = useContext(MyContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Dispatch search term to context or handle search here
    dispatch({ type: 'SET_SEARCH_TERM', payload: e.target.value });
  };

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {/* Additional filter options can go here */}
    </div>
  );
};

export default FilterBar;
