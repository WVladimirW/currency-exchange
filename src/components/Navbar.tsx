import { NavLink } from 'react-router-dom'

function Navbar() {
   return (
      <nav className="navbar">
         <div className="nav-wrapper green darken-3">
            <ul className="right">
               <li><NavLink to="/converter">Конвертер</NavLink></li>
               <li><NavLink to="/currency">Всі валюти</NavLink></li>
            </ul>
         </div>
      </nav>
   )
}

export default Navbar