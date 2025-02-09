const btnChangeColor = document.getElementById("change-color");
const myDiv = document.querySelector(".my-div");
const inputColor = document.querySelector("input[type='color']");

btnChangeColor.onclick = function () {
    myDiv.style.backgroundColor = inputColor.value;
}