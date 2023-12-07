import React from 'react';
import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {
    return (
        <header className='header'>
            <div className="logo"> <span>G</span>
                <h3 className='name'>Jorge Gamboa Web</h3>
            </div>
            <nav>
                <ul>
                    <li>
                    <NavLink to='./Home' className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Portfolio"className={({isActive}) => isActive ? 'active' : ''}>Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Services" className={({isActive}) => isActive ? 'active' : ''}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Curriculum" className={({isActive}) => isActive ? 'active' : ''}>Curriculum</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
