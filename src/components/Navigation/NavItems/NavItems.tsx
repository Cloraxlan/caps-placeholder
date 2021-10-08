import React, { CSSProperties } from 'react'
import NavItem from './NavItem/NavItem';

const navItemsStyling : CSSProperties = {
    margin: "0",
    padding: "0",
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    height: "100%"
}

const NavItems = () => {
    return (
        <ul style={navItemsStyling}>
            <NavItem link="/" active={true}>Home</NavItem>
            <NavItem link="/" active={false}>Feature</NavItem>
            <NavItem link="/" active={false}>Future Login Page</NavItem>
        </ul>
    )
}

export default NavItems;
