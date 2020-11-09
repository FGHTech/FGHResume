import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{margin:"auto 0",}}>
      <h4 style={{margin:"40vh 0",padding:"20px",backgroundColor:"#000",borderStyle:"none none none dotted",borderRadius:"20px",borderColor:"rgb(213, 213, 213)",borderWidth:"3px"}}><i>"With the passion to learn, overcome and adapt - anything is possible."</i></h4>
    </div>
    <h1 style={{textAlign:"center",paddingTop:"10vh",}}>Filip Gure Häggblom</h1>
<br></br>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
