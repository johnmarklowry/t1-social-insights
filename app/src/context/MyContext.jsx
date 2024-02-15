// src/context/MyContext.js
import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = {
  filters: [],
  brands: [],
  searchTerm: '',
};

// Create context
export const MyContext = createContext(initialState);

// Reducer function to update state based on action
const myReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    case 'ADD_FILTER':
      return { ...state, filters: [...state.filters, action.payload] };
    case 'REMOVE_FILTER':
      return { ...state, filters: state.filters.filter(filter => filter !== action.payload) };
    case 'ADD_BRAND':
      return { ...state, brands: [...state.brands, action.payload] };
    case 'REMOVE_BRAND':
      return { ...state, brands: state.brands.filter(brand => brand !== action.payload) };
    default:
      return state;
  }
};

// Provider component
export const MyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(myReducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};