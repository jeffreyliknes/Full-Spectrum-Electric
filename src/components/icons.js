import React from "react";
import styled from "styled-components";
import Footer from "../components/footer";
import { Link } from "gatsby";
import { HomeAlt } from "styled-icons/boxicons-regular/HomeAlt";
import { Lightbulb } from "styled-icons/fa-regular/Lightbulb";
import { Hammer } from "styled-icons/fa-solid/Hammer";
import { SolarPanel } from "styled-icons/fa-solid/SolarPanel";

// const IconWrapper = styled.div`
//   width: 40%;
//   display: flex;
//   flex-grow: 1;
//   justify-content: space-around;
//   width: 100%;
// `;

const GoldHome = styled(HomeAlt)`
  color: darkorange;
  flex-grow: 1;
  width: 30%;
`;
const GoldLightbulb = styled(Lightbulb)`
  color: darkorange;
  flex-grow: 1;
  width: 22%;
`;
const GoldHammer = styled(Hammer)`
  color: darkorange;
  flex-grow: 1;
  width: 30%;
`;
const GoldSolarPanel = styled(SolarPanel)`
  color: darkorange;
  flex-grow: 1;
  width: 30%;
`;

const JustifyCenterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  grid-gap: 3rem;
  text-align: center;
  a {
    text-decoration: none;
    color: black;
  }
`;

const Icon = () => {
  return (
    <div>
      <h2>Services</h2>
      <JustifyCenterGrid>
        <Link to="/services">
          <GoldHome />
        </Link>
        <Link to="/services">
          <GoldLightbulb />
        </Link>
        <Link to="/services">
          <h3>Residential</h3>
        </Link>
        <Link to="/services">
          <h3>Lighting Design</h3>
        </Link>
        <Link to="/services">
          <GoldHammer />
        </Link>
        <Link to="/services">
          <GoldSolarPanel />
        </Link>
        <Link to="/services">
          <h3>Commercial</h3>
        </Link>
        <Link to="/services">
          <h3>Renewable Energy</h3>
        </Link>
      </JustifyCenterGrid>
      <Footer />
    </div>
  );
};

export default Icon;
