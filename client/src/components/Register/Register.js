import styles from './Register.module.css';

import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContext';

export const Register = () => {

    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit} = useForm({
        email: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit);


return (
    <section className={styles.register}>
    <div className={styles.container}>
      <form method="POST" onSubmit={onSubmit}>
        <h2>Register</h2>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required 
        value={values.email}
        onChange={changeHandler}
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