import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedIn } from '@fortawesome/free-brands-svg-icons'


export const Footer = () => {

return(

<footer className={styles.footer}>
  <div className="container">
    <p>Orlin Petkov Copyright © 2023</p>
    <nav>
      <ul>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms and Conditions</a></li>
        <li><button>
          <FontAwesomeIcon icon={faLinkedIn} />
        </button>
          </li>
      </ul>
    </nav>
  </div>
</footer>

);

}