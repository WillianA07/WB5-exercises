
"use strict";

let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",

    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];

let a1 = whenDoesPROG200CourseStart();
console.log(a1);

function whenDoesPROG200CourseStart () {
    let result;
    let theCourse = courses.find(prog200);
    return theCourse.StartDate;
}

function prog200(value) {
    return (value.CourseId == "PROG200");
}

let a2 = whatIsTheTitleOfPROG400();
console.log(a2);

function whatIsTheTitleOfPROG400() {
    let result;
    let theCourse = courses.find(proj500);
    return theCourse.Title;
}

function proj500(value) {
    return (value.CourseId == "PROJ500");
}

let a3 = whatCoursesAreUnder50();
console.log(a3);

function whatCoursesAreUnder50() {
    let result;
    let thecourses = courses.filter(under50);
    return thecourses;
}

function under50(value) {
    return (Number(value.Fee) <= 50);
}