import { Link } from 'react-router-dom';

export default function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__links'>
          <Link to={'https://github.com/AlloSpokoina/how-to-learn'} target='_blank' className='portfolio__link'>
          <p className='portfolio__subtitle'>Статичный сайт</p>
          <button type='button' className='portfolio__button'></button>
          </Link>
          </li>
        <li className='portfolio__links'>
          <Link to={'https://github.com/AlloSpokoina/russian-travel/'} target='_blank' className='portfolio__link'>
          <p className='portfolio__subtitle'>Адаптивный сайт</p>
          <button type='button' className='portfolio__button'></button>
          </Link>
        </li>
        <li className='portfolio__links'>
          <Link to={'https://github.com/AlloSpokoina/react-mesto-auth/'} target='_blank' className='portfolio__link'>
          <p className='portfolio__subtitle'>Одностраничное приложение</p>
          <button type='button' className='portfolio__button'></button>
          </Link>
        </li>
      </ul>
    </section>
  )
}
