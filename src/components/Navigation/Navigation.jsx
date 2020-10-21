import React from 'react'
import { Link } from 'react-router-dom';
import "./nav.css";

export default function Navigation() {
    return (
       <nav className="navigation">
           <ul>
               <li>
                   <Link>Home</Link>
               </li>
               <li>
                   <Link>Project</Link>
               </li>
               <li>
                   <Link>About</Link>
               </li>
               <li>
                   <Link>Contacts</Link>
               </li>
           </ul>
           <div className="menu-icon">
                <i className="fas fa-ellipsis-v fa-2x"></i>
           </div>
       </nav>
    )
}
