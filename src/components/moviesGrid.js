import { useEffect, useState } from "react";
import { useQuery } from "../Hooks/useQuery";
import { get } from "../utils/httClient";
import { MovieCard } from "./MovieCard";
import styles from "./moviesGrid.module.css";
import { Spinner } from "./Cargando";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsLoading] = useState(true);

const query = useQuery();
const search = query.get('search');


  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search ? "/search/movie?query=" + search : "/discover/movie"; 
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, [search]);

  if(isloading){
    return <Spinner/>;
  }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
</ul>
);
}