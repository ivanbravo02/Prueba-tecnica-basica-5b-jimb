import { MoviesGrid } from "./components/moviesGrid";
import styles from './App.module.css'
import {BrowserRouter as Router , Switch, Route, Link} from "react-router-dom"; 
import { MovieDetails } from "./pages/MovieDetails";
import { SearchPage } from "./pages/SearchPage";

export function App(){
    return (
    <Router>
        <header>
            <Link to="/">
                <h1 className={styles.Title}>Peliculas</h1></Link>
        </header>
        <main>
            <Switch>
                <Route exact path="/movies/:movieId"><MovieDetails/></Route>
                <Route path="/"><SearchPage/></Route>
            </Switch>
        </main>
    </Router>
    );
}