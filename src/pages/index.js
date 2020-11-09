import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={""}>
    <div className={""} style={{position:"relative",height:"90vh",}}>
      <h4 style={{top:"50%",position:"absolute",padding:"20px",backgroundColor:"#000",borderStyle:"none dotted none dotted",borderRadius:"20px",borderColor:"rgb(213, 213, 213)",borderWidth:"3px"}}><i>"With the passion to learn, overcome and adapt - anything is possible."</i></h4>
    </div><p className={"mouse"}></p>

    </div>
    <h1 style={{textAlign:"center",paddingTop:"10vh",}}>Filip G. H.</h1>
<br></br>

    <div style={{color:"lightgray",}}>
    <p style={{color:"lightgray",}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget elit vitae est ornare ultrices vel sit amet nulla. Curabitur ultrices posuere fringilla. Sed dignissim mauris ac diam sodales, in hendrerit nisi commodo.</p>
    
    <h2 style={{color:"#fff",marginBottom:"0.5em",}}>Expertise</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget elit vitae est ornare ultrices vel sit amet nulla. Curabitur ultrices posuere fringilla. Sed dignissim mauris ac diam sodales, in hendrerit nisi commodo.</p>

    <h2 style={{color:"#fff",marginBottom:"0.5em",}}>Experience & education</h2>
    <p>As a youngster it always important to stay ahead of the competition.</p>

    



    <div className={"container"}>
    <h4 style={{display:"flex",width:"50%",color:"#fff",margin:"0",}}>
      Graphic Design</h4>
      <div style={{  width:"75%", margin: "0 0 0 auto", right:0, display:"flex",}}>
        <div className={"Loading"}>
          <span data-charge='100' style={{width:"85%",}}></span>
        </div>
      </div>
    </div>	
    <br></br>
    <br></br>


    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    
    
    


    <script
  dangerouslySetInnerHTML={{
    __html: `
    console.log("load event detected!");
    function load() {
      console.log("load event detected!");
      var x = document.getElementsByClassName("mouse");
      setTimeout(function(){ 
        x[0].style.opacity = "1";
        x[0].style.color = "#f8f4e3";
        x[0].style.transition = "all 1s ease 0s";
      
      }, 250);
    };
    window.onload = load;

        `,
  }}/>


    



  </Layout>
)

export default IndexPage
