// ==============================
// Rank Flow Digital Hubs
// ==============================

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 50){

header.style.background = "#07111d";
header.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";

}else{

header.style.background = "#08121fe6";
header.style.boxShadow = "none";

}

});


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


// Current Year

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML="© "+new Date().getFullYear()+" Rank Flow Digital Hubs. All Rights Reserved.";

}


console.log("Website Loaded Successfully");
