
"use strict";

let imageFiles = [
    {
        name: "images/cheetah.webp",
        description: "Cheetah"
    },
    {
        name: "images/lion.jpeg",
        description: "Lion"
    },
    {
        name: "images/panther.jpeg",
        description: "Panther"
    },
    {
        name: "images/wildDogs.jpeg",
        description: "Wild Dogs"
    },
    {
        name: "images/wolverine.webp",
        description: "Wolverine"
    }
];

window.onload = init;

function init() {
    addOptionsToDropdown();
    document.getElementById("showImgBtn").onclick = addImg;
    document.getElementById("resetBtn").onclick = resetImgs;
}

function addOptionsToDropdown() {
    const dropDown = document.getElementById("dropDown");
    dropDown.length = 0;
    dropDown.className = "form-control";

    let defaultOpt = document.createElement("option");
    defaultOpt.value = "";
    defaultOpt.text = "Select an image";
    dropDown.appendChild(defaultOpt);

    for(let d of imageFiles) {
        let options = document.createElement("option");
        options.text = d.description;
        dropDown.appendChild(options);
    }
}

function addImg() {
    let dropDownValue = document.getElementById("dropDown");
    const whereImgGoes = document.getElementById("divForImgs");
    whereImgGoes.className = "row";

    for (let x of imageFiles) {
        if (dropDownValue.value == x.description) {
            let divForImgs = document.createElement("div");
            divForImgs.className = "card col-2";
            divForImgs.style.border = "none";
            whereImgGoes.appendChild(divForImgs);

            let showImg = document.createElement("img");
            showImg.src = x.name;
            showImg.className = "setSizeForImgs";
            divForImgs.appendChild(showImg);
        }
    }
}

function resetImgs() {
    document.getElementById("divForImgs").textContent = "";
    document.getElementById("dropDown").value = "";
}
