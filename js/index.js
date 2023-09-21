const toggleMenu = document.querySelectorAll(".hamburgerMenu");
const close = document.querySelector(".close");
const hiddenMenu = document.querySelector(".hiddenMenu");
const navbar = document.querySelector(".navbar");
const items = document.querySelectorAll(".items");
const navbarHover = document.querySelector(".navbarHover");


toggleMenu[0].addEventListener("click", () => {
    toggleMenu[0].classList.add("isHidden");
    toggleMenu[1].classList.remove("isHidden");
    hiddenMenu.classList.add("transition");
})

close.addEventListener("click", () => {
    toggleMenu[0].classList.remove("isHidden");
    toggleMenu[1].classList.add("isHidden");
    hiddenMenu.classList.remove("transition");
})


for (let i = 0; i < items.length; i++) {

    if (i === 0) {
        items[i].addEventListener("click", () => {
            if (navbarHover.innerHTML === "") {
                navbarHover.innerHTML = '<div class="hoverItems"><li class="HoverItem"><a href="#discover">Discover Your Style</a></li><li class="HoverItem"><a href="">Design Your Space</a></li><li class="HoverItem"><a href="">Ideas and Inspiration</a></li><li class="HoverItem"><a href="">Hire Style Consultant</a></li></div>'
            } else {
                navbarHover.innerHTML = "";
            }
        })
    }
    else if (i === 1) {
        items[i].addEventListener("click", () => {
            if (navbarHover.innerHTML === "") {
            navbarHover.innerHTML = `<div class="hoverItems"><li class="HoverItem homeFurnishing">Home Furnishing</li><li class="HoverItem">Home Decor</li><li class="HoverItem"></li><li class="HoverItem"></li></div>`
            const homeFurnishing = document.querySelector(".homeFurnishing");
            homeFurnishing.addEventListener("click", ()=>{
                if (homeFurnishing.innerHTML === "Home Furnishing") {
                    homeFurnishing.innerHTML += `<div class="furnishing"><li class="HoverItem"><a href="./chairs.html">Chair</a></li><li class="HoverItem"><a href="">Coffee Table</a></li><li class="HoverItem"><a href="">Desk</a></li><li class="HoverItem"><a href="">Bed</a></li></div>`
                }
                else {
                    homeFurnishing.innerHTML = "Home Furnishing";   
                }
            })
            } else {
                navbarHover.innerHTML = "";
            }
        })
    }
    else if (i === 2) {
        items[i].addEventListener("click", () => {
            if (navbarHover.innerHTML === "") {
            navbarHover.innerHTML = '<div class="hoverItems"><li class="HoverItem">Theme Collection</li><li class="HoverItem">Ideas and Inspiration</li><li class="HoverItem"></li><li class="HoverItem"></li></div>'
            } else {
                navbarHover.innerHTML = "";
            }
        })
    }
    else if (i === 3) {
        items[i].addEventListener("click", () => {
            if (navbarHover.innerHTML === "") {
            navbarHover.innerHTML = '<div class="hoverItems"><li class="HoverItem"></li><li class="HoverItem"></li><li class="HoverItem"></li><li class="HoverItem"></li></div>'
            } else {
                navbarHover.innerHTML = "";
            }
        })
    }


}