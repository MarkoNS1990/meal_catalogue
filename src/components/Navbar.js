import React from 'react'
import {BrowserRouter,Link} from 'react-router-dom'

function Navbar() {
    return (
            <BrowserRouter>  
            <nav>
                <ul>
                    <div className="meal-logo">
                        <li><Link to='/'>Meal catalogue</Link></li>
                    </div>
                    <div className="list-item">
                        <Link to='/'>Home</Link>
                        <Link to='/random'>Get random meal</Link>
                        <Link to='/about'>About us</Link>
                    </div>
                </ul>
            </nav>
            </BrowserRouter> 
        
    )
}

export default Navbar
