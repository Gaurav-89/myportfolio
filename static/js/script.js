var anchorSelector = 'a[href^="#"]';
var anchorList = document.querySelectorAll(anchorSelector);
var dynamic_txt = document.querySelector(".dynamic-txt");
//var photo_section = document.querySelector(".photo-section");
var navbar_menubtn = document.querySelector("#navbar-menubtn");
var navbar_sidebar = document.querySelector("#navbar-sidebar");
var navbar_menubtn_click = false;

window.onload = () => {
  typeWriter();
}

var i = 0;
var txt = "Kaloliya Gaurav";
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    if (dynamic_txt != undefined) {
        dynamic_txt.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
  }
}

function backgroundChanger() {
    const colors = ["lightgrey", "lightblue", "lightpink"];
    var pickedColor = colors[Math.floor(Math.random() * colors.length)];
    photo_section.style.background = pickedColor;
}

anchorList.forEach(link => {
    link.onclick = function (e) {
        e.preventDefault();
        navbar_sidebar.classList.remove("active");
        let destination = document.querySelector(this.hash);
        destination.scrollIntoView({
            behavior: 'smooth'
        });
    }
});

navbar_menubtn.onclick = () => {
    if (navbar_menubtn_click == false) {
        navbar_sidebar.classList.add("active");
        navbar_menubtn_click = true;
    }
    else {
        navbar_sidebar.classList.remove("active");
        navbar_menubtn_click = false;
    }
}