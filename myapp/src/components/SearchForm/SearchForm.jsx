import { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import useFormValidation from '../../hooks/useFormValidation'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import ErrorContext from '../../contexts/ErrorContext'


export default function SearchForm({ isCheck, changeShort, searchMovies, searchedMovie, setIsError, firstEntrance, savedMovies, }) {
  const isError = useContext(ErrorContext)
  const {values, handleChange, reset} = useFormValidation()
  const { pathname } = useLocation

  useEffect(() => {
    if ((pathname === '/saved-movies' && savedMovies.length === 0)) {
      reset({ search: '' })
    } else {
      reset({ search: searchedMovie })
    }
    setIsError(false)
  }, [searchedMovie, reset, setIsError, pathname, savedMovies])

  function onSubmit(evt) {
    evt.preventDefault()
    if (evt.target.search.value) {
      searchMovies(evt.target.search.value)
      setIsError(false)
    } else {
      setIsError(true)
    }
  }

  return (
    <section className='search'>
      <form noValidate className='search__form' name={'SearchForm'} onSubmit={onSubmit}>
        <div className='search__main'>
          <button type='button' className='search__icon'></button>
          <input name='search' type="text" placeholder='Фильм' className='search__input' value={values.search || ''}
            onChange={(evt) => {
              handleChange(evt)
              setIsError(false)
            }}
            disabled={savedMovies ? (savedMovies.length === 0 && true) : false} required />
          <button type='button' className={`search__find ${savedMovies ? (pathname === 'saved-movies' && savedMovies.length === 0) && 'search__submit_disabled' : ''}`}></button>
        </div>
        <FilterCheckbox isCheck={isCheck} changeShort={changeShort} firstEntrance={firstEntrance} />
      </form>
      <span className={`search__error ${isError && 'search__error_active'}`}>{isError ? 'Введите ключевое слово' : ''}</span>
    </section>
  )
}
