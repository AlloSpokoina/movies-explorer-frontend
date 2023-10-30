export default function Input({ selectname, name, type, title, minLength, pattern, value, isInputValid, error, onChange, placeholder}) {

  return (
    <>
      {selectname !== 'profile' ?
        <label className='login__label'>
          <span className='login__subtitle'>{title}</span>
          <input
            required
            type={type}
            name={name}
            minLength={minLength || ''}
            className={`login__input ${isInputValid === undefined || isInputValid ? '' : 'login__input_invaid'}`}
            value={value || ''}
            onChange={onChange}
            autoComplete='on'
            placeholder={placeholder}
            pattern={pattern}
          />
          <span className='login__error'>{error}</span>
        </label>
        :
        <>
        <label className='profile__label'>
          <span className='profile__subtitle'>{title}</span>
          <input
            required
            type={type}
            name={name}
            minLength={minLength || ''}
            className={`profile__input ${isInputValid === undefined || isInputValid ? '' : 'profile__input_invaid'}`}
            value={value || ''}
            onChange={onChange}
            placeholder={placeholder}
            pattern={pattern}
          />
        </label>
        <span className={`profile__error ${name === 'username' ? 'profile__error_type_name' : ''}`}>{error}</span>
        </>
      }
    </>
  )
}
