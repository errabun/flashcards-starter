# FlashCards Starter Kit
A [Mod2 Project](https://frontend.turing.io/projects/flash-cards.html) by [Eric Rabun](https://github.com/errabun)

## Overview

Remember back in grade school when you were forced to make multiplication flash cards to memorize the entire multiplication table?  It can bring back some nightmarish thoughts.  If you're anything like me, somehow those cards would constantly go missing, or get damaged and it would be the perfect excuse to not have to study!  

Worry no more!  The FlashCards Starter Kit is here to help!  

This small program runs in the console (terminal) and run a round of multiple choice flashcards. By default, it stores 30 'cards' over Javascript iterator methods and Object Oriented Programming, but could be modified for any flash-cards you'd like.

## Setup

Clone down the repo (from your GitHub). If the name "flashcards-starter" doesn't represent what your program is going to entail, you can use an optional argument when you run `git clone` (you replace the `[...]` with the terminal command arguments):

```bash
git clone [remote-address] [what you want to name the repo]
```

Lots of the functionality of this game is built-in, however, after you clone your repo and open it in the text editor of your choice, open your terminal and run the command `npm install`.  This will make sure you have all the proper communications happening between all the different features of this project.

After this, open your console and navigate to the root directory of the program. Run the command `node index.js` to start a game. To create your own set of Cards to test, head over to the `/src/data.js` file and update the each object with your own questions, possible solutions and correct answer(s).

## Playing

As previously mentioned, once you are ready to being your studying, navigate to the root directory of the repo in your command line (terminal) and run the command `node index.js`. If at any point during the game, you decide you've had enough and want to quit the program, just type `control + C` in the console.

Once it's running, the program should display a short greeting followed by the first card in the set. It might look like the following:

<img width="700" alt="start terminal" src="https://github.com/errabun/flashcards-starter/blob/main/assets/flashCards%20start%20up.png?raw=true">

Using the corresponding numbers associated with each possible solution, type which answer you think is correct and press `Return` to see if you have answered the question correctly.  Be careful, you only get one chance to answer correctly for each question!  Once you have submitted your answer you will be notified if you answered correctly.  

<img width="700" alt="in game environment" src="https://github.com/errabun/flashcards-starter/blob/main/assets/in%20gameplay.png?raw=true">

Finally, at the end, the program will display your percentage of question gotten right!

<img width="700" alt="end of game play" src="https://github.com/errabun/flashcards-starter/blob/main/assets/end%20of%20game.png?raw=true">

## Demo

Here is a quick demo of what the game environment will look like!

![live start demo](https://media.giphy.com/media/NAXRyADHAiL6TfyFcP/giphy.gif)

## Challenges

One of the biggest challenges for me building out this game was the depth of the class to class interactions that was needed for each piece of this game.  Building one class and using that for the next class and making sure each method and property could be functional between the classes is something I am happy to say is getting more evident and clear in my understanding.  

As well, this was the first project in which I wrote all my own TDD (tests) to make sure my code was properly functioning.  While it was a little bit daunting to start, it quickly became second nature and seemed to come easily after the first class.  

## Feedback

I would love to see your version of this game, or how you manipulated this game to be better in anyway!  Feel free to friend me on [GitHub](https://github.com/errabun) and let me know what you have in mind!  
