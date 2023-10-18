import SearchForm from "../SearchForm/SearchForm";
import { useCallback, useEffect, useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function SavedMovies({ savedMovies, onDelete, setIsError }) {

  const [filteredMovies, setFilteredMovies] = useState(savedMovies)
  const [searchedMouvie, setSearchedMovie] = useState('')
  const [isCheck, setIsCheck] = useState(false)
  const [firstEntrance, setFirstEntrance] = useState(true)

  const filter = useCallback((search, isCheck, movies) => {
    setSearchedMovie(search)
    setFilteredMovies(movies.filter((movie) => {
      const searchName = movie.nameRU.toLowerCase().includes(search.toLowerCase())
      return isCheck ? (searchName && movie.duration <= 40) : searchName
    }))
  }, [])

  function searchMovies(search) {
    setFirstEntrance(false)
    filter(search, isCheck, savedMovies)
  }

  useEffect(() => {
    if (savedMovies.length === 0) {
      setFirstEntrance(true)
    } else {
      setFirstEntrance(false)
    }
    filter(searchedMouvie, isCheck, savedMovies)
  }, [filter, savedMovies, isCheck, searchedMouvie])

  function changeShort() {
    if (isCheck) {
      setIsCheck(false)
      setFirstEntrance(false)
      filter(searchedMouvie, false, savedMovies)
    } else {
      setIsCheck(true)
      setFirstEntrance(false)
      filter(searchedMouvie, true, savedMovies)
    }
  }

  return (
    <>
      <SearchForm
        isCheck={isCheck}
        searchMovies={searchMovies}
        searchedMovie={searchedMouvie}
        changeShort={changeShort}
        setIsError={setIsError}
        firstEntrance={firstEntrance}
        savedMovies={SavedMovies}
      />
      <MoviesCardList
        movies={filteredMovies}
        onDelete={onDelete}
        firstEntrance={firstEntrance}
      />
    </>
  )
}
