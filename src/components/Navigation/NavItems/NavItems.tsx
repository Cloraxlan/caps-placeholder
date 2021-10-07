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

const NavItems = () => (
    <ul style={navItemsStyling}>
        <NavItem link="/" active={true}>Test</NavItem>
        <NavItem link="/" active={false}>Test2</NavItem>
    </ul>
);

export default NavItems;
