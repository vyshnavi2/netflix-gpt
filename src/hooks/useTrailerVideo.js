import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector} from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';

const useTrailerVideo =(movieId) =>{
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store)=>store.movies.trailerVideo);
    const id = movieId.movieId;
    //one way to get trailer id is to get make use of stste variable or another way is to use redux store
    //const [trailerId, setTrailerId] = useState(null);
     //fetching the trailer video and updating the store with trailervideo

    const getMovieVideos = async() =>{
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" +
              id +
              "/videos?language=en-US",
            API_OPTIONS
          );
      const json = await data.json();
      const filterData = json.results.filter(video => video.type=== "Trailer");
      const trailer = filterData.length ?filterData[0]:json.results[0]; 
      dispatch(addTrailerVideo(trailer));
      //setTrailerId(trailer.key);
    }
    useEffect(()=>{
        !trailerVideo && getMovieVideos();
    },[])
}

export default useTrailerVideo;