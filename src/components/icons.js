import React from "react";
import styled from "styled-components";
import { Fan } from "styled-icons/fa-solid/Fan";
import { Lightbulb } from "styled-icons/fa-regular/Lightbulb";
import { Hammer } from "styled-icons/fa-solid/Hammer";
import { SolarPanel } from "styled-icons/fa-solid/SolarPanel";


const IconWrapper = styled.div`
width: 40%;
display: flex;
flex-grow: 1;
justify-content: space-around;
width: 100%;
`;


const GoldFan = styled(Fan)`
  color: darkorange;
  flex-grow: 1;
  
`;
const GoldLightbulb = styled(Lightbulb)`
  color: darkorange;
  flex-grow: 1;

`;
const GoldHammer = styled(Hammer)`
  color: darkorange;
  flex-grow: 1;

`;
const GoldSolarPanel = styled(SolarPanel)`
  color: darkorange;
  flex-grow: 1;

`;

const Icon = () => {
  return (
    <IconWrapper>
      <GoldFan />
      <GoldLightbulb />
      <GoldHammer />
      <GoldSolarPanel />
    </IconWrapper>
  );
};

export default Icon;
