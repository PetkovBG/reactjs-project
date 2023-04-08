import styles from './Login.module.css';

import { useAuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';
import { useValidation } from '../../hooks/useValidation';

export const Login = () => {

    const { onLoginSubmit, } = useAuthContext();
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
    }, onLoginSubmit);

    const { validateEmail, isValid, onBlurHandler } = useValidation();


    return (
        <section className={styles.login}>
        <div className={styles.container}>
          <form onSubmit={onSubmit}>
            <h2>Login</h2>
            {!isValid && <div className={styles.emailValidation} >Email is not valid</div>}
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" 
            value={values.email}
            onChange={(e) => {
              changeHandler(e);
              validateEmail(e.target.value);
            }}
            onBlur={(e) => onBlurHandler(e.target.value)}
            required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password"
             value={values.password}
             onChange={changeHandler}
            required />
            <button type="submit">Login</button>
          </form>
        </div>
      </section>
    );

}