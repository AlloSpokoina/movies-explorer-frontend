import { useNavigate } from "react-router-dom";
import Input from "../Input/Input.jsx";
import SectionLogin from "../SectionLogin/SectionLogin.jsx";
import useFormValidation from '../../hooks/useFormValidation.js'

export default function Login({ name, setLoggedIn }) {
  const navigate = useNavigate()
  const { values, errors, isInputValid, isValid, handleChange, } = useFormValidation()

  function onLogin(evt) {
    evt.preventDefault()
    navigate('/movies')
    setLoggedIn(true)
  }

  return (
    <SectionLogin name={name} isValid={isValid} onSubmit={onLogin}>
      <Input
        name='email'
        type='email'
        title='E-mail'
        value={values.email}
        isInputValid={isInputValid.email}
        error={errors.email}
        onChange={handleChange}
        placeholder='Введите ваш E-mail'
      />
      <Input
        name='password'
        type='password'
        title='Пароль'
        minLength = '6'
        maxLength="30"
        value={values.password}
        isInputValid={isInputValid.password}
        error={errors.password}
        onChange={handleChange}
        placeholder='Введите ваш пароль'
      />
    </SectionLogin>
  )
}
