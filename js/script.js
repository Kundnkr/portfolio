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
ScrollReveal().reveal('.hello',{origin: 'right'});
ScrollReveal().reveal('.my-profession',{origin: 'right'});
ScrollReveal().reveal('.home-info p',{origin: 'right'});
ScrollReveal().reveal('.container-1',{origin: 'right'});
// ScrollReveal().reveal('.about-text h3',{origin: 'top'});
ScrollReveal().reveal('.container-0',{origin: 'right'});
ScrollReveal().reveal('.container-2',{origin: 'right'});
ScrollReveal().reveal('.container-3',{origin: 'right'});



// ===========Toggle-navbar================

// let toggleBtn = document.querySelector('.navbar-toggle');
// let sidebar = document.querySelector('.side-bar');

// toggleBtn.addEventListener("click",()=>{
//     sidebar.classList.toggle('active');
//     toggleBtn.classList.toggle('navbar-toggle-btn');

// })


// ==============Active button ====================
let headingBtn = document.querySelectorAll('.side-bar-item a');
let headingBtn1 = document.querySelectorAll('.nav-bar-item a');
let progress = document.getElementById('progress-in');
$(document).ready(
    headingBtn.forEach(link=>{
        link.addEventListener('click',(e)=>{
            headingBtn.forEach(links =>{
                links.classList.remove('active');
            })
            link.setAttribute('class', 'active');
            
        })
    }),
    headingBtn1.forEach(link=>{
        link.addEventListener('click',(e)=>{
            headingBtn1.forEach(links =>{
                links.classList.remove('active');
            })
            link.setAttribute('class', 'active');
            
        })
    }),
)



// =================Send Email Start===============

function sendEmail(e){
    e.preventDefault();
    let tempParams = {
        from_name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    // (serviceId,templetId, object_name) -- structure for service
    emailjs.send('service_pdm238u','template_u3pp4i8',tempParams).then((res)=>{
        let name = document.getElementById('name').value;
        alert("Thankyou for feedback "+name);
        let contactForm = document.getElementById('contact-form');
        contactForm.reset();
    }, function(err){
        console.log("error code: " + err);
    });
}

// =================Send Email End===============



// =================Visiter Count===============
// =================Visiter Count===============

