Maxim-Emanuelle Dubois - 101112018
A3 - Multi User Interactions

Overview of what you did

For this assignment, I created a tic tac toe game using WebSocket to connect 2 players on the same VR game. I had one player in a 3D scene, and the other
player was in a 2D environment, to see what that could look like and to consider how different platforms might require different environments. Both players
see 9 cubes/squares on their screen, and clicking one of them changes its colour. Typical tic tac toe rules, the player needs to have three cubes of the
same colour in a line, either vertical, horizontal, or diagonal. The same rules apply to both players, and the first player to get a line wins the game.
Tic tac toe in itself is a competitive game, and for collaboration between the players both need to press a Start button inorder to begin the game.

What was challenging

The part I struggled with the most on this assignment was getting the Start button connected and working in my 2D environment, as well as figure out how to
block the player from the game until both players pressed the button. Getting the Start button on the 3D screen was pretty simple because I used code I had
from previous assignments, but unfortunately that code didn't work in my 2D environment because the button was using a lot of A-Frame code which I didn't have
in my 2D space. To solve this issue I looked online for help and was able to figure out a way to use the function differently to make the button appear. As 
for the blocking of players through the button, I also looked online and found ideas for creating a tracker, and that's how I started playing with how I could
count the number of clicks with the player ID. This took a lot of playing around and back and forth, but after a while I was able to create something that 
worked. 

What went well

Getting the 3D scene set up as well as the clicking and changing colour functions I have went very smoothly, especially in my 3D environment. I was also
surprised at how using WebSocket went, I didn't struggle with it too much so that was a nice surprise. Before starting to test out my 2D space, I created
the tic tac toe game with 2 3D players to get the code working, and that process went very well. Since each player had a different colour I wanted to work on
that code first before getting into 2D, which turned out to be a great idea and it made the process a lot more divided and easy to get through.