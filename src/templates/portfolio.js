import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
// import { graphql } from "gatsby";
import ElectricalBoard from "../components/electricalBoard";
import "../components/styles/portfolioImage.scss";
import Logo from "../components/logo";
import Footer from "../components/footer";
import "../components/styles/portfolioStyle.scss";
import Zoom from "react-reveal/Zoom";

const FeaturedImage = styled.img`
  max-width: 50%;
  object-fit: cover;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageRows = styled.div`
  left: 0;
  position: relative;
  background-color: white;
  padding: 2rem 0rem 2rem 3rem;
  margin-left: calc(-40vw - 3rem);
  margin-top: 15rem;
  z-index: 10;
  @media only screen and (max-width: 750px) {
    margin-left: 0;
    padding-left: 0rem;
  }
`;

const PortfolioGrid = styled.div`
  display: flex;
`;

const ServiceInfo = styled.div`
  color: green;
  font-size: 1.5rem;
`;

const LineBreak = styled.div`
  width: 78%;
  height: 100px;
  border-top: 1px solid black;
  word-break: break-all;
  margin: 0 auto;
  margin-top: 5rem;
`;

export default ({ data, pageContext }) => (
  <Layout>
    <Logo className="portfolioLogo" />
    <Zoom>
      <h1>{pageContext.title}</h1>
    </Zoom>
    <LineBreak />
    <ElectricalBoard />

    <ImageWrapper>
      {/* <a
        href={pageContext.acf.portfolio_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {pageContext.acf.portfolio_url}
      </a> */}
      <ServiceInfo>
        We guarantee that your electrical job will be completed with the utmost
        quality and timeliness. We don’t stop there, Full Spectrum offers very
        competitive pricing. Full Spectrum will in most cases give you a
        detailed price on the spot at no cost or obligation. For more
        information about Full Spectrum and the services offered contact us.
      </ServiceInfo>
      <FeaturedImage src={pageContext.featured_media.source_url} />
    </ImageWrapper>
    <ImageRows>
      <PortfolioGrid
        dangerouslySetInnerHTML={{ __html: pageContext.content }}
      />
    </ImageRows>
    <Footer />
  </Layout>
);
