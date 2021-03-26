import styled from "styled-components";

export const AppStyles = styled.div`
  font-family: "Permanent Marker", cursive;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:10%;
  color:white;
  text-shadow:.5px .5px black;
  .fullToDoList {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-evenly;
    width: 50%;
    height: 60vh;
    margin-top: 5%;
    margin-bottom: 20%;
    box-shadow: 15px 15px black;
  }
  p {
    width: 40%;
    text-align: center;
    font-family: "Montserrat Alternates", sans-serif;
    font-weight: bold;
  }
  h2{
    color:black;
    text-shadow:.4px .4px white;
  }
 .fullToDoList h1{
    color:black;
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
