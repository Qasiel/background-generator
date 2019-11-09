var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 3));

var css = document.querySelector("h3");
var colour1 = document.querySelector(".colour1");
var colour2 = document.querySelector(".colour2");
var body = document.getElementById("gradient");
var random = document.querySelector("button");

function setGradient() {
    body.style.background = "linear-gradient(to right, "
    + colour1.value
    + ", "
    + colour2.value
    + ")";

    css.textContent = body.style.background + ";";
}

random.addEventListener("click", function() {
    console.log("Click!");
});

colour1.addEventListener("input", setGradient);

colour2.addEventListener("input", setGradient);