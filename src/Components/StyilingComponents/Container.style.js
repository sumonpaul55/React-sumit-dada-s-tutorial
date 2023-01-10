import styled from "styled-components";
import Titlestyle from "./Title";

export const ContainerStyling = styled.div`
width: 800px;
margin: auto;
padding: 20px;
border-radius: 5px;
background-color: #333;
color: white;
`;

export const CardContainer = styled.div`
    display: flex;
`;
export const styledButton = styled.button`
    background: blue;
`;
export const StyledTitle = styled(Titlestyle)`  
    background-color: red;
    color: green;
    font-family: 'Courier New', Courier, monospace;
`;