//todo THE NAV BAR IS STILL VISIBLE
let ham = document.querySelector(".hamburger");
let ulLinks = document.querySelector(".links");
ulLinks.style.right = "-100%";
ulLinks.style.display = "none";

ham.addEventListener("click", ()=>{
    if (ulLinks.style.right == "-100%") {
        ulLinks.style.right = "0%";
        ham.innerHTML = `<i class="fa-solid fa-x"></i>`
    } else {
        ulLinks.style.right = "-100%"
        ham.innerHTML = `<i class="fa-solid fa-grip-lines"></i>`
    }
})

let watchVidBtns = document.querySelectorAll(".watchVid");
let myMod = document.querySelectorAll(".mod");
let btnClose = document.querySelectorAll(".closeMod");

let myBod = document.body;

let yt = document.querySelector(".ytVidFrame");
let ytSrc = yt.src

// opening our mod
const open = (param) => {
    param.classList.remove("d-none");
    myBod.classList.add("body");
    yt.src += "?autoplay=1";
}

// closing our mod
const close = (param) => {
    param.classList.add("d-none");
    myBod.classList.remove("body");
    yt.src = ytSrc
}

// loop through all buttons that have openmod
for (let index = 0; index < watchVidBtns.length; index++) {
    // take the current button
    let currentwatchVidBtns = watchVidBtns[index];

    // take the id of the current button
    let idCurrentwatchVidBtns = currentwatchVidBtns.getAttribute("id");

    for (let idx = 0; idx < myMod.length; idx++) {
        // take the current div
        let currentDiv = myMod[idx]

        // take the id of the current div
        let idCurrentDiv = currentDiv.getAttribute("id");

        // to ensure we show the content of the same button we clicked
        if (idCurrentwatchVidBtns == idCurrentDiv) {
            currentwatchVidBtns.addEventListener("click", open.bind(null, currentDiv))
        }

        for (let i = 0; i < btnClose.length; i++) {
            // take the current Close button
            let currentBtnClose = btnClose[i];

            // take the id of the current close button
            let idCurrentBtnClose = currentBtnClose.getAttribute("id");

            // if we click the closing button of the same mod then exit from it
            if (idCurrentBtnClose == idCurrentDiv) {
                currentBtnClose.addEventListener("click", close.bind(null, currentDiv))
            }
        }
    }
}

// GALLERY CAROUSEL
// ALL MY IMAGES
const slider = document.querySelector(".slider");

// just a placeholder for later use
let sectionIndex = 0;
// how many slides I have
let numberOfSlide = 12;

// my circly thingies
let li_circles = document.querySelectorAll(".slider-controls li");

// go through each of my circle indicators
li_circles.forEach(function (indicator, ind) {
    // if one of them is clicked then execute the function
    indicator.addEventListener('click', function () {

        // ind is the index of the currently cliccked li circle
        sectionIndex = ind+2;
        // choose the currently selected circle and remove the class selected from it
        document.querySelector('.slider-controls .selected').classList.remove('selected');
        // add it to the circle we just clicked
        indicator.classList.add('selected');
        // simple terms: move to the corresponding carousel item
        slider.style.transform = 'translate(' + (sectionIndex) * -100 / numberOfSlide + '%)';
    });
});

