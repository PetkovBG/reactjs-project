import styles from './Login.module.css';

import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';

export const Login = () => {

    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
    }, onLoginSubmit);

    return (
        <section className={styles.login}>
        <div className={styles.container}>
          <form onSubmit={onSubmit}>
            <h2>Login</h2>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" 
            value={values.email}
            onChange={changeHandler}
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