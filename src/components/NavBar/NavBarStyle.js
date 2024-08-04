import styled from 'styled-components';




export const NavBarContainer = styled.header`
    background-color: #252525;
    color: white;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 50px;
    padding-right: 50px;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    display:flex;
    top: 0;
    position: sticky;
    z-index: 500;
    transition: background-color 0.3s ease, color 0.3s ease;
    body.light-mode & {
        background-color: rgba(255, 255, 255, 0.8);
        color: black;
    }
`;

export const NavBarTitle = styled.h1`
    margin: 0;
    font-size: 1.5rem;
    &:hover {
        color: #902bf5;  
    }
    @media (max-width: 600px) {
        font-size: 1rem;
    }
    body.light-mode & {
        &:hover {
            color: #a37cf0;  
        }
    }
`;

export const MenuandTheme = styled.div`
    display: flex;
    align-items: center;
`;


export const MenuButton = styled.button`
    color: white;
    background-color: transparent;
    border: none;
    font-size: 2.5rem;
    margin-left: 50px;
    cursor: pointer;
    &:hover {
        color: #902bf5; 
    }
    @media (max-width: 400px) {
        margin-left: 20px;
        font-size: 1.9rem;
    }
    body.light-mode & {
        color: black;
        &:hover {
            color: #a37cf0; 
        }
`;

export const NavBarMenu = styled.div`
    ${({ $menuOpen }) => $menuOpen ? 'display: flex;' : 'display: none;'}
    flex-direction: column;
    position: absolute;
    top: 100%; 
    left: 0;
    width: 100%;
    padding-bottom: 20px; /* Add padding at the bottom */
    background-color: rgba(18, 18, 18, 0.8);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    body.light-mode & {
        background-color: rgba(255, 255, 255, 0.8);
    }
`;

export const NavBarMenuItem = styled.a`
    color: white;
    padding: 5px;
    padding-left: 20px;
    text-decoration: none;
    font-size: 1rem;
    text-align: left;
    cursor: pointer;
    &:hover {
        color: #902bf5;
    }
    body.light-mode & {
        color: black;
        &:hover {
            color: #a37cf0;
        }
    }
`;
