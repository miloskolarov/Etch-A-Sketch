


function colorPixel () {
    this.style.backgroundColor= "black";
}

//Make board size dinamic
    //put board inside a function
        //add size parametar to the function
    //modify "for" loop to use input size
    //Change predefined pixel count to dinamic
        //create pixelCount variable that equals to size*size

function createBoard (size) {
    let board= document.querySelector (".board");
    board.style.gridTemplateColumns= `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows= `repeat(${size}, 1fr)`;
    let pixelCount= size * size;
    for (let i=0; i< pixelCount; i++) {
        let pixel= document.createElement("div");
        pixel.addEventListener("mouseover", colorPixel);
        board.insertAdjacentElement("beforeend", pixel);
} 

}

createBoard (4); 