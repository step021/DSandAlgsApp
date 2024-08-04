import React, { useState, useEffect } from 'react';
import {NavBarContainer, NavBarTitle, MenuButton, NavBarMenu,NavBarMenuItem} from './NavBarStyle.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    
    return (
        <NavBarContainer>
            <NavBarTitle>Data Structures & Algorithms Python</NavBarTitle>
            <MenuButton onClick={()=> setMenuOpen(!menuOpen)}>
                <FontAwesomeIcon icon={faBars}/>
            </MenuButton>
            <NavBarMenu $menuOpen={menuOpen}>
                <NavBarMenuItem href="/">Home</NavBarMenuItem>
                <NavBarMenuItem href="#about">Python Basics</NavBarMenuItem>
                <NavBarMenuItem href="#services">OOP Basics</NavBarMenuItem>
                <NavBarMenuItem href="#contact">Algorithm Analysis</NavBarMenuItem>
                <NavBarMenuItem href="#recursion">Recursion</NavBarMenuItem>
                <NavBarMenuItem href="#arrays">Arrays</NavBarMenuItem>
                <NavBarMenuItem href="#linkedlists">List ADTs</NavBarMenuItem>
                <NavBarMenuItem href="#stacks">Stacks/Queues/Deque</NavBarMenuItem>
                <NavBarMenuItem href="#queues">Priority Queues</NavBarMenuItem>
                <NavBarMenuItem href="#trees">Trees</NavBarMenuItem>
                <NavBarMenuItem href="#graphs">Search Trees</NavBarMenuItem>
                <NavBarMenuItem href="#sorting">Hashmaps/Tables/Skiplists</NavBarMenuItem>
                <NavBarMenuItem href="#searching">Sorting</NavBarMenuItem>
                <NavBarMenuItem href="#hashing">Text Processing/Pattern Matching</NavBarMenuItem>
                <NavBarMenuItem href="#strings">Graphing Algorithms</NavBarMenuItem>
                <NavBarMenuItem href="#arrays">Dynamic Programming</NavBarMenuItem>

            </NavBarMenu>
        </NavBarContainer>
    );
}
export default NavBar;