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

const IndexPage = () => (
  <Layout>
    <SEO title="Jason Tan's Portfolio" />
    <About></About>
    <Skills></Skills>
    <Work></Work>
    <TimeLine></TimeLine>
    <Resume></Resume>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
