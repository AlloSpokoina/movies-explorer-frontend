import Input from "../Input/Input.jsx";
import SectionLogin from "../SectionLogin/SectionLogin.jsx";
import useFormValidation from '../../hooks/useFormValidation.js'

export default function Login({ name, onLogin, setIsError }) {
  const { values, errors, isInputValid, isValid, handleChange, } = useFormValidation()

    function onSubmit(evt) {
      evt.preventDefault()
      onLogin(values.email, values.password)
    }


  return (
    <SectionLogin name={name} isValid={isValid} onSubmit={onSubmit} setIsError={setIsError}>
      <Input
        name='email'
        type='email'
        title='E-mail'
        value={values.email}
        isInputValid={isInputValid.email}
        error={errors.email}
        onChange={(evt) => {
          handleChange(evt)
          setIsError(false)
        }}
        placeholder='Введите ваш E-mail'
      />
      <Input
        name='password'
        type='password'
        title='Пароль'
        minLength ='6'
        maxLength='30'
        value={values.password}
        isInputValid={isInputValid.password}
        error={errors.password}
        onChange={(evt) => {
          handleChange(evt)
          setIsError(false)
        }}
        placeholder='Введите ваш пароль'
      />
    </SectionLogin>
  )
}
