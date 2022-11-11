let color= "black"

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
    this.style.backgroundColor= color;
}


function boardSize (input) {
    if (input >= 2 && input <= 100) {createBoard (input);
    } else if (input <2  || input > 100) { 
            let boardsz= document.querySelector(".boardsz");
            let error= document.createElement("p");
            error.textContent= "Value must be between 2 and 100";
            error.style.color="red";
            boardsz.insertAdjacentElement("beforeend", error);}
           
}

// Creat colorChange Function
// add white to errasor
// add black to sketch
// link with buttons
function colorChange (choice) {
    color= choice;
}

createBoard (16);