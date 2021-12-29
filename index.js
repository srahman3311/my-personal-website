const documentObj = document.documentElement;
const windowWidth = window.innerWidth;
const navbar = document.querySelector(".navbar");
const navbarChildren = document.querySelectorAll(".nav-children");

// to cause the transformation of welcome section's children
window.addEventListener("load", () => {
    // navbar children transformation
    navbarChildren.forEach(child => {
        child.style.transform = "translateY(0%)";
    });
    // welcome texts transformation
    setTimeout(() => {
        const welcomeTexts = document.querySelectorAll(".welcome-header");
        welcomeTexts.forEach((text, index) => {
            // welcome text transformation
            if(index === 0) {
                text.style.transform = "translateY(0%)";
            }
            // welcome text transformation
            if(index === 1) {
                setTimeout(() => {
                    text.style.transform = "translateY(0%)";
                }, 1000);
            }
            // welcome description transformation
            if(index === 2) {
                setTimeout(() => {
                    text.style.transform = "translateY(0%)";
                }, 2000);
            }
        });
    }, 1500)
});

// window onscroll event handler
window.addEventListener("scroll", () => {
    console.log(window.innerWidth, window.innerHeight, documentObj.scrollTop);

    if(documentObj.scrollTop >= 100) {
        navbar.classList.add("nav-scroll-resize");
    } else {
        navbar.classList.remove("nav-scroll-resize");
    }

    // About Section Transformation
    const myImage = document.getElementById("my-image");
    const aboutText = document.querySelector(".about-text");

    if(windowWidth <= 1100) {

        if(documentObj.scrollTop >= 100 && documentObj.scrollTop < 2100) {
            myImage.style.transform = "translateX(0%)";
            aboutText.style.transform = "translateX(0%)";
        } else {
            myImage.style.transform = "translateX(-110%)";
            aboutText.style.transform = "translateX(105%)"
        }

    } else {
        if(documentObj.scrollTop >= 200 && documentObj.scrollLeft < 1500) {
            myImage.style.transform = "translateX(0%)";
            aboutText.style.transform = "translateX(0%)";
        }

        if(documentObj.scrollTop === 0 || documentObj.scrollTop > 1500) {
            myImage.style.transform = "translateX(-110%)";
            aboutText.style.transform = "translateX(105%)"
        }
    }

    // Service Section Transformation 
    const serviceCards = document.querySelectorAll(".service-card");

    if(documentObj.scrollTop < 1050 || documentObj.scrollTop > 1800) {
        serviceCards.forEach((card, index) => {
            if(index === 0 || index === 3) {
                card.style.transform = "translateX(-100%)";
            }

            if(index === 1) {
                card.style.transform = "translateY(-112%)";
            }

            if(index === 2 || index === 5) {
                card.style.transform = "translateX(100%)";
            }

            if(index === 4) {
                card.style.transform = "translateY(112%)";
            }
        })
    }

    if(documentObj.scrollTop > 1050) {
        serviceCards.forEach((card) => {
            card.style.transform = "translate(0%)";
        });
    }


    // Portfolio Section Transformation
    const portfolios = document.querySelectorAll(".portfolio-image");

    portfolios.forEach((portfolio, index) => {

        if(windowWidth <= 1100) {

            if(documentObj.scrollTop > 3000) portfolio.style.transform = "translate(0%)";

            if(documentObj.scrollTop < 3000) {
                if(index === 0) portfolio.style.transform = "translateX(-111%)";
                if(index === 1) portfolio.style.transform = "translateX(111%)";
                if(index === 2) portfolio.style.transform = "translateY(111%)";
                if(index === 3) portfolio.style.transform = "translateY(-111%)";
            }
            
        } else {
            if(documentObj.scrollTop > 1600) portfolio.style.transform = "translate(0%)";

            if(documentObj.scrollTop < 1600) {
                if(index === 0) portfolio.style.transform = "translateX(-111%)";
                if(index === 1) portfolio.style.transform = "translateX(111%)";
                if(index === 2) portfolio.style.transform = "translateY(111%)";
                if(index === 3) portfolio.style.transform = "translateY(-111%)";
            }
        }

    });
    
});













// to hide and show menu-bar and close button on window resize event
const menuBar = document.getElementById("menu-bar");
const closeButton = document.getElementById("close-navbar-routes");
const navbarRoutes = document.querySelector(".navbar-routes");

// window resize event listener
window.onresize = function() {
    if(window.innerWidth > 1100) {
        menuBar.style.display = "none";
        closeButton.style.display = "none";
        navbar.classList.remove("nav-scroll-resize");
    } else {
       
        if(navbarRoutes.classList.contains("navbar-routes-responsive")) {
            menuBar.style.display = "none";
            closeButton.style.display="block";
        } else {
            menuBar.style.display = "block";
        }

        navbar.classList.add("nav-scroll-resize");
    }
};
// menu bar click event listener
menuBar.addEventListener("click", () => {
    menuBar.style.display = "none";
    closeButton.style.display = "block";
    navbarRoutes.classList.add("navbar-routes-responsive");
});
// close button click event listener
closeButton.addEventListener("click", () => {
    menuBar.style.display = "block";
    closeButton.style.display = "none";
    navbarRoutes.classList.remove("navbar-routes-responsive");
});



const fullscreenIcons = document.querySelectorAll(".img-fullscreen");
const portfolioImages = document.querySelectorAll(".portfolio-image");
const modalImages = document.querySelectorAll(".image-modal");
const modalCloseButtons = document.querySelectorAll(".mod-img-close");
const portfolioImageTexts = document.querySelectorAll(".portfolio-image-text");


portfolioImages.forEach(image => {
    // Mouseover Event Listener
    image.addEventListener("mouseover", event => {

        const eventImageId = event.target.id;
        const _id = Number(eventImageId.substring(eventImageId.length - 1, eventImageId.length));

        fullscreenIcons[_id - 1].style.transform = "translateX(0%)";
        portfolioImageTexts[_id - 1].style.transform = "translateX(0%)";
    });
    // Mouseout Event Listener
    image.addEventListener("mouseout", event => {
        
        const eventImageId = event.target.id;
        const _id = Number(eventImageId.substring(eventImageId.length - 1, eventImageId.length));

        fullscreenIcons[_id - 1].style.transform = "translateX(100%)";
        portfolioImageTexts[_id - 1].style.transform = "translateX(-100%)";
    });
});

// Display image in fullscreen on click event of fullscreen icon
fullscreenIcons.forEach(icon => {
    
    icon.addEventListener("click", event => {

        const eventIconId = event.target.id;
        const _id = Number(eventIconId.substring(eventIconId.length - 1, eventIconId.length));

        modalImages[_id - 1].style.display = "block";
        modalCloseButtons[_id - 1].style.display = "block";

    });
});

// Hide image being viewed in fullscreen on click event of close button
modalCloseButtons.forEach(button => {

    button.addEventListener("click", event => {

        const eventButtonId = event.target.id;
        const _id = Number(eventButtonId.substring(eventButtonId.length - 1, eventButtonId.length));

        modalImages[_id - 1].style.display = "none";
        modalCloseButtons[_id - 1].style.display = "none";
    });
});











