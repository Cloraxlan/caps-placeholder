import React from 'react'
import NavItems from '../NavItems/NavItems';
import './Toolbar.css';


const Toolbar = () => (
    <header className="Toolbar">
        <div>MENU</div>
        <nav>
            <NavItems />
        </nav>
    </header>
);

export default Toolbar
