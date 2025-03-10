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

    // After the player answers a question, the game:
        // Removes the previous question.
        // Loads the next question from the list.
        // Shows the new three statements.
        // Waits for the player to choose again.
        // This repeats until the time runs out or there are no more questions.
   

// Ending the Game

    // The game ends when:
        // The player runs out of time OR
        // The player has answered all questions.
    // When the game ends:
        // A message appears saying "Time's up!".
        // The final score is displayed.
        // The player is asked if they want to play again.
        // If the player chooses to play again, the game restarts from the beginning.