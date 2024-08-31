import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDebounce } from '../hooks/useDebounce';
import Suggestions from './Suggestions';
import { fetchSeriesSuggestion, fetchMovieSuggestion, toggleSearch, clearResults } from '../Utils/filterSlice';

const SearchModal = () => {
  const dispatch = useDispatch();
  const { search, movieSuggestions, seriesSuggestions } = useSelector((state) => state.filters);
  const [searchQuery, setSearchQuery] = useState('A');
  const debounceValue = useDebounce(searchQuery);
  const [filter, setFilter] = useState('all');
  const abortRef = useRef();

  useEffect(() => {
    if (abortRef.current) {
      abortRef.current.abort();
    }
    abortRef.current = new AbortController();

    dispatch(clearResults());

    if (debounceValue) {
      if (filter === 'all' || filter === 'movies') {
        dispatch(fetchMovieSuggestion({ query: debounceValue, signal: abortRef.current.signal }));
      }
      if (filter === 'all' || filter === 'series') {
        dispatch(fetchSeriesSuggestion({ query: debounceValue, signal: abortRef.current.signal }));
      }
    }

    return () => {
      if (abortRef.current) {
        abortRef.current.abort();
      }
    };
  }, [debounceValue, filter, dispatch]);

  const suggestionList = [...(filter !== 'series' ? movieSuggestions : []), ...(filter !== 'movies' ? seriesSuggestions : [])];
 
  return (
    <>
      {search && (
        <div className=" fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg backdrop-filter bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex items-center space-x-2 mb-4">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-gray-800 text-white p-2 rounded-md"
              >
                <option value="all">All</option>
                <option value="movies">Movies</option>
                <option value="series">Series</option>
              </select>
              <input
                type="text"
                className="bg-white border-2 border-gray-300 w-full p-2 rounded-md focus:outline-none focus:border-blue-500"
                placeholder={`Search for ${filter}`}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="h-[300px] overflow-y-scroll bg-gray-800 p-4 rounded-md">
              {(movieSuggestions?.length > 0 || seriesSuggestions?.length > 0) && (
                <Suggestions suggestionList={suggestionList}  filter={filter}/>
              )}
            </div>
          </div>
          <div
            className="cursor-pointer absolute top-4 right-4 text-white text-2xl font-bold hover:text-red-500 transition duration-300"
            onClick={() => dispatch(toggleSearch(false))}
          >
            X
          </div>
        </div>
      )}
    </>
  );
};

export default SearchModal;
