import React from 'react'
import { IMG_CDN_URL } from '../Utils/constants';

const ReviewSection = ({reviewsResults = []}) => {


  return (
    <div className='px-8'>
    <h1 className='text-3xl text-white mb-8'>Critic Reviews</h1>
    <div className='space-y-8'>

      { reviewsResults.length && reviewsResults.map((review) => {
        const avatharPath = review.author_details.avatar_path;
        const isoDate = review.created_at;
        const formattedDate = new Date(isoDate).toLocaleDateString();
        const formattedContent = review.content.length <= 200 ? review.content : review.content.substring(0,200) + "...";

        return (
          <div key={review.id} className='flex flex-col sm:flex-row gap-4 p-6 bg-gray-800 rounded-lg shadow-lg'>
            <div className='flex-shrink-0 flex justify-center items-center w-full sm:w-[20%]'>
              {!avatharPath ? (
                <div className='w-[100px] h-[100px] flex justify-center items-center text-2xl rounded-full bg-gray-700'>
                  <h3 className='text-white'>{review.author.charAt(0).toUpperCase()}</h3>
                </div>
              ) : (
                <img className='w-[100px] h-[100px] rounded-full' src={IMG_CDN_URL + avatharPath} alt={`${review.author} avatar`} />
              )}
            </div>

            <div className='flex-1 text-gray-300'>
              <div className='flex items-center justify-between mb-4'>
                <p className='text-2xl font-semibold'>{review.author}</p>
                <p className='text-lg'>{formattedDate}</p>
              </div>
              <p className='text-lg leading-relaxed'>{formattedContent}</p>
            </div>
          </div>
        )
      })}
    </div>
  </div>
  )
}

export default ReviewSection