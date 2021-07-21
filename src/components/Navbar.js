import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import { Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

function Navbar() {
    return ( 
        
            <nav className='navbar'>
                <ul className='nav-list'>
                    <div className="meal-logo">
                         <Link to='/'>Meal catalogue</Link>
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
            
           
        
    )
}

export default Navbar
