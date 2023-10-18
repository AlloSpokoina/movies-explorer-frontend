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
      <form noValidate className='search__form' name={'SearchForm'}>
        <div className='search__main'>
          <button type='button' className='search__icon'></button>
          <input type="text" placeholder='Фильм' className='search__input' required />
          <button type='button' className='search__find'></button>
        </div>
        <FilterCheckbox isCheck={isCheck} changeShot={changeShot} />
      </form>
      <span className={`search__error ${isError && 'search__error_active'}`}>{isError ? 'Введите ключевое слово' : ''}</span>
    </section>
  )
}
