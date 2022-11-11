let board= document.querySelector (".board");
board.style.gridTemplateColumns= "repeat(16, 1fr)";
board.style.gridTemplateRows= "repeat(16, 1fr)";

for (let i=0; i< 256; i++) {
    let pixel= document.createElement("div");
    pixel.addEventListener("mouseover", colorPixel);
    board.insertAdjacentElement("beforeend", pixel);
}

    //Make divs change color on mouse over
        //make changeColor function
        //Call makeColor funcition inside eventListener method
        //Make placeholder variable containing color

function colorPixel () {
    this.style.backgroundColor= "black";
}