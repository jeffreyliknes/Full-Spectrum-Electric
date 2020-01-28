import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import "../components/styles/footerStyle.scss";

import BackgroundImage from "gatsby-background-image";

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

const Footer = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "bg-mountain-footer.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <FooterSection>
          <div className="footerBreak" />
          <DesignbyJeff className="footer-copyright text-center py-3">
            <div>Designed & Developed by</div>
            <a href="mailto:jeff.liknes@gmail.com?subject=DesignbyJeff Project">
              <div className="background" />
            </a>
          </DesignbyJeff>
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`#040e18`}
          >
            <CopyrightFooter>© 2020 Copyright - Liknes</CopyrightFooter>
          </BackgroundImage>
        </FooterSection>
      );
    }}
  />
);

//   return (
//   );
// };
export default Footer;
