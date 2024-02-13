// Navbar.js


// import styles from "./Navigation.module.css";
import Container from "../../../../01Project/src/components/Container";
import styles from "./Navigation.module.css"

function Navbar() {
  // console.log(styles);
  return (
    <div>
      <nav className={`${styles.navigation} container` }>
        <div className="logo">
          <img src="/images/Frame.png" alt="logo" />
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
