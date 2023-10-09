import { useLocation } from 'react-router-dom'

export default function Header() {
  const {pathname} = useLocation();

  return (
    <footer className={`footer  ${pathname === '/saved-movies' && 'page__footer_type_saved-movies'}`}>
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__container">
        <p className="footer__author">&copy; 2023 </p>
        <div className="footer__links">
          <a
            href="https://practicum.yandex.ru"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            href="https://github.com/AlloSpokoina"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  )
}
