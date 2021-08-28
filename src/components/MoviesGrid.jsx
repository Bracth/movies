import MovieCard from "./MovieCard";
import styles from "./MoviesGrid.module.css"
import React, { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import Spinner from "./Spinner";
import { useQuery } from "../hooks/useQuery";


const MoviesGrid = () => {
  
const [movies, setMovies] = useState([]);
const [isLoading, setIsLoading] = useState(true);

    const query = useQuery();
    const search = query.get("search");
    console.log(search);
 
    useEffect(() => {
    setIsLoading(true);
    const searchUrl = search ? "/search/movie?query=" + search 
    : "/discover/movie";
    get(searchUrl).then(data => {
     setMovies(data.results);
     setIsLoading(false);
});
 }, [search]);  

if (isLoading){
 return <Spinner/>
}

    return (
<ul className={styles.moviesGrid}>
{movies.map((movie) => {
   return <MovieCard key={movie.id} movie={movie}/>
})}
</ul>
    );}

export default MoviesGrid