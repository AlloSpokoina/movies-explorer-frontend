import { Link } from "react-router-dom"

export default function Error() {
  return (
    <section className='error'>
      <div className='error__container'>
        <h2 className='error__title'>404</h2>
        <p className='error__text'>Страница не найдена</p>
        <Link className='error__link'>Назад</Link>
      </div>
    </section>
  )
}
