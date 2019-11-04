import React from "react";
// import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import "../components/styles/footerStyle.scss";
// import Img from "gatsby-image";

// Icons import
// import { Lightbulb } from "styled-icons/fa-regular/Lightbulb";
// import { Hammer } from "styled-icons/fa-solid/Hammer";
// import { Mail } from "styled-icons/feather/Mail";

// const FooterWrapper = styled.div`
//   display: flex;
//   padding: 1rem;
//   height: 35vh;
//   margin-top: 3rem;
// `;

// const SetImg = styled(Img)`
//   flex-grow: 1;
//   /* padding: 1rem; */
// `;

const DesignbyJeff = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
 
`;

const CopyrightFooter = styled.div`
  text-align: center;
  padding-bottom: 8rem;
`;

const FooterSection = styled.section`
  min-height: 10rem;
`;

const Footer = () => {
  return (
    <FooterSection>
      <div className="footerBreak" />
      <DesignbyJeff className="footer-copyright text-center py-3">
        <div>Designed & Developed by</div>
        <a href="mailto:jeff.liknes@gmail.com?subject=DesignbyJeff Project">
          <div className="background" />
        </a>
      </DesignbyJeff>
      <CopyrightFooter>© 2019 Copyright - Liknes</CopyrightFooter>
    </FooterSection>
  );
};
export default Footer;
