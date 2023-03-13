// ===========Typing-annimation================

var typedn = new Typed(".typing", {
    strings: ["Poster Designer", "Video Editor", "Software Developer", "Web designer","Poster Designer"],
    typeSpeed: 100,
    BackSpeed: 50,
    loop: true
}
)
var typednew = new Typed(".typing-new", {
    strings: ["Poster Designer", "Video Editor", "Software Developer", "Web designer",],
    typeSpeed: 100,
    BackSpeed: 40,
    loop: true
}

)


// ===========Scrool Reval================

ScrollReveal({
    reset:true,
    distance:'50px',
    duration:1000,
    delay:200
});
ScrollReveal().reveal('.home-info',{origin: 'bottom'});
ScrollReveal().reveal('.hello',{origin: 'left'});
ScrollReveal().reveal('.home-img',{origin: 'top'});
ScrollReveal().reveal('.container',{origin: 'bottom'});



// ===========Toggle-navbar================

let toggleBtn = document.querySelector('.navbar-toggle');
let sidebar = document.querySelector('.side-bar');

toggleBtn.addEventListener("click",()=>{
    sidebar.classList.toggle('active');
    toggleBtn.classList.toggle('navbar-toggle-btn');

})
