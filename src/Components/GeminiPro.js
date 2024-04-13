import React from 'react'
 import GeminiSearchInput from './GeminiSearchInput'
import GeminiSuggestions from './GeminiSuggestions'

const GeminiPro = () => {
  return (
    <div>
       <div className="absolute w-screen h-screen -z-30">
        <img
         className="absolute w-[100%] h-screen object-cover"
        src="/Background.jpg"/>
      </div>

      <GeminiSearchInput/>
      <GeminiSuggestions/>
    </div>
  )
}

export default GeminiPro