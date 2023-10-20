import { useContext } from "react"
import Preloader from "../Preloader/Preloader"
import { useEffect } from "react"
import ErrorContext from "../../contexts/ErrorContext"
import SendContext from "../../contexts/SendContext"
import { useLocation } from "react-router-dom"
import CurrentUserContext from "../../contexts/CurrentContext"

export default function Form({ name, children, isValid, onSubmit, isEdit, setIsError, values, isSuccess, setSuccess, setIsEdit }) {
  const { pathname } = useLocation()
  const isError = useContext(ErrorContext)
  const isSend = useContext(SendContext)
  const currentUser = useContext(CurrentUserContext)

  useEffect(() => {
    setIsError(false)
  }, [setIsError, values])

  useEffect(() => {
    if (pathname === '/profile') {
      setSuccess(false)
      setIsEdit(false)
    }
  }, [setSuccess, setIsEdit, pathname])

  return (
    <form noValidate name={name} onSubmit={onSubmit}>
      {children}
      {name === 'signin' ?
        <>
          <span className={`login__error-request ${isError && 'login__error-request_active'}`}> {'При входе произошла ошибка.'}</span>
          <button
            type="submit"
            className={`login__submit ${isValid && !isError ? '' : 'login__submit_disabled'}`}
            disabled={!isValid || isSend || isError}
          >{isSend ? <Preloader name='button' /> : 'Войти'}</button>
        </>
       :
        name === 'signup' ?
          <>
            <span className={`login__error-request login__error-request_type_reg ${isError && 'login__error-request_active'}`}>{'При регистрации произошла ошибка.'}</span>
            <button type="submit" className={`login__submit--register  ${isValid && !isError ? '' :  'login__submit--register_disabled'} `}
            disabled={!isValid || isSend || isError}
            >{isSend ? <Preloader name='button' /> : 'Зарегистрироваться'}</button>
          </>
       : !isEdit ?
          <>
            <span className={`profile__error-request ${isError ? 'profile__error-request_type_error' : isSuccess && 'profile__error-request_type_success'}`}> {isError ? 'При обновлении профиля произошла ошибка.' : 'Изменения сохранены'}</span>
            <button type="submit" className={`profile__submit `}
            onClick={() => {
                  setIsEdit(true)
                  setSuccess(false)
                }}
              >{'Редактировать'}</button>
          </>
          :
            <>
              <span className={`profile__error-request ${isError ? 'profile__error-request_type_error' : isSuccess && 'profile__error-request_type_success'}`}>{isError ? 'При обновлении профиля произошла ошибка.' : 'Изменения сохранены'}</span>
              <button
                type="submit"
                className={`login__submit ${(values.username === currentUser.name && values.email === currentUser.email) || !isValid || isError ? 'login__submit_disabled' : ''}`}
                disabled={!isValid || isSend || isError}
              >{isSend ? <Preloader name='button' /> : 'Сохранить'}</button>
              <button
                type="button"
                className={`profile__submit `}
                onClick={() => {
                  setIsEdit(false)
                  setSuccess(false)
                  setIsError(false)
                }}
              >{'Отменить редактирование'}</button>
            </>
      }
    </form>
     )}
