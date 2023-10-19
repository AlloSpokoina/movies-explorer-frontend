import SearchForm from "../SearchForm/SearchForm";
import { useCallback, useState } from "react";
import apiMovies from '../../utils/MainApi';
import { useEffect } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function Movies({ setIsError, addMovie, savedMovies }) {
  const [allMovies, setAllMovies] = useState([])
  const [filterMovies, setFilterMovies] = useState([])
  const [searchMouvie, setSearchMovie] = useState('')
  const [isCheck, setIsCheck] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState(false)
  const [firstEntrance, setFirstEntrance] = useState(true)

  const filter = useCallback((search, isCheck, movies) => {
    setSearchMovie(search)
    localStorage.setItem('movie', JSON.stringify(search))
    localStorage.setItem('shorts', JSON.stringify(isCheck))
    localStorage.setItem('allmovies', JSON.stringify(movies))
    setFilterMovies(movies.filter((movie) => {
      const searchName = movie.nameRU.toLowerCase().includes(search.toLowerCase())
      return isCheck ? (searchName && movie.duration <= 40) : searchName
    }))
  }, [])

  function searchMovies(search) {
    if (allMovies.length === 0) {
      setIsLoading(true)
      apiMovies.getMovies()
        .then((res) => {
          setAllMovies(res)
          setIsCheck(false)
          setServerError(false)
          setFirstEntrance(false)
          filter(search, isCheck, res)
        })
        .catch(err => {
          setServerError(true)
          console.error(`Ошибкак при поске фильмов ${err}`)
        })
        .finally(() => setIsLoading(false))
    } else {
      filter(search, isCheck, allMovies)
    }
  }

  useEffect(() => {
    if (localStorage.allmovies && localStorage.shorts && localStorage.movie) {
      const movies = JSON.parse(localStorage.allmovies)
      const search = JSON.parse(localStorage.movie)
      const isCheck = JSON.parse(localStorage.shorts)
      setServerError(false)
      setFirstEntrance(false)
      setSearchMovie(search)
      setIsCheck(isCheck)
      setAllMovies(movies)
      filter(search, isCheck, movies)
    }
  }, [filter])

  function changeShort() {
    if (isCheck) {
      setIsCheck(false)
      filter(searchMouvie, false, allMovies)
      localStorage.setItem('shorts', JSON.stringify(false))
    } else {
      setIsCheck(true)
      filter(searchMouvie, true, allMovies)
      localStorage.setItem('shorts', JSON.stringify(true))
    }
  }

  return (
    <>
      <SearchForm
        isCheck={isCheck}
        searchMovies={searchMovies}
        searchedMovie={searchMouvie}
        changeShort={changeShort}
        setIsError={setIsError}
        firstEntrance={firstEntrance}
      />
      <MoviesCardList
        movies={filterMovies}
        addMovie={addMovie}
        savedMovies={savedMovies}
        isLoading={isLoading}
        serverError={serverError}
        firstEntrance={firstEntrance}
      />
    </>
  )
}
