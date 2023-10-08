import { useState } from 'react'
//import useFormValidation from '../../hooks/useFormValidation'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

export default function SearchForm({ isCheck, changeShot }) {
  const [isError,setIsError] = useState(false)
  //const {values, isValid, handleChange} = useFormValidation()

  /*function onSubmit(evt) {
    evt.preventDefault()
    if (!isValid) {
      setIsError(true)
      return
    } else {
      setIsError(false)
    }
  }*/

  return (
    <section className='search'>
      <div className='search__container'>
        <form noValidate className='search__form' name={'SearchForm'}  >
          <button className='search__icon'></button>
          <input type="text" placeholder='Фильм' className='search__input' required />
          <button className='search__find'></button>
          <FilterCheckbox isCheck={isCheck} changeShot={changeShot}/>
        </form>
        <span className={`search__error ${isError && 'search__error_active'}`}>{isError ? 'Введите ключевое слово' : ''}</span>
      </div>
    </section>
  )
}
