import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import {NETFLIX_BACKGROUND_IMG} from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className='fixed -z-10'>
          <img className="h-screen object-cover"
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