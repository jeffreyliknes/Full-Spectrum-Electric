import React from "react";
import MainMenu from "./MainMenu";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900|Raleway:300,400&display=swap');
@import url('https://fonts.googleapis.com/css?family=Quicksand:400,700&display=swap');
  body, html{

    /* font-family: 'Open Sans', sans-serif; */
    margin: 0 !important;
    padding: 0 !important;
    font-family: 'Raleway', sans-serif;
    letter-spacing: 1px;
  }
  h1, h2{
    font-family: 'Quicksand', sans-serif;
    letter-spacing: 1.5px;
    font-weight: 7;

    display: flex;
    justify-content: center;
    text-align: center;
  }
  h3{
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 2px;
    display: flex;
    font-weight: 7;
   
  }

  img{
    border-radius: 15px;
  }
`;

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem;
  @media (max-width: 525px) {
    margin-left: 0vw !important;
  }
`;

const Layout = ({ children }) => (
  <div className="mainMenu__Layout__wrapper">
    <GlobalStyles />

    <MainMenu />

    <LayoutWrapper>{children}</LayoutWrapper>
  </div>
);

export default Layout;
