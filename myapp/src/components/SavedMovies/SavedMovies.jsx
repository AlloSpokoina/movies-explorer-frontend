import SearchForm from "../SearchForm/SearchForm";
import { useCallback, useEffect, useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function SavedMovies({ savedMovies, onDelete, setIsError }) {

  const [filterMovies, setFilterMovies] = useState(savedMovies)
  const [searchMouvie, setSearchMovie] = useState('')
  const [isCheck, setIsCheck] = useState(false)
  const [firstEntrance, setFirstEntrance] = useState(true)

  const filter = useCallback((search, isCheck, movies) => {
    setSearchMovie(search)
    setFilterMovies(movies.filter((movie) => {
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
    filter(searchMouvie, isCheck, savedMovies)
  }, [filter, savedMovies, isCheck, searchMouvie])

  function changeShort() {
    if (isCheck) {
      setIsCheck(false)
      setFirstEntrance(false)
      filter(searchMouvie, false, savedMovies)
    } else {
      setIsCheck(true)
      setFirstEntrance(false)
      filter(searchMouvie, true, savedMovies)
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
        savedMovies={SavedMovies}
      />
      <MoviesCardList
        movies={filterMovies}
        onDelete={onDelete}
        firstEntrance={firstEntrance}
      />
    </>
  )
}
