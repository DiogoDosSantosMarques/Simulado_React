import { NavLink } from 'react-router-dom'

import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>

        <ul>

        <li>

        <NavLink to='/'>

        Home

        </NavLink>


        </li>

        </ul>
      
    </nav>
  )
}

export default NavBar
