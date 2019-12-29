import React from "react";
import { graphql, StaticQuery } from "gatsby";
// import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import "../components/styles/contentStyle.scss";




  // const HomeBackgroundSection = styled(BackgroundSection)`
  //   display: none;
  //   background-position: bottom center;
  //   background-repeat: repeat-y;
  //   background-size: cover;
  // `;




const BackgroundSection = ({ Astro }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "casey-horner-4rDCa5hBlCs-unsplash.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
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
        <BackgroundImage
          style={{
            width: "40%",
            height: "100vh",
            top: 0,
            left: 0,
            position: "fixed"
          }}
          Tag="section"
          className={Astro}
          fluid={imageData}
          backgroundColor={`#040e18`}
           
        ></BackgroundImage>
      );
    }}
  />
);


export default BackgroundSection;

