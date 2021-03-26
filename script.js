let css = document.querySelector("h3");
let rColor = document.getElementById("rightColor");
let lColor = document.getElementById("leftColor");
let gradient = document.getElementById("booty");


// Creates random colors
function createRandomColors() {
    var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
    }
	return color;
};

// Sets the random colors
function setRandomColors() {
    rColor.value = createRandomColors();
    lColor.value = createRandomColors();

    changeColor();
}

//1. Create Button to click for random colors
function createRandomButton() {
    let button = document.createElement("button");
    button.appendChild(document.createTextNode("Random"));
    gradient.appendChild(button);
    button.addEventListener("click", setRandomColors);
};

// changes the color
function changeColor() {
    gradient.style.background = "linear-gradient(to right, " + rColor.value + ", " + lColor.value + ")";

    css.textContent = gradient.style.background;
 
};



changeColor();

createRandomButton();

rColor.addEventListener("input", changeColor);

lColor.addEventListener("input", changeColor);

