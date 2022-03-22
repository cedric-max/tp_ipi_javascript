"use strict";

/* Variables */
const inputAdd = document.getElementById("toAdd");
const btnDeleteOne = document.getElementById("deleteOne");
const listCourse = document.querySelector(".list");
let li = document.createElement('li');

let course = [
    'Blue',
    'Red',
    'White',
    'Green',
    'Black',
    'Orange'
];

/* Fonctions */

/**
 * Liste les items de la liste de courses
 */
function listItem() {
   for (let i  = 0; i <course.length; i++){
       if (course) {
           console.log(course[i])
       }
       listCourse.innerHTML += `<li>${course[i]}</li>`;
   }
}
listItem();

/**
 * Event listenner du bouton ajouter
 * @param event
 */
function addItemTab(event) {
    event.preventDefault();
    course = [];
    let newItemList = inputAdd.value.toLowerCase().trim();
    course.push(newItemList)
    listItem();
}

/**
 * Spprime l'item par apport a son contenue
 */

function deleteItem(){

}

/* Codes principales */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#form")
        .addEventListener("submit", addItemTab);
});

