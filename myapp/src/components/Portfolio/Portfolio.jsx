
export default function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__links'>
          <a href='https://github.com/AlloSpokoina/how-to-learn' target='_blank' className='portfolio__link' rel="noopener noreferrer">Статичный сайт
          </a>
          <button type='button' className='portfolio__button'></button>
        </li>
        <li className='portfolio__links'>
          <a href='https://github.com/AlloSpokoina/russian-travel/' target='_blank' className='portfolio__link' rel="noopener noreferrer">Адаптивный сайт
          </a>
          <button type='button' className='portfolio__button'></button>
        </li>
        <li className='portfolio__links'>
          <a href='https://github.com/AlloSpokoina/react-mesto-auth/' target='_blank' className='portfolio__link' rel="noopener noreferrer">Одностраничное приложение
          </a>
          <button type='button' className='portfolio__button'></button>
        </li>
      </ul>
    </section>
  )
}
