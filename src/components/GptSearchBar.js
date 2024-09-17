import React, { useRef} from 'react'
import lang from '../utils/languageConstants'
import { useSelector,useDispatch } from 'react-redux'
import gpt from '../utils/gpt'
import { API_OPTIONS } from '../utils/constants'
import {addGptMovieResult} from '../utils/GPTSlice'

const GptSearchBar = () => {
  const dispatch = useDispatch()
  const langKey = useSelector(store=>store.config.lang)
  const searchText = useRef(null)

  const searchMovieTMDB = async(movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = data.json();
    return json.results;
  }

  const handleGptSearchClick = async() =>{
    console.log(searchText.current.value);
    const gptQuery = "Act as a movie recommendation system and suggest some movies for the query :"
    + searchText.current.value 
    +". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    //make an api call to get the movie results from gpt api
      const gptResults = await gpt.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
      // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
       // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]

       //for each movie call tmdb movie api 

       const promiseArray = gptMovies.map(movie=>searchMovieTMDB(movie));
       //return 5 promises [promise1, promise2, promise3,promise4,promise5]
       const tmdbResults = await Promise.all( promiseArray);

       dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}))

  }
  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
        <form 
        className='w-full md:w-1/2 bg-black grid grid-cols-12'
        onSubmit={(e)=>e.preventDefault()}>
            <input 
            ref= {searchText}
            type="text"
            className='col-span-9 p-4 m-4' 
            placeholder={lang[langKey].gptSearchPlaceholder}>
            </input>
            <button 
            className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg' 
            onClick={handleGptSearchClick}>
              {lang[langKey].search}
              </button>
        </form>
    </div>
  )
}

export default GptSearchBar