import MoviesCard from '../MoviesCard/MoviesCard'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader'
import {
  MaxScreen,
  MediumScreen,
  SmallScreen,
  InitMoreMaxScreen,
  InitLessMaxScreen,
  InitMediumScreen,
  InitSmallScreen,
  StepMaxScreen,
  StepMediumScreen,
  StepSmallScreen
} from "../../utils/constants.jsx";

export default function MoviesCardList({ movies, addMovie, isLoading, onDelete, serverError, savedMovies, firstEntrance }) {
  const [count, setCount] = useState(InitMoreMaxScreen)
  const fact = movies.slice(0, count)
  const { pathname } = useLocation()

  function printCards() {
    const counter = { init: InitMoreMaxScreen, step: StepMaxScreen }
    if (window.innerWidth < MaxScreen) {
      counter.init = InitLessMaxScreen
      counter.step = StepMediumScreen
    }
    if (window.innerWidth < MediumScreen) {
      counter.init = InitMediumScreen
      counter.step = StepSmallScreen
    }
    if (window.innerWidth < SmallScreen) {
      counter.init = InitSmallScreen
      counter.step = StepSmallScreen
    }
    return counter
  }

  useEffect(() => {
    if (pathname === '/movies') {
      setCount(printCards().init)
      function printCardsForResize() {
        if (window.innerWidth >= StepMaxScreen) {
          setCount(printCards().init)
        }
        if (window.innerWidth < StepMaxScreen) {
          setCount(printCards().init)
        }
        if (window.innerWidth < MediumScreen) {
          setCount(printCards().init)
        }
        if (window.innerWidth < SmallScreen) {
          setCount(printCards().init)
        }
      }
      window.addEventListener('resize', printCardsForResize)
      return () => window.removeEventListener('resize', printCardsForResize)
    }
  }, [pathname, movies])

  function clickMore() {
    setCount(count + printCards().step)
  }

  return (
    <section className='gallery'>
      <ul className='gallery__items'>
      {isLoading ? <Preloader /> :
          (pathname === '/movies' && fact.length !== 0) ?
            fact.map(data => {
          return (
            <MoviesCard key={data.id} savedMovies={savedMovies}
            addMovie={addMovie} data={data}/>
          )
        }): movies.length !== 0 ?
        movies.map(data => {
          return (
            <MoviesCard
              key={data._id}
              onDelete={onDelete}
              data={data}
            />
          )
        }) : serverError ?
          <span className='gallery__serch-error'>«Во время запроса произошла ошибка.
            Возможно, проблема с соединением или сервер недоступен.
            Подождите немного и попробуйте ещё раз»
          </span>
          : !firstEntrance ?
          <span className='gallery__serch-error'>«Содержимое не найдено»</span>
          : pathname === '/movies' ?
          <span className='gallery__serch-error'>«Чтобы увидеть список фильмов выполните поиск»</span>
          :
          <span className='gallery__serch-error'>«Вы ещё ничего не сохранили»</span>
      }
      </ul>
      {pathname === '/movies' && <button type='button' className={`gallery__more ${count >= movies.length && 'gallery__more_hidden'}`} onClick={clickMore}>Ёще</button>}
    </section>
  )
}
