import styled from "styled-components";

export const ItemStyles = styled.div`
  margin: 2%;
  font-size: 1.5rem;
  font-family: "Montserrat Alternates", sans-serif;
  margin:2%;
  color:black;
  :hover{
    transform:scale(1.1);
    cursor:pointer;
  }
  @media(max-width:500px){
    font-size:1rem;
    width:90%;
    text-align:center;
  }
`;
