
let searchBar = document.querySelector("#search-bar")
let submitButton = document.querySelector("#submit-button")
let taskContainer = document.querySelector(".task-container")
let checkBtn = document.querySelector(".bx-check")
let inputValue = ""


//function creation part

let createELEMENT = function (inputValue) {
    let ulContainer = taskContainer.querySelector("ul")
    let newContainer = document.createElement("li")

    newContainer.innerHTML = inputValue
    ulContainer.appendChild(newContainer)
    console.log(ulContainer)
    taskContainer.append(ulContainer)
}

submitButton.addEventListener("click", (e) => {
    inputValue += searchBar.value
    createELEMENT(inputValue)
})
