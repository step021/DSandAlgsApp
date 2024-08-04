import React, { useState, useEffect } from 'react';
import {NavBarContainer, NavBarTitle, MenuButton, NavBarMenu,NavBarMenuItem, MenuandTheme} from './NavBarStyle.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faMoon} from '@fortawesome/free-solid-svg-icons';
import {faSun} from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    const [isLightMode, setIsLightMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleTheme = () => {
        setIsLightMode(!isLightMode);
        if (!isLightMode) {
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        }
    };

    
    return (
        <NavBarContainer>
            <NavBarTitle>Data Structures & Algorithms Python</NavBarTitle>
            <MenuandTheme>
                <MenuButton onClick={toggleTheme}>
                    <FontAwesomeIcon icon={isLightMode ? faMoon : faSun}/>
                </MenuButton>
                <MenuButton onClick={()=> setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={faBars}/>
                </MenuButton>
            </MenuandTheme>
            <NavBarMenu $menuOpen={menuOpen}>
                <NavBarMenuItem href="#home">Home</NavBarMenuItem>
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
            </NavBarMenu>
        </NavBarContainer>
    );
}
export default NavBar;