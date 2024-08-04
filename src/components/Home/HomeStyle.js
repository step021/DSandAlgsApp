import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    min-height: 90vh;
    background-color: #050505;
    color: white;
    transition: background-color 0.5s, color 0.5s;
    padding-top:100px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 50px;
    justify-content: space-between;
    aligh-items: center;
    flex-wrap: wrap;
`;

export const HomeText = styled.div`
    margin-right: 100px;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media (max-width: 600px) {
        margin-right: 0;
    }
`;

export const HomeWelcome = styled.span`
    font-size: 3rem;
    font-weight: bold;
`;

export const HomeLearners = styled.span`
    font-size: 3rem;
    font-weight: bold;
    color: #f361f5; 
`;

export const HomeParagraph = styled.p`
    font-size: 1.2rem;
    margin-top: 20px;
    max-width: 400px;
    text-align: left;
    margin-bottom: 20px;
    @media (max-width: 600px) {
        font-size: 1rem;
    }
    @media (max-width: 400px) {
        text-align: center;
    }
`;


export const HomeSplineContainer = styled.div`
    width: 400px;
    height: 60vh;
    @media (max-width: 600px) {
        width: 300px;
        height: 50vh;
    }
    @media (max-width: 400px) {
        width: 300px;
        height: 30vh;
    }

`;