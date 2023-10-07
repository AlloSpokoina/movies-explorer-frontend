import Promo from '../Promo/Promo.jsx';
import AboutProject from '../AboutProject/AboutProject.jsx';
import Techs from '../Techs/Techs.jsx';
import AboutMe from '../AboutMe/AboutMe.jsx';
import Portfolio from '../Portfolio/Portfolio.jsx';
import Login from '../Login/Login.jsx'
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';
import Register from '../Register/Register.jsx';
import Error from '../Error/Error.jsx';
import { useEffect, useState } from 'react';
import { movies, saveMovies} from '../../utils/constants.jsx'
import Profile from '../Profile/Profile.jsx';



export default function Main({ name, setLoggedIn }) {
  const [moviesAll, setMoviesAll] = useState([])
  const [saveMovie, setSaveMovie] = useState([])
  const [isCheckMoviesAll, setIsCheckMoviesAll] = useState(true)
  const [isCheckMoviesSave, setIsCheckMoviesSave] = useState(true)

  useEffect(() => {
    setMoviesAll(movies)
    setSaveMovie(saveMovies)
  }, [])

  function onCheckMoviesAll() {
    if (isCheckMoviesAll) {
      setIsCheckMoviesAll(false)

      setMoviesAll(moviesAll.filter((element) => element.duration <= 40))
    } else {
      setIsCheckMoviesAll(true)
      setMoviesAll(movies)
    }
  }

  function onCheckMoviesSave() {
    if (isCheckMoviesSave) {
      setIsCheckMoviesSave(false)
      setSaveMovie(saveMovie.filter((element) => element.duration <= 40))
    } else {
      setIsCheckMoviesSave(true)
      setSaveMovie(saveMovies)
    }
  }

  return (
    <main className="main">
      {{
        home:
          <>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
          </>,
        signin: <Login name={name} setLoggedIn={setLoggedIn} />,
        signup: <Register name={name} setLoggedIn={setLoggedIn} />,
        profile: <Profile name={name} setLoggedIn={setLoggedIn} />,
        error: <Error />,
        movies:
          <>
            <SearchForm isCheck={isCheckMoviesAll} changeShot={onCheckMoviesAll} />
            <MoviesCardList movies={moviesAll} />
          </>,
        savedmovies:
          <>
            <SearchForm isCheck={isCheckMoviesSave} changeShot={onCheckMoviesSave} />
            <MoviesCardList movies={saveMovie} />
          </>
        }[name]}
    </main>
  );
}

