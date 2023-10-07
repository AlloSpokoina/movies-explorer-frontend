import { Link } from 'react-router-dom';
import  Form  from '../Form/Form.jsx';

export default function SectionLogin({ name, children, isValid, onSubmit }) {
  return (
    <section className='login'>
      <Link to={'/'} className="login__home"></Link>
      <h2 className='login__title'>{name === 'signin' ? 'Рады видеть!' : 'Добро пожаловать!'}</h2>
      <Form name={name} isValid={isValid} onSubmit={onSubmit}>
        {children}
      </Form>
      {name === 'signin' ?
        <div className='login__text'>Ещё не зарегистрированы? <Link to={'/signup'} className='login__link'>Регистрация</Link></div>
        : name === 'signup' ?
          <div className='login__text'>Уже зарегистрированы? <Link to={'/signin'} className='login__link'>Войти</Link></div>
          :
          <Link to={'/'}>Выйти из аккаунта</Link>
      }
    </section>
  )
}
