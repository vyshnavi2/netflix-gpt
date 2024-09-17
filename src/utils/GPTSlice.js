import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name:'gpt',
    initialState:{
        showGPTSearch:false,
        gptMovies:null,
        movieNames:null,
        movieResults:null
    },
    reducers:{
        toggleGPTSearchView:(state)=>{
             state.showGPTSearch = !state.showGPTSearch
        },
        addGptMovieResult:(state,action)=>{
            const {movieNames,movieResults} =action.payload
            state.movieNames = movieNames;
            state.movieResults = movieResults;

        }
    } 
})

export const {toggleGPTSearchView, addGptMovieResult} = GPTSlice.actions;
export default GPTSlice.reducer;
