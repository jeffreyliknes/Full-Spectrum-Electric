import React from "react";
import Layout from "../components/layout";
import PortfolioItems from "../components/PortfolioItems";
import PortfolioImage from '../components/portfolioImage';
import "../components/styles/siteInfoStyle.scss";
import styled from "styled-components";



const LineBreak = styled.div`
  width: 78%;
  height: 100px;
  border-top: 1px solid black;
  word-break: break-all;
  margin: 0 auto;
  margin-top: 5rem;
`;



export default ({ pageContext }) => (
  <Layout>
    <PortfolioImage />


    <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
    <LineBreak />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />

    <PortfolioItems />
  </Layout>
);
