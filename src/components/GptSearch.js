import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import {NETFLIX_BACKGROUND_IMG} from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
          <img 
            src={NETFLIX_BACKGROUND_IMG} 
            alt='backgroung-img'>
          </img>
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch