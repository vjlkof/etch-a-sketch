# etch-a-sketch

The idea is that system can draw a grid depending on the user selection
[OK]Create a webpage with a 16x16 grid of square divs. Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!
It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).
[OK]Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
[OK]Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point. There are multiple ways to change the color of the divs, including:

- adding a new class to the div.
- changing the div’s background color using JavaScript.
  []Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.

Extra credit
[]Transform the behavior of a square when interacting with the mouse by introducing a series of modifications.
[]Rather than a simple color change from black to white, each interaction should randomize the square’s RGB value entirely.
[]Additionally, implement a progressive darkening effect where each interaction adds 10% more black or color to the square. The objective is to achieve a completely black square only after ten interactions.
[]You can choose to do either one or both of these challenges, it’s up to you.
