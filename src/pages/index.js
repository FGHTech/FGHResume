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

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget elit vitae est ornare ultrices vel sit amet nulla. Curabitur ultrices posuere fringilla. Sed dignissim mauris ac diam sodales, in hendrerit nisi commodo.</p>
    



    <h2 style={{color:"#fff",marginBottom:"0.5em",}}>Expertise</h2>
    <p>As a youngster it always important to stay ahead of the competition.</p>

    <div className={"container"}>
    <h4 style={{display:"flex",width:"50%",color:"#fff",margin:"0",}}>
      Forward thinking
      </h4>
      <div style={{  width:"75%", margin: "0 0 0 auto", right:0, display:"flex",}}>
        <div className={"Loading"}>
          <span data-charge='100' style={{width:"95%",}}></span>
        </div>
      </div>
    </div>	
    <br></br>

    <div className={"container"}>
    <h4 style={{display:"flex",width:"50%",color:"#fff",margin:"0",}}>
      Web development
      </h4>
      <div style={{  width:"75%", margin: "0 0 0 auto", right:0, display:"flex",}}>
        <div className={"Loading"}>
          <span data-charge='100' style={{width:"65%",}}></span>
        </div>
      </div>
    </div>	
    <br></br>

    <div className={"container"}>
    <h4 style={{display:"flex",width:"50%",color:"#fff",margin:"0",}}>
      Branding
      </h4>
      <div style={{  width:"75%", margin: "0 0 0 auto", right:0, display:"flex",}}>
        <div className={"Loading"}>
          <span data-charge='100' style={{width:"85%",}}></span>
        </div>
      </div>
    </div>	
    <br></br>

    <div className={"container"}>
    <h4 style={{display:"flex",width:"50%",color:"#fff",margin:"0",}}>
      Customer relations
      </h4>
      <div style={{  width:"75%", margin: "0 0 0 auto", right:0, display:"flex",}}>
        <div className={"Loading"}>
          <span data-charge='100' style={{width:"95%",}}></span>
        </div>
      </div>
    </div>	
    <br></br>

    <div className={"container"}>
    <h4 style={{display:"flex",width:"50%",color:"#fff",margin:"0",}}>
      Photo/video
      </h4>
      <div style={{  width:"75%", margin: "0 0 0 auto", right:0, display:"flex",}}>
        <div className={"Loading"}>
          <span data-charge='100' style={{width:"50%",}}></span>
        </div>
      </div>
    </div>	
    <br></br>

    <div className={"container"}>
    <h4 style={{display:"flex",width:"50%",color:"#fff",margin:"0",}}>
      Programming
      </h4>
      <div style={{  width:"75%", margin: "0 0 0 auto", right:0, display:"flex",}}>
        <div className={"Loading"}>
          <span data-charge='100' style={{width:"30%",}}></span>
        </div>
      </div>
    </div>	
    <br></br>
    <br></br>
    <br></br>







    <h2 style={{color:"#fff",marginBottom:"0.5em",}}>Experience & education</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget elit vitae est ornare ultrices vel sit amet nulla. Curabitur ultrices posuere fringilla. Sed dignissim mauris ac diam sodales, in hendrerit nisi commodo.</p>

    <details>
      <summary>2020 - today: <b>FGHTech AB</b></summary>
      <div class="faq__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor suscipit, iure tenetur eveniet, vero tempore delectus? Perferendis, quisquam ullam consequuntur?</p>
      </div>
  </details>

    <details>
    <summary>2019 - 2020: <b>FGHTech Sweden EF</b></summary>
    <div className={"faq__content"}>
      <p>Fugiat quo voluptas nulla pariatur? Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque. Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
    </div>
    </details>
    
    <details>
    <summary>2016 - 2020: <b>Täby Enskilda Gymnasium</b></summary>
    <div className={"faq__content"}>
      <p>Fugiat quo voluptas nulla pariatur? Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque. Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
    </div>
    </details>

    <details>
    <summary>2018 - 2019: <b>Arizona Exchange year</b></summary>
    <div className={"faq__content"}>
      <p>Fugiat quo voluptas nulla pariatur? Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque. Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
    </div>
    </details>

    <br></br>
    <br></br>




    <a href="https://fghtech.com/" className={"btn btn-white btn-animate"}>Learn about FGHTech</a>
    

    <br></br>
    <br></br>





    
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
