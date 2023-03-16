import styles from './Register.module.css';

export const Register = () => {

return (
    <section className={styles.register}>
    <div className={styles.container}>
      <form>
        <h2>Register</h2>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" name="confirm-password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  </section>
);

}