import styles from './Register.module.css';

import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { useValidation } from '../../hooks/useValidation';
import { AuthContext } from '../../contexts/authContext';

export const Register = () => {

  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm({
    email: '',
    password: '',
    confirmPassword: '',
  }, onRegisterSubmit);

  const { validateEmail, isValid, onBlurHandler, } = useValidation();


  return (
    <section className={styles.register}>
      <div className={styles.container}>
        <form method="POST" onSubmit={onSubmit}>
          <h2>Register</h2>

          {!isValid && <div className={styles.emailValidation} >Email is not valid</div>}
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required
            value={values.email}
            onChange={(e) => {
              changeHandler(e);
              validateEmail(e.target.value);
            }}
            onBlur={(e) => onBlurHandler(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password"
            value={values.password}
            onChange={changeHandler}
            required />

          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" name="confirmPassword"
            value={values.confirmPassword}
            onChange={changeHandler}
            required />

          <button type="submit">Register</button>
        </form>
      </div>
    </section>
  );

}