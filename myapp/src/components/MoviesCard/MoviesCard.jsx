import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


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

  function durationTime(duration) {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);
    return (hours === 0 ? `${minutes}м` : minutes === 0 ? `${hours}ч` : `${hours}ч${minutes}м`)
  }

  return (
    <li className='movie'>
      <article>
        <Link className="movie__link"
          to={data.trailerLink}
          target="_blank">
          <img src={pathname === '/movies' ? `https://api.nomoreparties.co${data.image.url}` : data.image} alt={data.name} className='movie__image'/>
        </Link>
        <div className="movie__card">
          <div className="movie__text">
            <div className="movie__title-container">
              <h2 className="movie__title">{data.nameRU}</h2>
              {pathname === '/movies' ?
                <button type="button" className={`movie__save ${click ? 'movie__save_active' : ''}`} onClick={onClick}></button>
                :
                <button type="button" className={`movie__save movie__save_type_delete`} onClick={() => onDelete(data._id)}></button>}
            </div>
            <span className="movie__duration">{durationTime(data.duration)}</span>
          </div>
        </div>
      </article>
    </li>
  );
}
