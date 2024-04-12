import React from 'react'
import GptSearchInput from './GptSearchInput'
import GptSuggestions from './GptSuggestions'

const GptTurbo = () => {
  return (
    <div>
       <div className="absolute w-screen h-screen -z-30">
        <img
         className="absolute w-[100%] h-[100%] object-cover"
        src="/Background.jpg"/>
      </div>

      <GptSearchInput/>
      <GptSuggestions/>
    </div>
  )
}

export default GptTurbo