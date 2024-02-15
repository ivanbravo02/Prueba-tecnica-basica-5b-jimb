import { MoviesGrid } from "../components/moviesGrid";
import { Search } from "../components/Search";

export function SearchPage(){
    return <div> 
        <Search/>
        <MoviesGrid/>
        </div>;
}