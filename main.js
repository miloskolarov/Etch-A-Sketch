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

function colorPixel () {
    this.style.backgroundColor= "black";
}

//chage size based on input
    //Add input field in html
    //Add input from html to a function

function boardSize (input) {
    createBoard (input); 
}

createBoard (16);