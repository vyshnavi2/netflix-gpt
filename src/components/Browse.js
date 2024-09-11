import {React} from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies.js';
import useUpcomingMovies from '../hooks/useUpcomingMovies.js';
import useTrendingMovies from '../hooks/useTrendingMovies.js';
import GptSearch from './GptSearch.js';
import { useSelector } from 'react-redux';


const Browse = () => {
  const showGptSearch = useSelector((store)=>store.gpt?.showGPTSearch)
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTrendingMovies();
  return (

    <div>
      <Header/>
      {showGptSearch?(<GptSearch/>):(
        <>
        <MainContainer/>
        <SecondaryContainer/>
        </>
      )}
    </div>
  )
}

export default Browse