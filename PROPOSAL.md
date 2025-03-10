# Project Description 

## This is Africa!
This is Africa is an engaging and educational trivia game designed for players who want to test their knowledge of Africa’s rich history, diverse cultures, geography, and influential figures. Players will be presented with three statements—two truths and one lie. The challenge? Spot the lie before time runs out! Each round lasts two minutes, and the player must answer as many questions as possible within the time limit. The score updates automatically after each selection, rewarding correct answers and keeping track of progress. Users can choose from multiple difficulty levels, making the game accessible to both beginners and trivia masters.


## MVP (Minimum Viable Product) User Stories 
These are the core features:
1.	Game Setup & UI
    - As a user, I want to see a clean and simple game interface so I can easily understand how to play.
    - As a user, I want to see a clear game title and instructions on the home screen, so I know what to do.
    - As a user, I want to start a new game with a button click so I can begin playing.
2.	Gameplay Mechanics
    - As a user, I want to see three statements (two truths and one lie) displayed at a time so I can select.
    - As a user, I want to be able to see and select a difficulty level to change the list of statements I receive. 
    - As a user, I want to click on one of the statements to guess which one is the lie.
    - As a user, I want to receive immediate feedback (correct or incorrect) when I make a guess so I know if I was right or wrong.
3.	Scoring & Progress Tracking
    - As a user, I want to see my score update after each selection so I can track my progress.
    - As a user, I want to see how many rounds I’ve played so I can keep track of my progress.
    - As a user, I want to be able to restart the game with a "Play Again" button so I can try again.


## Stretch Goals (Future Enhancements)

1.	Game Modes 
    - Implement a category selection system that allows players to choose different trivia topics (e.g., history, science, pop culture, sports) to increase replayability.
    - Develop a difficulty mode system where easier levels provide more obvious lies, while harder levels make the statements more subtle.
2.	Animations & Visual Effects
        - Enhance UI interactivity by adding smooth CSS animations and transitions for buttons and text changes.
    - Implement moving animals to provide an atmosphere in which the user is on a safari and the background changes as the user changes the difficulty levels. Or the background will change every time the user resets the game. 
    - Integrate celebratory animations (such as a confetti effect) when a user correctly guesses the lie to create a more engaging experience.
3.	Social Features
    - Integrate social media sharing functionality (e.g., Twitter, Facebook) so users can post their scores and challenge friends.
4.	 Data Persistence & Personalization
    - Use a database to save player progress, past scores, and selected preferences.
    - Allow users to create a profile with a name and avatar for a more personalized experience.
    - Develop a settings panel where users can enable/disable sound effects and change themes.
5.	AI-Generated Questions & Custom Trivia
    - Build an AI-powered trivia generator using an API (e.g., OpenAI API or a trivia database) to dynamically create new Two Truths and One Lie questions.
    - Create a custom trivia feature where users can submit their own Two Truths and One Lie questions and play with friends.
    


## Wire Frames


![image](https://i.postimg.cc/brLssfMH/temp-Image-FDl3-WO.avif)



## Pseudocode
```js
//Overview

    // The game will show three statements about Africa.
    // Two statements are true, but one is a lie.
    // The player has to guess the lie by clicking on it.
    // The game will track the player’s score and count down from 2 minutes.
    // The game will end when time runs out or when all questions have been answered.
    // The player will see their final score and be given the option to play again.

//Set Up (Establishing Variables)

    // The player's score (starting at 0).   
        let score = 0;
    // The time left (starting at 120 seconds).
        let timeremaining= 120; //2-minute timer
    // A list of questions (each question will have three statements).
        let currentQuestionsIndex= 0;
    // A variable for difficulty level
        let difficulty = "medium"; //Default difficulty level
    // A way to know which statement is false in each question.
    // We will store the questions in an array (a list).
        let questions = []
    // Each question will have three statements and one correct answer (the lie).


//At the start of the game (Starting Game)

    // The score is set to 0.
        function startGame( ) {}
    // The timer starts counting down from 120 seconds.
    // The first question appears on the screen.
    // The player sees three statements.
    // The player clicks on the statement they think is false.

// Player’s Answer

    // When the player clicks on a statement:
        // The game checks if the player chose the correct lie.
        // If the player chose correctly, their score increases.
        // If they chose incorrectly, they do not gain points.
        // A message appears telling the player if they were right or wrong.
        // The game waits a moment, then shows the next question.

// Advancing to the next question (Next Question)
        function nextQuestion (){}
    //create a loop function with a nested if statement to select the next question (ForLoop)

    // After the player answers a question, the game:
        // Removes the previous question.
        // Loads the next question from the list.
        // Shows the new three statements.
        // Waits for the player to choose again.
        // This repeats until the time runs out or there are no more questions.
   

// Ending the Game
    //Create a function using a forloop to countdown the remaining time
    //If time is remaining, the user can continue answering the questions  

    // The game ends when:
        // The player runs out of time OR
        // The player has answered all questions.
    // When the game ends:
        // A message appears saying "Time's up!".
        // The final score is displayed.
        // The player is asked if they want to play again.
        // If the player chooses to play again, the game restarts from the beginning.


## Timeline - Daily Accountability

| Day        |   | Task                                          | Blockers | Notes/ Thoughts |
|------------|---|-----------------------------------------------|----------|-----------------|
| Monday     |   | Present proposal, create files (Css, Js etc. )|          |                 |
| Tuesday    |   | Create basic scaffolding / find database      |          |                 |
| Wednesday  |   | Add functionality / Add styling               |          |                 |
| Thursday   |   | Work on improving styling and UI              |          |                 |
| Friday     |   | Finalize MVP                                  |          |                 |
| Saturday   |   | Share with users to get their feedback        |          |                 |
| Sunday     |   | Iterate and make improvements from feedback   |          |                 |
| Monay      |   | Present Project to class                      |          |                 |
