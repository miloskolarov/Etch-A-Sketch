let color= "black";
let click= true;

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
    if (click) {this.style.backgroundColor= color;}
}


function boardSize (input) {
    if (input >= 2 && input <= 100) {createBoard (input);
    } else if (input <2  || input > 100) { 
        window.alert( "The value must be between 2 and 100");
          
    }
           
}

function colorChange (choice) {
    color= choice;
}

//Draw on click

document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.tagName != "BUTTON") {
      click = !click;}
    })


createBoard (16);