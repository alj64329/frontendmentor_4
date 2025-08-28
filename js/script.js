function toggleMenu(){
    const menu = document.querySelector(".hamburger-links")
    const icon = document.querySelector(".hamburger-icon")
    const image = document.querySelector(".close-open-icon")

    if(menu.classList.contains("open")){
        menu.classList.remove("open")
        image.src = "/images/icon-hamburger.svg"
    }else{
        menu.classList.add("open")
        image.src = "/images/icon-close.svg"
        image.style.zIndex = "50"
        image.style.position = "relative"

    }
}

