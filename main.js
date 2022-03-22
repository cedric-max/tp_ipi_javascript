"use strict";

/* Variables */
const inputAdd = document.getElementById("toAdd");
const btnDeleteOne = document.getElementById("deleteOne");
const popup = document.getElementById("popup");
const popupEnd = document.getElementById("closePopup");
const toDelete = document.getElementById("toDelete");
const btnDelete = document.getElementById("btnDelete");

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
    console.log("list : "+course)
   for (let i  = 0; i <course.length; i++){
       if (course) {
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
    listCourse.innerHTML = '';
    let newItemList = inputAdd.value.toLowerCase().trim();
    course.push(newItemList)
    listItem();
}

/**
 * affiche la popoup de suppréssion d'element dans la liste
 */
btnDeleteOne.addEventListener("click", clickPopup)
popupEnd.addEventListener("click", killPopup)
btnDelete.addEventListener("click", deleteItem)

function clickPopup(event) {
    popup.classList.toggle("hide");
    console.log("clickPop "+course)

}function killPopup(event) {
    popup.classList.toggle("hide");
    console.log("killPop "+course)
}

/**
 * Spprime l'item par apport a son contenue
 */

function compareValue(i){
    if (i === toDelete.value){
        console.log(course.indexOf(i))
        course.splice(course.indexOf(i),"1")
        listCourse.innerHTML = '';
        listItem()
    }else{
        console.log("non")
    }
}

function deleteItem(){

    course.forEach(i => compareValue(i));
    popup.classList.toggle("hide");

    // for (let i  = 0; i <course.length; i++){
    //     if ( course[i] != toDelete.value) {
    //         console.log(course[i])
    //         console.log(course[i].indexOf(course[i]));
    //
    //     }else {
    //         // alert("le produit mentionée n'éxiste pas sur la liste de course")
    //         console.log("else")
    //     }
    //
    // }
}

/* Codes principales */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#form")
        .addEventListener("submit", addItemTab);
});

