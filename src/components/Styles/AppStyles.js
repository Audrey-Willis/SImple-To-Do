import styled from "styled-components";

export const AppStyles = styled.div`
    font-family: "Permanent Marker", cursive;
    display: flex;
    flex-direction: column;
    align-items: center;
  .fullToDoList {
    display: flex;
    flex-direction: column;
    padding: 2%;
    width: 40%;
    margin-top: 5%;
    margin-bottom: 20%;
    background-color: #ffff00;
    background-image: url("https://www.transparenttextures.com/patterns/
  textured-paper.png");
    box-shadow: 15px 15px black;
  }
  p {
    width: 40%;
    text-align: center;
    font-family: "Varela", sans-serif;
    font-weight: bold;
  }
  @media (max-width: 800px) {
  .fullToDoList {
    width: 60%;
  }
  p {
    width: 60%;
  }
  }
  @media (max-width: 500px) {
  .fullToDoList {
    width: 80%;
  }
  p {
    width: 80%;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.2rem;
  }
  }
`;
