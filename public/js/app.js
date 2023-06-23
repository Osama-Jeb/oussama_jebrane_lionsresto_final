//TODO add comments about this later
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);
menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)




let btnOpen = document.querySelectorAll(".btnOpen");
let myMod = document.querySelectorAll(".mod");
let btnClose = document.querySelectorAll(".closeMod");

let myBod = document.body;

let yt = document.querySelectorAll(".ytVidFrame");

// opening our mod
const openVid = (param, ytvid) => {
    param.classList.remove("d-none");
    myBod.classList.add("body");
    ytvid.src += "?autoplay=1";
}
// closing our mod
const closeVid = (param, ytvid) => {
    param.classList.add("d-none");
    myBod.classList.remove("body");
    ytvid.src = ytvid.src.slice(0, -11);
}


// loop through all buttons that have openmod
for (let index = 0; index < btnOpen.length; index++) {
    // take the current button
    let currentbtnOpen = btnOpen[index];

    // take the id of the current button
    let idCurrentbtnOpen = currentbtnOpen.getAttribute("id");

    for (let idx = 0; idx < myMod.length; idx++) {
        // take the current div
        let currentMod = myMod[idx]

        // take the id of the current div
        let idcurrentMod = currentMod.getAttribute("id");

        // to ensure we show the content of the same button we clicked
        if (idCurrentbtnOpen == idcurrentMod) {
            // ! added for vid
            for (let i = 0; i < yt.length; i++) {
                let vid = yt[i];
                let idVid = vid.id;
                if (idcurrentMod == idVid) {
                    currentbtnOpen.addEventListener("click", () => {
                        openVid(currentMod, vid);
                    })
                }

                for (let i = 0; i < btnClose.length; i++) {
                    // take the current Close button
                    let currentBtnClose = btnClose[i];

                    // take the id of the current close button
                    let idCurrentBtnClose = currentBtnClose.getAttribute("id");

                    // if we click the closing button of the same mod then exit from it
                    if (idCurrentBtnClose == idcurrentMod && idcurrentMod == idVid) {
                        currentBtnClose.addEventListener("click", () => {
                            closeVid(currentMod, vid)
                        })
                    }
                }
            }
        }

    }
}

//* GALLERY CAROUSEL
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
        sectionIndex = ind + 2;
        // choose the currently selected circle and remove the class selected from it
        document.querySelector('.slider-controls .selected').classList.remove('selected');
        // add it to the circle we just clicked
        indicator.classList.add('selected');
        // simple terms: move to the corresponding carousel item
        slider.style.transform = 'translate(' + (sectionIndex) * -100 / numberOfSlide + '%)';
    });
});

// Hahaha it worked XD
window.onload = function () {
    li_circles[0].click();
    li_circles2[0].click();
}

//* EVENTS CAROUSEL
//// SAME AS THE ONE ABOVE. 

let slider2 = document.querySelector(".slider2");
let sectionIndex2 = 0;
let numberOfSlide2 = 7;
let li_circles2 = document.querySelectorAll(".slider-controls2 li");
li_circles2.forEach(function (indicator2, ind) {
    // if one of them is clicked then execute the function
    indicator2.addEventListener('click', function () {

        // ind is the index of the currently cliccked li circle
        sectionIndex2 = ind + 2;
        // choose the currently selected circle and remove the class selected from it
        document.querySelector('.slider-controls2 .selected2').classList.remove('selected2');
        // add it to the circle we just clicked
        indicator2.classList.add('selected2');
        // simple terms: move to the corresponding carousel item
        slider2.style.transform = 'translate(' + (sectionIndex2) * -100 / numberOfSlide2 + '%)';
    });
});


let openCnx = document.querySelectorAll(".openCnx");
let cnxMod = document.querySelectorAll(".cnxMod");
let closeCnx = document.querySelectorAll(".closeCnx");
const open = (param) => {
    param.classList.remove("d-none");
}
const close = (param) => {
    param.classList.add("d-none");
}
for (let index = 0; index < openCnx.length; index++) {
    let currentopenCnx = openCnx[index];
    let idCurrentopenCnx = currentopenCnx.getAttribute("id");

    for (let idx = 0; idx < cnxMod.length; idx++) {
        let currentDiv = cnxMod[idx]
        let idCurrentDiv = currentDiv.getAttribute("id");
        if (idCurrentopenCnx == idCurrentDiv) {
            currentopenCnx.addEventListener("click", open.bind(null, currentDiv))
        }

        for (let i = 0; i < closeCnx.length; i++) {
            let currentcloseCnx = closeCnx[i];
            let idCurrentcloseCnx = currentcloseCnx.getAttribute("id");
            if (idCurrentcloseCnx == idCurrentDiv) {
                currentcloseCnx.addEventListener("click", close.bind(null, currentDiv))
            }
        }
    }
}

//******
let signName = document.querySelector("#signName");
let signEmail = document.querySelector("#signEmail");
let signPassword = document.querySelector("#signPassword");
let signConfirm = document.querySelector("#signConfirmPw");
let submit = document.querySelector("#inputSign");
let showPass = document.querySelector("#signShow");

let signMod = document.querySelector(".signUp")

class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password
    }
}

let myUsers = [];

const register = () => {
    let userName = signName.value;
    let userEmail;
    let userPassword;
    let valid = 0;

    if (signEmail.value.includes("@")) {
        if (myUsers.length == 0) {
            userEmail = signEmail.value;
            valid++;
        } else {
            for (let index = 0; index < myUsers.length; index++) {
                let element = myUsers[index];
                if (element.email == signEmail.value) {
                    alert("This Email Already Exists");
                } else {
                    userEmail = signEmail.value;
                    valid++;
                }
            }
        }

    } else {
        signEmail.placeholder = "Not a valid email";
        signEmail.value = "";
        signEmail.style.border = "2px solid red";
    }

    if (signPassword.value != signConfirm.value || signPassword.value == "") {
        signPassword.value = "";
        signConfirm.placeholder = "Not a valid password";
        signConfirm.value = "";
        signConfirm.style.border = "2px solid red";
    } else {
        userPassword = signPassword.value;
        valid++;
    }

    if (valid == 2) {
        let person = new User(userName, userEmail, userPassword);
        myUsers.push(person);
        close(signMod);
    }
    console.log(myUsers);
}


submit.addEventListener("click", register);


const signShow = () => {
    if (signPassword.type == "password") {
        signPassword.setAttribute("type", "text");
        signConfirm.setAttribute("type", "text");
    } else {
        signPassword.setAttribute("type", "password");
        signConfirm.setAttribute("type", "password");
    }
}


showPass.addEventListener("click", signShow);


//++++++++++++++++++++++++
let logEmail = document.querySelector("#logEmail");
let logPass = document.querySelector("#logPassword");
let signIn = document.querySelector("#inputLog");
let logshow = document.querySelector("#logShow");

let logMod = document.querySelectorAll(".signed");



const logIn = () => {
    if (myUsers.length == 0) {
        alert("There is no Accounts yet!!");
    } else {
        for (let index = 0; index < myUsers.length; index++) {
            let usr = myUsers[index];
            if (usr.email != logEmail.value) {
                alert("This Account Does not Exist");
            } else {
                if (usr.password != logPass.value) {
                    alert("Wrong Password");
                } else {
                    alert("LOGGED IN");

                    logMod.forEach(element => {
                        close(element);
                    });

                    disco.classList.remove("d-none");
                }
            }
        }
    }
}


// event for logging in 
signIn.addEventListener("click", logIn);

const logShow = () => {
    if (logPass.type == "password") {
        logPass.setAttribute("type", "text");
    } else {
        logPass.setAttribute("type", "password");
    }
}
logshow.addEventListener("click", logShow);

//+++++++++++++++++++++++++++++++++++++++++++++++++++
let disco = document.querySelector("#disco");
let discoBtn = document.querySelector("#discoBtn");

const logOut = () => {
    disco.classList.add("d-none");
    logMod.forEach(element => {
        open(element);
    });
}

discoBtn.addEventListener("click", logOut);