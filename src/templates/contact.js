import React from "react";
import Layout from "../components/layout";
import "../components/styles/contentStyle.scss";
import styled from "styled-components";
import "../components/styles/mapLayout.scss";
import Fade from "react-reveal/Fade";
import "../components/styles/contactStyle.scss";
import Footer from "../components/footer";

const LineBreak = styled.div`
  width: 78%;
  height: 100px;
  border-top: 1px solid black;
  word-break: break-all;
  margin: 0 auto;
  margin-top: 5rem;
`;

const FeaturedImage = styled.img`
  max-width: 300px;
  margin: 16px 0;
  padding-top: 5rem;
  border-radius: 1px !important;
`;

const NewLayout = styled(Layout)`
  position: absolute;
  left: 0;
`;

const FeaturedLogo = styled.div`
  display: flex;
  justify-content: center;
  max-height: 250px;
`;

export default ({ pageContext, data }) => (
  <NewLayout className="map">
    <Fade bottom>
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
      <LineBreak />
    </Fade>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
      <FeaturedImage src={pageContext.featured_media.source_url} />
    <FeaturedLogo />

    <Footer />
  </NewLayout>
);
