let burgers = document.querySelector(".allBurgers");
const nav = document.querySelector("ol");

burgers.addEventListener("mouseover", function(){
    
    nav.style.display= "block";
})

burgers.addEventListener("mouseout", function(){
    nav.style.display= "none";
    
})