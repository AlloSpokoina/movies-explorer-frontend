import { Link } from "react-router-dom"
import Input from "../Input/Input.jsx"
import Form from "../Form/Form"
import useFormValidation from "../../hooks/useFormValidation"
import { useEffect } from "react"
import { useContext } from "react"
import CurrentUserContext from "../../contexts/CurrentContext.js"
import { EmailRegex } from "../../utils/constants.jsx"

export default function Profile({ name, setIsEdit, isEdit, logOut, editUserData, setIsError, isSuccess, setSuccess}) {
  const { values, errors, isInputValid, isValid, handleChange, reset } = useFormValidation()
  const currentUser = useContext(CurrentUserContext)

  useEffect(() => {
    reset({ username: currentUser.name, email: currentUser.email })
  }, [reset, currentUser, isEdit])

  function onSubmit(evt) {
    evt.preventDefault()
    editUserData(values.username, values.email)
  }

  return (
    <section className="profile">
      <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
      <Form
        name={name}
        isValid={isValid}
        values={values}
        setIsEdit={setIsEdit}
        isEdit={isEdit}
        onSubmit={onSubmit}
        setIsError={setIsError}
        isSuccess={isSuccess}
        setSuccess={setSuccess}
      >
        <Input
          selectname={name}
          name='username'
          type='text'
          title='Имя'
          minLength='3'
          maxLength="30"
          value={values.username}
          isInputValid={isInputValid.username}
          error={errors.username}
          onChange={handleChange}
          isEdit={isEdit}
          placeholder='Введите ваше имя'
        />
        <Input
          selectname={name}
          name='email'
          type='email'
          title='E-mail'
          value={values.email}
          isInputValid={isInputValid.email}
          error={errors.email}
          onChange={handleChange}
          pattern={EmailRegex}
          isEdit={isEdit}
          placeholder='Введите ваш E-mail'
        />
      </Form>
      <Link to='/' onClick={logOut} className='profile__link'>Выйти из аккаунта</Link>
    </section>
  )
}
