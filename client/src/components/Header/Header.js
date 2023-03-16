import styles from './Header.module.css'

export const Header = () => {

return (
    <header className={styles.header}>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Properties</a></li>
      <li><a href="#">Add Property</a></li>
      <li><a href="#">Login</a></li>
      <li><a href="#">Register</a></li>
      <li><a href="#">Profile</a></li>
      <li><a href="#">Logout</a></li>
    </ul>
  </nav>
</header>

);

}