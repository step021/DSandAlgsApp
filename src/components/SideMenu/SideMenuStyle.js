import styled from 'styled-components';
export const SideMenuContainer = styled.div`
    max-width: 300px;
    background-color: #151515;
    padding: 10px;
    border-radius: 5px;
    position: fixed;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    @media (max-width: 600px) {
        display: none;
    }
`;

export const SideMenuLink = styled.a`
    display: block;
    padding: 10px;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    margin-bottom: 5px;
    &:hover {
        background-color: #f361f5; 
    }
`;