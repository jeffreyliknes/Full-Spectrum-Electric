import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo";
import ReactGA from 'react-ga';

const Home = () => (
  <Layout>
    <SEO />
    <h1>Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default Home