import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters.filters);

  const handleFilterChange = (e) => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <label style={{ display: 'flex', flexDirection: 'column', maxWidth: '150px', marginTop: '20px' }}>
      Search:
      <input type="text" name="filter" value={filters} onChange={handleFilterChange} />
    </label>
  );
};
