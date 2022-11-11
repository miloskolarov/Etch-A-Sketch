let board= document.querySelector (".board");
board.style.gridTemplateColumns= "repeat(16, 1fr)";
board.style.gridTemplateRows= "repeat(16, 1fr)";

for (let i=0; i< 256; i++) {
    let pixel= document.createElement("div");
    pixel.style.backgroundColor= "black";
    board.insertAdjacentElement("beforeend", pixel);
}