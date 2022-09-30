import { Link } from 'react-router-dom'

function Navbar() {
   return (
      <nav className="navbar">
         <div className="nav-wrapper green darken-3">
            <ul className="right">
               <li><a href="badges.html"><Link to="/">Конвертер</Link></a></li>
               <li className="active"><a href="collapsible.html"><Link to="/currency">Всі валюти</Link></a></li>
            </ul>
         </div>
      </nav>
   )
}

export default Navbar