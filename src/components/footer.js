import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import "../components/styles/footerStyle.scss";
import Img from "gatsby-image";

const FooterWrapper = styled.div`
  display: flex;
  padding: 1rem;
  height: 35vh;
`;

const SetImg = styled(Img)`
  flex-grow: 1;
  padding: 1rem;
`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query Images {
      imageDesign: file(relativePath: { eq: "unnamed.jpg" }) {
        id
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imageSpec: file(relativePath: { eq: "FSE-logo-vertical-RGB.png" }) {
        id
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <section>
      <FooterWrapper>
        <SetImg fluid={data.imageSpec.childImageSharp.fixed} />
        <a href="mailto:fullspectrumnelson@gmail.com?subject=Full Spectrum Project">
          fullspectrumnelson@gmail.com
        </a>
      </FooterWrapper>
      <FooterWrapper>
        <SetImg fluid={data.imageDesign.childImageSharp.fixed} />
        <a href="mailto:jeff.liknes@gmail.com?subject=DesignbyJeff Project">
          jeff.liknes@gmail.com
        </a>
      </FooterWrapper>
    </section>
  );
};
export default Footer;
