import React from 'react'
import {BrowserRouter,Link} from 'react-router-dom'
import '../styles/Navbar.css'
import { Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

function Navbar() {
    return (
            <BrowserRouter>  
            <nav className='navbar'>
                <ul className='nav-list'>
                    <div className="meal-logo">
                        <li><Link to='/'>Meal catalogue</Link></li>
                    </div>
                    <div className="list-item">
                        <Link to='/'>Home</Link>
                        <Link to='/random'>Random meal</Link>
                        <Link to='/about'>About us</Link>
                    </div>
                    <div className="search-item" >
                    <div className="search-icon"><SearchIcon/></div>
                    <Input placeholder='search meals' color='primary'/>
                    </div>
                </ul>
            </nav>
            </BrowserRouter> 
        
    )
}

export default Navbar
