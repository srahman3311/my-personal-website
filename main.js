// Global Variables
const documentObj = document.documentElement;
console.log(window.innerWidth);
// Welcome Section
const navbar = document.querySelector(".navbar");
const navbarRoutes = document.querySelector(".navbar-routes");
const menuBar = document.getElementById("menu-bar");
const welcomeHeader = document.getElementById("text-welcome");
const nameHeader = document.getElementById("text-name");
const descriptionHeader = document.getElementById("text-description");

window.addEventListener("load", () => {
  // Navbar Text Animation
  const navbarBrandText = document.getElementById("brand");
  const navbarBrandTextContent = navbarBrandText.textContent;
  // creating an array with the text content of navbar brand
  const splitNavbarBrandText = navbarBrandTextContent.split("");
  // each alphabet needs to be placed inside a span tag so textContent needs to be empty 
  navbarBrandText.textContent = "";
  // inserting span tag for each individual alphabet
  for(let i = 0; i < splitNavbarBrandText.length; i++) {
    navbarBrandText.innerHTML += "<span class=animate-span>" + splitNavbarBrandText[i] + "</span>";
  }

  let char = 0;
  let timer = setInterval(animateNavBrand, 50);

  function animateNavBrand() {
    let span = navbarBrandText.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;

    if(char === splitNavbarBrandText.length) {
      // ending the animation by calling complete function defined below
      complete();
      return;
    }
  }

  function complete() {
    clearInterval(timer);
    timer = null;
  }



  navbar.style.transform = "translateY(0%)";
  navbarRoutes.style.transform = "translateY(0%)";

  setTimeout(() => {
    welcomeHeader.style.transform = "translateY(0%)";
  }, 2000);

  setTimeout(() => {
    nameHeader.style.transform = "translateY(0%)";
  }, 3000);

  setTimeout(() => {
    descriptionHeader.style.transform = "translateY(0%)";
  }, 4000);
});





/*
const service = document.getElementById("services");

if(service.scrollIntoView) {
  console.log("hello");
}


//Responsive Navbar Rendering 
const welcomeSection = document.getElementById("welcome");
const navbar = document.querySelector(".navbar");
const menuBar = document.getElementById("menu-bar");
const navbarRoutes = document.querySelector(".navbar-routes");

// if(window.innerWidth <= 600) {
//   welcomeSection.classList.add("welcome-mobile");
// }

menuBar.addEventListener("click", () => {

  if(navbar.className === "navbar") {
    navbar.className += " nav-on-scroll"
  } else {
    navbar.className = "navbar";
  }

  navbarRoutes.classList.toggle("display-navbar-routes");
  // navbar.classList.toggle("nav-on-scroll");
  //welcomeSection.classList.toggle("welcome-mobile");

  // if(navbarRoutes.className === "navbar-routes") {
  //   navbarRoutes.className += " display-navbar-routes";
  // } else {
  //   navbarRoutes.className = "navbar-routes"
  // }
  
});





const documentObj = document.documentElement;

// Navbar Position Fixed On Scroll

window.addEventListener("scroll", () => {
  if(documentObj.scrollTop >= 100) {
    navbar.classList.add("nav-on-scroll");
  } else {
    navbar.classList.remove("nav-on-scroll");
  }
});




// welcome & navbar text transformation
const welcomeHeader = document.getElementById("text-welcome");
const nameHeader = document.getElementById("text-name");
const descriptionHeader = document.getElementById("text-description");
//const navbarRoutes = document.querySelector(".navbar-routes");
window.addEventListener("load", () => {

  navbar.style.transform = "translateY(0%)";
  navbarRoutes.style.transform = "translateY(0%)";

  setTimeout(() => {
    welcomeHeader.style.transform = "translateY(0%)";
  }, 2000);

  setTimeout(() => {
    nameHeader.style.transform = "translateY(0%)";
  }, 3000);

  setTimeout(() => {
    descriptionHeader.style.transform = "translateY(0%)";
  }, 4000);
});



// Navbar Text Animation
let navbarBrandText = document.getElementById("brand");
const navbarBrandTextContent = navbarBrandText.textContent;
const splitNavbarBrandText = navbarBrandTextContent.split("");
navbarBrandText.textContent = "";

for(let i = 0; i < splitNavbarBrandText.length; i++) {
  navbarBrandText.innerHTML += "<span class=animate-span>" + splitNavbarBrandText[i] + "</span>";
}


let char = 0;
let timer = setInterval(animateNavBrand, 50);

function animateNavBrand() {
  let span = navbarBrandText.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;

  if(char === splitNavbarBrandText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}





// About Section Animation
const myImage = document.getElementById("my-image");
const aboutText = document.querySelector(".about-text");
const portFolioImageDiv1 = document.querySelector("#port-img1");
const portFolioImageDiv2 = document.querySelector("#port-img2");
const portFolioImageDiv3 = document.querySelector("#port-img3");
const portFolioImageDiv4 = document.querySelector("#port-img4");

window.addEventListener("scroll", () => {
  if(documentObj.scrollTop > 350) {
    myImage.style.transform = "translateX(0%)";
    aboutText.style.transform = "translateX(0%)";
  }

  if(documentObj.scrollTop === 0 || documentObj.scrollTop > 1500) {
    myImage.style.transform = "translateX(-110%)";
    aboutText.style.transform = "translateX(105%)";
    // portFolioImageDiv1.style.transform = "translateX(0%)";
    // portFolioImageDiv2.style.transform = "translateX(0%)";
    // portFolioImageDiv3.style.transform = "translateY(0%)";
    // portFolioImageDiv4.style.transform = "translateY(0%)";
  }


  if(documentObj.scrollTop > 2100) {
    portFolioImageDiv1.style.transform = "translateX(0%)";
    portFolioImageDiv2.style.transform = "translateX(0%)";
  }

  if(documentObj.scrollTop > 2700) {
    portFolioImageDiv3.style.transform = "translateY(0%)";
    portFolioImageDiv4.style.transform = "translateY(0%)";
  }

  if(documentObj.scrollTop > 3700 || documentObj.scrollTop < 1900) {
    portFolioImageDiv1.style.transform = "translateX(-110%)";
    portFolioImageDiv2.style.transform = "translateX(110%)";
    portFolioImageDiv3.style.transform = "translateY(111%)";
    portFolioImageDiv4.style.transform = "translateY(-111%)";
  }

});







// Portfolio Image Text Appearing On Hover



const portFolioImageText1 = document.querySelector("#port-img-txt1");
const portFolioImageText2 = document.querySelector("#port-img-txt2");
const portFolioImageText3 = document.querySelector("#port-img-txt3");
const portFolioImageText4 = document.querySelector("#port-img-txt4");

const fullscreenIcon1 = document.querySelector("#fullscreen-icon1");
const fullscreenIcon2 = document.querySelector("#fullscreen-icon2");
const fullscreenIcon3 = document.querySelector("#fullscreen-icon3");
const fullscreenIcon4 = document.querySelector("#fullscreen-icon4");

const modalImage1 = document.getElementById("mod-img1");
const modalImageCloseButton1 = document.getElementById("mod-img-cls1");

// Image 1
portFolioImageDiv1.addEventListener("mouseover", (e) => {
  portFolioImageText1.style.transform = "translateX(0%)";
  fullscreenIcon1.style.transform = "translateX(0%)";
});

portFolioImageDiv1.addEventListener("mouseout", (e) => {
  portFolioImageText1.style.transform = "translateX(-100%)";
  fullscreenIcon1.style.transform = "translateX(100%)";
});

fullscreenIcon1.addEventListener("click", () => {
  modalImage1.style.display = "block";
});

modalImageCloseButton1.addEventListener("click", () => {
  modalImage1.style.display = "none";
});


// Image 2
portFolioImageDiv2.addEventListener("mouseover", (e) => {
  portFolioImageText2.style.transform = "translateX(0%)";
  fullscreenIcon2.style.transform = "translateX(0%)";
});

portFolioImageDiv2.addEventListener("mouseout", (e) => {
  portFolioImageText2.style.transform = "translateX(-100%)";
  fullscreenIcon2.style.transform = "translateX(100%)";
});


// Image 3
portFolioImageDiv3.addEventListener("mouseover", (e) => {
  portFolioImageText3.style.transform = "translateX(0%)";
  fullscreenIcon3.style.transform = "translateX(0%)";
});

portFolioImageDiv3.addEventListener("mouseout", (e) => {
  portFolioImageText3.style.transform = "translateX(-100%)";
  fullscreenIcon3.style.transform = "translateX(100%)";
});


// Image 4
portFolioImageDiv4.addEventListener("mouseover", (e) => {
  portFolioImageText4.style.transform = "translateX(0%)";
  fullscreenIcon4.style.transform = "translateX(0%)";
});

portFolioImageDiv4.addEventListener("mouseout", (e) => {
  portFolioImageText4.style.transform = "translateX(-100%)";
  fullscreenIcon4.style.transform = "translateX(100%)";
});













//Services 

const cards = document.querySelectorAll(".service-card");

cards.forEach(card => {
  window.addEventListener("scroll", () => {
    if(documentObj.scrollTop > 1100) {
      if(card.id === "service-card2" || card.id === "service-card5") card.style.transform = "translateY(0%)";
      card.style.transform = "translateX(0%)";
    }
  });
});




const testimonials = document.querySelectorAll(".testimonial-image");

window.addEventListener("scroll", () => {

  if(documentObj.scrollTop > 3000) {
    testimonials.forEach(testimonial => {
      testimonial.classList.add("testimonial-animate");
    });
  } else {
    testimonial.className = "testimonial-image";
  }
  
});

// window.addEventListener("scroll", () => {
//   console.log(documentObj.scrollTop);

//   testimonials.forEach(testimonial => {
//     if(documentObj.scrollTop > 2700) {
//       testimonial.classList.add("testimonial-animate");
//     } else {
//       testimonial.className = "testimonial-container";
//     }
//   });
  
// });

*/