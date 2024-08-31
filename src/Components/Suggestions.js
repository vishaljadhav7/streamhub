import React from 'react'
import {IMG_CDN_URL} from '../Utils/constants';
import { Link } from 'react-router-dom';

const Suggestions = ({ suggestionList}) => {
  if (!Array.isArray(suggestionList) || suggestionList.length === 0) {
    return null; 
  }
  // console.log(suggestionList)
    return (
      <ul className="bg-gray-900 p-4 rounded-lg shadow-lg max-w-xl mx-auto mt-4">
        {(suggestionList && suggestionList?.length) > 0 && suggestionList?.map((item) => {

          const item_name = item.title ? ( item.title?.length < 40 ? item?.title : item?.title?.substring(0, 40) + "...") : item.name
          const { vote_average} = item
          const item_img = item.poster_path ? item.poster_path : item.backdrop_path 
          const item_release_date  = item.release_date ? item.release_date : item.first_air_date
          const path =   item.hasOwnProperty("release_date") ? (`movie/${item.id}`) : (`series/${item.id}`)
       return (
            <Link key={item.id} to={path} className="block hover:bg-gray-800 transition duration-300 ease-in-out rounded-lg p-2 mb-2">
              <li className="flex gap-3 items-center">
                <div className="w-16 flex-shrink-0">
                  <img
                    src={IMG_CDN_URL + item_img}
                    className="w-full rounded-lg"
                    alt={item_name}
                  />
                </div>
                <div className="flex-col">
                  <p className="text-white font-semibold text-sm md:text-base">
                    {item_name}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.03L21.64 9.1l-7.19-.61L12 2 9.55 8.49l-7.19.61 5.46 4.87-1.64 7.03L12 17.27z" />
                    </svg>
                    <span className="text-white text-xs md:text-sm">
                      {vote_average % 100}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs md:text-sm">
                    {item_release_date}
                  </p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    );
  };

export default Suggestions


/*
item (movie ->   release_date) 


const item_name = item.title ? ( item.title?.length < 40 ? item?.title : item?.title?.substring(0, 40) + "...") : item.name
const {poster_path, vote_average} = item
const item_release_date = = item.release_date ? item.release_date : item.first_air_date

item (series -> first_air_date)

*/