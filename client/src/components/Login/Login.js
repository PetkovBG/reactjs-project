import styles from './Login.module.css'

export const Login = () => {

    return (
        <section className={styles.login}>
        <div className={styles.container}>
          <form>
            <h2>Login</h2>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Login</button>
          </form>
        </div>
      </section>
    );

}