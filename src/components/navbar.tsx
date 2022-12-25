import '../index.css'
import React from 'react';
import { Link } from 'react-router-dom';



export const Navbar = () =>{



    return(
        <div className='navbar'>

            <button>
                <Link to='/'>Home</Link>
            </button>
            <button>
                <Link to='/contact'>Kontakt</Link>
            </button>
            <button>
                <Link to='/Users'>Users</Link>

            </button>
        </div>
    )
}