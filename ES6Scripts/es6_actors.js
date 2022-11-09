
"use strict";

let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?", "What is Fred", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"]
    }
];

let hasID187 = academyMembers.find((ID) => ID.memID == "187" && console.log(ID.name));

console.log("---------------");

let hasBeenIn3Films = academyMembers.filter((f) => f.films.length >= 3);
hasBeenIn3Films.forEach((f) => console.log(f.name));

console.log("---------------");

let nameStartsWithBob = academyMembers.filter((n) => n.name.slice(0 , 3) == "Bob");
nameStartsWithBob.forEach((n) => console.log(n.name));

console.log("---------------");

let filmsStartWithA = academyMembers.filter((a) => a.films);
// filmsStartWithA.filter((a) => a.films)