
"use strict";

window.onload = init;

function init() {
    toWork();
    applyRoundedImg();
    applyRoundedImg2();
    applyRoundedImg3();
}

function toWork() {
    let paraTag = document.getElementsByTagName("p");
    let pLength = paraTag.length;
    for (let i = 0; i < pLength; i++) {
        paraTag[i].style.border = "thin solid black";
    }
}

function applyRoundedImg() {
    let img = document.querySelectorAll("img:not(.alt)")
    img.forEach(setAlt => {
        setAlt.setAttribute("alt", "Attribute set");
        setAlt.className = "roundedImg";
    });
}

function applyRoundedImg2() {
    let img = document.getElementsByTagName("img");

    let imgarray = Array.from(img);

    for (let img of imgarray) {
        if (img.alt != undefined) {
            img.alt = "some value";
            img.className = "roundedImg";
        }
    }
}

function applyRoundedImg3() {
    let img = document.getElementsByTagName("img");

    Array.from(img).forEach((i) => {
        if (i.alt != undefined) {
            i.alt = "some value";
            i.className = "roundedImg";
        }
    });
}