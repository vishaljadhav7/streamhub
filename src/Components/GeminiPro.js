import React from 'react'
 import GeminiSearchInput from './GeminiSearchInput'
import GeminiSuggestions from './GeminiSuggestions'

const GeminiPro = () => {
  return (
    <div className=''>
       <div className="absolute w-screen  -z-30 h-screen ">
        <img
         className="absolute w-[100%]  object-cover h-full"
        src="/Background.jpg"/>
      </div>

      <GeminiSearchInput/>
      <GeminiSuggestions/>
    </div>
  )
}

export default GeminiPro