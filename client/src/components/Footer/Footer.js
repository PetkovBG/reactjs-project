import styles from './Footer.module.css'

export const Footer = () => {

return(

<footer className={styles.footer}>
  <div className="container">
    <p>Copyright © 2023</p>
    <nav>
      <ul>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms and Conditions</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </nav>
  </div>
</footer>

);

}