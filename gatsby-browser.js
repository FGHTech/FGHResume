/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

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