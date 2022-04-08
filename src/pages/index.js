import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Work from "../components/work"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/promotion"
import Footer from "../components/footer"
import TimeLine from "../components/timeline"
import Resume from "../components/resume"
import Navbar from '../components/navbar';
import Header from '../components/header';
import data from '../yourdata';

const IndexPage = () => (
  <Layout>
    <SEO title="Jason Tan's Portfolio" thumbnail={data.thumbnailImg} />
    <Navbar />
    <Header/>
    <About></About>
    <Skills></Skills>
    <Work></Work>
    <Resume></Resume>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
