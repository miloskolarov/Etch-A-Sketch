let board= document.querySelector (".board");
board.style.gridTemplateColumns= "repeat(16, 1fr)";
board.style.gridTemplateRows= "repeat(16, 1fr)";

for (let i=0; i< 256; i++) {
    let pixel= document.createElement("div");
    pixel.addEventListener("mouseover", colorPixel);
    board.insertAdjacentElement("beforeend", pixel);
}


function colorPixel () {
    this.style.backgroundColor= "black";
}

//Make board size dinamic
    //put board inside a function
        //add size parametar to the function
    //modify "for" loop to use input size
    //Change predefined pixel count to dinamic
        //create pixelCount variable that equals to size*size