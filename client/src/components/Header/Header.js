import { Link } from 'react-router-dom';

import styles from './Header.module.css'

export const Header = () => {

return (
    <header className={styles.header}>
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/catalog">Properties</Link></li>
      <li><Link to="/create-property">Add Property</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/logout">Logout</Link></li>
    </ul>
  </nav>
</header>

);

}