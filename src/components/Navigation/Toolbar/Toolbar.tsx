import React from 'react'
import NavItems from '../NavItems/NavItems';
import './Toolbar.css';


function Toolbar() {
    return (
        <header className="Toolbar">
            <div>TOOLBAR</div>
            <nav>
                <NavItems />
            </nav>
        </header>
    )
}

export default Toolbar
