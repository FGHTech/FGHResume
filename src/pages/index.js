import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import { withPrefix } from "gatsby"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
      <Helmet>
        <script src={withPrefix('rellax.min.js')} type="text/javascript" />
      </Helmet>
      <script> var rellax = new Rellax('.rellax'); </script>

    <SEO title="Home" />
    <div className={""}>
    <div className={""} style={{position:"relative",height:"80vh",}}>
      <h4 data-rellax-speed="10" className={"rellax"} style={{top:"50%",position:"absolute",padding:"20px",backgroundColor:"#000",borderStyle:"none none none dotted",borderRadius:"20px",borderColor:"rgb(213, 213, 213)",borderWidth:"3px"}}><i>"With the passion to learn, overcome and adapt - anything is possible."</i></h4>
    </div>
    </div>
    <h1 style={{textAlign:"center",paddingTop:"10vh",}}>Filip Gure Häggblom</h1>
<br></br>
    <p>Now go build something great.</p>
    <div className={"rellax"} style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>

  </Layout>
)

export default IndexPage
