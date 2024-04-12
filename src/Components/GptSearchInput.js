import React from 'react'
import lang from '../utils/multiLanguageConstants'
import {  useSelector } from 'react-redux'

const GptSearchInput = () => {
  
  const toggledLanguage = useSelector(store => store.config.lang)

  // console.log("aefwsf  axasx" , toggledLanguage)

  return (
    <div className='pt-[16%] flex justify-center'>
        <form className=' w-1/2 bg-black grid grid-cols-12 '>
            <input 
              type='text' 
              placeholder={lang[toggledLanguage].gptSearchPlaceHolder}
              className='p-4 m-4 col-span-9 '
            />
            <button className='col-span-3 text-white  bg-red-500 py-5 px-4 m-4 rounded-lg'>{lang[toggledLanguage].search}</button>
        </form>
    </div>
  )
}

export default GptSearchInput