import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function MoviesCard({name, src, trailerLink }) {
  const {pathname} = useLocation()
  const [click, setClick] = useState(false)

  function onClick() {
    if (click) {
      setClick(false)
    } else {
      setClick(true)
    }
  }
  return (
    <li className='movie'>
      <article>
        <a className="movie__link"
          href={trailerLink}
          target="_blank"
          rel="noreferrer">
          <img src={src} className="movie__image" alt="#" />
        </a>
        <div className="movie__card">
          <div className="movie__text">
            <div className="movie__title-container">
              <p className="movie__title">{name}</p>
              {pathname === '/movies' ?
                <button type="button" className={`movie__save &{click ? 'movie__save_active' : ''}`} onClick={onClick}></button>
                :
                <button type="button" className={`movie__save movie__save_type_delete`} onClick={onClick}></button>}
            </div>
            <span className="movie__duration">1ч 47м</span>
          </div>
        </div>
      </article>
    </li>
  );
}
