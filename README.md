# Etch A Sketch

## Introduction

Etch A Sketch is a drawing toy invented by André Cassagnes of France and subsequently manufactured by the Ohio Art Company. It consists of a flat gray screen within a red plastic frame, with two white knobs on the front for drawing. The knobs control a stylus that moves a horizontal and vertical line across the screen, allowing the user to draw pictures by turning the knobs. The screen is coated with a layer of aluminum powder, which can be scraped off by the stylus to create a drawing. To erase a drawing, the user turns the toy upside down and shakes it, causing the aluminum powder to redistribute evenly over the screen. Etch A Sketch has become a popular toy and cultural icon and has been featured in various forms of media, including movies and television shows.

In this project, I have made an Etch A Sketch-inspired drawing board by using HTML, CSS, and JavaScript. The board grid was created in CSS and populated with div elements using JavaScript. The default grid size is 16x16, resulting in a board of 256 pixels represented by divs. The user can alter the default board size by inputting a value in the designated input box, though it is limited to a maximum of 100x100 pixels to ensure optimal performance.
The drawing function was implemented through the use of a hover effect that changes the background color of the div elements in JavaScript. To increase drawing precision, the hover effect can be toggled on and off with a mouse click. The option to erase previously drawn pixels is also available through the "Erase" button located under the board, which changes the background color of the divs to white on hover. In addition, all settings can be reset to their default values by clicking the "Reset" button, made possible through the implementation of a window reload functionality.

## How to use

### a. Live-preview

The sketching board can be accessed on GitHub Pages by following the link:
[https://miloskolarov.github.io/Etch-A-Sketch/](https://miloskolarov.github.io/Etch-A-Sketch/)
 
### b. Alternative (Installation)

It is also possible to "install" Etch A Sketch on your local computer. This is achieved by downloading a ZIP version of this repository by clicking Code and selecting "Download ZIP" from the drop-down menu. After downloading the ZIP file, unpack the archive and access the game using your web browser.
