import styled from "styled-components";

export const PythonBasicsContainer = styled.div`
    background-color: #252525;
    color: white;
    min-height: 100vh;
 `;

export const PythonBasicsContent = styled.div`
    margin-left: 300px;
    padding: 20px;
    @media (max-width: 600px) {
        margin-left: 0;
    }
 `;


export const PythonBasicsHeader = styled.h2`
    color: #f361f5;
    margin-bottom: 20px;
    font-size: 2rem;
 `;

 export const PythonBasicsSection = styled.div`
    margin-bottom: 20px;
 `;

 export const Bullet = styled.ul`
    margin-left: 50px;
    opacity: 0.7;
 `;

export const EditorContainer = styled.div`
    height: 30vh;
    width: 50vw;
    margin-bottom: 20px;
    @media (max-width: 600px) {
        width: 100%;
    }
 `;


 export const Ptext = styled.p`
    opacity: 0.7;
 `;

 export const Table = styled.table`
    width: 90%;
    border: 1px solid white;
    margin-bottom: 20px;
    border-collapse: collapse;
    text-align: center;

 `;

 export const Thead = styled.thead`
    opacity: 0.7;
    border: 1px solid white;
    @media (max-width: 600px) {
        font-size: 0.8rem;
    }
 `;

 export const Tbody = styled.tbody`
    opacity: 0.7;
    border: 1px solid white;
    @media (max-width: 600px) {
        font-size: 0.8rem;
    }
 `;

 export const Subsection = styled.h3`
    margin-bottom: 10px;
 `;

 export const TR = styled.tr`
    border: 1px solid white;
 `;
export const TH = styled.th`
        border: 1px solid white;
    `;

export const TD = styled.td`
        border: 1px solid white;
    `;