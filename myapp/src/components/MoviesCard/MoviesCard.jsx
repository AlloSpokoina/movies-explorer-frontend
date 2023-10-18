import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function MoviesCard({onDelete, addMovie, data, savedMovies }) {
  const {pathname} = useLocation()
  const [click, setClick] = useState(false)

  useEffect(() => {
    if (pathname === '/movies')
      setClick(savedMovies.some(element => data.id === element.movieId))
  }, [savedMovies, data.id, setClick, pathname])

  function onClick() {
    if (savedMovies.some(element => data.id === element.movieId)) {
      setClick(true)
      addMovie(data)
    } else {
      setClick(false)
      addMovie(data)
    }
  }

  return (
    <li className='movie'>
      <article>
        <a className="movie__link"
          href={data.trailerLink}
          target="_blank"
          rel="noreferrer">
          <img src={pathname === '/movies' ? `https://api.nomoreparties.co${data.image.url}` : data.image} alt={data.name} className='gallery__image'/>
        </a>
        <div className="movie__card">
          <div className="movie__text">
            <div className="movie__title-container">
              <h2 className="movie__title">{data.nameRU}</h2>
              {pathname === '/movies' ?
                <button type="button" className={`movie__save ${click ? 'movie__save_active' : ''}`} onClick={onClick}></button>
                :
                <button type="button" className={`movie__save movie__save_type_delete`} onClick={() => onDelete(data._id)}></button>}
            </div>
            <span className="movie__duration">1ч 47м</span>
          </div>
        </div>
      </article>
    </li>
  );
}
