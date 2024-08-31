import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleSearch} from '../Utils/filterSlice';


const FilterPanel = () => {

  const dispatch = useDispatch();


  return (
    <div className='relative md:-mt-10 w-full bg-gradient-to-r from-blue-600 to-purple-600 py-5 px-4 flex flex-col md:flex-row items-center justify-between'>
      <div className='w-full md:w-[45%] flex flex-col md:flex-row items-center gap-2'>
        <label htmlFor='dynamic-search' className='text-white text-sm md:text-base font-extrabold'>
          Search
        </label>
        <input
          type='text'
          id='dynamic-search'
          className='w-full md:w-[60%] p-2 bg-white text-gray-800 border-2 border-purple-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500'
          readOnly
          placeholder='Search for Movies, Series'
          onFocus={() => dispatch(toggleSearch(true))}
        />
      </div>
    </div>
  );
};

export default FilterPanel;
