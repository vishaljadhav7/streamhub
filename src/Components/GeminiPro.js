import React from 'react'
 import GeminiSearchInput from './GeminiSearchInput'
import GeminiSuggestions from './GeminiSuggestions'

const GeminiPro = () => {
  return (
    <div className='bg-gradient-to-r from-rose-100 to-indigo-600 h-screen'>
      <GeminiSearchInput/>
      <GeminiSuggestions/>
    </div>
  )
}

export default GeminiPro