import React from "react";
import Layout from "../components/layout";
import "../components/styles/contentStyle.scss";
import "../components/styles/logoStyle.scss";
import BackgroundImage from "../components/homeImage";
import styled from "styled-components";
import SiteInfo from "../components/siteInfo";
import Icons from "../components/icons";

const LineBreak = styled.div`
  width: 78%;
  height: 100px;
  border-top: 1px solid black;
  word-break: break-all;
  margin: 0 auto;
  margin-top: 5rem;
`;

export default ({ pageContext, data }) => (
  <Layout>
    <SiteInfo />
    <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
    <LineBreak />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />

    <BackgroundImage />
    <div>
      <Icons />
    </div>
  </Layout>
);
