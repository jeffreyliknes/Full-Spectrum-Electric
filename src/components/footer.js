import React from "react";
import { graphql, StaticQuery } from "gatsby";
// import styled from "styled-components";
// import "../components/styles/footerStyle.scss";
// import { Img } from "gatsby-image";

const Footer = () => {
  const data = StaticQuery(graphql`
  query Images {
    image: file(relativePath: {eq: "unnamed.jpg"}) {
      id
      childImageSharp {
        fluid {
          src
          srcSet
        }
      }
    }
  }
  `)
  console.log(data);
   return (
     <div>

     </div>
   )
  
   };
export default Footer;

// <div>
//   <SpectrumLogoFooter>
//     <div>
//       <a href="mailto:jeff.liknes@gmail.com?subject=DesignbyJeff Project">
//         jeff.liknes@gmail.com
//       </a>

//       <div class="DesignbyJeffLogo" />
//     </div>
//     <FullspectrumWrapper>
//       <MailandNumber>
//         <a href="mailto:fullspectrumnelson@gmail.com?subject=Full Spectrum Electric Project">
//           fullspectrumnelson@gmail.com
//         </a>
//       </MailandNumber>

//       <div class="SpecLogo" />
//     </FullspectrumWrapper>
//   </SpectrumLogoFooter>
// </div>;
