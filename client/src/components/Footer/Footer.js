import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


export const Footer = () => {

return(

<footer className={styles.footer}>
  <div className="container">
    <nav>
      <ul>
        <li><a href="#">Orlin Petkov © 2023</a></li>
        <li>
          <Link to="https://www.facebook.com/orlin.petkov.167/">
          <FontAwesomeIcon icon={faFacebook} />
          </Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/orlin-petkov-js/">
          <FontAwesomeIcon icon={faLinkedinIn} />
          </Link>
          </li>
      </ul>
    </nav>
  </div>
</footer>

);

}