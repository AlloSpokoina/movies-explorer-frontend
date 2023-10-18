import { Link } from "react-router-dom"
import Input from "../Input/Input.jsx"
import Form from "../Form/Form"
import useFormValidation from "../../hooks/useFormValidation"

export default function Profile({ name, setIsEdit, isEdit}) {
  const { values, errors, isInputValid, isValid, handleChange} = useFormValidation()

  return (
    <section className="profile">
      <h1 className='profile__title'>{`Привет, Виталий!`}</h1>
      <Form
        name={name}
        isValid={isValid}
        values={values}
        setIsEdit={setIsEdit}
        isEdit={isEdit}
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
          placeholder='Введите ваш E-mail'
        />
      </Form>
      <Link to={'/'} className='profile__link'>Выйти из аккаунта</Link>
    </section>
  )
}
