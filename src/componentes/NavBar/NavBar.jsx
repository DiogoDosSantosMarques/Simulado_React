 import { Link } from 'react-router-dom'

import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/meu-plano">Meu Plano</Link>
              </li>

              <li>
                <Link to="/historico">Histórico</Link>
              </li>
            </ul>
      
    </nav>
  )
}

export default NavBar
