import { useLocation } from 'react-router-dom'

export default function Header() {
  const {pathname} = useLocation();

  return (
    <footer className={`footer  ${pathname === '/saved-movies' && 'page__footer--type-saved-movies'}`}>
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__container">
        <p className="footer__author">&copy; 2023 </p>
        <div className="footer__links">
          <ul className="footer__list">
            <li>
              <a
                href="https://practicum.yandex.ru"
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a
                href="https://github.com/AlloSpokoina"
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
