let ham = document.querySelector(".hamburger");
let ulLinks = document.querySelector(".links");
ulLinks.style.right = "-100%"

ham.addEventListener("click", ()=>{
    if (ulLinks.style.right == "-100%") {
        ulLinks.style.right = "0%";
        ham.innerHTML = `<i class="fa-solid fa-x"></i>`
    } else {
        ulLinks.style.right = "-100%"
        ham.innerHTML = `<i class="fa-solid fa-grip-lines"></i>`
    }
})