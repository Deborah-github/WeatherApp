import React from 'react';
import { Link } from 'react-router-dom';



function NavBar(){
    return(
        <div> 
            <ul>
                
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/">Home</Link></li>
            </ul>
        </div>
    
    )
    
}


export default NavBar

