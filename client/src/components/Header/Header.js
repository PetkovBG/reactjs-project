import styles from './Header.module.css'

export const Header = () => {

return (
    <header className={styles.header}>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/catalog">Properties</a></li>
      <li><a href="/create-property">Add Property</a></li>
      <li><a href="/login">Login</a></li>
      <li><a href="/register">Register</a></li>
      <li><a href="/profile">Profile</a></li>
      <li><a href="/logout">Logout</a></li>
    </ul>
  </nav>
</header>

);

}